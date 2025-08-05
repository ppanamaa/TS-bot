import { AwilixContainer } from "awilix";
import { Logger } from "@/log.Module";
import { ConfigService } from "../ConfigService.ts";
import { IHandler } from "./interface/IHandler";
import { IHandlerDependencies } from "./interface/IDependencies";

/**
 * @class Handler
 * @abstract
 * @implements IHandler
 * @description Абстрактный базовый класс для всех "обработчиков" (handlers) в приложении.
 * Обработчики отвечают за загрузку и управление определенными компонентами системы,
 * такими как команды, события или сервисы.
 */
export abstract class Handler implements IHandler {
    /**
     * Экземпляр логгера. Доступен во всех дочерних обработчиках.
     * @protected
     * @readonly
     */
    protected readonly logger: Logger;

    /**
     * Экземпляр DI-контейнера Awilix. Доступен во всех дочерних обработчиках
     * для разрешения зависимостей или регистрации новых компонентов.
     * @protected
     * @readonly
     */
    protected readonly container: AwilixContainer;

    /**
     * Экземпляр сервиса конфигурации. Доступен во всех дочерних обработчиках.
     * @protected
     * @readonly
     */
    protected readonly configService: ConfigService;

    /**
     * Конструктор абстрактного класса Handler.
     * @param {IHandlerDependencies} deps - Внедряемые зависимости (логгер, контейнер, конфиг).
     */
    protected constructor(deps: IHandlerDependencies) {
        this.logger = deps.logger;
        this.container = deps.container;
        this.configService = deps.configService;
    }
}
