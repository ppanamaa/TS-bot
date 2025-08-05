import { Events, Client as ReadyClient } from "discord.js";
import { Event } from "@/core/abstractions/Event";
import { IEventDependencies } from "@/core/abstractions/interface/IDependencies";

/**
 * @class ReadyEvent
 * @description Срабатывает, когда клиент готов к работе.
 */
export default class ReadyEvent extends Event<Events.ClientReady> {
    public constructor(deps: IEventDependencies) {
        super(deps, {
            name: Events.ClientReady,
            once: true,
        });
    }

    public async run(readyClient: ReadyClient<true>): Promise<void> {
        this.logger.info(`Бот успешно авторизован как ${readyClient.user.tag}`);
        this.logger.info(`Клиент готов к работе!`);

        try {
            await this.client.commandHandler.registerGuildCommands(
                readyClient.user.id
            );
        } catch (error) {
            this.logger.error(
                "Произошла ошибка при регистрации команд в событии ready:",
                error
            );
        }
    }
}
