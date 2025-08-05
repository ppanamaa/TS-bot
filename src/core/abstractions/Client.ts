import {
    Client as DiscordClient,
    Collection,
    GatewayIntentBits,
    Partials,
} from "discord.js";
import { Logger } from "@/log.Module/logger";
import { EventHandler } from "@/handlers/eventHandler";
import { ServiceHandler } from "@/handlers/serviceHandler";
import { DatabaseService } from "@/repository/connect";
import { CommandHandler } from "@/handlers/commandHandler";
import { ConfigService } from "../ConfigService.ts";
import { IClient } from "./interface/IClient";
import { IClientDependencies } from "./interface/IDependencies";

/**
 * @class Client
 * @extends DiscordClient
 * @implements IClient
 * @description Основной класс приложения, расширяющий стандартный клиент discord.js.
 * Отвечает за оркестрацию запуска и корректного завершения работы всех компонентов.
 */
export class Client extends DiscordClient implements IClient {
    private readonly logger: Logger;
    private readonly eventHandler: EventHandler;
    private readonly serviceHandler: ServiceHandler;
    private readonly databaseService: DatabaseService;
    private readonly configService: ConfigService;

    public readonly commandHandler: CommandHandler;
    public readonly cooldowns = new Collection<
        string,
        Collection<string, number>
    >();

    /**
     * @param deps Зависимости, внедряемые из DI-контейнера.
     */
    public constructor(deps: IClientDependencies) {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
            ],
            partials: [Partials.Message, Partials.Channel, Partials.Reaction],
        });

        this.logger = deps.logger;
        this.eventHandler = deps.eventHandler;
        this.serviceHandler = deps.serviceHandler;
        this.databaseService = deps.databaseService;
        this.commandHandler = deps.commandHandler;
        this.configService = deps.configService;
    }

    /**
     * Инициализирует и запускает бота.
     * Выполняет последовательность действий:
     * 1. Загружает файлы команд.
     * 2. Подключается к базе данных.
     * 3. Загружает и инициализирует сервисы.
     * 4. Загружает и регистрирует обработчики событий.
     * 5. Авторизуется в Discord.
     */
    public async start(): Promise<void> {
        await this.commandHandler.loadCommands();
        await this.databaseService.connect();
        await this.serviceHandler.loadServices();
        await this.eventHandler.loadEvents(this);
        try {
            this.logger.info("Авторизация в Discord...");
            await this.login(this.configService.token);
            this.logger.info("Авторизация прошла успешно.");
        } catch (error) {
            this.logger.error("Произошла ошибка при входе в Discord:", error);
            await this.databaseService.disconnect();
            process.exit(1);
        }
    }

    /**
     * Выполняет процедуру корректного завершения работы бота (graceful shutdown).
     */
    public async shutdown(): Promise<void> {
        this.logger.info(
            "Получен сигнал завершения. Начинаю процедуру graceful shutdown..."
        );

        try {
            this.logger.info("Отключение от Discord...");
            this.destroy();
            await this.serviceHandler.shutdownServices();
            await this.databaseService.disconnect();
            this.logger.info(
                "Все ресурсы успешно освобождены. Приложение завершает работу."
            );
            process.exit(0);
        } catch (error) {
            this.logger.error("Ошибка во время graceful shutdown:", error);
            process.exit(1);
        }
    }
}
