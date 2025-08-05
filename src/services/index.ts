// src/services/index.ts

import { Service } from "@/core/abstractions/Service";
import { IServiceDependencies } from "@/core/abstractions/interface/IDependencies";

// Импортируем классы сервисов
import UserService from "./dev/user";
export const services: (new (deps: IServiceDependencies) => Service)[] = [
    UserService,
];
