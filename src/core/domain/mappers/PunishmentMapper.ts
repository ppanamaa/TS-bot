import { Prisma } from "@prisma/client";
import {
    PunishmentEntity,
    PunishmentEntityProps,
    PunishmentType,
} from "../entities";
import { UserMapper } from "./UserMapper";
import { PunishmentWithRelationsPayload } from "@/repository/prisma-types";
import { Mapper } from "@/core/abstractions/Mapper";

export interface PunishmentMapperDependencies {
    userMapper: UserMapper;
}

/**
 * @class PunishmentMapper
 * @extends Mapper
 * @description Отвечает за преобразование данных между форматом Prisma и PunishmentEntity.
 */
export class PunishmentMapper extends Mapper<
    PunishmentEntity,
    PunishmentWithRelationsPayload,
    Prisma.PunishmentUncheckedCreateInput
> {
    private readonly userMapper: UserMapper;

    constructor(deps: PunishmentMapperDependencies) {
        super();
        this.userMapper = deps.userMapper;
    }

    /**
     * @override
     */
    public toDomain(raw: PunishmentWithRelationsPayload): PunishmentEntity {
        const punishmentProps: PunishmentEntityProps = {
            id: raw.id,
            caseId: raw.caseId,
            guildId: raw.guildId,
            type: raw.type as PunishmentType,
            reason: raw.reason,
            expiresAt: raw.expiresAt,
            active: raw.active,
            targetId: raw.targetId,
            moderatorId: raw.moderatorId,
            createdAt: raw.createdAt,
            target: this.userMapper.toDomain({
                ...raw.target,
                punishmentsReceived: [],
                punishmentsIssued: [],
                activity: [],
            }),
            moderator: this.userMapper.toDomain({
                ...raw.moderator,
                punishmentsReceived: [],
                punishmentsIssued: [],
                activity: [],
            }),
        };

        return new PunishmentEntity(punishmentProps);
    }

    /**
     * @override
     */
    public toPersistence(
        domain: PunishmentEntity
    ): Prisma.PunishmentUncheckedCreateInput {
        return {
            id: domain.id,
            caseId: domain.caseId,
            guildId: domain.guildId,
            type: domain.type,
            reason: domain.reason,
            expiresAt: domain.expiresAt,
            active: domain.active,
            targetId: domain.targetId,
            moderatorId: domain.moderatorId,
            createdAt: domain.createdAt,
        };
    }
}
