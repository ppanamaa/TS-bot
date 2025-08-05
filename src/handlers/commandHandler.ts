import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { Collection } from "discord.js";
import { promises as fs } from "fs";
import path from "path";
import { Handler } from "@/core/abstractions/Handler";
import { IHandlerDependencies } from "@/core/abstractions/interface/IDependencies";
import { ICommand } from "@/core/abstractions/interface/ICommand";

/**
 * @interface CommandHandlerDependencies
 * @description Расширяет базовые зависимости обработчика.
 */
interface CommandHandlerDependencies extends IHandlerDependencies {}

/**
 * @class CommandHandler
 * @extends Handler
 * @description Отвечает за загрузку, регистрацию и предоставление доступа к слеш-командам.
 */
export class CommandHandler extends Handler {
    public readonly commands: Collection<string, ICommand> = new Collection();

    constructor(deps: CommandHandlerDependencies) {
        super(deps);
    }

    /**
     * Загружает все команды из директории 'src/commands'.
     */
    public async loadCommands(): Promise<void> {
        this.logger.info("Начинаю загрузку команд...");
        const commandsPath = path.join(__dirname, "..", "commands");
        const commandFiles = (await fs.readdir(commandsPath)).filter(
            (file) =>
                (file.endsWith(".ts") || file.endsWith(".js")) &&
                !file.startsWith("index")
        );

        for (const file of commandFiles) {
            try {
                const filePath = path.join(commandsPath, file);
                const commandModule = await import(filePath);
                const CommandClass = commandModule.default;

                if (typeof CommandClass === "function") {
                    const commandInstance =
                        this.container.build<ICommand>(CommandClass);
                    this.commands.set(
                        commandInstance.data.name,
                        commandInstance
                    );
                    this.logger.debug(
                        `Команда "${commandInstance.data.name}" успешно загружена.`
                    );
                }
            } catch (error) {
                this.logger.error(
                    `Ошибка при загрузке команды из файла ${file}:`,
                    error
                );
            }
        }
        this.logger.info(`Загружено команд: ${this.commands.size}.`);
    }

    /**
     * Регистрирует загруженные команды на сервере.
     * @param {string} clientId - ID клиента бота.
     */
    public async registerGuildCommands(clientId: string): Promise<void> {
        const { guildId, token } = this.configService;
        const rest = new REST({ version: "10" }).setToken(token);
        const commandData = this.commands.map((cmd) => cmd.data.toJSON());

        try {
            this.logger.info(
                `Начинаю регистрацию ${commandData.length} команд на сервере ${guildId}...`
            );
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body: commandData,
            });
            this.logger.info("Команды успешно зарегистрированы на сервере.");
        } catch (error) {
            this.logger.error(
                "Ошибка при регистрации команд на сервере:",
                error
            );
        }
    }

    /**
     * Возвращает экземпляр команды по ее имени.
     * @param {string} commandName - Имя команды.
     * @returns {ICommand | undefined}
     */
    public getCommand(commandName: string): ICommand | undefined {
        return this.commands.get(commandName);
    }
}
