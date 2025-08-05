
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserActivity
 * 
 */
export type UserActivity = $Result.DefaultSelection<Prisma.$UserActivityPayload>
/**
 * Model Punishment
 * 
 */
export type Punishment = $Result.DefaultSelection<Prisma.$PunishmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PunishmentType: {
  WARN: 'WARN',
  MUTE: 'MUTE',
  KICK: 'KICK',
  BAN: 'BAN'
};

export type PunishmentType = (typeof PunishmentType)[keyof typeof PunishmentType]

}

export type PunishmentType = $Enums.PunishmentType

export const PunishmentType: typeof $Enums.PunishmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userActivity`: Exposes CRUD operations for the **UserActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActivities
    * const userActivities = await prisma.userActivity.findMany()
    * ```
    */
  get userActivity(): Prisma.UserActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.punishment`: Exposes CRUD operations for the **Punishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Punishments
    * const punishments = await prisma.punishment.findMany()
    * ```
    */
  get punishment(): Prisma.PunishmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserActivity: 'UserActivity',
    Punishment: 'Punishment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userActivity" | "punishment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserActivity: {
        payload: Prisma.$UserActivityPayload<ExtArgs>
        fields: Prisma.UserActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findFirst: {
            args: Prisma.UserActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findMany: {
            args: Prisma.UserActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          create: {
            args: Prisma.UserActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          createMany: {
            args: Prisma.UserActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          delete: {
            args: Prisma.UserActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          update: {
            args: Prisma.UserActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          deleteMany: {
            args: Prisma.UserActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          upsert: {
            args: Prisma.UserActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          aggregate: {
            args: Prisma.UserActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActivity>
          }
          groupBy: {
            args: Prisma.UserActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActivityCountArgs<ExtArgs>
            result: $Utils.Optional<UserActivityCountAggregateOutputType> | number
          }
        }
      }
      Punishment: {
        payload: Prisma.$PunishmentPayload<ExtArgs>
        fields: Prisma.PunishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PunishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PunishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          findFirst: {
            args: Prisma.PunishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PunishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          findMany: {
            args: Prisma.PunishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>[]
          }
          create: {
            args: Prisma.PunishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          createMany: {
            args: Prisma.PunishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PunishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>[]
          }
          delete: {
            args: Prisma.PunishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          update: {
            args: Prisma.PunishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          deleteMany: {
            args: Prisma.PunishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PunishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PunishmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>[]
          }
          upsert: {
            args: Prisma.PunishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunishmentPayload>
          }
          aggregate: {
            args: Prisma.PunishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePunishment>
          }
          groupBy: {
            args: Prisma.PunishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PunishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PunishmentCountArgs<ExtArgs>
            result: $Utils.Optional<PunishmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userActivity?: UserActivityOmit
    punishment?: PunishmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activity: number
    punishmentsReceived: number
    punishmentsIssued: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | UserCountOutputTypeCountActivityArgs
    punishmentsReceived?: boolean | UserCountOutputTypeCountPunishmentsReceivedArgs
    punishmentsIssued?: boolean | UserCountOutputTypeCountPunishmentsIssuedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPunishmentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PunishmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPunishmentsIssuedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PunishmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    discordId: number
    tag: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    discordId?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    discordId?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    discordId?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    discordId: string
    tag: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activity?: boolean | User$activityArgs<ExtArgs>
    punishmentsReceived?: boolean | User$punishmentsReceivedArgs<ExtArgs>
    punishmentsIssued?: boolean | User$punishmentsIssuedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    discordId?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "tag" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | User$activityArgs<ExtArgs>
    punishmentsReceived?: boolean | User$punishmentsReceivedArgs<ExtArgs>
    punishmentsIssued?: boolean | User$punishmentsIssuedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activity: Prisma.$UserActivityPayload<ExtArgs>[]
      punishmentsReceived: Prisma.$PunishmentPayload<ExtArgs>[]
      punishmentsIssued: Prisma.$PunishmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      tag: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends User$activityArgs<ExtArgs> = {}>(args?: Subset<T, User$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    punishmentsReceived<T extends User$punishmentsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$punishmentsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    punishmentsIssued<T extends User$punishmentsIssuedArgs<ExtArgs> = {}>(args?: Subset<T, User$punishmentsIssuedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly discordId: FieldRef<"User", 'String'>
    readonly tag: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.activity
   */
  export type User$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    cursor?: UserActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * User.punishmentsReceived
   */
  export type User$punishmentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    where?: PunishmentWhereInput
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    cursor?: PunishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PunishmentScalarFieldEnum | PunishmentScalarFieldEnum[]
  }

  /**
   * User.punishmentsIssued
   */
  export type User$punishmentsIssuedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    where?: PunishmentWhereInput
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    cursor?: PunishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PunishmentScalarFieldEnum | PunishmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserActivity
   */

  export type AggregateUserActivity = {
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  export type UserActivityAvgAggregateOutputType = {
    messageCount: number | null
    voiceTimeInSeconds: number | null
  }

  export type UserActivitySumAggregateOutputType = {
    messageCount: number | null
    voiceTimeInSeconds: number | null
  }

  export type UserActivityMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    messageCount: number | null
    voiceTimeInSeconds: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserActivityMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    messageCount: number | null
    voiceTimeInSeconds: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserActivityCountAggregateOutputType = {
    id: number
    guildId: number
    messageCount: number
    voiceTimeInSeconds: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserActivityAvgAggregateInputType = {
    messageCount?: true
    voiceTimeInSeconds?: true
  }

  export type UserActivitySumAggregateInputType = {
    messageCount?: true
    voiceTimeInSeconds?: true
  }

  export type UserActivityMinAggregateInputType = {
    id?: true
    guildId?: true
    messageCount?: true
    voiceTimeInSeconds?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserActivityMaxAggregateInputType = {
    id?: true
    guildId?: true
    messageCount?: true
    voiceTimeInSeconds?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserActivityCountAggregateInputType = {
    id?: true
    guildId?: true
    messageCount?: true
    voiceTimeInSeconds?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivity to aggregate.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActivities
    **/
    _count?: true | UserActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActivityMaxAggregateInputType
  }

  export type GetUserActivityAggregateType<T extends UserActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActivity[P]>
      : GetScalarType<T[P], AggregateUserActivity[P]>
  }




  export type UserActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithAggregationInput | UserActivityOrderByWithAggregationInput[]
    by: UserActivityScalarFieldEnum[] | UserActivityScalarFieldEnum
    having?: UserActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActivityCountAggregateInputType | true
    _avg?: UserActivityAvgAggregateInputType
    _sum?: UserActivitySumAggregateInputType
    _min?: UserActivityMinAggregateInputType
    _max?: UserActivityMaxAggregateInputType
  }

  export type UserActivityGroupByOutputType = {
    id: string
    guildId: string
    messageCount: number
    voiceTimeInSeconds: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  type GetUserActivityGroupByPayload<T extends UserActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
            : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
        }
      >
    >


  export type UserActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageCount?: boolean
    voiceTimeInSeconds?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageCount?: boolean
    voiceTimeInSeconds?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageCount?: boolean
    voiceTimeInSeconds?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectScalar = {
    id?: boolean
    guildId?: boolean
    messageCount?: boolean
    voiceTimeInSeconds?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "messageCount" | "voiceTimeInSeconds" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userActivity"]>
  export type UserActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      messageCount: number
      voiceTimeInSeconds: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userActivity"]>
    composites: {}
  }

  type UserActivityGetPayload<S extends boolean | null | undefined | UserActivityDefaultArgs> = $Result.GetResult<Prisma.$UserActivityPayload, S>

  type UserActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActivityCountAggregateInputType | true
    }

  export interface UserActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserActivity'], meta: { name: 'UserActivity' } }
    /**
     * Find zero or one UserActivity that matches the filter.
     * @param {UserActivityFindUniqueArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActivityFindUniqueArgs>(args: SelectSubset<T, UserActivityFindUniqueArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserActivityFindUniqueOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActivityFindFirstArgs>(args?: SelectSubset<T, UserActivityFindFirstArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActivities
     * const userActivities = await prisma.userActivity.findMany()
     * 
     * // Get first 10 UserActivities
     * const userActivities = await prisma.userActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserActivityFindManyArgs>(args?: SelectSubset<T, UserActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserActivity.
     * @param {UserActivityCreateArgs} args - Arguments to create a UserActivity.
     * @example
     * // Create one UserActivity
     * const UserActivity = await prisma.userActivity.create({
     *   data: {
     *     // ... data to create a UserActivity
     *   }
     * })
     * 
     */
    create<T extends UserActivityCreateArgs>(args: SelectSubset<T, UserActivityCreateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActivities.
     * @param {UserActivityCreateManyArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActivityCreateManyArgs>(args?: SelectSubset<T, UserActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserActivities and returns the data saved in the database.
     * @param {UserActivityCreateManyAndReturnArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserActivities and only return the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserActivity.
     * @param {UserActivityDeleteArgs} args - Arguments to delete one UserActivity.
     * @example
     * // Delete one UserActivity
     * const UserActivity = await prisma.userActivity.delete({
     *   where: {
     *     // ... filter to delete one UserActivity
     *   }
     * })
     * 
     */
    delete<T extends UserActivityDeleteArgs>(args: SelectSubset<T, UserActivityDeleteArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserActivity.
     * @param {UserActivityUpdateArgs} args - Arguments to update one UserActivity.
     * @example
     * // Update one UserActivity
     * const userActivity = await prisma.userActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActivityUpdateArgs>(args: SelectSubset<T, UserActivityUpdateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActivities.
     * @param {UserActivityDeleteManyArgs} args - Arguments to filter UserActivities to delete.
     * @example
     * // Delete a few UserActivities
     * const { count } = await prisma.userActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActivityDeleteManyArgs>(args?: SelectSubset<T, UserActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActivityUpdateManyArgs>(args: SelectSubset<T, UserActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities and returns the data updated in the database.
     * @param {UserActivityUpdateManyAndReturnArgs} args - Arguments to update many UserActivities.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserActivities and only return the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserActivity.
     * @param {UserActivityUpsertArgs} args - Arguments to update or create a UserActivity.
     * @example
     * // Update or create a UserActivity
     * const userActivity = await prisma.userActivity.upsert({
     *   create: {
     *     // ... data to create a UserActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActivity we want to update
     *   }
     * })
     */
    upsert<T extends UserActivityUpsertArgs>(args: SelectSubset<T, UserActivityUpsertArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityCountArgs} args - Arguments to filter UserActivities to count.
     * @example
     * // Count the number of UserActivities
     * const count = await prisma.userActivity.count({
     *   where: {
     *     // ... the filter for the UserActivities we want to count
     *   }
     * })
    **/
    count<T extends UserActivityCountArgs>(
      args?: Subset<T, UserActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserActivityAggregateArgs>(args: Subset<T, UserActivityAggregateArgs>): Prisma.PrismaPromise<GetUserActivityAggregateType<T>>

    /**
     * Group by UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActivityGroupByArgs['orderBy'] }
        : { orderBy?: UserActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserActivity model
   */
  readonly fields: UserActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserActivity model
   */
  interface UserActivityFieldRefs {
    readonly id: FieldRef<"UserActivity", 'String'>
    readonly guildId: FieldRef<"UserActivity", 'String'>
    readonly messageCount: FieldRef<"UserActivity", 'Int'>
    readonly voiceTimeInSeconds: FieldRef<"UserActivity", 'Int'>
    readonly userId: FieldRef<"UserActivity", 'String'>
    readonly createdAt: FieldRef<"UserActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"UserActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserActivity findUnique
   */
  export type UserActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findUniqueOrThrow
   */
  export type UserActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findFirst
   */
  export type UserActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findFirstOrThrow
   */
  export type UserActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findMany
   */
  export type UserActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivities to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity create
   */
  export type UserActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserActivity.
     */
    data: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
  }

  /**
   * UserActivity createMany
   */
  export type UserActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserActivity createManyAndReturn
   */
  export type UserActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActivity update
   */
  export type UserActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserActivity.
     */
    data: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
    /**
     * Choose, which UserActivity to update.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity updateMany
   */
  export type UserActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActivities.
     */
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserActivities to update
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to update.
     */
    limit?: number
  }

  /**
   * UserActivity updateManyAndReturn
   */
  export type UserActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * The data used to update UserActivities.
     */
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserActivities to update
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActivity upsert
   */
  export type UserActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserActivity to update in case it exists.
     */
    where: UserActivityWhereUniqueInput
    /**
     * In case the UserActivity found by the `where` argument doesn't exist, create a new UserActivity with this data.
     */
    create: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
    /**
     * In case the UserActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
  }

  /**
   * UserActivity delete
   */
  export type UserActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter which UserActivity to delete.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity deleteMany
   */
  export type UserActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivities to delete
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to delete.
     */
    limit?: number
  }

  /**
   * UserActivity without action
   */
  export type UserActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
  }


  /**
   * Model Punishment
   */

  export type AggregatePunishment = {
    _count: PunishmentCountAggregateOutputType | null
    _avg: PunishmentAvgAggregateOutputType | null
    _sum: PunishmentSumAggregateOutputType | null
    _min: PunishmentMinAggregateOutputType | null
    _max: PunishmentMaxAggregateOutputType | null
  }

  export type PunishmentAvgAggregateOutputType = {
    caseId: number | null
  }

  export type PunishmentSumAggregateOutputType = {
    caseId: number | null
  }

  export type PunishmentMinAggregateOutputType = {
    id: string | null
    caseId: number | null
    guildId: string | null
    type: $Enums.PunishmentType | null
    reason: string | null
    expiresAt: Date | null
    active: boolean | null
    targetId: string | null
    moderatorId: string | null
    createdAt: Date | null
  }

  export type PunishmentMaxAggregateOutputType = {
    id: string | null
    caseId: number | null
    guildId: string | null
    type: $Enums.PunishmentType | null
    reason: string | null
    expiresAt: Date | null
    active: boolean | null
    targetId: string | null
    moderatorId: string | null
    createdAt: Date | null
  }

  export type PunishmentCountAggregateOutputType = {
    id: number
    caseId: number
    guildId: number
    type: number
    reason: number
    expiresAt: number
    active: number
    targetId: number
    moderatorId: number
    createdAt: number
    _all: number
  }


  export type PunishmentAvgAggregateInputType = {
    caseId?: true
  }

  export type PunishmentSumAggregateInputType = {
    caseId?: true
  }

  export type PunishmentMinAggregateInputType = {
    id?: true
    caseId?: true
    guildId?: true
    type?: true
    reason?: true
    expiresAt?: true
    active?: true
    targetId?: true
    moderatorId?: true
    createdAt?: true
  }

  export type PunishmentMaxAggregateInputType = {
    id?: true
    caseId?: true
    guildId?: true
    type?: true
    reason?: true
    expiresAt?: true
    active?: true
    targetId?: true
    moderatorId?: true
    createdAt?: true
  }

  export type PunishmentCountAggregateInputType = {
    id?: true
    caseId?: true
    guildId?: true
    type?: true
    reason?: true
    expiresAt?: true
    active?: true
    targetId?: true
    moderatorId?: true
    createdAt?: true
    _all?: true
  }

  export type PunishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Punishment to aggregate.
     */
    where?: PunishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punishments to fetch.
     */
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PunishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Punishments
    **/
    _count?: true | PunishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PunishmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PunishmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PunishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PunishmentMaxAggregateInputType
  }

  export type GetPunishmentAggregateType<T extends PunishmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePunishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePunishment[P]>
      : GetScalarType<T[P], AggregatePunishment[P]>
  }




  export type PunishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PunishmentWhereInput
    orderBy?: PunishmentOrderByWithAggregationInput | PunishmentOrderByWithAggregationInput[]
    by: PunishmentScalarFieldEnum[] | PunishmentScalarFieldEnum
    having?: PunishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PunishmentCountAggregateInputType | true
    _avg?: PunishmentAvgAggregateInputType
    _sum?: PunishmentSumAggregateInputType
    _min?: PunishmentMinAggregateInputType
    _max?: PunishmentMaxAggregateInputType
  }

  export type PunishmentGroupByOutputType = {
    id: string
    caseId: number
    guildId: string
    type: $Enums.PunishmentType
    reason: string | null
    expiresAt: Date | null
    active: boolean
    targetId: string
    moderatorId: string
    createdAt: Date
    _count: PunishmentCountAggregateOutputType | null
    _avg: PunishmentAvgAggregateOutputType | null
    _sum: PunishmentSumAggregateOutputType | null
    _min: PunishmentMinAggregateOutputType | null
    _max: PunishmentMaxAggregateOutputType | null
  }

  type GetPunishmentGroupByPayload<T extends PunishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PunishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PunishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PunishmentGroupByOutputType[P]>
            : GetScalarType<T[P], PunishmentGroupByOutputType[P]>
        }
      >
    >


  export type PunishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    guildId?: boolean
    type?: boolean
    reason?: boolean
    expiresAt?: boolean
    active?: boolean
    targetId?: boolean
    moderatorId?: boolean
    createdAt?: boolean
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["punishment"]>

  export type PunishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    guildId?: boolean
    type?: boolean
    reason?: boolean
    expiresAt?: boolean
    active?: boolean
    targetId?: boolean
    moderatorId?: boolean
    createdAt?: boolean
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["punishment"]>

  export type PunishmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    guildId?: boolean
    type?: boolean
    reason?: boolean
    expiresAt?: boolean
    active?: boolean
    targetId?: boolean
    moderatorId?: boolean
    createdAt?: boolean
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["punishment"]>

  export type PunishmentSelectScalar = {
    id?: boolean
    caseId?: boolean
    guildId?: boolean
    type?: boolean
    reason?: boolean
    expiresAt?: boolean
    active?: boolean
    targetId?: boolean
    moderatorId?: boolean
    createdAt?: boolean
  }

  export type PunishmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseId" | "guildId" | "type" | "reason" | "expiresAt" | "active" | "targetId" | "moderatorId" | "createdAt", ExtArgs["result"]["punishment"]>
  export type PunishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PunishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PunishmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    target?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PunishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Punishment"
    objects: {
      target: Prisma.$UserPayload<ExtArgs>
      moderator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caseId: number
      guildId: string
      type: $Enums.PunishmentType
      reason: string | null
      expiresAt: Date | null
      active: boolean
      targetId: string
      moderatorId: string
      createdAt: Date
    }, ExtArgs["result"]["punishment"]>
    composites: {}
  }

  type PunishmentGetPayload<S extends boolean | null | undefined | PunishmentDefaultArgs> = $Result.GetResult<Prisma.$PunishmentPayload, S>

  type PunishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PunishmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PunishmentCountAggregateInputType | true
    }

  export interface PunishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Punishment'], meta: { name: 'Punishment' } }
    /**
     * Find zero or one Punishment that matches the filter.
     * @param {PunishmentFindUniqueArgs} args - Arguments to find a Punishment
     * @example
     * // Get one Punishment
     * const punishment = await prisma.punishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PunishmentFindUniqueArgs>(args: SelectSubset<T, PunishmentFindUniqueArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Punishment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PunishmentFindUniqueOrThrowArgs} args - Arguments to find a Punishment
     * @example
     * // Get one Punishment
     * const punishment = await prisma.punishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PunishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PunishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Punishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentFindFirstArgs} args - Arguments to find a Punishment
     * @example
     * // Get one Punishment
     * const punishment = await prisma.punishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PunishmentFindFirstArgs>(args?: SelectSubset<T, PunishmentFindFirstArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Punishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentFindFirstOrThrowArgs} args - Arguments to find a Punishment
     * @example
     * // Get one Punishment
     * const punishment = await prisma.punishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PunishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PunishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Punishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Punishments
     * const punishments = await prisma.punishment.findMany()
     * 
     * // Get first 10 Punishments
     * const punishments = await prisma.punishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const punishmentWithIdOnly = await prisma.punishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PunishmentFindManyArgs>(args?: SelectSubset<T, PunishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Punishment.
     * @param {PunishmentCreateArgs} args - Arguments to create a Punishment.
     * @example
     * // Create one Punishment
     * const Punishment = await prisma.punishment.create({
     *   data: {
     *     // ... data to create a Punishment
     *   }
     * })
     * 
     */
    create<T extends PunishmentCreateArgs>(args: SelectSubset<T, PunishmentCreateArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Punishments.
     * @param {PunishmentCreateManyArgs} args - Arguments to create many Punishments.
     * @example
     * // Create many Punishments
     * const punishment = await prisma.punishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PunishmentCreateManyArgs>(args?: SelectSubset<T, PunishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Punishments and returns the data saved in the database.
     * @param {PunishmentCreateManyAndReturnArgs} args - Arguments to create many Punishments.
     * @example
     * // Create many Punishments
     * const punishment = await prisma.punishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Punishments and only return the `id`
     * const punishmentWithIdOnly = await prisma.punishment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PunishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PunishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Punishment.
     * @param {PunishmentDeleteArgs} args - Arguments to delete one Punishment.
     * @example
     * // Delete one Punishment
     * const Punishment = await prisma.punishment.delete({
     *   where: {
     *     // ... filter to delete one Punishment
     *   }
     * })
     * 
     */
    delete<T extends PunishmentDeleteArgs>(args: SelectSubset<T, PunishmentDeleteArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Punishment.
     * @param {PunishmentUpdateArgs} args - Arguments to update one Punishment.
     * @example
     * // Update one Punishment
     * const punishment = await prisma.punishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PunishmentUpdateArgs>(args: SelectSubset<T, PunishmentUpdateArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Punishments.
     * @param {PunishmentDeleteManyArgs} args - Arguments to filter Punishments to delete.
     * @example
     * // Delete a few Punishments
     * const { count } = await prisma.punishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PunishmentDeleteManyArgs>(args?: SelectSubset<T, PunishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Punishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Punishments
     * const punishment = await prisma.punishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PunishmentUpdateManyArgs>(args: SelectSubset<T, PunishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Punishments and returns the data updated in the database.
     * @param {PunishmentUpdateManyAndReturnArgs} args - Arguments to update many Punishments.
     * @example
     * // Update many Punishments
     * const punishment = await prisma.punishment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Punishments and only return the `id`
     * const punishmentWithIdOnly = await prisma.punishment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PunishmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PunishmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Punishment.
     * @param {PunishmentUpsertArgs} args - Arguments to update or create a Punishment.
     * @example
     * // Update or create a Punishment
     * const punishment = await prisma.punishment.upsert({
     *   create: {
     *     // ... data to create a Punishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Punishment we want to update
     *   }
     * })
     */
    upsert<T extends PunishmentUpsertArgs>(args: SelectSubset<T, PunishmentUpsertArgs<ExtArgs>>): Prisma__PunishmentClient<$Result.GetResult<Prisma.$PunishmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Punishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentCountArgs} args - Arguments to filter Punishments to count.
     * @example
     * // Count the number of Punishments
     * const count = await prisma.punishment.count({
     *   where: {
     *     // ... the filter for the Punishments we want to count
     *   }
     * })
    **/
    count<T extends PunishmentCountArgs>(
      args?: Subset<T, PunishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PunishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Punishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PunishmentAggregateArgs>(args: Subset<T, PunishmentAggregateArgs>): Prisma.PrismaPromise<GetPunishmentAggregateType<T>>

    /**
     * Group by Punishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunishmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PunishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PunishmentGroupByArgs['orderBy'] }
        : { orderBy?: PunishmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PunishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPunishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Punishment model
   */
  readonly fields: PunishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Punishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PunishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    target<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moderator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Punishment model
   */
  interface PunishmentFieldRefs {
    readonly id: FieldRef<"Punishment", 'String'>
    readonly caseId: FieldRef<"Punishment", 'Int'>
    readonly guildId: FieldRef<"Punishment", 'String'>
    readonly type: FieldRef<"Punishment", 'PunishmentType'>
    readonly reason: FieldRef<"Punishment", 'String'>
    readonly expiresAt: FieldRef<"Punishment", 'DateTime'>
    readonly active: FieldRef<"Punishment", 'Boolean'>
    readonly targetId: FieldRef<"Punishment", 'String'>
    readonly moderatorId: FieldRef<"Punishment", 'String'>
    readonly createdAt: FieldRef<"Punishment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Punishment findUnique
   */
  export type PunishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter, which Punishment to fetch.
     */
    where: PunishmentWhereUniqueInput
  }

  /**
   * Punishment findUniqueOrThrow
   */
  export type PunishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter, which Punishment to fetch.
     */
    where: PunishmentWhereUniqueInput
  }

  /**
   * Punishment findFirst
   */
  export type PunishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter, which Punishment to fetch.
     */
    where?: PunishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punishments to fetch.
     */
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Punishments.
     */
    cursor?: PunishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Punishments.
     */
    distinct?: PunishmentScalarFieldEnum | PunishmentScalarFieldEnum[]
  }

  /**
   * Punishment findFirstOrThrow
   */
  export type PunishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter, which Punishment to fetch.
     */
    where?: PunishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punishments to fetch.
     */
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Punishments.
     */
    cursor?: PunishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Punishments.
     */
    distinct?: PunishmentScalarFieldEnum | PunishmentScalarFieldEnum[]
  }

  /**
   * Punishment findMany
   */
  export type PunishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter, which Punishments to fetch.
     */
    where?: PunishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punishments to fetch.
     */
    orderBy?: PunishmentOrderByWithRelationInput | PunishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Punishments.
     */
    cursor?: PunishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punishments.
     */
    skip?: number
    distinct?: PunishmentScalarFieldEnum | PunishmentScalarFieldEnum[]
  }

  /**
   * Punishment create
   */
  export type PunishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Punishment.
     */
    data: XOR<PunishmentCreateInput, PunishmentUncheckedCreateInput>
  }

  /**
   * Punishment createMany
   */
  export type PunishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Punishments.
     */
    data: PunishmentCreateManyInput | PunishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Punishment createManyAndReturn
   */
  export type PunishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * The data used to create many Punishments.
     */
    data: PunishmentCreateManyInput | PunishmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Punishment update
   */
  export type PunishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Punishment.
     */
    data: XOR<PunishmentUpdateInput, PunishmentUncheckedUpdateInput>
    /**
     * Choose, which Punishment to update.
     */
    where: PunishmentWhereUniqueInput
  }

  /**
   * Punishment updateMany
   */
  export type PunishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Punishments.
     */
    data: XOR<PunishmentUpdateManyMutationInput, PunishmentUncheckedUpdateManyInput>
    /**
     * Filter which Punishments to update
     */
    where?: PunishmentWhereInput
    /**
     * Limit how many Punishments to update.
     */
    limit?: number
  }

  /**
   * Punishment updateManyAndReturn
   */
  export type PunishmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * The data used to update Punishments.
     */
    data: XOR<PunishmentUpdateManyMutationInput, PunishmentUncheckedUpdateManyInput>
    /**
     * Filter which Punishments to update
     */
    where?: PunishmentWhereInput
    /**
     * Limit how many Punishments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Punishment upsert
   */
  export type PunishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Punishment to update in case it exists.
     */
    where: PunishmentWhereUniqueInput
    /**
     * In case the Punishment found by the `where` argument doesn't exist, create a new Punishment with this data.
     */
    create: XOR<PunishmentCreateInput, PunishmentUncheckedCreateInput>
    /**
     * In case the Punishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PunishmentUpdateInput, PunishmentUncheckedUpdateInput>
  }

  /**
   * Punishment delete
   */
  export type PunishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
    /**
     * Filter which Punishment to delete.
     */
    where: PunishmentWhereUniqueInput
  }

  /**
   * Punishment deleteMany
   */
  export type PunishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Punishments to delete
     */
    where?: PunishmentWhereInput
    /**
     * Limit how many Punishments to delete.
     */
    limit?: number
  }

  /**
   * Punishment without action
   */
  export type PunishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punishment
     */
    select?: PunishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punishment
     */
    omit?: PunishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PunishmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    tag: 'tag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserActivityScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    messageCount: 'messageCount',
    voiceTimeInSeconds: 'voiceTimeInSeconds',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserActivityScalarFieldEnum = (typeof UserActivityScalarFieldEnum)[keyof typeof UserActivityScalarFieldEnum]


  export const PunishmentScalarFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    guildId: 'guildId',
    type: 'type',
    reason: 'reason',
    expiresAt: 'expiresAt',
    active: 'active',
    targetId: 'targetId',
    moderatorId: 'moderatorId',
    createdAt: 'createdAt'
  };

  export type PunishmentScalarFieldEnum = (typeof PunishmentScalarFieldEnum)[keyof typeof PunishmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PunishmentType'
   */
  export type EnumPunishmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PunishmentType'>
    


  /**
   * Reference to a field of type 'PunishmentType[]'
   */
  export type ListEnumPunishmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PunishmentType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    discordId?: StringFilter<"User"> | string
    tag?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activity?: UserActivityListRelationFilter
    punishmentsReceived?: PunishmentListRelationFilter
    punishmentsIssued?: PunishmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activity?: UserActivityOrderByRelationAggregateInput
    punishmentsReceived?: PunishmentOrderByRelationAggregateInput
    punishmentsIssued?: PunishmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tag?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activity?: UserActivityListRelationFilter
    punishmentsReceived?: PunishmentListRelationFilter
    punishmentsIssued?: PunishmentListRelationFilter
  }, "id" | "discordId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    discordId?: StringWithAggregatesFilter<"User"> | string
    tag?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserActivityWhereInput = {
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    id?: StringFilter<"UserActivity"> | string
    guildId?: StringFilter<"UserActivity"> | string
    messageCount?: IntFilter<"UserActivity"> | number
    voiceTimeInSeconds?: IntFilter<"UserActivity"> | number
    userId?: StringFilter<"UserActivity"> | string
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserActivityOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_guildId?: UserActivityUserIdGuildIdCompoundUniqueInput
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    guildId?: StringFilter<"UserActivity"> | string
    messageCount?: IntFilter<"UserActivity"> | number
    voiceTimeInSeconds?: IntFilter<"UserActivity"> | number
    userId?: StringFilter<"UserActivity"> | string
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_guildId">

  export type UserActivityOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserActivityCountOrderByAggregateInput
    _avg?: UserActivityAvgOrderByAggregateInput
    _max?: UserActivityMaxOrderByAggregateInput
    _min?: UserActivityMinOrderByAggregateInput
    _sum?: UserActivitySumOrderByAggregateInput
  }

  export type UserActivityScalarWhereWithAggregatesInput = {
    AND?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    OR?: UserActivityScalarWhereWithAggregatesInput[]
    NOT?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserActivity"> | string
    guildId?: StringWithAggregatesFilter<"UserActivity"> | string
    messageCount?: IntWithAggregatesFilter<"UserActivity"> | number
    voiceTimeInSeconds?: IntWithAggregatesFilter<"UserActivity"> | number
    userId?: StringWithAggregatesFilter<"UserActivity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserActivity"> | Date | string
  }

  export type PunishmentWhereInput = {
    AND?: PunishmentWhereInput | PunishmentWhereInput[]
    OR?: PunishmentWhereInput[]
    NOT?: PunishmentWhereInput | PunishmentWhereInput[]
    id?: StringFilter<"Punishment"> | string
    caseId?: IntFilter<"Punishment"> | number
    guildId?: StringFilter<"Punishment"> | string
    type?: EnumPunishmentTypeFilter<"Punishment"> | $Enums.PunishmentType
    reason?: StringNullableFilter<"Punishment"> | string | null
    expiresAt?: DateTimeNullableFilter<"Punishment"> | Date | string | null
    active?: BoolFilter<"Punishment"> | boolean
    targetId?: StringFilter<"Punishment"> | string
    moderatorId?: StringFilter<"Punishment"> | string
    createdAt?: DateTimeFilter<"Punishment"> | Date | string
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
    moderator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PunishmentOrderByWithRelationInput = {
    id?: SortOrder
    caseId?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    active?: SortOrder
    targetId?: SortOrder
    moderatorId?: SortOrder
    createdAt?: SortOrder
    target?: UserOrderByWithRelationInput
    moderator?: UserOrderByWithRelationInput
  }

  export type PunishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    caseId?: number
    AND?: PunishmentWhereInput | PunishmentWhereInput[]
    OR?: PunishmentWhereInput[]
    NOT?: PunishmentWhereInput | PunishmentWhereInput[]
    guildId?: StringFilter<"Punishment"> | string
    type?: EnumPunishmentTypeFilter<"Punishment"> | $Enums.PunishmentType
    reason?: StringNullableFilter<"Punishment"> | string | null
    expiresAt?: DateTimeNullableFilter<"Punishment"> | Date | string | null
    active?: BoolFilter<"Punishment"> | boolean
    targetId?: StringFilter<"Punishment"> | string
    moderatorId?: StringFilter<"Punishment"> | string
    createdAt?: DateTimeFilter<"Punishment"> | Date | string
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
    moderator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "caseId">

  export type PunishmentOrderByWithAggregationInput = {
    id?: SortOrder
    caseId?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    active?: SortOrder
    targetId?: SortOrder
    moderatorId?: SortOrder
    createdAt?: SortOrder
    _count?: PunishmentCountOrderByAggregateInput
    _avg?: PunishmentAvgOrderByAggregateInput
    _max?: PunishmentMaxOrderByAggregateInput
    _min?: PunishmentMinOrderByAggregateInput
    _sum?: PunishmentSumOrderByAggregateInput
  }

  export type PunishmentScalarWhereWithAggregatesInput = {
    AND?: PunishmentScalarWhereWithAggregatesInput | PunishmentScalarWhereWithAggregatesInput[]
    OR?: PunishmentScalarWhereWithAggregatesInput[]
    NOT?: PunishmentScalarWhereWithAggregatesInput | PunishmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Punishment"> | string
    caseId?: IntWithAggregatesFilter<"Punishment"> | number
    guildId?: StringWithAggregatesFilter<"Punishment"> | string
    type?: EnumPunishmentTypeWithAggregatesFilter<"Punishment"> | $Enums.PunishmentType
    reason?: StringNullableWithAggregatesFilter<"Punishment"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Punishment"> | Date | string | null
    active?: BoolWithAggregatesFilter<"Punishment"> | boolean
    targetId?: StringWithAggregatesFilter<"Punishment"> | string
    moderatorId?: StringWithAggregatesFilter<"Punishment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Punishment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityCreateNestedManyWithoutUserInput
    punishmentsReceived?: PunishmentCreateNestedManyWithoutTargetInput
    punishmentsIssued?: PunishmentCreateNestedManyWithoutModeratorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityUncheckedCreateNestedManyWithoutUserInput
    punishmentsReceived?: PunishmentUncheckedCreateNestedManyWithoutTargetInput
    punishmentsIssued?: PunishmentUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUpdateManyWithoutUserNestedInput
    punishmentsReceived?: PunishmentUpdateManyWithoutTargetNestedInput
    punishmentsIssued?: PunishmentUpdateManyWithoutModeratorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
    punishmentsReceived?: PunishmentUncheckedUpdateManyWithoutTargetNestedInput
    punishmentsIssued?: PunishmentUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityCreateInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutActivityInput
  }

  export type UserActivityUncheckedCreateInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
  }

  export type UserActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityCreateManyInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentCreateInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    target: UserCreateNestedOneWithoutPunishmentsReceivedInput
    moderator: UserCreateNestedOneWithoutPunishmentsIssuedInput
  }

  export type PunishmentUncheckedCreateInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    targetId: string
    moderatorId: string
    createdAt?: Date | string
  }

  export type PunishmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: UserUpdateOneRequiredWithoutPunishmentsReceivedNestedInput
    moderator?: UserUpdateOneRequiredWithoutPunishmentsIssuedNestedInput
  }

  export type PunishmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    targetId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentCreateManyInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    targetId: string
    moderatorId: string
    createdAt?: Date | string
  }

  export type PunishmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    targetId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserActivityListRelationFilter = {
    every?: UserActivityWhereInput
    some?: UserActivityWhereInput
    none?: UserActivityWhereInput
  }

  export type PunishmentListRelationFilter = {
    every?: PunishmentWhereInput
    some?: PunishmentWhereInput
    none?: PunishmentWhereInput
  }

  export type UserActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PunishmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserActivityUserIdGuildIdCompoundUniqueInput = {
    userId: string
    guildId: string
  }

  export type UserActivityCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivityAvgOrderByAggregateInput = {
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
  }

  export type UserActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivityMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivitySumOrderByAggregateInput = {
    messageCount?: SortOrder
    voiceTimeInSeconds?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPunishmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PunishmentType | EnumPunishmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPunishmentTypeFilter<$PrismaModel> | $Enums.PunishmentType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PunishmentCountOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    targetId?: SortOrder
    moderatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PunishmentAvgOrderByAggregateInput = {
    caseId?: SortOrder
  }

  export type PunishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    targetId?: SortOrder
    moderatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PunishmentMinOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    targetId?: SortOrder
    moderatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PunishmentSumOrderByAggregateInput = {
    caseId?: SortOrder
  }

  export type EnumPunishmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PunishmentType | EnumPunishmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPunishmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PunishmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPunishmentTypeFilter<$PrismaModel>
    _max?: NestedEnumPunishmentTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type PunishmentCreateNestedManyWithoutTargetInput = {
    create?: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput> | PunishmentCreateWithoutTargetInput[] | PunishmentUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutTargetInput | PunishmentCreateOrConnectWithoutTargetInput[]
    createMany?: PunishmentCreateManyTargetInputEnvelope
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
  }

  export type PunishmentCreateNestedManyWithoutModeratorInput = {
    create?: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput> | PunishmentCreateWithoutModeratorInput[] | PunishmentUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutModeratorInput | PunishmentCreateOrConnectWithoutModeratorInput[]
    createMany?: PunishmentCreateManyModeratorInputEnvelope
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
  }

  export type UserActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type PunishmentUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput> | PunishmentCreateWithoutTargetInput[] | PunishmentUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutTargetInput | PunishmentCreateOrConnectWithoutTargetInput[]
    createMany?: PunishmentCreateManyTargetInputEnvelope
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
  }

  export type PunishmentUncheckedCreateNestedManyWithoutModeratorInput = {
    create?: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput> | PunishmentCreateWithoutModeratorInput[] | PunishmentUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutModeratorInput | PunishmentCreateOrConnectWithoutModeratorInput[]
    createMany?: PunishmentCreateManyModeratorInputEnvelope
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutUserInput | UserActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutUserInput | UserActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutUserInput | UserActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type PunishmentUpdateManyWithoutTargetNestedInput = {
    create?: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput> | PunishmentCreateWithoutTargetInput[] | PunishmentUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutTargetInput | PunishmentCreateOrConnectWithoutTargetInput[]
    upsert?: PunishmentUpsertWithWhereUniqueWithoutTargetInput | PunishmentUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: PunishmentCreateManyTargetInputEnvelope
    set?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    disconnect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    delete?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    update?: PunishmentUpdateWithWhereUniqueWithoutTargetInput | PunishmentUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: PunishmentUpdateManyWithWhereWithoutTargetInput | PunishmentUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
  }

  export type PunishmentUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput> | PunishmentCreateWithoutModeratorInput[] | PunishmentUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutModeratorInput | PunishmentCreateOrConnectWithoutModeratorInput[]
    upsert?: PunishmentUpsertWithWhereUniqueWithoutModeratorInput | PunishmentUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: PunishmentCreateManyModeratorInputEnvelope
    set?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    disconnect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    delete?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    update?: PunishmentUpdateWithWhereUniqueWithoutModeratorInput | PunishmentUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: PunishmentUpdateManyWithWhereWithoutModeratorInput | PunishmentUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
  }

  export type UserActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutUserInput | UserActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutUserInput | UserActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutUserInput | UserActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type PunishmentUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput> | PunishmentCreateWithoutTargetInput[] | PunishmentUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutTargetInput | PunishmentCreateOrConnectWithoutTargetInput[]
    upsert?: PunishmentUpsertWithWhereUniqueWithoutTargetInput | PunishmentUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: PunishmentCreateManyTargetInputEnvelope
    set?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    disconnect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    delete?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    update?: PunishmentUpdateWithWhereUniqueWithoutTargetInput | PunishmentUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: PunishmentUpdateManyWithWhereWithoutTargetInput | PunishmentUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
  }

  export type PunishmentUncheckedUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput> | PunishmentCreateWithoutModeratorInput[] | PunishmentUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: PunishmentCreateOrConnectWithoutModeratorInput | PunishmentCreateOrConnectWithoutModeratorInput[]
    upsert?: PunishmentUpsertWithWhereUniqueWithoutModeratorInput | PunishmentUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: PunishmentCreateManyModeratorInputEnvelope
    set?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    disconnect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    delete?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    connect?: PunishmentWhereUniqueInput | PunishmentWhereUniqueInput[]
    update?: PunishmentUpdateWithWhereUniqueWithoutModeratorInput | PunishmentUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: PunishmentUpdateManyWithWhereWithoutModeratorInput | PunishmentUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivityInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    upsert?: UserUpsertWithoutActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityInput, UserUpdateWithoutActivityInput>, UserUncheckedUpdateWithoutActivityInput>
  }

  export type UserCreateNestedOneWithoutPunishmentsReceivedInput = {
    create?: XOR<UserCreateWithoutPunishmentsReceivedInput, UserUncheckedCreateWithoutPunishmentsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPunishmentsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPunishmentsIssuedInput = {
    create?: XOR<UserCreateWithoutPunishmentsIssuedInput, UserUncheckedCreateWithoutPunishmentsIssuedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPunishmentsIssuedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPunishmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PunishmentType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPunishmentsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutPunishmentsReceivedInput, UserUncheckedCreateWithoutPunishmentsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPunishmentsReceivedInput
    upsert?: UserUpsertWithoutPunishmentsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPunishmentsReceivedInput, UserUpdateWithoutPunishmentsReceivedInput>, UserUncheckedUpdateWithoutPunishmentsReceivedInput>
  }

  export type UserUpdateOneRequiredWithoutPunishmentsIssuedNestedInput = {
    create?: XOR<UserCreateWithoutPunishmentsIssuedInput, UserUncheckedCreateWithoutPunishmentsIssuedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPunishmentsIssuedInput
    upsert?: UserUpsertWithoutPunishmentsIssuedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPunishmentsIssuedInput, UserUpdateWithoutPunishmentsIssuedInput>, UserUncheckedUpdateWithoutPunishmentsIssuedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPunishmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PunishmentType | EnumPunishmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPunishmentTypeFilter<$PrismaModel> | $Enums.PunishmentType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPunishmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PunishmentType | EnumPunishmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PunishmentType[] | ListEnumPunishmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPunishmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PunishmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPunishmentTypeFilter<$PrismaModel>
    _max?: NestedEnumPunishmentTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserActivityCreateWithoutUserInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivityUncheckedCreateWithoutUserInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivityCreateOrConnectWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    create: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput>
  }

  export type UserActivityCreateManyUserInputEnvelope = {
    data: UserActivityCreateManyUserInput | UserActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PunishmentCreateWithoutTargetInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    moderator: UserCreateNestedOneWithoutPunishmentsIssuedInput
  }

  export type PunishmentUncheckedCreateWithoutTargetInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    moderatorId: string
    createdAt?: Date | string
  }

  export type PunishmentCreateOrConnectWithoutTargetInput = {
    where: PunishmentWhereUniqueInput
    create: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput>
  }

  export type PunishmentCreateManyTargetInputEnvelope = {
    data: PunishmentCreateManyTargetInput | PunishmentCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type PunishmentCreateWithoutModeratorInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    target: UserCreateNestedOneWithoutPunishmentsReceivedInput
  }

  export type PunishmentUncheckedCreateWithoutModeratorInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    targetId: string
    createdAt?: Date | string
  }

  export type PunishmentCreateOrConnectWithoutModeratorInput = {
    where: PunishmentWhereUniqueInput
    create: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput>
  }

  export type PunishmentCreateManyModeratorInputEnvelope = {
    data: PunishmentCreateManyModeratorInput | PunishmentCreateManyModeratorInput[]
    skipDuplicates?: boolean
  }

  export type UserActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    update: XOR<UserActivityUpdateWithoutUserInput, UserActivityUncheckedUpdateWithoutUserInput>
    create: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput>
  }

  export type UserActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    data: XOR<UserActivityUpdateWithoutUserInput, UserActivityUncheckedUpdateWithoutUserInput>
  }

  export type UserActivityUpdateManyWithWhereWithoutUserInput = {
    where: UserActivityScalarWhereInput
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserActivityScalarWhereInput = {
    AND?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    OR?: UserActivityScalarWhereInput[]
    NOT?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    id?: StringFilter<"UserActivity"> | string
    guildId?: StringFilter<"UserActivity"> | string
    messageCount?: IntFilter<"UserActivity"> | number
    voiceTimeInSeconds?: IntFilter<"UserActivity"> | number
    userId?: StringFilter<"UserActivity"> | string
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivity"> | Date | string
  }

  export type PunishmentUpsertWithWhereUniqueWithoutTargetInput = {
    where: PunishmentWhereUniqueInput
    update: XOR<PunishmentUpdateWithoutTargetInput, PunishmentUncheckedUpdateWithoutTargetInput>
    create: XOR<PunishmentCreateWithoutTargetInput, PunishmentUncheckedCreateWithoutTargetInput>
  }

  export type PunishmentUpdateWithWhereUniqueWithoutTargetInput = {
    where: PunishmentWhereUniqueInput
    data: XOR<PunishmentUpdateWithoutTargetInput, PunishmentUncheckedUpdateWithoutTargetInput>
  }

  export type PunishmentUpdateManyWithWhereWithoutTargetInput = {
    where: PunishmentScalarWhereInput
    data: XOR<PunishmentUpdateManyMutationInput, PunishmentUncheckedUpdateManyWithoutTargetInput>
  }

  export type PunishmentScalarWhereInput = {
    AND?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
    OR?: PunishmentScalarWhereInput[]
    NOT?: PunishmentScalarWhereInput | PunishmentScalarWhereInput[]
    id?: StringFilter<"Punishment"> | string
    caseId?: IntFilter<"Punishment"> | number
    guildId?: StringFilter<"Punishment"> | string
    type?: EnumPunishmentTypeFilter<"Punishment"> | $Enums.PunishmentType
    reason?: StringNullableFilter<"Punishment"> | string | null
    expiresAt?: DateTimeNullableFilter<"Punishment"> | Date | string | null
    active?: BoolFilter<"Punishment"> | boolean
    targetId?: StringFilter<"Punishment"> | string
    moderatorId?: StringFilter<"Punishment"> | string
    createdAt?: DateTimeFilter<"Punishment"> | Date | string
  }

  export type PunishmentUpsertWithWhereUniqueWithoutModeratorInput = {
    where: PunishmentWhereUniqueInput
    update: XOR<PunishmentUpdateWithoutModeratorInput, PunishmentUncheckedUpdateWithoutModeratorInput>
    create: XOR<PunishmentCreateWithoutModeratorInput, PunishmentUncheckedCreateWithoutModeratorInput>
  }

  export type PunishmentUpdateWithWhereUniqueWithoutModeratorInput = {
    where: PunishmentWhereUniqueInput
    data: XOR<PunishmentUpdateWithoutModeratorInput, PunishmentUncheckedUpdateWithoutModeratorInput>
  }

  export type PunishmentUpdateManyWithWhereWithoutModeratorInput = {
    where: PunishmentScalarWhereInput
    data: XOR<PunishmentUpdateManyMutationInput, PunishmentUncheckedUpdateManyWithoutModeratorInput>
  }

  export type UserCreateWithoutActivityInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    punishmentsReceived?: PunishmentCreateNestedManyWithoutTargetInput
    punishmentsIssued?: PunishmentCreateNestedManyWithoutModeratorInput
  }

  export type UserUncheckedCreateWithoutActivityInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    punishmentsReceived?: PunishmentUncheckedCreateNestedManyWithoutTargetInput
    punishmentsIssued?: PunishmentUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type UserCreateOrConnectWithoutActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
  }

  export type UserUpsertWithoutActivityInput = {
    update: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    punishmentsReceived?: PunishmentUpdateManyWithoutTargetNestedInput
    punishmentsIssued?: PunishmentUpdateManyWithoutModeratorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    punishmentsReceived?: PunishmentUncheckedUpdateManyWithoutTargetNestedInput
    punishmentsIssued?: PunishmentUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type UserCreateWithoutPunishmentsReceivedInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityCreateNestedManyWithoutUserInput
    punishmentsIssued?: PunishmentCreateNestedManyWithoutModeratorInput
  }

  export type UserUncheckedCreateWithoutPunishmentsReceivedInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityUncheckedCreateNestedManyWithoutUserInput
    punishmentsIssued?: PunishmentUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type UserCreateOrConnectWithoutPunishmentsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPunishmentsReceivedInput, UserUncheckedCreateWithoutPunishmentsReceivedInput>
  }

  export type UserCreateWithoutPunishmentsIssuedInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityCreateNestedManyWithoutUserInput
    punishmentsReceived?: PunishmentCreateNestedManyWithoutTargetInput
  }

  export type UserUncheckedCreateWithoutPunishmentsIssuedInput = {
    id?: string
    discordId: string
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: UserActivityUncheckedCreateNestedManyWithoutUserInput
    punishmentsReceived?: PunishmentUncheckedCreateNestedManyWithoutTargetInput
  }

  export type UserCreateOrConnectWithoutPunishmentsIssuedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPunishmentsIssuedInput, UserUncheckedCreateWithoutPunishmentsIssuedInput>
  }

  export type UserUpsertWithoutPunishmentsReceivedInput = {
    update: XOR<UserUpdateWithoutPunishmentsReceivedInput, UserUncheckedUpdateWithoutPunishmentsReceivedInput>
    create: XOR<UserCreateWithoutPunishmentsReceivedInput, UserUncheckedCreateWithoutPunishmentsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPunishmentsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPunishmentsReceivedInput, UserUncheckedUpdateWithoutPunishmentsReceivedInput>
  }

  export type UserUpdateWithoutPunishmentsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUpdateManyWithoutUserNestedInput
    punishmentsIssued?: PunishmentUpdateManyWithoutModeratorNestedInput
  }

  export type UserUncheckedUpdateWithoutPunishmentsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
    punishmentsIssued?: PunishmentUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type UserUpsertWithoutPunishmentsIssuedInput = {
    update: XOR<UserUpdateWithoutPunishmentsIssuedInput, UserUncheckedUpdateWithoutPunishmentsIssuedInput>
    create: XOR<UserCreateWithoutPunishmentsIssuedInput, UserUncheckedCreateWithoutPunishmentsIssuedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPunishmentsIssuedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPunishmentsIssuedInput, UserUncheckedUpdateWithoutPunishmentsIssuedInput>
  }

  export type UserUpdateWithoutPunishmentsIssuedInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUpdateManyWithoutUserNestedInput
    punishmentsReceived?: PunishmentUpdateManyWithoutTargetNestedInput
  }

  export type UserUncheckedUpdateWithoutPunishmentsIssuedInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
    punishmentsReceived?: PunishmentUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type UserActivityCreateManyUserInput = {
    id?: string
    guildId: string
    messageCount?: number
    voiceTimeInSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PunishmentCreateManyTargetInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    moderatorId: string
    createdAt?: Date | string
  }

  export type PunishmentCreateManyModeratorInput = {
    id?: string
    caseId?: number
    guildId: string
    type: $Enums.PunishmentType
    reason?: string | null
    expiresAt?: Date | string | null
    active?: boolean
    targetId: string
    createdAt?: Date | string
  }

  export type UserActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    voiceTimeInSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderator?: UserUpdateOneRequiredWithoutPunishmentsIssuedNestedInput
  }

  export type PunishmentUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    moderatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    moderatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: UserUpdateOneRequiredWithoutPunishmentsReceivedNestedInput
  }

  export type PunishmentUncheckedUpdateWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunishmentUncheckedUpdateManyWithoutModeratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: EnumPunishmentTypeFieldUpdateOperationsInput | $Enums.PunishmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}