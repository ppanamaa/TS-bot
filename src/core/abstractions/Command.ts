import {
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    ChatInputCommandInteraction,
    SlashCommandOptionsOnlyBuilder,
} from "discord.js";
import { Client } from "./Client";
import { Logger } from "../../log.Module/logger";
import { EmbedFactory } from "@/utils/embedFactory";
import { ICommand } from "./interface/ICommand";
import { ICommandDependencies } from "./interface/IDependencies";

/**
 * @interface CommandOptions
 * @description Определяет опции, необходимые для конструктора команды, для её конфигурации.
 */
export interface CommandOptions {
    /**
     * @property data - Конструктор слеш-команды, используемый для регистрации в Discord API.
     */
    data:
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder;
    /**
     * @property {number} [cooldown=0] - Время в секундах перед повторным использованием команды одним и тем же пользователем.
     */
    cooldown?: number;
    /**
     * @property {boolean} [devOnly=false] - Флаг, указывающий, что команда доступна только разработчикам.
     */
    devOnly?: boolean;
}

/**
 * @class Command
 * @abstract
 * @implements ICommand
 * @description Абстрактный базовый класс для всех слеш-команд.
 * Он определяет общую структуру, зависимости и контракт, которому
 * должны следовать все дочерние классы команд.
 */
export abstract class Command implements ICommand {
    /**
     * Экземпляр основного клиента бота. Доступен во всех дочерних командах.
     * @protected
     * @readonly
     */
    protected readonly client: Client;
    /**
     * Экземпляр логгера. Доступен во всех дочерних командах для логирования.
     * @protected
     * @readonly
     */
    protected readonly logger: Logger;
    /**
     * Фабрика для создания стандартизированных эмбедов. Доступна во всех дочерних командах.
     * @protected
     * @readonly
     */
    protected readonly embedFactory: typeof EmbedFactory;

    /**
     * Данные команды, включая имя, описание и опции, для регистрации в Discord API.
     * @public
     * @readonly
     */
    public readonly data:
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder;

    /**
     * Время перезарядки команды в секундах. Если 0, перезарядка отсутствует.
     * @public
     * @readonly
     */
    public readonly cooldown: number;

    /**
     * Флаг, определяющий, является ли команда доступной только для разработчиков.
     * @public
     * @readonly
     */
    public readonly devOnly: boolean;

    /**
     * Конструктор абстрактного класса Command.
     * Принимает зависимости и опции для инициализации свойств команды.
     * @param {ICommandDependencies} deps - Внедряемые зависимости (клиент, логгер, фабрика эмбедов).
     * @param {CommandOptions} options - Опции для конфигурации команды (данные, перезарядка, флаг разработчика).
     */
    protected constructor(deps: ICommandDependencies, options: CommandOptions) {
        this.client = deps.client;
        this.logger = deps.logger;
        this.embedFactory = deps.embedFactory;
        this.data = options.data;
        this.cooldown = options.cooldown ?? 0;
        this.devOnly = options.devOnly ?? false;
    }

    /**
     * Абстрактный метод, который выполняется при вызове команды.
     * Каждый дочерний класс ОБЯЗАН реализовать этот метод.
     * @abstract
     * @param {ChatInputCommandInteraction} interaction - Объект взаимодействия, содержащий всю информацию о вызове команды.
     * @returns {Promise<void>}
     */
    public abstract run(
        interaction: ChatInputCommandInteraction
    ): Promise<void>;
}
