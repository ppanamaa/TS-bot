/**
 * @interface IMapper
 * @description Определяет публичный контракт для мапперов.
 * Мапперы отвечают за преобразование данных между доменными сущностями и
 * форматами для хранения (например, моделями Prisma).
 *
 * @template TDomain - Тип доменной сущности.
 * @template TRaw - Тип "сырых" данных из источника.
 * @template TPersistence - Тип данных для операций создания/обновления.
 */
export interface IMapper<TDomain, TRaw, TPersistence> {
    /**
     * Преобразует сырые данные из источника в доменную сущность.
     * @param {TRaw} raw - Объект с сырыми данными.
     * @returns {TDomain} Экземпляр доменной сущности.
     */
    toDomain(raw: TRaw): TDomain;

    /**
     * Преобразует доменную сущность в формат для сохранения в источнике.
     * @param {TDomain} domain - Экземпляр доменной сущности.
     * @returns {TPersistence} Объект для операций сохранения.
     */
    toPersistence(domain: TDomain): TPersistence;
}
