// src/events/index.ts

import { Event } from "@/core/abstractions/Event";

// Импортируем классы событий из их файлов
import ReadyEvent from "./client/ready";
import MessageCreateEvent from "./messageCreate";
import InteractionCreateEvent from "./interactionCreate"; // Путь к файлу теперь правильный

export type AnyEventConstructor = new (deps: any) => Event<any>;
export const events: AnyEventConstructor[] = [
    ReadyEvent,
    MessageCreateEvent,
    InteractionCreateEvent,
];
