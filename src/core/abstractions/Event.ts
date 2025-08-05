import { ClientEvents } from "discord.js";
import { Client } from "./Client";
import { Logger } from "@/log.Module/logger";
import { IEvent } from "./interface/IEvent";
import { IEventDependencies } from "./interface/IDependencies";

/**
 * @interface EventOptions
 * @description Определяет опции, необходимые для конструктора базового класса Event.
 * @template E - Тип события из `ClientEvents` discord.js, обеспечивающий строгую типизацию.
 */
interface EventOptions<E extends keyof ClientEvents> {
    /**
     * @property {E} name - Имя события, должно соответствовать ключу из `ClientEvents`.
     */
    name: E;
    /**
     * @property {boolean} [once=false] - Флаг, указывающий, должно ли событие сработать только один раз.
     */
    once?: boolean;
}

/**
 * @class Event
 * @abstract
 * @implements IEvent
 * @description Абстрактный базовый класс для всех обработчиков событий Discord.
 * Он определяет общую структуру и контракт, которому должны следовать все дочерние классы событий.
 * @template E - Тип события, что обеспечивает строгую типизацию для аргументов метода `run`.
 */
export abstract class Event<E extends keyof ClientEvents> implements IEvent<E> {
    /**
     * Экземпляр основного клиента бота. Доступен во всех дочерних событиях.
     * @protected
     * @readonly
     */
    protected readonly client: Client;

    /**
     * Экземпляр логгера. Доступен во всех дочерних событиях.
     * @protected
     * @readonly
     */
    protected readonly logger: Logger;

    /**
     * Имя события, соответствующее API Discord.js.
     * @public
     * @readonly
     */
    public readonly name: E;

    /**
     * Флаг, определяющий, является ли событие одноразовым.
     * Если `true`, обработчик будет удален после первого же вызова.
     * @public
     * @readonly
     */
    public readonly once: boolean;

    /**
     * Конструктор абстрактного класса Event.
     * @param {IEventDependencies} deps - Внедряемые зависимости (клиент, логгер).
     * @param {EventOptions<E>} options - Опции для конфигурации события (имя, флаг `once`).
     */
    protected constructor(deps: IEventDependencies, options: EventOptions<E>) {
        this.client = deps.client;
        this.logger = deps.logger;
        this.name = options.name;
        this.once = options.once ?? false;
    }

    /**
     * Абстрактный метод, который будет выполняться при срабатывании события.
     * Каждый дочерний класс ОБЯЗАН реализовать этот метод.
     * Типизация аргументов (`...args`) автоматически определяется на основе имени события (E).
     * @abstract
     * @param {...ClientEvents[E]} args - Аргументы, передаваемые событием из discord.js.
     * @returns {Promise<void>}
     */
    public abstract run(...args: ClientEvents[E]): Promise<void>;
}
