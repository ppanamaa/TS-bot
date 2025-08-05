// src/services/example.ts

import { EmbedBuilder } from "discord.js";
import { Service } from "@/core/abstractions/Service";
import { IServiceDependencies } from "@/core/abstractions/interface/IDependencies";

/**
 * @class PingService
 * @description Сервис, предоставляющий логику для команды /ping.
 */
export class PingService extends Service {
    constructor(deps: IServiceDependencies) {
        super(deps);
        this.logger.info("PingService инициализирован.");
    }

    /**
     * Создает и возвращает EmbedBuilder с информацией о задержке.
     * @param {number} websocketHeartbeat - Задержка WebSocket API в мс.
     * @param {number} roundtripLatency - Задержка ответа (roundtrip) в мс.
     * @returns {EmbedBuilder}
     */
    public createPingEmbed(
        websocketHeartbeat: number,
        roundtripLatency: number
    ): EmbedBuilder {
        this.logger.debug(
            `Создание embed для пинга: API=${websocketHeartbeat}ms, Roundtrip=${roundtripLatency}ms`
        );

        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("🏓 Понг!")
            .addFields(
                {
                    name: "Задержка API (WebSocket)",
                    value: `\`${websocketHeartbeat}мс\``,
                    inline: true,
                },
                {
                    name: "Задержка ответа (Roundtrip)",
                    value: `\`${roundtripLatency}мс\``,
                    inline: true,
                }
            )
            .setTimestamp();

        return embed;
    }
}
