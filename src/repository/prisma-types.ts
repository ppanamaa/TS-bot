// src/repository/prisma-types.ts

import { Prisma } from "@prisma/client";

/**
 * Определяем аргументы для запроса пользователя со всеми его связями.
 * Prisma.validator гарантирует, что наша структура `include` соответствует схеме.
 * ИСПРАВЛЕНО: Используем UserDefaultArgs вместо UserArgs.
 */
const userWithRelationsArgs = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: {
        punishmentsReceived: {
            include: {
                // Включаем полные данные о модераторе и цели в каждом наказании
                moderator: true,
                target: true,
            },
        },
        punishmentsIssued: {
            include: {
                moderator: true,
                target: true,
            },
        },
        activity: true,
    },
});

/**
 * Создаем и экспортируем точный тип для пользователя, полученного с помощью запроса выше.
 * Это наш основной тип данных, из которого мы будем извлекать остальные.
 */
export type FullUserPayload = Prisma.UserGetPayload<
    typeof userWithRelationsArgs
>;

/**
 * Извлекаем тип для одного наказания из массива punishmentsReceived.
 * Он будет содержать в себе полные объекты moderator и target.
 */
export type PunishmentWithRelationsPayload =
    FullUserPayload["punishmentsReceived"][number];

/**
 * Извлекаем тип для одной записи об активности из массива activity.
 */
export type UserActivityPayload = FullUserPayload["activity"][number];
