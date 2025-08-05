import { PrismaClient } from "@prisma/client";
import { Logger } from "@/log.Module";

/**
 * @interface DatabaseServiceDependencies
 * @description Определяет зависимости, необходимые для сервиса базы данных.
 * Теперь он зависит от PrismaClient, который получает из контейнера.
 */
export interface DatabaseServiceDependencies {
    logger: Logger;
    prismaClient: PrismaClient;
}

/**
 * @class DatabaseService
 * @description Управляет жизненным циклом подключения к базе данных.
 */
export class DatabaseService {
    private readonly logger: Logger;
    private readonly prisma: PrismaClient; 

    /**
     * @constructor
     * @param {DatabaseServiceDependencies} deps - Зависимости, внедряемые в сервис.
     */
    constructor(deps: DatabaseServiceDependencies) {
        this.logger = deps.logger;
        this.prisma = deps.prismaClient; 
        this.logger.info(
            "DatabaseService инициализирован и получил PrismaClient."
        );
    }

    /**
     * @public
     * @async
     * @returns {Promise<void>}
     * @description Устанавливает соединение с базой данных.
     */
    public async connect(): Promise<void> {
        try {
            this.logger.info("Подключение к базе данных...");
            await this.prisma.$connect();
            this.logger.info("Успешное подключение к базе данных.");
        } catch (error) {
            this.logger.error("Не удалось подключиться к базе данных:", error);
            process.exit(1);
        }
    }

    /**
     * @public
     * @async
     * @returns {Promise<void>}
     * @description Разрывает соединение с базой данных.
     */
    public async disconnect(): Promise<void> {
        try {
            this.logger.info("Отключение от базы данных...");
            await this.prisma.$disconnect();
            this.logger.info("Успешное отключение от базы данных.");
        } catch (error) {
            this.logger.error(
                "Произошла ошибка при отключении от базы данных:",
                error
            );
        }
    }
}
