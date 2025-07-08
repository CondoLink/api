
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
 * Model buildings
 * 
 */
export type buildings = $Result.DefaultSelection<Prisma.$buildingsPayload>
/**
 * Model blocks
 * 
 */
export type blocks = $Result.DefaultSelection<Prisma.$blocksPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ServiceCategory
 * 
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Buildings
 * const buildings = await prisma.buildings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Buildings
   * const buildings = await prisma.buildings.findMany()
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
   * `prisma.buildings`: Exposes CRUD operations for the **buildings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.buildings.findMany()
    * ```
    */
  get buildings(): Prisma.buildingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blocks`: Exposes CRUD operations for the **blocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.blocks.findMany()
    * ```
    */
  get blocks(): Prisma.blocksDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCategories
    * const serviceCategories = await prisma.serviceCategory.findMany()
    * ```
    */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    buildings: 'buildings',
    blocks: 'blocks',
    User: 'User',
    ServiceCategory: 'ServiceCategory',
    Maintenance: 'Maintenance'
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
      modelProps: "buildings" | "blocks" | "user" | "serviceCategory" | "maintenance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      buildings: {
        payload: Prisma.$buildingsPayload<ExtArgs>
        fields: Prisma.buildingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.buildingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.buildingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          findFirst: {
            args: Prisma.buildingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.buildingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          findMany: {
            args: Prisma.buildingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>[]
          }
          create: {
            args: Prisma.buildingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          createMany: {
            args: Prisma.buildingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.buildingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>[]
          }
          delete: {
            args: Prisma.buildingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          update: {
            args: Prisma.buildingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          deleteMany: {
            args: Prisma.buildingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.buildingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.buildingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>[]
          }
          upsert: {
            args: Prisma.buildingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingsPayload>
          }
          aggregate: {
            args: Prisma.BuildingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildings>
          }
          groupBy: {
            args: Prisma.buildingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.buildingsCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingsCountAggregateOutputType> | number
          }
        }
      }
      blocks: {
        payload: Prisma.$blocksPayload<ExtArgs>
        fields: Prisma.blocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          findFirst: {
            args: Prisma.blocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          findMany: {
            args: Prisma.blocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>[]
          }
          create: {
            args: Prisma.blocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          createMany: {
            args: Prisma.blocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blocksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>[]
          }
          delete: {
            args: Prisma.blocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          update: {
            args: Prisma.blocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          deleteMany: {
            args: Prisma.blocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blocksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>[]
          }
          upsert: {
            args: Prisma.blocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocksPayload>
          }
          aggregate: {
            args: Prisma.BlocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocks>
          }
          groupBy: {
            args: Prisma.blocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.blocksCountArgs<ExtArgs>
            result: $Utils.Optional<BlocksCountAggregateOutputType> | number
          }
        }
      }
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
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>
        fields: Prisma.ServiceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCategory>
          }
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number
          }
        }
      }
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    buildings?: buildingsOmit
    blocks?: blocksOmit
    user?: UserOmit
    serviceCategory?: ServiceCategoryOmit
    maintenance?: MaintenanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type BuildingsCountOutputType
   */

  export type BuildingsCountOutputType = {
    User: number
    blocks: number
    maintenances: number
  }

  export type BuildingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | BuildingsCountOutputTypeCountUserArgs
    blocks?: boolean | BuildingsCountOutputTypeCountBlocksArgs
    maintenances?: boolean | BuildingsCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingsCountOutputType
     */
    select?: BuildingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blocksWhereInput
  }

  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type BlocksCountOutputType
   */

  export type BlocksCountOutputType = {
    User: number
    maintenances: number
  }

  export type BlocksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | BlocksCountOutputTypeCountUserArgs
    maintenances?: boolean | BlocksCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * BlocksCountOutputType without action
   */
  export type BlocksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocksCountOutputType
     */
    select?: BlocksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlocksCountOutputType without action
   */
  export type BlocksCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BlocksCountOutputType without action
   */
  export type BlocksCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    approvedUsers: number
    maintenances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedUsers?: boolean | UserCountOutputTypeCountApprovedUsersArgs
    maintenances?: boolean | UserCountOutputTypeCountMaintenancesArgs
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
  export type UserCountOutputTypeCountApprovedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type ServiceCategoryCountOutputType
   */

  export type ServiceCategoryCountOutputType = {
    maintenances: number
  }

  export type ServiceCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | ServiceCategoryCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategoryCountOutputType
     */
    select?: ServiceCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model buildings
   */

  export type AggregateBuildings = {
    _count: BuildingsCountAggregateOutputType | null
    _avg: BuildingsAvgAggregateOutputType | null
    _sum: BuildingsSumAggregateOutputType | null
    _min: BuildingsMinAggregateOutputType | null
    _max: BuildingsMaxAggregateOutputType | null
  }

  export type BuildingsAvgAggregateOutputType = {
    id: number | null
  }

  export type BuildingsSumAggregateOutputType = {
    id: number | null
  }

  export type BuildingsMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    code: string | null
    created_at: Date | null
  }

  export type BuildingsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    code: string | null
    created_at: Date | null
  }

  export type BuildingsCountAggregateOutputType = {
    id: number
    name: number
    address: number
    code: number
    created_at: number
    _all: number
  }


  export type BuildingsAvgAggregateInputType = {
    id?: true
  }

  export type BuildingsSumAggregateInputType = {
    id?: true
  }

  export type BuildingsMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    code?: true
    created_at?: true
  }

  export type BuildingsMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    code?: true
    created_at?: true
  }

  export type BuildingsCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    code?: true
    created_at?: true
    _all?: true
  }

  export type BuildingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buildings to aggregate.
     */
    where?: buildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingsOrderByWithRelationInput | buildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: buildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buildings
    **/
    _count?: true | BuildingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingsMaxAggregateInputType
  }

  export type GetBuildingsAggregateType<T extends BuildingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildings[P]>
      : GetScalarType<T[P], AggregateBuildings[P]>
  }




  export type buildingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buildingsWhereInput
    orderBy?: buildingsOrderByWithAggregationInput | buildingsOrderByWithAggregationInput[]
    by: BuildingsScalarFieldEnum[] | BuildingsScalarFieldEnum
    having?: buildingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingsCountAggregateInputType | true
    _avg?: BuildingsAvgAggregateInputType
    _sum?: BuildingsSumAggregateInputType
    _min?: BuildingsMinAggregateInputType
    _max?: BuildingsMaxAggregateInputType
  }

  export type BuildingsGroupByOutputType = {
    id: number
    name: string
    address: string | null
    code: string
    created_at: Date | null
    _count: BuildingsCountAggregateOutputType | null
    _avg: BuildingsAvgAggregateOutputType | null
    _sum: BuildingsSumAggregateOutputType | null
    _min: BuildingsMinAggregateOutputType | null
    _max: BuildingsMaxAggregateOutputType | null
  }

  type GetBuildingsGroupByPayload<T extends buildingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingsGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingsGroupByOutputType[P]>
        }
      >
    >


  export type buildingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    code?: boolean
    created_at?: boolean
    User?: boolean | buildings$UserArgs<ExtArgs>
    blocks?: boolean | buildings$blocksArgs<ExtArgs>
    maintenances?: boolean | buildings$maintenancesArgs<ExtArgs>
    _count?: boolean | BuildingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildings"]>

  export type buildingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["buildings"]>

  export type buildingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["buildings"]>

  export type buildingsSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    code?: boolean
    created_at?: boolean
  }

  export type buildingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "code" | "created_at", ExtArgs["result"]["buildings"]>
  export type buildingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | buildings$UserArgs<ExtArgs>
    blocks?: boolean | buildings$blocksArgs<ExtArgs>
    maintenances?: boolean | buildings$maintenancesArgs<ExtArgs>
    _count?: boolean | BuildingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type buildingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type buildingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $buildingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "buildings"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      blocks: Prisma.$blocksPayload<ExtArgs>[]
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      code: string
      created_at: Date | null
    }, ExtArgs["result"]["buildings"]>
    composites: {}
  }

  type buildingsGetPayload<S extends boolean | null | undefined | buildingsDefaultArgs> = $Result.GetResult<Prisma.$buildingsPayload, S>

  type buildingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<buildingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingsCountAggregateInputType | true
    }

  export interface buildingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['buildings'], meta: { name: 'buildings' } }
    /**
     * Find zero or one Buildings that matches the filter.
     * @param {buildingsFindUniqueArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends buildingsFindUniqueArgs>(args: SelectSubset<T, buildingsFindUniqueArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buildings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {buildingsFindUniqueOrThrowArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends buildingsFindUniqueOrThrowArgs>(args: SelectSubset<T, buildingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsFindFirstArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends buildingsFindFirstArgs>(args?: SelectSubset<T, buildingsFindFirstArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buildings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsFindFirstOrThrowArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends buildingsFindFirstOrThrowArgs>(args?: SelectSubset<T, buildingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.buildings.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.buildings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingsWithIdOnly = await prisma.buildings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends buildingsFindManyArgs>(args?: SelectSubset<T, buildingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buildings.
     * @param {buildingsCreateArgs} args - Arguments to create a Buildings.
     * @example
     * // Create one Buildings
     * const Buildings = await prisma.buildings.create({
     *   data: {
     *     // ... data to create a Buildings
     *   }
     * })
     * 
     */
    create<T extends buildingsCreateArgs>(args: SelectSubset<T, buildingsCreateArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {buildingsCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const buildings = await prisma.buildings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends buildingsCreateManyArgs>(args?: SelectSubset<T, buildingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {buildingsCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const buildings = await prisma.buildings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingsWithIdOnly = await prisma.buildings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends buildingsCreateManyAndReturnArgs>(args?: SelectSubset<T, buildingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Buildings.
     * @param {buildingsDeleteArgs} args - Arguments to delete one Buildings.
     * @example
     * // Delete one Buildings
     * const Buildings = await prisma.buildings.delete({
     *   where: {
     *     // ... filter to delete one Buildings
     *   }
     * })
     * 
     */
    delete<T extends buildingsDeleteArgs>(args: SelectSubset<T, buildingsDeleteArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buildings.
     * @param {buildingsUpdateArgs} args - Arguments to update one Buildings.
     * @example
     * // Update one Buildings
     * const buildings = await prisma.buildings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends buildingsUpdateArgs>(args: SelectSubset<T, buildingsUpdateArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {buildingsDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.buildings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends buildingsDeleteManyArgs>(args?: SelectSubset<T, buildingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const buildings = await prisma.buildings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends buildingsUpdateManyArgs>(args: SelectSubset<T, buildingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {buildingsUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const buildings = await prisma.buildings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `id`
     * const buildingsWithIdOnly = await prisma.buildings.updateManyAndReturn({
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
    updateManyAndReturn<T extends buildingsUpdateManyAndReturnArgs>(args: SelectSubset<T, buildingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Buildings.
     * @param {buildingsUpsertArgs} args - Arguments to update or create a Buildings.
     * @example
     * // Update or create a Buildings
     * const buildings = await prisma.buildings.upsert({
     *   create: {
     *     // ... data to create a Buildings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buildings we want to update
     *   }
     * })
     */
    upsert<T extends buildingsUpsertArgs>(args: SelectSubset<T, buildingsUpsertArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.buildings.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends buildingsCountArgs>(
      args?: Subset<T, buildingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildingsAggregateArgs>(args: Subset<T, BuildingsAggregateArgs>): Prisma.PrismaPromise<GetBuildingsAggregateType<T>>

    /**
     * Group by Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingsGroupByArgs} args - Group by arguments.
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
      T extends buildingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: buildingsGroupByArgs['orderBy'] }
        : { orderBy?: buildingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, buildingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the buildings model
   */
  readonly fields: buildingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for buildings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__buildingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends buildings$UserArgs<ExtArgs> = {}>(args?: Subset<T, buildings$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocks<T extends buildings$blocksArgs<ExtArgs> = {}>(args?: Subset<T, buildings$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenances<T extends buildings$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, buildings$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the buildings model
   */
  interface buildingsFieldRefs {
    readonly id: FieldRef<"buildings", 'Int'>
    readonly name: FieldRef<"buildings", 'String'>
    readonly address: FieldRef<"buildings", 'String'>
    readonly code: FieldRef<"buildings", 'String'>
    readonly created_at: FieldRef<"buildings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * buildings findUnique
   */
  export type buildingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where: buildingsWhereUniqueInput
  }

  /**
   * buildings findUniqueOrThrow
   */
  export type buildingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where: buildingsWhereUniqueInput
  }

  /**
   * buildings findFirst
   */
  export type buildingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where?: buildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingsOrderByWithRelationInput | buildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     */
    cursor?: buildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     */
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * buildings findFirstOrThrow
   */
  export type buildingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where?: buildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingsOrderByWithRelationInput | buildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     */
    cursor?: buildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     */
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * buildings findMany
   */
  export type buildingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where?: buildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingsOrderByWithRelationInput | buildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buildings.
     */
    cursor?: buildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * buildings create
   */
  export type buildingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * The data needed to create a buildings.
     */
    data: XOR<buildingsCreateInput, buildingsUncheckedCreateInput>
  }

  /**
   * buildings createMany
   */
  export type buildingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buildings.
     */
    data: buildingsCreateManyInput | buildingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * buildings createManyAndReturn
   */
  export type buildingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * The data used to create many buildings.
     */
    data: buildingsCreateManyInput | buildingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * buildings update
   */
  export type buildingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * The data needed to update a buildings.
     */
    data: XOR<buildingsUpdateInput, buildingsUncheckedUpdateInput>
    /**
     * Choose, which buildings to update.
     */
    where: buildingsWhereUniqueInput
  }

  /**
   * buildings updateMany
   */
  export type buildingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buildings.
     */
    data: XOR<buildingsUpdateManyMutationInput, buildingsUncheckedUpdateManyInput>
    /**
     * Filter which buildings to update
     */
    where?: buildingsWhereInput
    /**
     * Limit how many buildings to update.
     */
    limit?: number
  }

  /**
   * buildings updateManyAndReturn
   */
  export type buildingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * The data used to update buildings.
     */
    data: XOR<buildingsUpdateManyMutationInput, buildingsUncheckedUpdateManyInput>
    /**
     * Filter which buildings to update
     */
    where?: buildingsWhereInput
    /**
     * Limit how many buildings to update.
     */
    limit?: number
  }

  /**
   * buildings upsert
   */
  export type buildingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * The filter to search for the buildings to update in case it exists.
     */
    where: buildingsWhereUniqueInput
    /**
     * In case the buildings found by the `where` argument doesn't exist, create a new buildings with this data.
     */
    create: XOR<buildingsCreateInput, buildingsUncheckedCreateInput>
    /**
     * In case the buildings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<buildingsUpdateInput, buildingsUncheckedUpdateInput>
  }

  /**
   * buildings delete
   */
  export type buildingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    /**
     * Filter which buildings to delete.
     */
    where: buildingsWhereUniqueInput
  }

  /**
   * buildings deleteMany
   */
  export type buildingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buildings to delete
     */
    where?: buildingsWhereInput
    /**
     * Limit how many buildings to delete.
     */
    limit?: number
  }

  /**
   * buildings.User
   */
  export type buildings$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * buildings.blocks
   */
  export type buildings$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    where?: blocksWhereInput
    orderBy?: blocksOrderByWithRelationInput | blocksOrderByWithRelationInput[]
    cursor?: blocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * buildings.maintenances
   */
  export type buildings$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * buildings without action
   */
  export type buildingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
  }


  /**
   * Model blocks
   */

  export type AggregateBlocks = {
    _count: BlocksCountAggregateOutputType | null
    _avg: BlocksAvgAggregateOutputType | null
    _sum: BlocksSumAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  export type BlocksAvgAggregateOutputType = {
    id: number | null
    building_id: number | null
  }

  export type BlocksSumAggregateOutputType = {
    id: number | null
    building_id: number | null
  }

  export type BlocksMinAggregateOutputType = {
    id: number | null
    name: string | null
    building_id: number | null
    created_at: Date | null
  }

  export type BlocksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    building_id: number | null
    created_at: Date | null
  }

  export type BlocksCountAggregateOutputType = {
    id: number
    name: number
    building_id: number
    created_at: number
    _all: number
  }


  export type BlocksAvgAggregateInputType = {
    id?: true
    building_id?: true
  }

  export type BlocksSumAggregateInputType = {
    id?: true
    building_id?: true
  }

  export type BlocksMinAggregateInputType = {
    id?: true
    name?: true
    building_id?: true
    created_at?: true
  }

  export type BlocksMaxAggregateInputType = {
    id?: true
    name?: true
    building_id?: true
    created_at?: true
  }

  export type BlocksCountAggregateInputType = {
    id?: true
    name?: true
    building_id?: true
    created_at?: true
    _all?: true
  }

  export type BlocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocks to aggregate.
     */
    where?: blocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blocksOrderByWithRelationInput | blocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blocks
    **/
    _count?: true | BlocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlocksMaxAggregateInputType
  }

  export type GetBlocksAggregateType<T extends BlocksAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocks[P]>
      : GetScalarType<T[P], AggregateBlocks[P]>
  }




  export type blocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blocksWhereInput
    orderBy?: blocksOrderByWithAggregationInput | blocksOrderByWithAggregationInput[]
    by: BlocksScalarFieldEnum[] | BlocksScalarFieldEnum
    having?: blocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocksCountAggregateInputType | true
    _avg?: BlocksAvgAggregateInputType
    _sum?: BlocksSumAggregateInputType
    _min?: BlocksMinAggregateInputType
    _max?: BlocksMaxAggregateInputType
  }

  export type BlocksGroupByOutputType = {
    id: number
    name: string
    building_id: number
    created_at: Date | null
    _count: BlocksCountAggregateOutputType | null
    _avg: BlocksAvgAggregateOutputType | null
    _sum: BlocksSumAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  type GetBlocksGroupByPayload<T extends blocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlocksGroupByOutputType[P]>
            : GetScalarType<T[P], BlocksGroupByOutputType[P]>
        }
      >
    >


  export type blocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    building_id?: boolean
    created_at?: boolean
    User?: boolean | blocks$UserArgs<ExtArgs>
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
    maintenances?: boolean | blocks$maintenancesArgs<ExtArgs>
    _count?: boolean | BlocksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocks"]>

  export type blocksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    building_id?: boolean
    created_at?: boolean
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocks"]>

  export type blocksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    building_id?: boolean
    created_at?: boolean
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocks"]>

  export type blocksSelectScalar = {
    id?: boolean
    name?: boolean
    building_id?: boolean
    created_at?: boolean
  }

  export type blocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "building_id" | "created_at", ExtArgs["result"]["blocks"]>
  export type blocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | blocks$UserArgs<ExtArgs>
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
    maintenances?: boolean | blocks$maintenancesArgs<ExtArgs>
    _count?: boolean | BlocksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type blocksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
  }
  export type blocksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | buildingsDefaultArgs<ExtArgs>
  }

  export type $blocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blocks"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      buildings: Prisma.$buildingsPayload<ExtArgs>
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      building_id: number
      created_at: Date | null
    }, ExtArgs["result"]["blocks"]>
    composites: {}
  }

  type blocksGetPayload<S extends boolean | null | undefined | blocksDefaultArgs> = $Result.GetResult<Prisma.$blocksPayload, S>

  type blocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocksCountAggregateInputType | true
    }

  export interface blocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blocks'], meta: { name: 'blocks' } }
    /**
     * Find zero or one Blocks that matches the filter.
     * @param {blocksFindUniqueArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blocksFindUniqueArgs>(args: SelectSubset<T, blocksFindUniqueArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blocksFindUniqueOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blocksFindUniqueOrThrowArgs>(args: SelectSubset<T, blocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksFindFirstArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blocksFindFirstArgs>(args?: SelectSubset<T, blocksFindFirstArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksFindFirstOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blocksFindFirstOrThrowArgs>(args?: SelectSubset<T, blocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.blocks.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.blocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blocksWithIdOnly = await prisma.blocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blocksFindManyArgs>(args?: SelectSubset<T, blocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blocks.
     * @param {blocksCreateArgs} args - Arguments to create a Blocks.
     * @example
     * // Create one Blocks
     * const Blocks = await prisma.blocks.create({
     *   data: {
     *     // ... data to create a Blocks
     *   }
     * })
     * 
     */
    create<T extends blocksCreateArgs>(args: SelectSubset<T, blocksCreateArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {blocksCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const blocks = await prisma.blocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blocksCreateManyArgs>(args?: SelectSubset<T, blocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {blocksCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const blocks = await prisma.blocks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blocksWithIdOnly = await prisma.blocks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blocksCreateManyAndReturnArgs>(args?: SelectSubset<T, blocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blocks.
     * @param {blocksDeleteArgs} args - Arguments to delete one Blocks.
     * @example
     * // Delete one Blocks
     * const Blocks = await prisma.blocks.delete({
     *   where: {
     *     // ... filter to delete one Blocks
     *   }
     * })
     * 
     */
    delete<T extends blocksDeleteArgs>(args: SelectSubset<T, blocksDeleteArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blocks.
     * @param {blocksUpdateArgs} args - Arguments to update one Blocks.
     * @example
     * // Update one Blocks
     * const blocks = await prisma.blocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blocksUpdateArgs>(args: SelectSubset<T, blocksUpdateArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {blocksDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.blocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blocksDeleteManyArgs>(args?: SelectSubset<T, blocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const blocks = await prisma.blocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blocksUpdateManyArgs>(args: SelectSubset<T, blocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {blocksUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const blocks = await prisma.blocks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blocksWithIdOnly = await prisma.blocks.updateManyAndReturn({
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
    updateManyAndReturn<T extends blocksUpdateManyAndReturnArgs>(args: SelectSubset<T, blocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blocks.
     * @param {blocksUpsertArgs} args - Arguments to update or create a Blocks.
     * @example
     * // Update or create a Blocks
     * const blocks = await prisma.blocks.upsert({
     *   create: {
     *     // ... data to create a Blocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocks we want to update
     *   }
     * })
     */
    upsert<T extends blocksUpsertArgs>(args: SelectSubset<T, blocksUpsertArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.blocks.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends blocksCountArgs>(
      args?: Subset<T, blocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlocksAggregateArgs>(args: Subset<T, BlocksAggregateArgs>): Prisma.PrismaPromise<GetBlocksAggregateType<T>>

    /**
     * Group by Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocksGroupByArgs} args - Group by arguments.
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
      T extends blocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blocksGroupByArgs['orderBy'] }
        : { orderBy?: blocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blocks model
   */
  readonly fields: blocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends blocks$UserArgs<ExtArgs> = {}>(args?: Subset<T, blocks$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buildings<T extends buildingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, buildingsDefaultArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maintenances<T extends blocks$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, blocks$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the blocks model
   */
  interface blocksFieldRefs {
    readonly id: FieldRef<"blocks", 'Int'>
    readonly name: FieldRef<"blocks", 'String'>
    readonly building_id: FieldRef<"blocks", 'Int'>
    readonly created_at: FieldRef<"blocks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blocks findUnique
   */
  export type blocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where: blocksWhereUniqueInput
  }

  /**
   * blocks findUniqueOrThrow
   */
  export type blocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where: blocksWhereUniqueInput
  }

  /**
   * blocks findFirst
   */
  export type blocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where?: blocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blocksOrderByWithRelationInput | blocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocks.
     */
    cursor?: blocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * blocks findFirstOrThrow
   */
  export type blocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where?: blocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blocksOrderByWithRelationInput | blocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocks.
     */
    cursor?: blocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * blocks findMany
   */
  export type blocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where?: blocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blocksOrderByWithRelationInput | blocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blocks.
     */
    cursor?: blocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * blocks create
   */
  export type blocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * The data needed to create a blocks.
     */
    data: XOR<blocksCreateInput, blocksUncheckedCreateInput>
  }

  /**
   * blocks createMany
   */
  export type blocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blocks.
     */
    data: blocksCreateManyInput | blocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blocks createManyAndReturn
   */
  export type blocksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * The data used to create many blocks.
     */
    data: blocksCreateManyInput | blocksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blocks update
   */
  export type blocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * The data needed to update a blocks.
     */
    data: XOR<blocksUpdateInput, blocksUncheckedUpdateInput>
    /**
     * Choose, which blocks to update.
     */
    where: blocksWhereUniqueInput
  }

  /**
   * blocks updateMany
   */
  export type blocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blocks.
     */
    data: XOR<blocksUpdateManyMutationInput, blocksUncheckedUpdateManyInput>
    /**
     * Filter which blocks to update
     */
    where?: blocksWhereInput
    /**
     * Limit how many blocks to update.
     */
    limit?: number
  }

  /**
   * blocks updateManyAndReturn
   */
  export type blocksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * The data used to update blocks.
     */
    data: XOR<blocksUpdateManyMutationInput, blocksUncheckedUpdateManyInput>
    /**
     * Filter which blocks to update
     */
    where?: blocksWhereInput
    /**
     * Limit how many blocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blocks upsert
   */
  export type blocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * The filter to search for the blocks to update in case it exists.
     */
    where: blocksWhereUniqueInput
    /**
     * In case the blocks found by the `where` argument doesn't exist, create a new blocks with this data.
     */
    create: XOR<blocksCreateInput, blocksUncheckedCreateInput>
    /**
     * In case the blocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blocksUpdateInput, blocksUncheckedUpdateInput>
  }

  /**
   * blocks delete
   */
  export type blocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    /**
     * Filter which blocks to delete.
     */
    where: blocksWhereUniqueInput
  }

  /**
   * blocks deleteMany
   */
  export type blocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocks to delete
     */
    where?: blocksWhereInput
    /**
     * Limit how many blocks to delete.
     */
    limit?: number
  }

  /**
   * blocks.User
   */
  export type blocks$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * blocks.maintenances
   */
  export type blocks$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * blocks without action
   */
  export type blocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleCode: number | null
    serviceType: number | null
    buildingId: number | null
    blockId: number | null
    approvedBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleCode: number | null
    serviceType: number | null
    buildingId: number | null
    blockId: number | null
    approvedBy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    roleCode: number | null
    unit: string | null
    companyName: string | null
    phone: string | null
    serviceType: number | null
    buildingId: number | null
    blockId: number | null
    refreshToken: string | null
    approvedBy: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    roleCode: number | null
    unit: string | null
    companyName: string | null
    phone: string | null
    serviceType: number | null
    buildingId: number | null
    blockId: number | null
    refreshToken: string | null
    approvedBy: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    roleCode: number
    unit: number
    companyName: number
    phone: number
    serviceType: number
    buildingId: number
    blockId: number
    refreshToken: number
    approvedBy: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleCode?: true
    serviceType?: true
    buildingId?: true
    blockId?: true
    approvedBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleCode?: true
    serviceType?: true
    buildingId?: true
    blockId?: true
    approvedBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    roleCode?: true
    unit?: true
    companyName?: true
    phone?: true
    serviceType?: true
    buildingId?: true
    blockId?: true
    refreshToken?: true
    approvedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    roleCode?: true
    unit?: true
    companyName?: true
    phone?: true
    serviceType?: true
    buildingId?: true
    blockId?: true
    refreshToken?: true
    approvedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    roleCode?: true
    unit?: true
    companyName?: true
    phone?: true
    serviceType?: true
    buildingId?: true
    blockId?: true
    refreshToken?: true
    approvedBy?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit: string | null
    companyName: string | null
    phone: string | null
    serviceType: number | null
    buildingId: number | null
    blockId: number | null
    refreshToken: string | null
    approvedBy: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    fullName?: boolean
    roleCode?: boolean
    unit?: boolean
    companyName?: boolean
    phone?: boolean
    serviceType?: boolean
    buildingId?: boolean
    blockId?: boolean
    refreshToken?: boolean
    approvedBy?: boolean
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    maintenances?: boolean | User$maintenancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    roleCode?: boolean
    unit?: boolean
    companyName?: boolean
    phone?: boolean
    serviceType?: boolean
    buildingId?: boolean
    blockId?: boolean
    refreshToken?: boolean
    approvedBy?: boolean
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    roleCode?: boolean
    unit?: boolean
    companyName?: boolean
    phone?: boolean
    serviceType?: boolean
    buildingId?: boolean
    blockId?: boolean
    refreshToken?: boolean
    approvedBy?: boolean
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    roleCode?: boolean
    unit?: boolean
    companyName?: boolean
    phone?: boolean
    serviceType?: boolean
    buildingId?: boolean
    blockId?: boolean
    refreshToken?: boolean
    approvedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "roleCode" | "unit" | "companyName" | "phone" | "serviceType" | "buildingId" | "blockId" | "refreshToken" | "approvedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    maintenances?: boolean | User$maintenancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | User$blocksArgs<ExtArgs>
    buildings?: boolean | User$buildingsArgs<ExtArgs>
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blocks: Prisma.$blocksPayload<ExtArgs> | null
      buildings: Prisma.$buildingsPayload<ExtArgs> | null
      approvedByUser: Prisma.$UserPayload<ExtArgs> | null
      approvedUsers: Prisma.$UserPayload<ExtArgs>[]
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fullName: string
      roleCode: number
      unit: string | null
      companyName: string | null
      phone: string | null
      serviceType: number | null
      buildingId: number | null
      blockId: number | null
      refreshToken: string | null
      approvedBy: number | null
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
    blocks<T extends User$blocksArgs<ExtArgs> = {}>(args?: Subset<T, User$blocksArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    buildings<T extends User$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, User$buildingsArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedByUser<T extends User$approvedByUserArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedUsers<T extends User$approvedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenances<T extends User$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly roleCode: FieldRef<"User", 'Int'>
    readonly unit: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly serviceType: FieldRef<"User", 'Int'>
    readonly buildingId: FieldRef<"User", 'Int'>
    readonly blockId: FieldRef<"User", 'Int'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly approvedBy: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.blocks
   */
  export type User$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocks
     */
    select?: blocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocks
     */
    omit?: blocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocksInclude<ExtArgs> | null
    where?: blocksWhereInput
  }

  /**
   * User.buildings
   */
  export type User$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buildings
     */
    select?: buildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buildings
     */
    omit?: buildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buildingsInclude<ExtArgs> | null
    where?: buildingsWhereInput
  }

  /**
   * User.approvedByUser
   */
  export type User$approvedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.approvedUsers
   */
  export type User$approvedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.maintenances
   */
  export type User$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
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
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  export type ServiceCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ServiceCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ServiceCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ServiceCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ServiceCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ServiceCategorySumAggregateInputType = {
    id?: true
  }

  export type ServiceCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServiceCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ServiceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCategories
    **/
    _count?: true | ServiceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>
  }




  export type ServiceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithAggregationInput | ServiceCategoryOrderByWithAggregationInput[]
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum
    having?: ServiceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCategoryCountAggregateInputType | true
    _avg?: ServiceCategoryAvgAggregateInputType
    _sum?: ServiceCategorySumAggregateInputType
    _min?: ServiceCategoryMinAggregateInputType
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type ServiceCategoryGroupByOutputType = {
    id: number
    name: string
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maintenances?: boolean | ServiceCategory$maintenancesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ServiceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["serviceCategory"]>
  export type ServiceCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | ServiceCategory$maintenancesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCategory"
    objects: {
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["serviceCategory"]>
    composites: {}
  }

  type ServiceCategoryGetPayload<S extends boolean | null | undefined | ServiceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>

  type ServiceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCategoryCountAggregateInputType | true
    }

  export interface ServiceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'], meta: { name: 'ServiceCategory' } }
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     * 
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCategoryFindManyArgs>(args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     * 
     */
    create<T extends ServiceCategoryCreateArgs>(args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCategories and returns the data saved in the database.
     * @param {ServiceCategoryCreateManyAndReturnArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     * 
     */
    delete<T extends ServiceCategoryDeleteArgs>(args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCategoryUpdateArgs>(args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories and returns the data updated in the database.
     * @param {ServiceCategoryUpdateManyAndReturnArgs} args - Arguments to update many ServiceCategories.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
    **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceCategoryAggregateArgs>(args: Subset<T, ServiceCategoryAggregateArgs>): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
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
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCategory model
   */
  readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenances<T extends ServiceCategory$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<"ServiceCategory", 'Int'>
    readonly name: FieldRef<"ServiceCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
  }

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory createManyAndReturn
   */
  export type ServiceCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory updateManyAndReturn
   */
  export type ServiceCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
  }

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to delete.
     */
    limit?: number
  }

  /**
   * ServiceCategory.maintenances
   */
  export type ServiceCategory$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    id: number | null
    buildingId: number | null
    blockId: number | null
    subcontractor: number | null
    category: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    id: number | null
    buildingId: number | null
    blockId: number | null
    subcontractor: number | null
    category: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: number | null
    task: string | null
    buildingId: number | null
    blockId: number | null
    subcontractor: number | null
    category: number | null
    status: string | null
    comment: string | null
    created_at: Date | null
    dueTo: Date | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: number | null
    task: string | null
    buildingId: number | null
    blockId: number | null
    subcontractor: number | null
    category: number | null
    status: string | null
    comment: string | null
    created_at: Date | null
    dueTo: Date | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    task: number
    buildingId: number
    blockId: number
    subcontractor: number
    category: number
    status: number
    comment: number
    created_at: number
    dueTo: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    id?: true
    buildingId?: true
    blockId?: true
    subcontractor?: true
    category?: true
  }

  export type MaintenanceSumAggregateInputType = {
    id?: true
    buildingId?: true
    blockId?: true
    subcontractor?: true
    category?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    task?: true
    buildingId?: true
    blockId?: true
    subcontractor?: true
    category?: true
    status?: true
    comment?: true
    created_at?: true
    dueTo?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    task?: true
    buildingId?: true
    blockId?: true
    subcontractor?: true
    category?: true
    status?: true
    comment?: true
    created_at?: true
    dueTo?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    task?: true
    buildingId?: true
    blockId?: true
    subcontractor?: true
    category?: true
    status?: true
    comment?: true
    created_at?: true
    dueTo?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: number
    task: string
    buildingId: number
    blockId: number
    subcontractor: number | null
    category: number
    status: string
    comment: string | null
    created_at: Date
    dueTo: Date
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    buildingId?: boolean
    blockId?: boolean
    subcontractor?: boolean
    category?: boolean
    status?: boolean
    comment?: boolean
    created_at?: boolean
    dueTo?: boolean
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    buildingId?: boolean
    blockId?: boolean
    subcontractor?: boolean
    category?: boolean
    status?: boolean
    comment?: boolean
    created_at?: boolean
    dueTo?: boolean
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    buildingId?: boolean
    blockId?: boolean
    subcontractor?: boolean
    category?: boolean
    status?: boolean
    comment?: boolean
    created_at?: boolean
    dueTo?: boolean
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    id?: boolean
    task?: boolean
    buildingId?: boolean
    blockId?: boolean
    subcontractor?: boolean
    category?: boolean
    status?: boolean
    comment?: boolean
    created_at?: boolean
    dueTo?: boolean
  }

  export type MaintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task" | "buildingId" | "blockId" | "subcontractor" | "category" | "status" | "comment" | "created_at" | "dueTo", ExtArgs["result"]["maintenance"]>
  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }
  export type MaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }
  export type MaintenanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | buildingsDefaultArgs<ExtArgs>
    block?: boolean | blocksDefaultArgs<ExtArgs>
    user?: boolean | Maintenance$userArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }

  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      building: Prisma.$buildingsPayload<ExtArgs>
      block: Prisma.$blocksPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      serviceCategory: Prisma.$ServiceCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task: string
      buildingId: number
      blockId: number
      subcontractor: number | null
      category: number
      status: string
      comment: string | null
      created_at: Date
      dueTo: Date
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceFindUniqueArgs>(args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceFindFirstArgs>(args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceFindManyArgs>(args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends MaintenanceCreateArgs>(args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenances.
     * @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceCreateManyArgs>(args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {MaintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceDeleteArgs>(args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceDeleteManyArgs>(args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances and returns the data updated in the database.
     * @param {MaintenanceUpdateManyAndReturnArgs} args - Arguments to update many Maintenances.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaintenanceUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpsertArgs>(args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends buildingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, buildingsDefaultArgs<ExtArgs>>): Prisma__buildingsClient<$Result.GetResult<Prisma.$buildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    block<T extends blocksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blocksDefaultArgs<ExtArgs>>): Prisma__blocksClient<$Result.GetResult<Prisma.$blocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Maintenance$userArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    serviceCategory<T extends ServiceCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategoryDefaultArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Maintenance model
   */
  interface MaintenanceFieldRefs {
    readonly id: FieldRef<"Maintenance", 'Int'>
    readonly task: FieldRef<"Maintenance", 'String'>
    readonly buildingId: FieldRef<"Maintenance", 'Int'>
    readonly blockId: FieldRef<"Maintenance", 'Int'>
    readonly subcontractor: FieldRef<"Maintenance", 'Int'>
    readonly category: FieldRef<"Maintenance", 'Int'>
    readonly status: FieldRef<"Maintenance", 'String'>
    readonly comment: FieldRef<"Maintenance", 'String'>
    readonly created_at: FieldRef<"Maintenance", 'DateTime'>
    readonly dueTo: FieldRef<"Maintenance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }

  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance createManyAndReturn
   */
  export type MaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
  }

  /**
   * Maintenance updateManyAndReturn
   */
  export type MaintenanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }

  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to delete.
     */
    limit?: number
  }

  /**
   * Maintenance.user
   */
  export type Maintenance$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
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


  export const BuildingsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    code: 'code',
    created_at: 'created_at'
  };

  export type BuildingsScalarFieldEnum = (typeof BuildingsScalarFieldEnum)[keyof typeof BuildingsScalarFieldEnum]


  export const BlocksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    building_id: 'building_id',
    created_at: 'created_at'
  };

  export type BlocksScalarFieldEnum = (typeof BlocksScalarFieldEnum)[keyof typeof BlocksScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    roleCode: 'roleCode',
    unit: 'unit',
    companyName: 'companyName',
    phone: 'phone',
    serviceType: 'serviceType',
    buildingId: 'buildingId',
    blockId: 'blockId',
    refreshToken: 'refreshToken',
    approvedBy: 'approvedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ServiceCategoryScalarFieldEnum = (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    task: 'task',
    buildingId: 'buildingId',
    blockId: 'blockId',
    subcontractor: 'subcontractor',
    category: 'category',
    status: 'status',
    comment: 'comment',
    created_at: 'created_at',
    dueTo: 'dueTo'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type buildingsWhereInput = {
    AND?: buildingsWhereInput | buildingsWhereInput[]
    OR?: buildingsWhereInput[]
    NOT?: buildingsWhereInput | buildingsWhereInput[]
    id?: IntFilter<"buildings"> | number
    name?: StringFilter<"buildings"> | string
    address?: StringNullableFilter<"buildings"> | string | null
    code?: StringFilter<"buildings"> | string
    created_at?: DateTimeNullableFilter<"buildings"> | Date | string | null
    User?: UserListRelationFilter
    blocks?: BlocksListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }

  export type buildingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    code?: SortOrder
    created_at?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
    blocks?: blocksOrderByRelationAggregateInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type buildingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: buildingsWhereInput | buildingsWhereInput[]
    OR?: buildingsWhereInput[]
    NOT?: buildingsWhereInput | buildingsWhereInput[]
    name?: StringFilter<"buildings"> | string
    address?: StringNullableFilter<"buildings"> | string | null
    created_at?: DateTimeNullableFilter<"buildings"> | Date | string | null
    User?: UserListRelationFilter
    blocks?: BlocksListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }, "id" | "code">

  export type buildingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    code?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: buildingsCountOrderByAggregateInput
    _avg?: buildingsAvgOrderByAggregateInput
    _max?: buildingsMaxOrderByAggregateInput
    _min?: buildingsMinOrderByAggregateInput
    _sum?: buildingsSumOrderByAggregateInput
  }

  export type buildingsScalarWhereWithAggregatesInput = {
    AND?: buildingsScalarWhereWithAggregatesInput | buildingsScalarWhereWithAggregatesInput[]
    OR?: buildingsScalarWhereWithAggregatesInput[]
    NOT?: buildingsScalarWhereWithAggregatesInput | buildingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"buildings"> | number
    name?: StringWithAggregatesFilter<"buildings"> | string
    address?: StringNullableWithAggregatesFilter<"buildings"> | string | null
    code?: StringWithAggregatesFilter<"buildings"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"buildings"> | Date | string | null
  }

  export type blocksWhereInput = {
    AND?: blocksWhereInput | blocksWhereInput[]
    OR?: blocksWhereInput[]
    NOT?: blocksWhereInput | blocksWhereInput[]
    id?: IntFilter<"blocks"> | number
    name?: StringFilter<"blocks"> | string
    building_id?: IntFilter<"blocks"> | number
    created_at?: DateTimeNullableFilter<"blocks"> | Date | string | null
    User?: UserListRelationFilter
    buildings?: XOR<BuildingsScalarRelationFilter, buildingsWhereInput>
    maintenances?: MaintenanceListRelationFilter
  }

  export type blocksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    building_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
    buildings?: buildingsOrderByWithRelationInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type blocksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: blocksWhereInput | blocksWhereInput[]
    OR?: blocksWhereInput[]
    NOT?: blocksWhereInput | blocksWhereInput[]
    name?: StringFilter<"blocks"> | string
    building_id?: IntFilter<"blocks"> | number
    created_at?: DateTimeNullableFilter<"blocks"> | Date | string | null
    User?: UserListRelationFilter
    buildings?: XOR<BuildingsScalarRelationFilter, buildingsWhereInput>
    maintenances?: MaintenanceListRelationFilter
  }, "id">

  export type blocksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    building_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: blocksCountOrderByAggregateInput
    _avg?: blocksAvgOrderByAggregateInput
    _max?: blocksMaxOrderByAggregateInput
    _min?: blocksMinOrderByAggregateInput
    _sum?: blocksSumOrderByAggregateInput
  }

  export type blocksScalarWhereWithAggregatesInput = {
    AND?: blocksScalarWhereWithAggregatesInput | blocksScalarWhereWithAggregatesInput[]
    OR?: blocksScalarWhereWithAggregatesInput[]
    NOT?: blocksScalarWhereWithAggregatesInput | blocksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"blocks"> | number
    name?: StringWithAggregatesFilter<"blocks"> | string
    building_id?: IntWithAggregatesFilter<"blocks"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"blocks"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    roleCode?: IntFilter<"User"> | number
    unit?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    serviceType?: IntNullableFilter<"User"> | number | null
    buildingId?: IntNullableFilter<"User"> | number | null
    blockId?: IntNullableFilter<"User"> | number | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    approvedBy?: IntNullableFilter<"User"> | number | null
    blocks?: XOR<BlocksNullableScalarRelationFilter, blocksWhereInput> | null
    buildings?: XOR<BuildingsNullableScalarRelationFilter, buildingsWhereInput> | null
    approvedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedUsers?: UserListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    roleCode?: SortOrder
    unit?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    serviceType?: SortOrderInput | SortOrder
    buildingId?: SortOrderInput | SortOrder
    blockId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    blocks?: blocksOrderByWithRelationInput
    buildings?: buildingsOrderByWithRelationInput
    approvedByUser?: UserOrderByWithRelationInput
    approvedUsers?: UserOrderByRelationAggregateInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    roleCode?: IntFilter<"User"> | number
    unit?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    serviceType?: IntNullableFilter<"User"> | number | null
    buildingId?: IntNullableFilter<"User"> | number | null
    blockId?: IntNullableFilter<"User"> | number | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    approvedBy?: IntNullableFilter<"User"> | number | null
    blocks?: XOR<BlocksNullableScalarRelationFilter, blocksWhereInput> | null
    buildings?: XOR<BuildingsNullableScalarRelationFilter, buildingsWhereInput> | null
    approvedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedUsers?: UserListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    roleCode?: SortOrder
    unit?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    serviceType?: SortOrderInput | SortOrder
    buildingId?: SortOrderInput | SortOrder
    blockId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    roleCode?: IntWithAggregatesFilter<"User"> | number
    unit?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    serviceType?: IntNullableWithAggregatesFilter<"User"> | number | null
    buildingId?: IntNullableWithAggregatesFilter<"User"> | number | null
    blockId?: IntNullableWithAggregatesFilter<"User"> | number | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    approvedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    id?: IntFilter<"ServiceCategory"> | number
    name?: StringFilter<"ServiceCategory"> | string
    maintenances?: MaintenanceListRelationFilter
  }

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    maintenances?: MaintenanceListRelationFilter
  }, "id" | "name">

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ServiceCategoryCountOrderByAggregateInput
    _avg?: ServiceCategoryAvgOrderByAggregateInput
    _max?: ServiceCategoryMaxOrderByAggregateInput
    _min?: ServiceCategoryMinOrderByAggregateInput
    _sum?: ServiceCategorySumOrderByAggregateInput
  }

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceCategory"> | number
    name?: StringWithAggregatesFilter<"ServiceCategory"> | string
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    id?: IntFilter<"Maintenance"> | number
    task?: StringFilter<"Maintenance"> | string
    buildingId?: IntFilter<"Maintenance"> | number
    blockId?: IntFilter<"Maintenance"> | number
    subcontractor?: IntNullableFilter<"Maintenance"> | number | null
    category?: IntFilter<"Maintenance"> | number
    status?: StringFilter<"Maintenance"> | string
    comment?: StringNullableFilter<"Maintenance"> | string | null
    created_at?: DateTimeFilter<"Maintenance"> | Date | string
    dueTo?: DateTimeFilter<"Maintenance"> | Date | string
    building?: XOR<BuildingsScalarRelationFilter, buildingsWhereInput>
    block?: XOR<BlocksScalarRelationFilter, blocksWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    serviceCategory?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
  }

  export type MaintenanceOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    dueTo?: SortOrder
    building?: buildingsOrderByWithRelationInput
    block?: blocksOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    serviceCategory?: ServiceCategoryOrderByWithRelationInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    task?: StringFilter<"Maintenance"> | string
    buildingId?: IntFilter<"Maintenance"> | number
    blockId?: IntFilter<"Maintenance"> | number
    subcontractor?: IntNullableFilter<"Maintenance"> | number | null
    category?: IntFilter<"Maintenance"> | number
    status?: StringFilter<"Maintenance"> | string
    comment?: StringNullableFilter<"Maintenance"> | string | null
    created_at?: DateTimeFilter<"Maintenance"> | Date | string
    dueTo?: DateTimeFilter<"Maintenance"> | Date | string
    building?: XOR<BuildingsScalarRelationFilter, buildingsWhereInput>
    block?: XOR<BlocksScalarRelationFilter, blocksWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    serviceCategory?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
  }, "id">

  export type MaintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    dueTo?: SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _avg?: MaintenanceAvgOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
    _sum?: MaintenanceSumOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maintenance"> | number
    task?: StringWithAggregatesFilter<"Maintenance"> | string
    buildingId?: IntWithAggregatesFilter<"Maintenance"> | number
    blockId?: IntWithAggregatesFilter<"Maintenance"> | number
    subcontractor?: IntNullableWithAggregatesFilter<"Maintenance"> | number | null
    category?: IntWithAggregatesFilter<"Maintenance"> | number
    status?: StringWithAggregatesFilter<"Maintenance"> | string
    comment?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    dueTo?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
  }

  export type buildingsCreateInput = {
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBuildingsInput
    blocks?: blocksCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceCreateNestedManyWithoutBuildingInput
  }

  export type buildingsUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBuildingsInput
    blocks?: blocksUncheckedCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type buildingsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBuildingsNestedInput
    blocks?: blocksUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBuildingNestedInput
  }

  export type buildingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBuildingsNestedInput
    blocks?: blocksUncheckedUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type buildingsCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
  }

  export type buildingsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type buildingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blocksCreateInput = {
    name: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBlocksInput
    buildings: buildingsCreateNestedOneWithoutBlocksInput
    maintenances?: MaintenanceCreateNestedManyWithoutBlockInput
  }

  export type blocksUncheckedCreateInput = {
    id?: number
    name: string
    building_id: number
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBlocksInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBlockInput
  }

  export type blocksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBlocksNestedInput
    buildings?: buildingsUpdateOneRequiredWithoutBlocksNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBlockNestedInput
  }

  export type blocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    building_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBlocksNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type blocksCreateManyInput = {
    id?: number
    name: string
    building_id: number
    created_at?: Date | string | null
  }

  export type blocksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    building_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    blocks?: blocksCreateNestedOneWithoutUserInput
    buildings?: buildingsCreateNestedOneWithoutUserInput
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: blocksUpdateOneWithoutUserNestedInput
    buildings?: buildingsUpdateOneWithoutUserNestedInput
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCategoryCreateInput = {
    name: string
    maintenances?: MaintenanceCreateNestedManyWithoutServiceCategoryInput
  }

  export type ServiceCategoryUncheckedCreateInput = {
    id?: number
    name: string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutServiceCategoryInput
  }

  export type ServiceCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    maintenances?: MaintenanceUpdateManyWithoutServiceCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutServiceCategoryNestedInput
  }

  export type ServiceCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type ServiceCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceCreateInput = {
    task: string
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
    building: buildingsCreateNestedOneWithoutMaintenancesInput
    block: blocksCreateNestedOneWithoutMaintenancesInput
    user?: UserCreateNestedOneWithoutMaintenancesInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: buildingsUpdateOneRequiredWithoutMaintenancesNestedInput
    block?: blocksUpdateOneRequiredWithoutMaintenancesNestedInput
    user?: UserUpdateOneWithoutMaintenancesNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceCreateManyInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BlocksListRelationFilter = {
    every?: blocksWhereInput
    some?: blocksWhereInput
    none?: blocksWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type buildingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type buildingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type buildingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type buildingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type buildingsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BuildingsScalarRelationFilter = {
    is?: buildingsWhereInput
    isNot?: buildingsWhereInput
  }

  export type blocksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building_id?: SortOrder
    created_at?: SortOrder
  }

  export type blocksAvgOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
  }

  export type blocksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building_id?: SortOrder
    created_at?: SortOrder
  }

  export type blocksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building_id?: SortOrder
    created_at?: SortOrder
  }

  export type blocksSumOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BlocksNullableScalarRelationFilter = {
    is?: blocksWhereInput | null
    isNot?: blocksWhereInput | null
  }

  export type BuildingsNullableScalarRelationFilter = {
    is?: buildingsWhereInput | null
    isNot?: buildingsWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    roleCode?: SortOrder
    unit?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    serviceType?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    refreshToken?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleCode?: SortOrder
    serviceType?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    roleCode?: SortOrder
    unit?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    serviceType?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    refreshToken?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    roleCode?: SortOrder
    unit?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    serviceType?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    refreshToken?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleCode?: SortOrder
    serviceType?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    approvedBy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceCategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BlocksScalarRelationFilter = {
    is?: blocksWhereInput
    isNot?: blocksWhereInput
  }

  export type ServiceCategoryScalarRelationFilter = {
    is?: ServiceCategoryWhereInput
    isNot?: ServiceCategoryWhereInput
  }

  export type MaintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrder
    category?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    dueTo?: SortOrder
  }

  export type MaintenanceAvgOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrder
    category?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrder
    category?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    dueTo?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrder
    category?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    dueTo?: SortOrder
  }

  export type MaintenanceSumOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    blockId?: SortOrder
    subcontractor?: SortOrder
    category?: SortOrder
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

  export type UserCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput> | UserCreateWithoutBuildingsInput[] | UserUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuildingsInput | UserCreateOrConnectWithoutBuildingsInput[]
    createMany?: UserCreateManyBuildingsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type blocksCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput> | blocksCreateWithoutBuildingsInput[] | blocksUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: blocksCreateOrConnectWithoutBuildingsInput | blocksCreateOrConnectWithoutBuildingsInput[]
    createMany?: blocksCreateManyBuildingsInputEnvelope
    connect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutBuildingInput = {
    create?: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput> | MaintenanceCreateWithoutBuildingInput[] | MaintenanceUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBuildingInput | MaintenanceCreateOrConnectWithoutBuildingInput[]
    createMany?: MaintenanceCreateManyBuildingInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput> | UserCreateWithoutBuildingsInput[] | UserUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuildingsInput | UserCreateOrConnectWithoutBuildingsInput[]
    createMany?: UserCreateManyBuildingsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type blocksUncheckedCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput> | blocksCreateWithoutBuildingsInput[] | blocksUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: blocksCreateOrConnectWithoutBuildingsInput | blocksCreateOrConnectWithoutBuildingsInput[]
    createMany?: blocksCreateManyBuildingsInputEnvelope
    connect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput> | MaintenanceCreateWithoutBuildingInput[] | MaintenanceUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBuildingInput | MaintenanceCreateOrConnectWithoutBuildingInput[]
    createMany?: MaintenanceCreateManyBuildingInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput> | UserCreateWithoutBuildingsInput[] | UserUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuildingsInput | UserCreateOrConnectWithoutBuildingsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBuildingsInput | UserUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: UserCreateManyBuildingsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBuildingsInput | UserUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBuildingsInput | UserUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type blocksUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput> | blocksCreateWithoutBuildingsInput[] | blocksUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: blocksCreateOrConnectWithoutBuildingsInput | blocksCreateOrConnectWithoutBuildingsInput[]
    upsert?: blocksUpsertWithWhereUniqueWithoutBuildingsInput | blocksUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: blocksCreateManyBuildingsInputEnvelope
    set?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    disconnect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    delete?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    connect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    update?: blocksUpdateWithWhereUniqueWithoutBuildingsInput | blocksUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: blocksUpdateManyWithWhereWithoutBuildingsInput | blocksUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: blocksScalarWhereInput | blocksScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput> | MaintenanceCreateWithoutBuildingInput[] | MaintenanceUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBuildingInput | MaintenanceCreateOrConnectWithoutBuildingInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutBuildingInput | MaintenanceUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: MaintenanceCreateManyBuildingInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutBuildingInput | MaintenanceUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutBuildingInput | MaintenanceUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput> | UserCreateWithoutBuildingsInput[] | UserUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuildingsInput | UserCreateOrConnectWithoutBuildingsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBuildingsInput | UserUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: UserCreateManyBuildingsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBuildingsInput | UserUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBuildingsInput | UserUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type blocksUncheckedUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput> | blocksCreateWithoutBuildingsInput[] | blocksUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: blocksCreateOrConnectWithoutBuildingsInput | blocksCreateOrConnectWithoutBuildingsInput[]
    upsert?: blocksUpsertWithWhereUniqueWithoutBuildingsInput | blocksUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: blocksCreateManyBuildingsInputEnvelope
    set?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    disconnect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    delete?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    connect?: blocksWhereUniqueInput | blocksWhereUniqueInput[]
    update?: blocksUpdateWithWhereUniqueWithoutBuildingsInput | blocksUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: blocksUpdateManyWithWhereWithoutBuildingsInput | blocksUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: blocksScalarWhereInput | blocksScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput> | MaintenanceCreateWithoutBuildingInput[] | MaintenanceUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBuildingInput | MaintenanceCreateOrConnectWithoutBuildingInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutBuildingInput | MaintenanceUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: MaintenanceCreateManyBuildingInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutBuildingInput | MaintenanceUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutBuildingInput | MaintenanceUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutBlocksInput = {
    create?: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput> | UserCreateWithoutBlocksInput[] | UserUncheckedCreateWithoutBlocksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlocksInput | UserCreateOrConnectWithoutBlocksInput[]
    createMany?: UserCreateManyBlocksInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type buildingsCreateNestedOneWithoutBlocksInput = {
    create?: XOR<buildingsCreateWithoutBlocksInput, buildingsUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutBlocksInput
    connect?: buildingsWhereUniqueInput
  }

  export type MaintenanceCreateNestedManyWithoutBlockInput = {
    create?: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput> | MaintenanceCreateWithoutBlockInput[] | MaintenanceUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBlockInput | MaintenanceCreateOrConnectWithoutBlockInput[]
    createMany?: MaintenanceCreateManyBlockInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBlocksInput = {
    create?: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput> | UserCreateWithoutBlocksInput[] | UserUncheckedCreateWithoutBlocksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlocksInput | UserCreateOrConnectWithoutBlocksInput[]
    createMany?: UserCreateManyBlocksInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput> | MaintenanceCreateWithoutBlockInput[] | MaintenanceUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBlockInput | MaintenanceCreateOrConnectWithoutBlockInput[]
    createMany?: MaintenanceCreateManyBlockInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBlocksNestedInput = {
    create?: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput> | UserCreateWithoutBlocksInput[] | UserUncheckedCreateWithoutBlocksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlocksInput | UserCreateOrConnectWithoutBlocksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlocksInput | UserUpsertWithWhereUniqueWithoutBlocksInput[]
    createMany?: UserCreateManyBlocksInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlocksInput | UserUpdateWithWhereUniqueWithoutBlocksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlocksInput | UserUpdateManyWithWhereWithoutBlocksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type buildingsUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<buildingsCreateWithoutBlocksInput, buildingsUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutBlocksInput
    upsert?: buildingsUpsertWithoutBlocksInput
    connect?: buildingsWhereUniqueInput
    update?: XOR<XOR<buildingsUpdateToOneWithWhereWithoutBlocksInput, buildingsUpdateWithoutBlocksInput>, buildingsUncheckedUpdateWithoutBlocksInput>
  }

  export type MaintenanceUpdateManyWithoutBlockNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput> | MaintenanceCreateWithoutBlockInput[] | MaintenanceUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBlockInput | MaintenanceCreateOrConnectWithoutBlockInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutBlockInput | MaintenanceUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: MaintenanceCreateManyBlockInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutBlockInput | MaintenanceUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutBlockInput | MaintenanceUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBlocksNestedInput = {
    create?: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput> | UserCreateWithoutBlocksInput[] | UserUncheckedCreateWithoutBlocksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlocksInput | UserCreateOrConnectWithoutBlocksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlocksInput | UserUpsertWithWhereUniqueWithoutBlocksInput[]
    createMany?: UserCreateManyBlocksInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlocksInput | UserUpdateWithWhereUniqueWithoutBlocksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlocksInput | UserUpdateManyWithWhereWithoutBlocksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput> | MaintenanceCreateWithoutBlockInput[] | MaintenanceUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBlockInput | MaintenanceCreateOrConnectWithoutBlockInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutBlockInput | MaintenanceUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: MaintenanceCreateManyBlockInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutBlockInput | MaintenanceUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutBlockInput | MaintenanceUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type blocksCreateNestedOneWithoutUserInput = {
    create?: XOR<blocksCreateWithoutUserInput, blocksUncheckedCreateWithoutUserInput>
    connectOrCreate?: blocksCreateOrConnectWithoutUserInput
    connect?: blocksWhereUniqueInput
  }

  export type buildingsCreateNestedOneWithoutUserInput = {
    create?: XOR<buildingsCreateWithoutUserInput, buildingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutUserInput
    connect?: buildingsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedUsersInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutApprovedByUserInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutApprovedByUserInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type blocksUpdateOneWithoutUserNestedInput = {
    create?: XOR<blocksCreateWithoutUserInput, blocksUncheckedCreateWithoutUserInput>
    connectOrCreate?: blocksCreateOrConnectWithoutUserInput
    upsert?: blocksUpsertWithoutUserInput
    disconnect?: blocksWhereInput | boolean
    delete?: blocksWhereInput | boolean
    connect?: blocksWhereUniqueInput
    update?: XOR<XOR<blocksUpdateToOneWithWhereWithoutUserInput, blocksUpdateWithoutUserInput>, blocksUncheckedUpdateWithoutUserInput>
  }

  export type buildingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<buildingsCreateWithoutUserInput, buildingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutUserInput
    upsert?: buildingsUpsertWithoutUserInput
    disconnect?: buildingsWhereInput | boolean
    delete?: buildingsWhereInput | boolean
    connect?: buildingsWhereUniqueInput
    update?: XOR<XOR<buildingsUpdateToOneWithWhereWithoutUserInput, buildingsUpdateWithoutUserInput>, buildingsUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateOneWithoutApprovedUsersNestedInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    upsert?: UserUpsertWithoutApprovedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedUsersInput, UserUpdateWithoutApprovedUsersInput>, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type UserUpdateManyWithoutApprovedByUserNestedInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApprovedByUserInput | UserUpsertWithWhereUniqueWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApprovedByUserInput | UserUpdateWithWhereUniqueWithoutApprovedByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApprovedByUserInput | UserUpdateManyWithWhereWithoutApprovedByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutUserInput | MaintenanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutUserInput | MaintenanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutUserInput | MaintenanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutApprovedByUserNestedInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApprovedByUserInput | UserUpsertWithWhereUniqueWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApprovedByUserInput | UserUpdateWithWhereUniqueWithoutApprovedByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApprovedByUserInput | UserUpdateManyWithWhereWithoutApprovedByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutUserInput | MaintenanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutUserInput | MaintenanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutUserInput | MaintenanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type MaintenanceCreateNestedManyWithoutServiceCategoryInput = {
    create?: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput> | MaintenanceCreateWithoutServiceCategoryInput[] | MaintenanceUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceCategoryInput | MaintenanceCreateOrConnectWithoutServiceCategoryInput[]
    createMany?: MaintenanceCreateManyServiceCategoryInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutServiceCategoryInput = {
    create?: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput> | MaintenanceCreateWithoutServiceCategoryInput[] | MaintenanceUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceCategoryInput | MaintenanceCreateOrConnectWithoutServiceCategoryInput[]
    createMany?: MaintenanceCreateManyServiceCategoryInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type MaintenanceUpdateManyWithoutServiceCategoryNestedInput = {
    create?: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput> | MaintenanceCreateWithoutServiceCategoryInput[] | MaintenanceUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceCategoryInput | MaintenanceCreateOrConnectWithoutServiceCategoryInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutServiceCategoryInput | MaintenanceUpsertWithWhereUniqueWithoutServiceCategoryInput[]
    createMany?: MaintenanceCreateManyServiceCategoryInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutServiceCategoryInput | MaintenanceUpdateWithWhereUniqueWithoutServiceCategoryInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutServiceCategoryInput | MaintenanceUpdateManyWithWhereWithoutServiceCategoryInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutServiceCategoryNestedInput = {
    create?: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput> | MaintenanceCreateWithoutServiceCategoryInput[] | MaintenanceUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceCategoryInput | MaintenanceCreateOrConnectWithoutServiceCategoryInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutServiceCategoryInput | MaintenanceUpsertWithWhereUniqueWithoutServiceCategoryInput[]
    createMany?: MaintenanceCreateManyServiceCategoryInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutServiceCategoryInput | MaintenanceUpdateWithWhereUniqueWithoutServiceCategoryInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutServiceCategoryInput | MaintenanceUpdateManyWithWhereWithoutServiceCategoryInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type buildingsCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<buildingsCreateWithoutMaintenancesInput, buildingsUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutMaintenancesInput
    connect?: buildingsWhereUniqueInput
  }

  export type blocksCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<blocksCreateWithoutMaintenancesInput, blocksUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: blocksCreateOrConnectWithoutMaintenancesInput
    connect?: blocksWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCategoryCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<ServiceCategoryCreateWithoutMaintenancesInput, ServiceCategoryUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutMaintenancesInput
    connect?: ServiceCategoryWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type buildingsUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<buildingsCreateWithoutMaintenancesInput, buildingsUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: buildingsCreateOrConnectWithoutMaintenancesInput
    upsert?: buildingsUpsertWithoutMaintenancesInput
    connect?: buildingsWhereUniqueInput
    update?: XOR<XOR<buildingsUpdateToOneWithWhereWithoutMaintenancesInput, buildingsUpdateWithoutMaintenancesInput>, buildingsUncheckedUpdateWithoutMaintenancesInput>
  }

  export type blocksUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<blocksCreateWithoutMaintenancesInput, blocksUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: blocksCreateOrConnectWithoutMaintenancesInput
    upsert?: blocksUpsertWithoutMaintenancesInput
    connect?: blocksWhereUniqueInput
    update?: XOR<XOR<blocksUpdateToOneWithWhereWithoutMaintenancesInput, blocksUpdateWithoutMaintenancesInput>, blocksUncheckedUpdateWithoutMaintenancesInput>
  }

  export type UserUpdateOneWithoutMaintenancesNestedInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    upsert?: UserUpsertWithoutMaintenancesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenancesInput, UserUpdateWithoutMaintenancesInput>, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type ServiceCategoryUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutMaintenancesInput, ServiceCategoryUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutMaintenancesInput
    upsert?: ServiceCategoryUpsertWithoutMaintenancesInput
    connect?: ServiceCategoryWhereUniqueInput
    update?: XOR<XOR<ServiceCategoryUpdateToOneWithWhereWithoutMaintenancesInput, ServiceCategoryUpdateWithoutMaintenancesInput>, ServiceCategoryUncheckedUpdateWithoutMaintenancesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UserCreateWithoutBuildingsInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    blocks?: blocksCreateNestedOneWithoutUserInput
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBuildingsInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBuildingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput>
  }

  export type UserCreateManyBuildingsInputEnvelope = {
    data: UserCreateManyBuildingsInput | UserCreateManyBuildingsInput[]
    skipDuplicates?: boolean
  }

  export type blocksCreateWithoutBuildingsInput = {
    name: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBlocksInput
    maintenances?: MaintenanceCreateNestedManyWithoutBlockInput
  }

  export type blocksUncheckedCreateWithoutBuildingsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBlocksInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBlockInput
  }

  export type blocksCreateOrConnectWithoutBuildingsInput = {
    where: blocksWhereUniqueInput
    create: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput>
  }

  export type blocksCreateManyBuildingsInputEnvelope = {
    data: blocksCreateManyBuildingsInput | blocksCreateManyBuildingsInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceCreateWithoutBuildingInput = {
    task: string
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
    block: blocksCreateNestedOneWithoutMaintenancesInput
    user?: UserCreateNestedOneWithoutMaintenancesInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutBuildingInput = {
    id?: number
    task: string
    blockId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceCreateOrConnectWithoutBuildingInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput>
  }

  export type MaintenanceCreateManyBuildingInputEnvelope = {
    data: MaintenanceCreateManyBuildingInput | MaintenanceCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBuildingsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBuildingsInput, UserUncheckedUpdateWithoutBuildingsInput>
    create: XOR<UserCreateWithoutBuildingsInput, UserUncheckedCreateWithoutBuildingsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBuildingsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBuildingsInput, UserUncheckedUpdateWithoutBuildingsInput>
  }

  export type UserUpdateManyWithWhereWithoutBuildingsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBuildingsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    roleCode?: IntFilter<"User"> | number
    unit?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    serviceType?: IntNullableFilter<"User"> | number | null
    buildingId?: IntNullableFilter<"User"> | number | null
    blockId?: IntNullableFilter<"User"> | number | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    approvedBy?: IntNullableFilter<"User"> | number | null
  }

  export type blocksUpsertWithWhereUniqueWithoutBuildingsInput = {
    where: blocksWhereUniqueInput
    update: XOR<blocksUpdateWithoutBuildingsInput, blocksUncheckedUpdateWithoutBuildingsInput>
    create: XOR<blocksCreateWithoutBuildingsInput, blocksUncheckedCreateWithoutBuildingsInput>
  }

  export type blocksUpdateWithWhereUniqueWithoutBuildingsInput = {
    where: blocksWhereUniqueInput
    data: XOR<blocksUpdateWithoutBuildingsInput, blocksUncheckedUpdateWithoutBuildingsInput>
  }

  export type blocksUpdateManyWithWhereWithoutBuildingsInput = {
    where: blocksScalarWhereInput
    data: XOR<blocksUpdateManyMutationInput, blocksUncheckedUpdateManyWithoutBuildingsInput>
  }

  export type blocksScalarWhereInput = {
    AND?: blocksScalarWhereInput | blocksScalarWhereInput[]
    OR?: blocksScalarWhereInput[]
    NOT?: blocksScalarWhereInput | blocksScalarWhereInput[]
    id?: IntFilter<"blocks"> | number
    name?: StringFilter<"blocks"> | string
    building_id?: IntFilter<"blocks"> | number
    created_at?: DateTimeNullableFilter<"blocks"> | Date | string | null
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutBuildingInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutBuildingInput, MaintenanceUncheckedUpdateWithoutBuildingInput>
    create: XOR<MaintenanceCreateWithoutBuildingInput, MaintenanceUncheckedCreateWithoutBuildingInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutBuildingInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutBuildingInput, MaintenanceUncheckedUpdateWithoutBuildingInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutBuildingInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutBuildingInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    id?: IntFilter<"Maintenance"> | number
    task?: StringFilter<"Maintenance"> | string
    buildingId?: IntFilter<"Maintenance"> | number
    blockId?: IntFilter<"Maintenance"> | number
    subcontractor?: IntNullableFilter<"Maintenance"> | number | null
    category?: IntFilter<"Maintenance"> | number
    status?: StringFilter<"Maintenance"> | string
    comment?: StringNullableFilter<"Maintenance"> | string | null
    created_at?: DateTimeFilter<"Maintenance"> | Date | string
    dueTo?: DateTimeFilter<"Maintenance"> | Date | string
  }

  export type UserCreateWithoutBlocksInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    buildings?: buildingsCreateNestedOneWithoutUserInput
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlocksInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput>
  }

  export type UserCreateManyBlocksInputEnvelope = {
    data: UserCreateManyBlocksInput | UserCreateManyBlocksInput[]
    skipDuplicates?: boolean
  }

  export type buildingsCreateWithoutBlocksInput = {
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceCreateNestedManyWithoutBuildingInput
  }

  export type buildingsUncheckedCreateWithoutBlocksInput = {
    id?: number
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type buildingsCreateOrConnectWithoutBlocksInput = {
    where: buildingsWhereUniqueInput
    create: XOR<buildingsCreateWithoutBlocksInput, buildingsUncheckedCreateWithoutBlocksInput>
  }

  export type MaintenanceCreateWithoutBlockInput = {
    task: string
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
    building: buildingsCreateNestedOneWithoutMaintenancesInput
    user?: UserCreateNestedOneWithoutMaintenancesInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutBlockInput = {
    id?: number
    task: string
    buildingId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceCreateOrConnectWithoutBlockInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput>
  }

  export type MaintenanceCreateManyBlockInputEnvelope = {
    data: MaintenanceCreateManyBlockInput | MaintenanceCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBlocksInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBlocksInput, UserUncheckedUpdateWithoutBlocksInput>
    create: XOR<UserCreateWithoutBlocksInput, UserUncheckedCreateWithoutBlocksInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBlocksInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBlocksInput, UserUncheckedUpdateWithoutBlocksInput>
  }

  export type UserUpdateManyWithWhereWithoutBlocksInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBlocksInput>
  }

  export type buildingsUpsertWithoutBlocksInput = {
    update: XOR<buildingsUpdateWithoutBlocksInput, buildingsUncheckedUpdateWithoutBlocksInput>
    create: XOR<buildingsCreateWithoutBlocksInput, buildingsUncheckedCreateWithoutBlocksInput>
    where?: buildingsWhereInput
  }

  export type buildingsUpdateToOneWithWhereWithoutBlocksInput = {
    where?: buildingsWhereInput
    data: XOR<buildingsUpdateWithoutBlocksInput, buildingsUncheckedUpdateWithoutBlocksInput>
  }

  export type buildingsUpdateWithoutBlocksInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBuildingNestedInput
  }

  export type buildingsUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutBlockInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutBlockInput, MaintenanceUncheckedUpdateWithoutBlockInput>
    create: XOR<MaintenanceCreateWithoutBlockInput, MaintenanceUncheckedCreateWithoutBlockInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutBlockInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutBlockInput, MaintenanceUncheckedUpdateWithoutBlockInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutBlockInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutBlockInput>
  }

  export type blocksCreateWithoutUserInput = {
    name: string
    created_at?: Date | string | null
    buildings: buildingsCreateNestedOneWithoutBlocksInput
    maintenances?: MaintenanceCreateNestedManyWithoutBlockInput
  }

  export type blocksUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    building_id: number
    created_at?: Date | string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBlockInput
  }

  export type blocksCreateOrConnectWithoutUserInput = {
    where: blocksWhereUniqueInput
    create: XOR<blocksCreateWithoutUserInput, blocksUncheckedCreateWithoutUserInput>
  }

  export type buildingsCreateWithoutUserInput = {
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    blocks?: blocksCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceCreateNestedManyWithoutBuildingInput
  }

  export type buildingsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    blocks?: blocksUncheckedCreateNestedManyWithoutBuildingsInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type buildingsCreateOrConnectWithoutUserInput = {
    where: buildingsWhereUniqueInput
    create: XOR<buildingsCreateWithoutUserInput, buildingsUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutApprovedUsersInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    blocks?: blocksCreateNestedOneWithoutUserInput
    buildings?: buildingsCreateNestedOneWithoutUserInput
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovedUsersInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
  }

  export type UserCreateWithoutApprovedByUserInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    blocks?: blocksCreateNestedOneWithoutUserInput
    buildings?: buildingsCreateNestedOneWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovedByUserInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput>
  }

  export type UserCreateManyApprovedByUserInputEnvelope = {
    data: UserCreateManyApprovedByUserInput | UserCreateManyApprovedByUserInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceCreateWithoutUserInput = {
    task: string
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
    building: buildingsCreateNestedOneWithoutMaintenancesInput
    block: blocksCreateNestedOneWithoutMaintenancesInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutUserInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceCreateOrConnectWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput>
  }

  export type MaintenanceCreateManyUserInputEnvelope = {
    data: MaintenanceCreateManyUserInput | MaintenanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blocksUpsertWithoutUserInput = {
    update: XOR<blocksUpdateWithoutUserInput, blocksUncheckedUpdateWithoutUserInput>
    create: XOR<blocksCreateWithoutUserInput, blocksUncheckedCreateWithoutUserInput>
    where?: blocksWhereInput
  }

  export type blocksUpdateToOneWithWhereWithoutUserInput = {
    where?: blocksWhereInput
    data: XOR<blocksUpdateWithoutUserInput, blocksUncheckedUpdateWithoutUserInput>
  }

  export type blocksUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildings?: buildingsUpdateOneRequiredWithoutBlocksNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBlockNestedInput
  }

  export type blocksUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    building_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type buildingsUpsertWithoutUserInput = {
    update: XOR<buildingsUpdateWithoutUserInput, buildingsUncheckedUpdateWithoutUserInput>
    create: XOR<buildingsCreateWithoutUserInput, buildingsUncheckedCreateWithoutUserInput>
    where?: buildingsWhereInput
  }

  export type buildingsUpdateToOneWithWhereWithoutUserInput = {
    where?: buildingsWhereInput
    data: XOR<buildingsUpdateWithoutUserInput, buildingsUncheckedUpdateWithoutUserInput>
  }

  export type buildingsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blocks?: blocksUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBuildingNestedInput
  }

  export type buildingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blocks?: blocksUncheckedUpdateManyWithoutBuildingsNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type UserUpsertWithoutApprovedUsersInput = {
    update: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type UserUpdateWithoutApprovedUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: blocksUpdateOneWithoutUserNestedInput
    buildings?: buildingsUpdateOneWithoutUserNestedInput
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutApprovedByUserInput, UserUncheckedUpdateWithoutApprovedByUserInput>
    create: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutApprovedByUserInput, UserUncheckedUpdateWithoutApprovedByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutApprovedByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutApprovedByUserInput>
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutUserInput, MaintenanceUncheckedUpdateWithoutUserInput>
    create: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutUserInput, MaintenanceUncheckedUpdateWithoutUserInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutUserInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutUserInput>
  }

  export type MaintenanceCreateWithoutServiceCategoryInput = {
    task: string
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
    building: buildingsCreateNestedOneWithoutMaintenancesInput
    block: blocksCreateNestedOneWithoutMaintenancesInput
    user?: UserCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutServiceCategoryInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    subcontractor?: number | null
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceCreateOrConnectWithoutServiceCategoryInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput>
  }

  export type MaintenanceCreateManyServiceCategoryInputEnvelope = {
    data: MaintenanceCreateManyServiceCategoryInput | MaintenanceCreateManyServiceCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutServiceCategoryInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutServiceCategoryInput, MaintenanceUncheckedUpdateWithoutServiceCategoryInput>
    create: XOR<MaintenanceCreateWithoutServiceCategoryInput, MaintenanceUncheckedCreateWithoutServiceCategoryInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutServiceCategoryInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutServiceCategoryInput, MaintenanceUncheckedUpdateWithoutServiceCategoryInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutServiceCategoryInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutServiceCategoryInput>
  }

  export type buildingsCreateWithoutMaintenancesInput = {
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBuildingsInput
    blocks?: blocksCreateNestedManyWithoutBuildingsInput
  }

  export type buildingsUncheckedCreateWithoutMaintenancesInput = {
    id?: number
    name: string
    address?: string | null
    code: string
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBuildingsInput
    blocks?: blocksUncheckedCreateNestedManyWithoutBuildingsInput
  }

  export type buildingsCreateOrConnectWithoutMaintenancesInput = {
    where: buildingsWhereUniqueInput
    create: XOR<buildingsCreateWithoutMaintenancesInput, buildingsUncheckedCreateWithoutMaintenancesInput>
  }

  export type blocksCreateWithoutMaintenancesInput = {
    name: string
    created_at?: Date | string | null
    User?: UserCreateNestedManyWithoutBlocksInput
    buildings: buildingsCreateNestedOneWithoutBlocksInput
  }

  export type blocksUncheckedCreateWithoutMaintenancesInput = {
    id?: number
    name: string
    building_id: number
    created_at?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutBlocksInput
  }

  export type blocksCreateOrConnectWithoutMaintenancesInput = {
    where: blocksWhereUniqueInput
    create: XOR<blocksCreateWithoutMaintenancesInput, blocksUncheckedCreateWithoutMaintenancesInput>
  }

  export type UserCreateWithoutMaintenancesInput = {
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    refreshToken?: string | null
    blocks?: blocksCreateNestedOneWithoutUserInput
    buildings?: buildingsCreateNestedOneWithoutUserInput
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
  }

  export type UserUncheckedCreateWithoutMaintenancesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
  }

  export type UserCreateOrConnectWithoutMaintenancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
  }

  export type ServiceCategoryCreateWithoutMaintenancesInput = {
    name: string
  }

  export type ServiceCategoryUncheckedCreateWithoutMaintenancesInput = {
    id?: number
    name: string
  }

  export type ServiceCategoryCreateOrConnectWithoutMaintenancesInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutMaintenancesInput, ServiceCategoryUncheckedCreateWithoutMaintenancesInput>
  }

  export type buildingsUpsertWithoutMaintenancesInput = {
    update: XOR<buildingsUpdateWithoutMaintenancesInput, buildingsUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<buildingsCreateWithoutMaintenancesInput, buildingsUncheckedCreateWithoutMaintenancesInput>
    where?: buildingsWhereInput
  }

  export type buildingsUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: buildingsWhereInput
    data: XOR<buildingsUpdateWithoutMaintenancesInput, buildingsUncheckedUpdateWithoutMaintenancesInput>
  }

  export type buildingsUpdateWithoutMaintenancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBuildingsNestedInput
    blocks?: blocksUpdateManyWithoutBuildingsNestedInput
  }

  export type buildingsUncheckedUpdateWithoutMaintenancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBuildingsNestedInput
    blocks?: blocksUncheckedUpdateManyWithoutBuildingsNestedInput
  }

  export type blocksUpsertWithoutMaintenancesInput = {
    update: XOR<blocksUpdateWithoutMaintenancesInput, blocksUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<blocksCreateWithoutMaintenancesInput, blocksUncheckedCreateWithoutMaintenancesInput>
    where?: blocksWhereInput
  }

  export type blocksUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: blocksWhereInput
    data: XOR<blocksUpdateWithoutMaintenancesInput, blocksUncheckedUpdateWithoutMaintenancesInput>
  }

  export type blocksUpdateWithoutMaintenancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBlocksNestedInput
    buildings?: buildingsUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type blocksUncheckedUpdateWithoutMaintenancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    building_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBlocksNestedInput
  }

  export type UserUpsertWithoutMaintenancesInput = {
    update: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type UserUpdateWithoutMaintenancesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: blocksUpdateOneWithoutUserNestedInput
    buildings?: buildingsUpdateOneWithoutUserNestedInput
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
  }

  export type ServiceCategoryUpsertWithoutMaintenancesInput = {
    update: XOR<ServiceCategoryUpdateWithoutMaintenancesInput, ServiceCategoryUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<ServiceCategoryCreateWithoutMaintenancesInput, ServiceCategoryUncheckedCreateWithoutMaintenancesInput>
    where?: ServiceCategoryWhereInput
  }

  export type ServiceCategoryUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: ServiceCategoryWhereInput
    data: XOR<ServiceCategoryUpdateWithoutMaintenancesInput, ServiceCategoryUncheckedUpdateWithoutMaintenancesInput>
  }

  export type ServiceCategoryUpdateWithoutMaintenancesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCategoryUncheckedUpdateWithoutMaintenancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyBuildingsInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    blockId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
  }

  export type blocksCreateManyBuildingsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type MaintenanceCreateManyBuildingInput = {
    id?: number
    task: string
    blockId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type UserUpdateWithoutBuildingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: blocksUpdateOneWithoutUserNestedInput
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBuildingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBuildingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type blocksUpdateWithoutBuildingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutBlocksNestedInput
    maintenances?: MaintenanceUpdateManyWithoutBlockNestedInput
  }

  export type blocksUncheckedUpdateWithoutBuildingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutBlocksNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type blocksUncheckedUpdateManyWithoutBuildingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceUpdateWithoutBuildingInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: blocksUpdateOneRequiredWithoutMaintenancesNestedInput
    user?: UserUpdateOneWithoutMaintenancesNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutBuildingInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutBuildingInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBlocksInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    refreshToken?: string | null
    approvedBy?: number | null
  }

  export type MaintenanceCreateManyBlockInput = {
    id?: number
    task: string
    buildingId: number
    subcontractor?: number | null
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type UserUpdateWithoutBlocksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    buildings?: buildingsUpdateOneWithoutUserNestedInput
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaintenanceUpdateWithoutBlockInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: buildingsUpdateOneRequiredWithoutMaintenancesNestedInput
    user?: UserUpdateOneWithoutMaintenancesNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyApprovedByUserInput = {
    id?: number
    email: string
    password: string
    fullName: string
    roleCode: number
    unit?: string | null
    companyName?: string | null
    phone?: string | null
    serviceType?: number | null
    buildingId?: number | null
    blockId?: number | null
    refreshToken?: string | null
  }

  export type MaintenanceCreateManyUserInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    category: number
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type UserUpdateWithoutApprovedByUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: blocksUpdateOneWithoutUserNestedInput
    buildings?: buildingsUpdateOneWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutApprovedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleCode?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableIntFieldUpdateOperationsInput | number | null
    buildingId?: NullableIntFieldUpdateOperationsInput | number | null
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUpdateWithoutUserInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: buildingsUpdateOneRequiredWithoutMaintenancesNestedInput
    block?: blocksUpdateOneRequiredWithoutMaintenancesNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceCreateManyServiceCategoryInput = {
    id?: number
    task: string
    buildingId: number
    blockId: number
    subcontractor?: number | null
    status: string
    comment?: string | null
    created_at?: Date | string
    dueTo: Date | string
  }

  export type MaintenanceUpdateWithoutServiceCategoryInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: buildingsUpdateOneRequiredWithoutMaintenancesNestedInput
    block?: blocksUpdateOneRequiredWithoutMaintenancesNestedInput
    user?: UserUpdateOneWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutServiceCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutServiceCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    subcontractor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dueTo?: DateTimeFieldUpdateOperationsInput | Date | string
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