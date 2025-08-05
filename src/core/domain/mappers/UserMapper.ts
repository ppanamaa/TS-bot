import { Prisma } from "@prisma/client";
import { UserEntity, UserEntityProps } from "../entities";
import { PunishmentMapper } from "./PunishmentMapper";
import { UserActivityMapper } from "./UserActivityMapper";
import { FullUserPayload } from "@/repository/prisma-types";
import { Mapper } from "@/core/abstractions/Mapper";

export interface UserMapperDependencies {
    punishmentMapper: PunishmentMapper;
    userActivityMapper: UserActivityMapper;
}

/**
 * @class UserMapper
 * @extends Mapper
 * @description Отвечает за преобразование данных между форматом Prisma и UserEntity.
 */
export class UserMapper extends Mapper<
    UserEntity,
    FullUserPayload,
    Prisma.UserUncheckedCreateInput
> {
    private readonly punishmentMapper: PunishmentMapper;
    private readonly userActivityMapper: UserActivityMapper;

    constructor(deps: UserMapperDependencies) {
        super();
        this.punishmentMapper = deps.punishmentMapper;
        this.userActivityMapper = deps.userActivityMapper;
    }

    /**
     * @override
     */
    public toDomain(raw: FullUserPayload): UserEntity {
        const userProps: UserEntityProps = {
            id: raw.id,
            discordId: raw.discordId,
            tag: raw.tag,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
            punishmentsReceived: raw.punishmentsReceived.map((p) =>
                this.punishmentMapper.toDomain(p)
            ),
            punishmentsIssued: raw.punishmentsIssued.map((p) =>
                this.punishmentMapper.toDomain(p)
            ),
            activity: raw.activity.map((a) =>
                this.userActivityMapper.toDomain(a)
            ),
        };

        const userEntity = new UserEntity(userProps);

        userEntity.activity.forEach((a) => (a.user = userEntity));
        userEntity.punishmentsReceived.forEach((p) => (p.target = userEntity));
        userEntity.punishmentsIssued.forEach((p) => (p.moderator = userEntity));

        return userEntity;
    }

    /**
     * @override
     */
    public toPersistence(domain: UserEntity): Prisma.UserUncheckedCreateInput {
        return {
            id: domain.id,
            discordId: domain.discordId,
            tag: domain.tag,
            createdAt: domain.createdAt,
            updatedAt: domain.updatedAt,
        };
    }
}
