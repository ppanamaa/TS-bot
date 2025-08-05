import { Client as DiscordClient, Collection } from "discord.js";
import { CommandHandler } from "@/handlers/commandHandler";

/**
 * @interface IClient
 * @extends DiscordClient
 * @description Определяет публичный контракт основного класса клиента.
 * Описывает методы для управления жизненным циклом приложения и предоставляет
 * доступ к публичным компонентам, таким как обработчик команд.
 */
export interface IClient extends DiscordClient {
    /**
     * Обработчик, отвечающий за загрузку и регистрацию слеш-команд.
     * @see CommandHandler
     */
    readonly commandHandler: CommandHandler;

    /**
     * Коллекция для отслеживания перезарядок команд.
     * Ключ верхнего уровня - имя команды, вложенная коллекция - ID пользователя и время окончания перезарядки.
     */
    readonly cooldowns: Collection<string, Collection<string, number>>;

    /**
     * Инициализирует и запускает бота.
     * @returns {Promise<void>}
     */
    start(): Promise<void>;

    /**
     * Выполняет процедуру корректного завершения работы бота.
     * @returns {Promise<void>}
     */
    shutdown(): Promise<void>;
}
