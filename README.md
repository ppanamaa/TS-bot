```markdown
# Discord Bot Framework v2 - Архитектурное Руководство

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)

Это руководство предназначено для глубокого понимания архитектуры, принципов проектирования и рабочего процесса проекта. Оно объясняет не только "как сделать", но и "почему это сделано именно так".

## Оглавление

1.  [Философия и Принципы Проектирования](#философия-и-принципы-проектирования)
2.  [Технологический стек](#технологический-стек)
3.  [Структура Проекта](#структура-проекта)
4.  [Настройка и Запуск](#настройка-и-запуск)
5.  [Глубокое Погружение в Архитектуру](#глубокое-погружение-в-архитектуру)
    -   [Система Зависимостей (DI)](#система-зависимостей-di---сердце-приложения)
    -   [Централизованная Конфигурация](#централизованная-конфигурация-configservice)
    -   [Ключевые Абстракции](#ключевые-абстракции-архитектурные-контракты)
    -   [Доменный Слой (Entities & Mappers)](#доменный-слой-entities--mappers)
    -   [Обработчики (Handlers)](#обработчики-handlers)
6.  [Жизненный Цикл Приложения](#жизненный-цикл-приложения)
7.  [Рабочий Процесс: Создание Компонентов](#рабочий-процесс-создание-компонентов)
    -   [Создание новой Команды](#создание-новой-команды)
    -   [Создание нового Сервиса](#создание-нового-сервиса)
    -   [Создание нового События](#создание-нового-события)
    -   [Работа с Базой Данных](#работа-с-базой-данных-полный-цикл)

---

## Философия и Принципы Проектирования

Цель этой архитектуры — не просто заставить бота работать, а создать надежную, масштабируемую и легко поддерживаемую систему.

-   **Dependency Injection (DI) / Внедрение Зависимостей (`Awilix`)**:

    > **Проблема**: Классы жестко связаны, создавая экземпляры друг друга (`new MyService()`). Это усложняет тестирование и рефакторинг.
    > **Решение**: Мы "объявляем" зависимости в конструкторе, а DI-контейнер сам находит и предоставляет нужные экземпляры. Это инвертирует контроль (Inversion of Control), делая компоненты слабо связанными.

-   **Separation of Concerns (SoC) / Разделение Ответственности**:

    > **Проблема**: Вся логика (проверка прав, работа с БД, форматирование ответа) находится в одном файле команды, что ведет к "спагетти-коду".
    > **Решение**: Каждый класс имеет одну, четко определенную задачу: `Command` работает с `interaction`, `Service` выполняет бизнес-логику, `Repository` обращается к БД, `Mapper` преобразует данные, а `EmbedFactory` создает ответы.

-   **Абстракции > Реализации (Dependency Inversion Principle)**:

    > **Проблема**: Прямая зависимость от конкретного класса (`PingService`) привязывает код к его реализации.
    > **Решение**: Мы зависим от абстракций (`Command`, `Service`, `IClient`). Это позволяет легко заменять реализации, не затрагивая другие части системы, и обеспечивает предсказуемую структуру для всех модулей.

-   **Fail Fast / Падай Быстро**:
    > **Проблема**: Бот запускается без токена и падает с ошибкой во время выполнения.
    > **Решение**: `ConfigService` при запуске проверяет наличие всех критически важных переменных. Если чего-то не хватает, приложение немедленно завершает работу с информативной ошибкой.

## Технологический стек

-   **TypeScript**: Основной язык, обеспечивающий строгую типизацию и безопасность кода.
-   **Discord.js v14**: Библиотека для взаимодействия с Discord API.
-   **Awilix**: Мощный и гибкий DI-контейнер для управления зависимостями.
-   **Prisma**: Современная ORM для работы с базой данных.
-   **Dotenv**: Для управления переменными окружения.

## Структура Проекта
```

src/
├── commands/ # Слеш-команды, доступные пользователям
│ ├── example.ts
│ └── index.ts # Единая точка экспорта всех команд
├── core/
│ ├── abstractions/ # Основа архитектуры: абстрактные классы и интерфейсы
│ │ ├── interface/ # Публичные контракты (интерфейсы)
│ │ ├── Button.ts
│ │ ├── Client.ts # Главный класс-оркестратор
│ │ ├── Command.ts # Базовый класс для всех команд
│ │ ├── Event.ts
│ │ ├── Handler.ts
│ │ ├── Mapper.ts
│ │ ├── Repository.ts
│ │ └── Service.ts
│ ├── domain/ # Доменная логика, независимая от фреймворков
│ │ ├── entities/ # Бизнес-сущности (UserEntity, etc.)
│ │ └── mappers/ # Преобразователи данных (Prisma <-> Entity)
│ ├── ConfigService.ts.ts # Управление конфигурацией
│ └── container.ts # Настройка DI-контейнера Awilix
├── events/ # Обработчики событий Discord (ready, messageCreate)
│ ├── client/
│ └── index.ts # Единая точка экспорта всех событий
├── handlers/ # "Менеджеры", загружающие компоненты
│ ├── commandHandler.ts
│ ├── eventHandler.ts
│ └── serviceHandler.ts
├── log.Module/ # Модульная система логирования
├── repository/ # Реализации репозиториев для работы с БД
│ └── connect.ts # Сервис управления подключением к БД
├── services/ # Сервисы с бизнес-логикой
│ ├── dev/
│ ├── guild/
│ └── index.ts # Единая точка экспорта всех сервисов
├── utils/ # Вспомогательные утилиты
│ └── embedFactory.ts # Фабрика для создания стандартизированных эмбедов
└── index.ts # Точка входа в приложение

````

## Настройка и Запуск

### 1. Установка зависимостей
```bash
npm install
````

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта, скопировав содержимое из `.env.example`, и заполните его:

```env
# Discord Bot Configuration
TOKEN=ВАШ_ТОКЕН_БОТА
GUILD_ID=ID_ВАШЕГО_ТЕСТОВОГО_СЕРВЕРА

# Database Configuration (PostgreSQL example)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Logging Configuration (debug | info)
LOG_LEVEL=debug

# Development Configuration (через запятую, без пробелов)
DEV_ONLY_IDS=ID_ВАШЕГО_ПОЛЬЗОВАТЕЛЯ,ID_ДРУГОГО_РАЗРАБОТЧИКА
```

### 3. Настройка базы данных

```bash
# Сгенерировать клиент Prisma на основе вашей схемы
npx prisma generate

# Применить миграции к базе данных
npx prisma migrate dev
```

### 4. Запуск бота

-   **Для разработки (с автоматической перезагрузкой):**
    ```bash
    npm run dev
    ```
-   **Для продакшена:**
    ```bash
    npm run build
    npm start
    ```

---

## Глубокое Погружение в Архитектуру

### Система Зависимостей (DI) - Сердце Приложения

Файл: `src/core/container.ts`

`Awilix` управляет жизненным циклом всех ключевых объектов. Процесс регистрации происходит в несколько этапов для безопасной загрузки конфигурации:

1.  **Временный логгер**: Создается `preLogger` для логирования процесса загрузки конфигурации.
2.  **Регистрация `ConfigService`**: Сервис конфигурации регистрируется и немедленно создается.
3.  **Основной логгер**: На основе `LOG_LEVEL` из `ConfigService` создается и перерегистрируется основной логгер.
4.  **Регистрация остальных зависимостей**: Все остальные компоненты (клиент, хендлеры, сервисы, мапперы) регистрируются с указанием их жизненного цикла:
    -   `asClass(MyClass).singleton()`: Гарантирует, что на протяжении всей жизни приложения будет существовать **только один** экземпляр этого класса. Идеально для сервисов и хендлеров.
    -   `asValue(value)`: Регистрирует уже созданный объект (например, `prismaClient` или `logger`).

### Централизованная Конфигурация (`ConfigService`)

Файл: `src/core/ConfigService.ts`

Этот класс — страж конфигурации. Он читает `.env`, валидирует наличие критически важных переменных и предоставляет их в строго типизированном виде всему приложению.

### Ключевые Абстракции (Архитектурные Контракты)

Это "чертежи" для всех основных компонентов системы, расположенные в `src/core/abstractions/`.

#### `Command`

Абстрактный класс, определяющий структуру слеш-команды. Он разделяет **определение** команды (`data`) от ее **исполнения** (`run`).

```typescript
// src/core/abstractions/Command.ts
export abstract class Command implements ICommand {
    protected readonly client: Client;
    protected readonly logger: Logger;
    protected readonly embedFactory: typeof EmbedFactory;

    public readonly data:
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder;
    public readonly cooldown: number;
    public readonly devOnly: boolean;

    // ... constructor ...

    public abstract run(
        interaction: ChatInputCommandInteraction
    ): Promise<void>;
}
```

#### `Service`

Базовый класс для модулей с бизнес-логикой. Определяет опциональные "хуки" жизненного цикла `init()` и `shutdown()`.

```typescript
// src/core/abstractions/Service.ts
export abstract class Service implements IService {
    protected readonly client: Client;
    protected readonly logger: Logger;

    // ... constructor ...

    public async init(): Promise<void> {
        /* По умолчанию ничего не делает. */
    }
    public async shutdown(): Promise<void> {
        /* По умолчанию ничего не делает. */
    }
}
```

#### `Event`

Использует дженерики TypeScript для строгой типизации обработчиков событий. Когда вы пишете `extends Event<Events.MessageCreate>`, TypeScript автоматически типизирует аргументы метода `run` как `(message: Message)`.

```typescript
// src/core/abstractions/Event.ts
export abstract class Event<E extends keyof ClientEvents> implements IEvent<E> {
    protected readonly client: Client;
    protected readonly logger: Logger;
    public readonly name: E;
    public readonly once: boolean;

    // ... constructor ...

    public abstract run(...args: ClientEvents[E]): Promise<void>;
}
```

#### Другие абстракции:

-   **`Repository`**: Основа для паттерна "Репозиторий", изолирует логику доступа к данным.
-   **`Mapper`**: "Переводчик" между "сырыми" данными из БД и доменными сущностями.
-   **`Handler`**: Базовый класс для "загрузчиков" команд, событий и сервисов.
-   **`Client`**: Класс-оркестратор, управляющий жизненным циклом приложения.

### Доменный Слой (Entities & Mappers)

Папка: `src/core/domain/`

-   **Entities (`*.entity.ts`)**: Простые классы, описывающие бизнес-сущности (`UserEntity`, `PunishmentEntity`). Они не содержат логики сохранения, а лишь представляют данные в удобном для работы виде.
-   **Mappers (`*.mapper.ts`)**: Реализуют абстракцию `Mapper`. Их задача — преобразование данных. Например, `UserMapper` получает "плоский" объект от Prisma и, с помощью других мапперов, превращает его в `UserEntity` со вложенными `PunishmentEntity`.

### Обработчики (Handlers)

Папка: `src/handlers/`

Это "менеджеры", которые автоматически находят и инициализируют компоненты:

-   `commandHandler`: Сканирует папку `src/commands`, создает экземпляры команд и регистрирует их в Discord API.
-   `eventHandler`: Сканирует `src/events` и подписывается на события Discord.
-   `serviceHandler`: Сканирует `src/services`, регистрирует их в DI-контейнере и вызывает у них методы `init()` и `shutdown()`.

---

## Жизненный Цикл Приложения

#### Процесс Запуска (`client.start()`)

1.  `commandHandler.loadCommands()`: Загружает все файлы команд.
2.  `databaseService.connect()`: Подключается к БД.
3.  `serviceHandler.loadServices()`: Регистрирует и инициализирует все сервисы.
4.  `eventHandler.loadEvents()`: Регистрирует все обработчики событий.
5.  `client.login()`: Авторизуется в Discord.
6.  После успешного логина срабатывает `ReadyEvent`, который вызывает `commandHandler.registerGuildCommands()` для отправки команд в Discord API.

#### Корректное Завершение (`client.shutdown()`)

Вызывается по сигналу `SIGINT` (`Ctrl+C`).

1.  `client.destroy()`: Отключается от Discord.
2.  `serviceHandler.shutdownServices()`: Вызывает метод `shutdown()` у всех сервисов.
3.  `databaseService.disconnect()`: Закрывает соединение с БД.
4.  `process.exit(0)`: Процесс Node.js успешно завершается.

---

## Рабочий Процесс: Создание Компонентов

### Создание новой Команды

1.  **Создайте файл команды** в `src/commands/myCommand.ts`.

    ```typescript
    // src/commands/myCommand.ts
    import {
        SlashCommandBuilder,
        ChatInputCommandInteraction,
    } from "discord.js";
    import { Command, CommandOptions } from "@/core/abstractions/Command";
    import { ICommandDependencies } from "@/core/abstractions/interface/IDependencies";

    export default class MyCommand extends Command {
        public constructor(deps: ICommandDependencies) {
            const options: CommandOptions = {
                data: new SlashCommandBuilder()
                    .setName("my-command")
                    .setDescription("Описание моей новой команды."),
                cooldown: 5,
            };
            super(deps, options);
        }

        public async run(
            interaction: ChatInputCommandInteraction
        ): Promise<void> {
            await interaction.reply("Команда выполнена!");
        }
    }
    ```

2.  **Экспортируйте команду** в `src/commands/index.ts`.
    `typescript
    // src/commands/index.ts
    export { default as PingCommand } from "./example";
    export { default as DeleteMessageCommand } from "./deleteMessage";
    export { default as MyCommand } from "./myCommand"; // <-- Добавьте эту строку
    `
    Бот автоматически подхватит и зарегистрирует новую команду при следующем запуске.

### Создание нового Сервиса

1.  **Создайте файл сервиса** в `src/services/myService.ts`.

    ```typescript
    // src/services/myService.ts
    import { Service } from "@/core/abstractions/Service";
    import { IServiceDependencies } from "@/core/abstractions/interface/IDependencies";

    export class MyService extends Service {
        constructor(deps: IServiceDependencies) {
            super(deps);
        }

        public doSomething(): string {
            this.logger.info("MyService что-то делает...");
            return "Результат работы сервиса";
        }
    }
    ```

2.  **Экспортируйте сервис** в `src/services/index.ts`.
    ```typescript
    // src/services/index.ts
    export * from "./dev/user";
    export * from "./guild/chat";
    export * from "./myService"; // <-- Добавьте эту строку
    ```
3.  **Зарегистрируйте его в DI-контейнере** `src/core/container.ts`.
    ```typescript
    // ...
    import { MyService } from "@/services/myService";
    // ...
    container.register({
        // ...
        // Feature Services
        myService: asClass(MyService).singleton(), // <-- Добавьте эту строку
        // ...
    });
    ```
4.  **Используйте в команде**, объявив его как зависимость.

    ```typescript
    // ... в файле команды
    import { MyService } from "@/services/myService";

    interface IMyCommandDependencies extends ICommandDependencies {
        myService: MyService;
    }

    export default class MyCommand extends Command {
        private readonly myService: MyService;

        public constructor(deps: IMyCommandDependencies) {
            // ...
            super(deps, options);
            this.myService = deps.myService; // DI в действии!
        }

        public async run(
            interaction: ChatInputCommandInteraction
        ): Promise<void> {
            const result = this.myService.doSomething();
            await interaction.reply(result);
        }
    }
    ```

### Создание нового События

Процесс аналогичен созданию команды: создайте класс, унаследованный от `Event`, и экспортируйте его в `src/events/index.ts`.

### Работа с Базой Данных (Полный Цикл)

1.  **Схема**: Опишите модель в `prisma/schema.prisma`.
2.  **Миграция**: Примените изменения командой `npx prisma migrate dev`.
3.  **Entity**: Создайте класс сущности в `src/core/domain/entities/`.
4.  **Mapper**: Создайте класс маппера в `src/core/domain/mappers/`.
5.  **Repository**: Создайте класс репозитория в `src/repository/`, который будет использовать PrismaClient и маппер для выполнения запросов.
6.  **DI**: Зарегистрируйте маппер и репозиторий в `src/core/container.ts`.
7.  **Service**: Создайте сервис, который зависит от нового репозитория и инкапсулирует бизнес-логику.
8.  **Command**: Используйте новый сервис в команде для взаимодействия с пользователем.
```
