import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

/**
 * @interface ICommand
 * @description Определяет публичный контракт для всех слеш-команд.
 * Любой класс, реализующий этот интерфейс, должен предоставить данные для регистрации
 * команды в Discord API и реализовать логику выполнения.
 */
export interface ICommand {
    /**
     * Конструктор слеш-команды для регистрации в Discord API.
     */
    readonly data:
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder;

    /**
     * Время в секундах перед повторным использованием команды.
     */
    readonly cooldown: number;

    /**
     * Флаг, указывающий, что команда доступна только разработчикам.
     */
    readonly devOnly: boolean;

    /**
     * Метод, который выполняется при вызове команды.
     * @param interaction Объект взаимодействия, содержащий информацию о вызове.
     * @returns {Promise<void>}
     */
    run(interaction: ChatInputCommandInteraction): Promise<void>;
}
