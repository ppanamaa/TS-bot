import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    PermissionFlagsBits,
    MessageFlags,
} from "discord.js";
import { Command, CommandOptions } from "@/core/abstractions/Command";
import { ICommandDependencies } from "@/core/abstractions/interface/IDependencies";
import { ChatService } from "@/services/guild/chat"; // ЗАВИСИМОСТЬ ОТ КЛАССА

// Определяем зависимости, специфичные для этой команды
interface IDeleteMessageCommandDependencies extends ICommandDependencies {
    chatService: ChatService; // ТИПИЗАЦИЯ ЧЕРЕЗ КЛАСС
}

/**
 * @class DeleteMessageCommand
 * @description Команда для массового удаления сообщений.
 */
export default class DeleteMessageCommand extends Command {
    private readonly chatService: ChatService;

    public constructor(deps: IDeleteMessageCommandDependencies) {
        const options: CommandOptions = {
            data: new SlashCommandBuilder()
                .setName("очистка")
                .setDescription(
                    "Удаляет указанное количество сообщений из канала."
                )
                .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
                .setDMPermission(false)
                .addIntegerOption((option) =>
                    option
                        .setName("количество")
                        .setDescription(
                            "Количество сообщений для удаления (1-100)"
                        )
                        .setRequired(true)
                        .setMinValue(1)
                        .setMaxValue(100)
                )
                .addUserOption((option) =>
                    option
                        .setName("пользователь")
                        .setDescription(
                            "Очистить сообщения только от этого пользователя"
                        )
                        .setRequired(false)
                ),
            cooldown: 10,
        };
        super(deps, options);
        this.chatService = deps.chatService;
    }

    public async run(interaction: ChatInputCommandInteraction): Promise<void> {
        if (!interaction.channel) return;

        await interaction.deferReply({ ephemeral: true });

        const amount = interaction.options.getInteger("количество", true);
        const user = interaction.options.getUser("пользователь");

        try {
            const deletedCount = await this.chatService.purgeMessages(
                interaction.channel,
                amount,
                user ?? undefined
            );

            let description = `Успешно удалено **${deletedCount}** сообщений.`;
            if (user) {
                description += ` от пользователя ${user.tag}`;
            }
            if (deletedCount < amount) {
                description += `\n\n*(Некоторые сообщения не были удалены, так как они старше 14 дней или произошла ошибка)*`;
            }

            await interaction.editReply({
                embeds: [
                    this.embedFactory.createSuccessEmbed(interaction.user, {
                        description,
                    }),
                ],
            });
        } catch (error) {
            this.logger.error("Критическая ошибка в команде /очистка:", error);
            await interaction.editReply({
                embeds: [
                    this.embedFactory.createErrorEmbed(interaction.user, {
                        description:
                            "Произошла непредвиденная ошибка при удалении сообщений.",
                    }),
                ],
            });
        }
    }
}
