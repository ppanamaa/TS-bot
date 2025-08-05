import { asClass } from "awilix";
import { services as ServiceClasses } from "@/services";
import { Handler } from "@/core/abstractions/Handler";
import { IHandlerDependencies } from "@/core/abstractions/interface/IDependencies";
import { IService } from "@/core/abstractions/interface/IService";

interface ServiceHandlerDependencies extends IHandlerDependencies {}

/**
 * @class ServiceHandler
 * @extends Handler
 * @description Отвечает за загрузку, регистрацию и управление жизненным циклом сервисов.
 */
export class ServiceHandler extends Handler {
    constructor(deps: ServiceHandlerDependencies) {
        super(deps);
    }

    /**
     * Загружает, регистрирует и инициализирует все сервисы.
     */
    public async loadServices(): Promise<void> {
        this.logger.info("Загрузка сервисов...");
        if (!ServiceClasses || ServiceClasses.length === 0) {
            this.logger.warn("Массив сервисов пуст. Пропускаем загрузку.");
            return;
        }

        for (const ServiceClass of ServiceClasses) {
            const serviceName = ServiceClass.name;
            const diName =
                serviceName.charAt(0).toLowerCase() + serviceName.slice(1);
            this.container.register(diName, asClass(ServiceClass).singleton());
            this.logger.debug(
                `Сервис '${serviceName}' зарегистрирован как '${diName}'.`
            );
        }

        this.logger.info("Инициализация сервисов...");
        for (const ServiceClass of ServiceClasses) {
            const serviceName = ServiceClass.name;
            const diName =
                serviceName.charAt(0).toLowerCase() + serviceName.slice(1);
            try {
                const serviceInstance =
                    this.container.resolve<IService>(diName);
                await serviceInstance.init();
            } catch (error) {
                this.logger.error(
                    `Ошибка при инициализации сервиса ${serviceName}:`,
                    error
                );
            }
        }
        this.logger.info(
            `Загрузка сервисов завершена. Загружено ${ServiceClasses.length} сервисов.`
        );
    }

    /**
     * Выполняет корректное завершение работы для всех зарегистрированных сервисов.
     */
    public async shutdownServices(): Promise<void> {
        this.logger.info("Завершение работы сервисов...");
        for (const ServiceClass of ServiceClasses) {
            const serviceName = ServiceClass.name;
            const diName =
                serviceName.charAt(0).toLowerCase() + serviceName.slice(1);
            try {
                const serviceInstance =
                    this.container.resolve<IService>(diName);
                await serviceInstance.shutdown();
                this.logger.debug(
                    `Сервис '${serviceName}' успешно завершил работу.`
                );
            } catch (error) {
                this.logger.error(
                    `Ошибка при завершении работы сервиса ${serviceName}:`,
                    error
                );
            }
        }
        this.logger.info("Все сервисы завершили работу.");
    }
}
