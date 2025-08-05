import "reflect-metadata";
import "dotenv/config";
import { container } from "@/core/container";
import { Client } from "@/core/abstractions/Client";
import { Logger } from "@/log.Module";

/**
 * @function bootstrap
 * @description Асинхронная функция для инициализации и запуска приложения.
 */
async function bootstrap() {
    const logger = container.resolve<Logger>("logger");
    const client = container.resolve<Client>("client");

    let isShuttingDown = false;


    const gracefulShutdown = async (signal: string) => {
        if (isShuttingDown) {
            logger.warn(
                "Процесс завершения уже запущен. Повторный сигнал проигнорирован."
            );
            return;
        }
        isShuttingDown = true;
        logger.warn(`Получен сигнал ${signal}. Запускаю graceful shutdown...`);
        await client.shutdown();
    };

    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

    process.on("uncaughtException", (error) => {
        logger.error("Необработанное исключение:", error);
        // process.exit(1)
    });

    process.on("unhandledRejection", (reason, promise) => {
        logger.error("Необработанное отклонение промиса:", {
            reason,
            promise,
        });
    });

    try {
        logger.info("Инициализация приложения...");
        await client.start();
    } catch (error) {
        logger.error("Критическая ошибка при запуске приложения:", error);
        process.exit(1);
    }
}

bootstrap();
