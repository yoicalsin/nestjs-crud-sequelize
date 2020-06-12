import { ModelCtor, Model, FindOptions, BuildOptions, UpdateOptions } from 'sequelize/types';
interface More {
    [key: string]: any;
}
export declare class CrudService<T extends any = ModelCtor<Model>> {
    model: ModelCtor<Model<any, any>>;
    constructor(model: any);
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
