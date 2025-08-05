/**
 * @file Этот файл является единой точкой входа для генератора документации TypeDoc.
 * Он экспортирует все ключевые компоненты архитектуры, которые должны быть включены в документацию.
 * @module DocumentationEntrypoint
 */

// --- Core Abstractions (Classes) ---
export { Client } from "./core/abstractions/Client";
export { Command, CommandOptions } from "./core/abstractions/Command";
export { Event } from "./core/abstractions/Event";
export { Button, ButtonOptions } from "./core/abstractions/Button";
export { Service } from "./core/abstractions/Service";
export { Handler } from "./core/abstractions/Handler";
export { BaseRepository } from "./core/abstractions/Repository";
export { Mapper } from "./core/abstractions/Mapper";

// --- Core Interfaces (Contracts) ---
export * from "./core/abstractions/interface/IClient";
export * from "./core/abstractions/interface/ICommand";
export * from "./core/abstractions/interface/IButton";
export * from "./core/abstractions/interface/IEvent";
export * from "./core/abstractions/interface/IService";
export * from "./core/abstractions/interface/IHandler";
export * from "./core/abstractions/interface/IRepository";
export * from "./core/abstractions/interface/IMapper";

// --- Dependency Injection Interfaces ---
export * from "./core/abstractions/interface/IDependencies";

// --- Handlers (Concrete Implementations) ---
export { CommandHandler } from "./handlers/commandHandler";
export { EventHandler } from "./handlers/eventHandler";
export { ServiceHandler } from "./handlers/serviceHandler";

// --- Services (Concrete Implementations) ---
export { ChatService } from "./services/guild/chat";
export { default as UserService } from "./services/dev/user";

// --- Commands (Concrete Implementations) ---
export { default as PingCommand } from "./commands/example";
export { default as DeleteMessageCommand } from "./commands/deleteMessage";

// --- Events (Concrete Implementations) ---
export { default as ReadyEvent } from "./events/client/ready";
export { default as InteractionCreateEvent } from "./events/interactionCreate";
export { default as MessageCreateEvent } from "./events/messageCreate";

// --- Infrastructure & Utilities ---
export { ConfigService } from "./core/ConfigService.ts";
export { DatabaseService } from "./repository/connect";
export { EmbedFactory } from "./utils/embedFactory";
export { Logger } from "./log.Module/logger";
