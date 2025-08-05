import {
    EmbedBuilder,
    ColorResolvable,
    User,
    EmbedAuthorOptions,
    EmbedField,
    EmbedFooterOptions,
} from "discord.js";

/**
 * @interface EmbedOptions
 * @description Определяет все настраиваемые параметры для создания эмбеда через EmbedFactory.
 */
export interface EmbedOptions {
    color?: ColorResolvable;
    title?: string;
    description?: string;
    fields?: EmbedField[];
    author?: EmbedAuthorOptions;
    thumbnail?: string;
    image?: string;
    footer?: EmbedFooterOptions; // Позволяет переопределить стандартный футер
}

/**
 * @class EmbedFactory
 * @description Продвинутая утилита для создания стандартизированных и кастомизируемых эмбедов.
 * Предоставляет шаблоны для типовых сообщений (успех, ошибка, информация) и
 * обеспечивает консистентный футер с информацией о пользователе.
 */
export class EmbedFactory {
    // ИСПРАВЛЕНО: Цвета теперь в стандартном 6-значном HEX-формате
    private static readonly colors = {
        SUCCESS: "#68bb82" as ColorResolvable,
        ERROR: "#cf6b6d" as ColorResolvable,
        INFO: "#7a81c7" as ColorResolvable,
    };

    /**
     * Базовый метод для создания эмбедов. Используется другими методами-шаблонами.
     * @private
     * @static
     * @param {User} user - Пользователь, инициировавший команду, для футера.
     * @param {EmbedOptions} options - Объект с параметрами для кастомизации эмбеда.
     * @returns {EmbedBuilder} Готовый экземпляр EmbedBuilder.
     */
    private static createBaseEmbed(
        user: User,
        options: EmbedOptions
    ): EmbedBuilder {
        const embed = new EmbedBuilder();

        if (options.color) embed.setColor(options.color);
        if (options.title) embed.setTitle(options.title);
        if (options.description) embed.setDescription(options.description);
        if (options.fields) embed.addFields(options.fields);
        if (options.author) embed.setAuthor(options.author);
        if (options.thumbnail) embed.setThumbnail(options.thumbnail);
        if (options.image) embed.setImage(options.image);

        if (options.footer) {
            embed.setFooter(options.footer);
        } else {
            embed.setFooter({
                text: `ID: ${user.id}`,
                iconURL: user.displayAvatarURL(),
            });
        }

        embed.setTimestamp();

        return embed;
    }

    /**
     * Создает кастомизируемый эмбед для сообщений об успехе.
     * @public
     * @static
     * @param {User} user - Пользователь, инициировавший команду.
     * @param {EmbedOptions} options - Параметры для эмбеда.
     * @returns {EmbedBuilder} Готовый экземпляр EmbedBuilder.
     */
    public static createSuccessEmbed(
        user: User,
        options: EmbedOptions
    ): EmbedBuilder {
        const successOptions: EmbedOptions = {
            ...options,
            color: this.colors.SUCCESS,
            description: `✅ ${options.description ?? ""}`.trim(),
        };
        return this.createBaseEmbed(user, successOptions);
    }

    /**
     * Создает кастомизируемый эмбед для сообщений об ошибках.
     * @public
     * @static
     * @param {User} user - Пользователь, инициировавший команду.
     * @param {EmbedOptions} options - Параметры для эмбеда.
     * @returns {EmbedBuilder} Готовый экземпляр EmbedBuilder.
     */
    public static createErrorEmbed(
        user: User,
        options: EmbedOptions
    ): EmbedBuilder {
        const errorOptions: EmbedOptions = {
            ...options,
            color: this.colors.ERROR,
            description: `❌ ${options.description ?? ""}`.trim(),
        };
        return this.createBaseEmbed(user, errorOptions);
    }

    /**
     * Создает кастомизируемый эмбед для информационных сообщений.
     * @public
     * @static
     * @param {User} user - Пользователь, инициировавший команду.
     * @param {EmbedOptions} options - Параметры для эмбеда.
     * @returns {EmbedBuilder} Готовый экземпляр EmbedBuilder.
     */
    public static createInfoEmbed(
        user: User,
        options: EmbedOptions
    ): EmbedBuilder {
        const infoOptions: EmbedOptions = {
            ...options,
            color: this.colors.INFO,
            description: `ℹ️ ${options.description ?? ""}`.trim(),
        };
        return this.createBaseEmbed(user, infoOptions);
    }
}
