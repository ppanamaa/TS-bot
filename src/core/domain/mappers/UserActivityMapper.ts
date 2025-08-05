import { Prisma } from "@prisma/client";
import { UserActivityEntity, UserActivityEntityProps } from "../entities";
import { UserActivityPayload } from "@/repository/prisma-types";
import { Mapper } from "@/core/abstractions/Mapper";

/**
 * @class UserActivityMapper
 * @extends Mapper
 * @description Отвечает за преобразование данных между форматом Prisma и UserActivityEntity.
 */
export class UserActivityMapper extends Mapper<
    UserActivityEntity,
    UserActivityPayload,
    Prisma.UserActivityUncheckedCreateInput
> {
    constructor() {
        super();
    }

    /**
     * @override
     */
    public toDomain(raw: UserActivityPayload): UserActivityEntity {
        const userActivityProps: Omit<UserActivityEntityProps, "user"> = {
            id: raw.id,
            guildId: raw.guildId,
            messageCount: raw.messageCount,
            voiceTimeInSeconds: raw.voiceTimeInSeconds,
            userId: raw.userId,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        };
        return new UserActivityEntity(
            userActivityProps as UserActivityEntityProps
        );
    }

    /**
     * @override
     */
    public toPersistence(
        domain: UserActivityEntity
    ): Prisma.UserActivityUncheckedCreateInput {
        return {
            id: domain.id,
            guildId: domain.guildId,
            messageCount: domain.messageCount,
            voiceTimeInSeconds: domain.voiceTimeInSeconds,
            userId: domain.userId,
            createdAt: domain.createdAt,
            updatedAt: domain.updatedAt,
        };
    }
}
