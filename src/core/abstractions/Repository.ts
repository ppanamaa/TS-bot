import { PrismaClient } from "@prisma/client";
import { Logger } from "@/log.Module";
import { IRepository } from "./interface/IRepository";
import { IRepositoryDependencies } from "./interface/IDependencies";

/**
 * @class BaseRepository
 * @abstract
 * @implements IRepository
 * @description Абстрактный базовый класс для всех репозиториев в приложении.
 * Паттерн "Репозиторий" используется для инкапсуляции логики доступа к данным,
 * отделяя бизнес-логику (сервисы) от деталей работы с источником данных (Prisma).
 */
export abstract class BaseRepository implements IRepository {
    /**
     * Экземпляр логгера. Доступен во всех дочерних репозиториях.
     * @protected
     * @readonly
     */
    protected readonly logger: Logger;

    /**
     * Экземпляр клиента Prisma. Доступен во всех дочерних репозиториях
     * для выполнения запросов к базе данных.
     * @protected
     * @readonly
     */
    protected readonly prisma: PrismaClient;

    /**
     * Конструктор абстрактного класса BaseRepository.
     * @param {IRepositoryDependencies} deps - Внедряемые зависимости (логгер, клиент Prisma).
     */
    protected constructor(deps: IRepositoryDependencies) {
        this.logger = deps.logger;
        this.prisma = deps.prismaClient;
    }
}
