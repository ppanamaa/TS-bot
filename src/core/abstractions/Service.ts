import { Client } from "./Client";
import { Logger } from "@/log.Module/logger";
import { IService } from "./interface/IService";
import { IServiceDependencies } from "./interface/IDependencies";

/**
 * @class Service
 * @abstract
 * @implements IService
 * @description Абстрактный базовый класс для всех сервисов в приложении.
 * Сервисы используются для инкапсуляции бизнес-логики, работы с внешними API
 * или выполнения сложных операций, которые не должны находиться в командах или событиях.
 */
export abstract class Service implements IService {
    /**
     * Экземпляр основного клиента бота. Доступен во всех дочерних сервисах.
     * @protected
     * @readonly
     */
    protected readonly client: Client;

    /**
     * Экземпляр логгера. Доступен во всех дочерних сервисах.
     * @protected
     * @readonly
     */
    protected readonly logger: Logger;

    /**
     * Конструктор абстрактного класса Service.
     * @param {IServiceDependencies} deps - Внедряемые зависимости (клиент, логгер).
     */
    protected constructor(deps: IServiceDependencies) {
        this.client = deps.client;
        this.logger = deps.logger;
    }

    /**
     * Опциональный асинхронный метод для инициализации сервиса.
     * Вызывается автоматически при запуске бота.
     * @public
     * @returns {Promise<void>}
     */
    public async init(): Promise<void> {
        // По умолчанию ничего не делает.
    }

    /**
     * Опциональный асинхронный метод для корректного завершения работы сервиса.
     * Может быть переопределен для освобождения ресурсов, сохранения данных и т.д.
     * Вызывается при плановом завершении работы бота.
     * @public
     * @returns {Promise<void>}
     */
    public async shutdown(): Promise<void> {}
}
