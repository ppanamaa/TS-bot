// src/core/entities/user.entity.ts

import { PunishmentEntity } from "./punishment.entity";
import { UserActivityEntity } from "./user-activity.entity";

// Интерфейс, описывающий данные, необходимые для создания UserEntity
export interface UserEntityProps {
    id: string;
    discordId: string;
    tag: string;
    activity: UserActivityEntity[];
    punishmentsReceived: PunishmentEntity[];
    punishmentsIssued: PunishmentEntity[];
    createdAt: Date;
    updatedAt: Date;
}

export class UserEntity {
    public readonly id: string;
    public discordId: string;
    public tag: string;
    public activity: UserActivityEntity[];
    public punishmentsReceived: PunishmentEntity[];
    public punishmentsIssued: PunishmentEntity[];
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    constructor(props: UserEntityProps) {
        this.id = props.id;
        this.discordId = props.discordId;
        this.tag = props.tag;
        this.activity = props.activity;
        this.punishmentsReceived = props.punishmentsReceived;
        this.punishmentsIssued = props.punishmentsIssued;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
    }
}
