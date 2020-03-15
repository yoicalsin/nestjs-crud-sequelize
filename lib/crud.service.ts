import { More } from './interfaces/more';
import {
   ModelCtor,
   Model,
   FindOptions,
   BuildOptions,
   UpdateOptions,
} from 'sequelize/types';
export class CrudService<T = More> {
   model: ModelCtor<Model<T, T>>;

   constructor(model: ModelCtor<Model<T, T>>) {
      this.model = model;
   }

   async findAll(options: FindOptions = {}): Promise<Model<T, T>[]> {
      const data = await this.model.findAll(options);
      return data;
   }

   async findOne(options: FindOptions): Promise<Model<T, T>> {
      const data = await this.model.findOne(options);
      return data;
   }

   async create(input: More, options: BuildOptions = {}): Promise<Model<T, T>> {
      const data = new this.model(input, options);
      return await data.save();
   }

   async update(
      input: More,
      options: UpdateOptions,
      findOptions: FindOptions,
   ): Promise<Model<T, T>> {
      await this.model.update(input, options);
      const data = await this.findOne(findOptions);
      return data;
   }

   async delete(options: FindOptions): Promise<Model<T, T>> {
      const data = await this.findOne(options);
      data && (await data.destroy());
      return data;
   }
}
