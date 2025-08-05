import { ClientEvents } from "discord.js";

/**
 * @interface IEvent
 * @description Определяет публичный контракт для обработчиков событий Discord.
 * @template E Тип события из `ClientEvents` discord.js.
 */
export interface IEvent<E extends keyof ClientEvents> {
    /**
     * Имя события, соответствующее ключу из `ClientEvents`.
     */
    readonly name: E;

    /**
     * Флаг, указывающий, должно ли событие сработать только один раз.
     */
    readonly once: boolean;

    /**
     * Метод, который выполняется при срабатывании события.
     * @param args Аргументы, передаваемые событием из discord.js.
     * @returns {Promise<void>}
     */
    run(...args: ClientEvents[E]): Promise<void>;
}
