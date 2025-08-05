import { Collection, Message, TextBasedChannel, User } from "discord.js";
import { Service } from "@/core/abstractions/Service";
import { IServiceDependencies } from "@/core/abstractions/interface/IDependencies";

/**
 * @class ChatService
 * @extends Service
 * @description Сервис для управления сообщениями в текстовых каналах.
 */
export class ChatService extends Service {
    constructor(deps: IServiceDependencies) {
        super(deps);
        this.logger.info("ChatService инициализирован.");
    }

    /**
     * Массово удаляет сообщения из канала.
     * @param {TextBasedChannel} channel - Канал, в котором нужно удалить сообщения.
     * @param {number} amount - Количество сообщений для удаления.
     * @param {User} [targetUser] - Если указан, удаляются сообщения только этого пользователя.
     * @returns {Promise<number>} - Количество фактически удаленных сообщений.
     */
    public async purgeMessages(
        channel: TextBasedChannel,
        amount: number,
        targetUser?: User
    ): Promise<number> {
        if (channel.isDMBased()) {
            this.logger.warn(
                `Попытка очистки в DM канале, что не поддерживается.`
            );
            return 0;
        }

        this.logger.info(
            `Запрос на очистку ${amount} сообщений в канале ${channel.id}` +
                (targetUser ? ` от пользователя ${targetUser.tag}` : "")
        );

        try {
            const messages = await channel.messages.fetch({ limit: 100 });
            let messagesToDelete: Collection<string, Message>;

            if (targetUser) {
                messagesToDelete = messages.filter(
                    (m) => m.author.id === targetUser.id
                );
            } else {
                messagesToDelete = messages;
            }

            const finalMessages = Array.from(messagesToDelete.values()).slice(
                0,
                amount
            );

            if (finalMessages.length === 0) {
                this.logger.info("Не найдено сообщений для удаления.");
                return 0;
            }

            const deletedMessages = await channel.bulkDelete(
                finalMessages,
                true
            );
            this.logger.info(
                `Успешно удалено ${deletedMessages.size} сообщений.`
            );
            return deletedMessages.size;
        } catch (error) {
            this.logger.error(
                `Ошибка при массовом удалении сообщений в канале ${channel.id}:`,
                error
            );
            return 0;
        }
    }
}
