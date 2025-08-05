import { createContainer, asClass, asValue, AwilixContainer } from "awilix";
import { PrismaClient } from "@prisma/client";
import { Client } from "@/core/abstractions/Client";
import {
    Logger,
    LogLevel,
    ConsoleTransport,
    FileTransport,
} from "@/log.Module";
import { EventHandler } from "@/handlers/eventHandler";
import { ServiceHandler } from "@/handlers/serviceHandler";
import { DatabaseService } from "@/repository/connect";
import { CommandHandler } from "@/handlers/commandHandler";
import { PingService } from "@/services/example";
import { ChatService } from "@/services/guild/chat";
import {
    PunishmentMapper,
    UserActivityMapper,
    UserMapper,
} from "./domain/mappers";
import { ConfigService } from "./ConfigService.ts";
import { EmbedFactory } from "@/utils/embedFactory"; // ДОБАВЛЕНО

const container: AwilixContainer = createContainer();

// --- Шаг 1: Создание временного логгера и регистрация ConfigService ---
const preLogger = new Logger({
    level: LogLevel.INFO,
    transports: [new ConsoleTransport()],
});

container.register({
    logger: asValue(preLogger),
    configService: asClass(ConfigService).singleton(),
});

// --- Шаг 2: Создание основного логгера на основе конфигурации ---
const configService = container.resolve<ConfigService>("configService");

const logger = new Logger({
    level: configService.logLevel === "debug" ? LogLevel.DEBUG : LogLevel.INFO,
    transports: [new ConsoleTransport(), new FileTransport()],
});

// --- Шаг 3: Перерегистрация логгера и регистрация остальных зависимостей ---
container.register({
    logger: asValue(logger),
});

const prismaClient = new PrismaClient();

container.register({
    prismaClient: asValue(prismaClient),

    // Utils
    embedFactory: asValue(EmbedFactory), // ДОБАВЛЕНО: Регистрируем фабрику как значение

    // Mappers
    userMapper: asClass(UserMapper).singleton(),
    punishmentMapper: asClass(PunishmentMapper).singleton(),
    userActivityMapper: asClass(UserActivityMapper).singleton(),

    // Handlers
    eventHandler: asClass(EventHandler).singleton(),
    serviceHandler: asClass(ServiceHandler).singleton(),
    commandHandler: asClass(CommandHandler).singleton(),

    // Core Services
    databaseService: asClass(DatabaseService).singleton(),

    // Feature Services
    pingService: asClass(PingService).singleton(),
    chatService: asClass(ChatService).singleton(),

    // Client
    client: asClass(Client).singleton(),
    container: asValue(container),
});

export { container };
