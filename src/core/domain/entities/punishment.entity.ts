// src/core/entities/punishment.entity.ts

import { UserEntity } from "./user.entity";
import { PunishmentType } from "./enums/punishment-type.enum";

// Интерфейс, описывающий данные, необходимые для создания PunishmentEntity
export interface PunishmentEntityProps {
    id: string;
    caseId: number;
    guildId: string;
    type: PunishmentType;
    reason: string | null;
    expiresAt: Date | null;
    active: boolean;
    target: UserEntity;
    targetId: string;
    moderator: UserEntity;
    moderatorId: string;
    createdAt: Date;
}

export class PunishmentEntity {
    public readonly id: string;
    public readonly caseId: number;
    public guildId: string;
    public type: PunishmentType;
    public reason: string | null;
    public expiresAt: Date | null;
    public active: boolean;
    public target: UserEntity;
    public readonly targetId: string;
    public moderator: UserEntity;
    public readonly moderatorId: string;
    public readonly createdAt: Date;

    constructor(props: PunishmentEntityProps) {
        this.id = props.id;
        this.caseId = props.caseId;
        this.guildId = props.guildId;
        this.type = props.type;
        this.reason = props.reason;
        this.expiresAt = props.expiresAt;
        this.active = props.active;
        this.target = props.target;
        this.targetId = props.targetId;
        this.moderator = props.moderator;
        this.moderatorId = props.moderatorId;
        this.createdAt = props.createdAt;
    }
}
