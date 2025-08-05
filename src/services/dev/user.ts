// src/services/dev/user.ts

import { Message } from "discord.js";
import { Service } from "@/core/abstractions/Service";
import { IServiceDependencies } from "@/core/abstractions/interface/IDependencies";

export default class UserService extends Service {
    constructor(deps: IServiceDependencies) {
        super(deps);
    }

    /**
     * Метод для асинхронной инициализации сервиса.
     * Вызывается один раз при старте бота.
     */
    public async init(): Promise<void> {
        this.logger.debug("UserService успешно инициализирован.");
    }

    /**
     * Собирает и логирует подробную информацию о пользователе,
     * отправившем сообщение.
     * @param {Message} message - Объект сообщения из Discord.
     */
    public logUserDetailsOnMessage(message: Message): void {
        // Убедимся, что у нас есть информация об участнике сервера (member)
        if (!message.member) {
            this.logger.warn(
                `Не удалось получить информацию о 'member' для пользователя ${message.author.tag}. Возможно, это личное сообщение.`
            );
            return;
        }

        const user = message.author;
        const member = message.member;

        const userId = user.id;
        const userTag = user.tag;
        const userNickname = member.nickname || "Нет"; // Никнейм на этом конкретном сервере
        const channelName = message.channel.isDMBased()
            ? "Личные сообщения"
            : message.channel.name;

        // Собираем роли. `map` создает массив имен, `join` объединяет их в строку
        const roles = member.roles.cache
            .filter((role) => role.name !== "@everyone") // Исключаем стандартную роль
            .map((role) => role.name)
            .join(", ");

        const logMessage =
            `Информация о пользователе из сообщения:\n` +
            `  - ID: ${userId}\n` +
            `  - Тег: ${userTag}\n` +
            `  - Никнейм: ${userNickname}\n` +
            `  - Канал: #${channelName}\n` +
            `  - Роли: [${roles || "Нет ролей"}]`;

        this.logger.info(logMessage);
    }
}
