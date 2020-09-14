import { BuildOptions, FindAndCountOptions, FindOptions, Model, ModelCtor, UpdateOptions } from 'sequelize/types';
interface PaginateOptions extends FindAndCountOptions {
    page?: number;
}
interface More<T = any> {
    [key: string]: T;
}
export declare class CrudService<T extends any = ModelCtor<Model>> {
    model: T & ModelCtor<Model<any, any>>;
    constructor(model: any);
    paginate(options?: PaginateOptions): Promise<{
        total: number;
        page: number;
        totalPages: number;
        items: Model<unknown, unknown>[];
        next: number;
        prev: number;
    }>;
    findAll(options?: FindOptions): Promise<T[]>;
    findOne(options: FindOptions): Promise<T>;
    create(input: More, options?: BuildOptions): Promise<T>;
    updateOrCreate(where: {
        where: More;
    }, input: More): Promise<T>;
    update(input: More, options: UpdateOptions, findOptions: FindOptions): Promise<T>;
    delete(options: FindOptions): Promise<T>;
}
export {};
