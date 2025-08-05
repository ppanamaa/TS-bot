import { AwilixContainer } from "awilix";
import { PrismaClient } from "@prisma/client";
import { Client } from "../Client";
import { Logger } from "@/log.Module/logger";
import { EmbedFactory } from "@/utils/embedFactory";
import { ConfigService } from "../../ConfigService.ts";
import { EventHandler } from "@/handlers/eventHandler";
import { ServiceHandler } from "@/handlers/serviceHandler";
import { DatabaseService } from "@/repository/connect";
import { CommandHandler } from "@/handlers/commandHandler";

/**
 * @interface ICommandDependencies
 * @description Зависимости для конструктора класса {@link Command}.
 */
export interface ICommandDependencies {
    client: Client;
    logger: Logger;
    embedFactory: typeof EmbedFactory;
}

/**
 * @interface IButtonDependencies
 * @description Зависимости для конструктора класса {@link Button}.
 */
export interface IButtonDependencies {
    client: Client;
    logger: Logger;
    embedFactory: typeof EmbedFactory;
}

/**
 * @interface IEventDependencies
 * @description Зависимости для конструктора класса {@link Event}.
 */
export interface IEventDependencies {
    client: Client;
    logger: Logger;
}

/**
 * @interface IServiceDependencies
 * @description Зависимости для конструктора класса {@link Service}.
 */
export interface IServiceDependencies {
    client: Client;
    logger: Logger;
}

/**
 * @interface IRepositoryDependencies
 * @description Зависимости для конструктора класса {@link BaseRepository}.
 */
export interface IRepositoryDependencies {
    logger: Logger;
    prismaClient: PrismaClient;
}

/**
 * @interface IHandlerDependencies
 * @description Зависимости для конструктора класса {@link Handler}.
 */
export interface IHandlerDependencies {
    logger: Logger;
    container: AwilixContainer;
    configService: ConfigService;
}

/**
 * @interface IClientDependencies
 * @description Зависимости для конструктора класса {@link Client}.
 */
export interface IClientDependencies {
    logger: Logger;
    eventHandler: EventHandler;
    serviceHandler: ServiceHandler;
    databaseService: DatabaseService;
    commandHandler: CommandHandler;
    configService: ConfigService;
}
