import { Events, Interaction } from "discord.js";
import { Event } from "@/core/abstractions/Event";
import { IEventDependencies } from "@/core/abstractions/interface/IDependencies";

/**
 * @class InteractionCreateEvent
 * @description Срабатывает при любом взаимодействии с ботом.
 */
export default class InteractionCreateEvent extends Event<Events.InteractionCreate> {
    public constructor(deps: IEventDependencies) {
        super(deps, {
            name: Events.InteractionCreate,
            once: false,
        });
    }

    public async run(interaction: Interaction): Promise<void> {
        if (!interaction.isChatInputCommand()) {
            return;
        }

        const command = this.client.commandHandler.getCommand(
            interaction.commandName
        );

        if (!command) {
            this.logger.warn(
                `Получена неизвестная команда: "${interaction.commandName}" от ${interaction.user.tag}.`
            );
            await interaction.reply({
                content: "Я не знаю такой команды. Возможно, она была удалена.",
                ephemeral: true,
            });
            return;
        }

        try {
            this.logger.info(
                `Пользователь ${interaction.user.tag} выполнил команду /${interaction.commandName}`
            );
            await command.run(interaction);
        } catch (error) {
            this.logger.error(
                `Ошибка при выполнении команды /${interaction.commandName}:`,
                error
            );

            const errorMessage =
                "Произошла внутренняя ошибка при выполнении этой команды.";
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: errorMessage,
                    ephemeral: true,
                });
            } else {
                await interaction.reply({
                    content: errorMessage,
                    ephemeral: true,
                });
            }
        }
    }
}
