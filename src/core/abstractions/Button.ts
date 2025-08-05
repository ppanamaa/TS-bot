import { ButtonInteraction } from "discord.js";
import { Client } from "./Client";
import { Logger } from "@/log.Module/logger";
import { EmbedFactory } from "@/utils/embedFactory";
import { IButton } from "./interface/IButton";
import { IButtonDependencies } from "./interface/IDependencies";

/**
 * @interface ButtonOptions
 * @description Определяет опции, необходимые для конструктора обработчика кнопки.
 */
export interface ButtonOptions {
    /**
     * @property {string} customId - Уникальный идентификатор кнопки.
     */
    customId: string;
    /**
     * @property {number} [cooldown=0] - Время в секундах перед повторным использованием кнопки одним и тем же пользователем.
     */
    cooldown?: number;
    /**
     * @property {number} [lifetime] - Время жизни кнопки в секундах.
     * По истечении этого времени обработчик, созданный через коллектор, перестанет реагировать на нажатия.
     */
    lifetime?: number;
}

/**
 * @class Button
 * @abstract
 * @implements IButton
 * @description Абстрактный базовый класс для всех обработчиков взаимодействий с кнопками.
 */
export abstract class Button implements IButton {
    protected readonly client: Client;
    protected readonly logger: Logger;
    protected readonly embedFactory: typeof EmbedFactory;

    /**
     * Уникальный идентификатор кнопки.
     * @public
     * @readonly
     */
    public readonly customId: string;

    /**
     * Время перезарядки кнопки в секундах.
     * @public
     * @readonly
     */
    public readonly cooldown: number;

    /**
     * Время жизни кнопки в секундах.
     * Если значение установлено, его следует использовать для создания временного коллектора взаимодействий.
     * @public
     * @readonly
     */
    public readonly lifetime?: number;

    /**
     * Конструктор абстрактного класса Button.
     * @param {IButtonDependencies} deps - Внедряемые зависимости.
     * @param {ButtonOptions} options - Опции для конфигурации обработчика кнопки.
     */
    protected constructor(deps: IButtonDependencies, options: ButtonOptions) {
        this.client = deps.client;
        this.logger = deps.logger;
        this.embedFactory = deps.embedFactory;
        this.customId = options.customId;
        this.cooldown = options.cooldown ?? 0;
        this.lifetime = options.lifetime;
    }

    /**
     * Абстрактный метод, который выполняется при нажатии на кнопку.
     * @abstract
     * @param {ButtonInteraction} interaction - Объект взаимодействия с кнопкой.
     * @returns {Promise<void>}
     */
    public abstract run(interaction: ButtonInteraction): Promise<void>;
}
