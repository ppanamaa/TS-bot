import { Events, Message } from "discord.js";
import { Event } from "@/core/abstractions/Event";
import { IEventDependencies } from "@/core/abstractions/interface/IDependencies";
import UserService from "@/services/dev/user"; // ЗАВИСИМОСТЬ ОТ КЛАССА

// Определяем зависимости, специфичные для этого события
interface IMessageCreateEventDeps extends IEventDependencies {
    userService: UserService; // ТИПИЗАЦИЯ ЧЕРЕЗ КЛАСС
}

export default class MessageCreateEvent extends Event<Events.MessageCreate> {
    private readonly userService: UserService;

    constructor(deps: IMessageCreateEventDeps) {
        super(deps, {
            name: Events.MessageCreate,
            once: false,
        });
        this.userService = deps.userService;
    }

    public async run(message: Message): Promise<void> {
        if (message.author.bot || !message.guild) {
            return;
        }
        // Используем метод из сервиса, полученного через DI
        this.userService.logUserDetailsOnMessage(message);
    }
}
