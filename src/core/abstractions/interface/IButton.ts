import { ButtonInteraction } from "discord.js";

/**
 * @interface IButton
 * @description Определяет публичный контракт для обработчиков взаимодействий с кнопками.
 */
export interface IButton {
    /**
     * Уникальный идентификатор кнопки.
     */
    readonly customId: string;

    /**
     * Время перезарядки кнопки в секундах.
     */
    readonly cooldown: number;

    /**
     * Время жизни кнопки в секундах.
     * По истечении этого времени коллектор взаимодействий перестанет реагировать на нажатия.
     */
    readonly lifetime?: number;

    /**
     * Метод, который выполняется при нажатии на кнопку.
     * @param interaction Объект взаимодействия с кнопкой.
     * @returns {Promise<void>}
     */
    run(interaction: ButtonInteraction): Promise<void>;
}
