// src/core/entities/user-activity.entity.ts

import { UserEntity } from "./user.entity";

// Интерфейс, описывающий данные, необходимые для создания UserActivityEntity
export interface UserActivityEntityProps {
    id: string;
    guildId: string;
    messageCount: number;
    voiceTimeInSeconds: number;
    user: UserEntity;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserActivityEntity {
    public readonly id: string;
    public guildId: string;
    public messageCount: number;
    public voiceTimeInSeconds: number;
    public user: UserEntity;
    public readonly userId: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    constructor(props: UserActivityEntityProps) {
        this.id = props.id;
        this.guildId = props.guildId;
        this.messageCount = props.messageCount;
        this.voiceTimeInSeconds = props.voiceTimeInSeconds;
        this.user = props.user;
        this.userId = props.userId;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
    }
}
