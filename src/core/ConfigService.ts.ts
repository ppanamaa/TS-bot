import { Logger } from "@/log.Module";
import "dotenv/config"; // Убедимся, что .env загружен

/**
 * @interface ConfigServiceDependencies
 * @description Определяет зависимости, необходимые для сервиса конфигурации.
 */
interface ConfigServiceDependencies {
    logger: Logger;
}

/**
 * @class ConfigService
 * @description Централизованный сервис для доступа к переменным окружения.
 * Он читает, валидирует и предоставляет конфигурацию в виде типизированных свойств.
 * Это единый источник правды для всех настроек приложения.
 */
export class ConfigService {
    private readonly logger: Logger;

    /**
     * @property {string} token - Токен для аутентификации бота в Discord API.
     */
    public readonly token: string;
    /**
     * @property {string} guildId - ID основного сервера (гильдии), где будут регистрироваться команды.
     */
    public readonly guildId: string;
    /**
     * @property {string} databaseUrl - URL для подключения к базе данных Prisma.
     */
    public readonly databaseUrl: string;
    /**
     * @property {'debug' | 'info'} logLevel - Уровень логирования для всего приложения.
     */
    public readonly logLevel: "debug" | "info";
    /**
     * @property {string[]} devOnlyIds - Массив ID пользователей-разработчиков для команд с флагом devOnly.
     */
    public readonly devOnlyIds: string[];

    /**
     * @constructor
     * @param {ConfigServiceDependencies} deps - Зависимости, внедряемые в сервис.
     */
    constructor(deps: ConfigServiceDependencies) {
        this.logger = deps.logger;
        this.logger.info("Загрузка и валидация конфигурации...");

        // Читаем и валидируем критически важные переменные
        const token = process.env.TOKEN;
        if (!token) {
            this.logger.error(
                "Ошибка конфигурации: Переменная TOKEN не найдена в .env файле."
            );
            process.exit(1);
        }
        this.token = token;

        const guildId = process.env.GUILD_ID;
        if (!guildId) {
            this.logger.error(
                "Ошибка конфигурации: Переменная GUILD_ID не найдена в .env файле."
            );
            process.exit(1);
        }
        this.guildId = guildId;

        const databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl) {
            this.logger.error(
                "Ошибка конфигурации: Переменная DATABASE_URL не найдена в .env файле."
            );
            process.exit(1);
        }
        this.databaseUrl = databaseUrl;

        this.logLevel = process.env.LOG_LEVEL === "debug" ? "debug" : "info";

        this.devOnlyIds =
            process.env.DEV_ONLY_IDS?.split(",").map((id) => id.trim()) ?? [];
        if (this.devOnlyIds.length > 0) {
            this.logger.debug(
                `Загружены ID разработчиков: ${this.devOnlyIds.join(", ")}`
            );
        }

        this.logger.info("Конфигурация успешно загружена и проверена.");
    }
}
