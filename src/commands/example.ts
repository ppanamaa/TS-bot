import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    MessageFlags,
} from "discord.js";
import {
    Command,
    CommandOptions,
} from "@/core/abstractions/Command";

import { ICommandDependencies } from "../core/abstractions/interface/IDependencies"
/**
 * @class PingCommand
 * @description Тестовая команда для проверки работоспособности бота.
 */
export default class PingCommand extends Command {
    public constructor(deps: ICommandDependencies) {
        const options: CommandOptions = {
            data: new SlashCommandBuilder()
                .setName("ping")
                .setDescription("Проверяет задержку бота и API Discord."),
            cooldown: 20,
        };
        super(deps, options);
    }

    public async run(interaction: ChatInputCommandInteraction): Promise<void> {
        try {
            const sent = await interaction.reply({
                embeds: [
                    this.embedFactory.createInfoEmbed(interaction.user, {
                        description: "🏓 Пинг...",
                    }),
                ],
                fetchReply: true,
                flags: MessageFlags.Ephemeral,
            });

            const websocketHeartbeat = this.client.ws.ping;
            const roundtripLatency =
                sent.createdTimestamp - interaction.createdTimestamp;

            await interaction.editReply({
                embeds: [
                    this.embedFactory.createSuccessEmbed(interaction.user, {
                        title: "Понг!",
                        fields: [
                            {
                                name: "Задержка ответа",
                                value: `\`${roundtripLatency} мс\``,
                                inline: true,
                            },
                            {
                                name: "Задержка WebSocket",
                                value: `\`${websocketHeartbeat} мс\``,
                                inline: true,
                            },
                        ],
                    }),
                ],
            });
        } catch (error) {
            this.logger.error(
                "Произошла ошибка при выполнении команды /ping:",
                error
            );

            const errorEmbed = this.embedFactory.createErrorEmbed(
                interaction.user,
                {
                    description:
                        "Произошла непредвиденная ошибка при выполнении команды.",
                }
            );

            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    embeds: [errorEmbed],
                    flags: MessageFlags.Ephemeral,
                });
            } else {
                await interaction.reply({
                    embeds: [errorEmbed],
                    flags: MessageFlags.Ephemeral,
                });
            }
        }
    }
}
