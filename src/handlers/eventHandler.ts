import { asClass } from "awilix";
import { events as EventClasses } from "@/events";
import { Handler } from "@/core/abstractions/Handler";
import { IHandlerDependencies } from "@/core/abstractions/interface/IDependencies";
import { IEvent } from "@/core/abstractions/interface/IEvent";
import { IClient } from "@/core/abstractions/interface/IClient";

interface EventHandlerDependencies extends IHandlerDependencies {}

/**
 * @class EventHandler
 * @extends Handler
 * @description Отвечает за загрузку и регистрацию всех обработчиков событий Discord.
 */
export class EventHandler extends Handler {
    constructor(deps: EventHandlerDependencies) {
        super(deps);
    }

    /**
     * Загружает все события и регистрирует их слушателей в клиенте.
     * @param {IClient} client - Экземпляр клиента, к которому будут привязаны события.
     */
    public async loadEvents(client: IClient): Promise<void> {
        this.logger.info("Загрузка событий...");

        if (!EventClasses || EventClasses.length === 0) {
            this.logger.warn("Массив событий пуст. Пропускаем загрузку.");
            return;
        }

        for (const EventClass of EventClasses) {
            const eventClassName = EventClass.name;
            this.container.register(
                eventClassName,
                asClass(EventClass).scoped()
            );

            try {
                const eventInstance =
                    this.container.resolve<IEvent<any>>(eventClassName);

                if (eventInstance.once) {
                    client.once(eventInstance.name, (...args) =>
                        eventInstance.run(...args)
                    );
                } else {
                    client.on(eventInstance.name, (...args) =>
                        eventInstance.run(...args)
                    );
                }

                this.logger.debug(
                    `Событие '${eventInstance.name}' (${eventClassName}) успешно зарегистрировано.`
                );
            } catch (error) {
                this.logger.error(
                    `Ошибка при регистрации слушателя для события ${eventClassName}:`,
                    error
                );
            }
        }
        this.logger.info(
            `Загрузка событий завершена. Зарегистрировано ${EventClasses.length} обработчиков.`
        );
    }
}
