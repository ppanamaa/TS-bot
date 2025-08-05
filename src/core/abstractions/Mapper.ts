import { IMapper } from "./interface/IMapper";

/**
 * @class Mapper
 * @abstract
 * @implements IMapper
 * @description Абстрактный базовый класс для всех мапперов в приложении.
 * Определяет контракт для преобразования данных между доменными сущностями
 * и форматами, используемыми для хранения данных (например, Prisma).
 *
 * @template TDomain - Тип доменной сущности (например, UserEntity).
 * @template TRaw - Тип "сырых" данных, получаемых из источника (например, результат Prisma-запроса).
 * @template TPersistence - Тип данных, используемый для операций создания/обновления в источнике (например, Prisma.UserCreateInput).
 */
export abstract class Mapper<TDomain, TRaw, TPersistence>
    implements IMapper<TDomain, TRaw, TPersistence>
{
    /**
     * Преобразует сырые данные из источника (например, Prisma) в доменную сущность.
     * @abstract
     * @param {TRaw} raw - Объект с сырыми данными.
     * @returns {TDomain} Экземпляр доменной сущности.
     */
    public abstract toDomain(raw: TRaw): TDomain;

    /**
     * Преобразует доменную сущность в формат, пригодный для сохранения в источнике данных.
     * @abstract
     * @param {TDomain} domain - Экземпляр доменной сущности.
     * @returns {TPersistence} Объект для операций создания/обновления.
     */
    public abstract toPersistence(domain: TDomain): TPersistence;
}
