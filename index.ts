import {
   ModelCtor,
   Model,
   FindOptions,
   BuildOptions,
   UpdateOptions,
} from 'sequelize/types';

// For object types
interface More {
   [key: string]: any;
}

export class CrudService<T extends any = ModelCtor<Model>> {
   model: ModelCtor<Model<any, any>>;

   constructor(model: any) {
      this.model = model;
   }

   async findAll(options: FindOptions = {}): Promise<T[]> {
      const data = (await this.model.findAll(options)) as any;
      return data;
   }

   async findOne(options: FindOptions): Promise<T> {
      const data = (await this.model.findOne(options)) as any;
      return data;
   }

   async create(input: More, options: BuildOptions = {}): Promise<T> {
      const data = new this.model(input, options) as any;
      return await data.save();
   }

   async updateOrCreate(where: { where: More }, input: More): Promise<T> {
      let data = undefined;
      const is = await this.findOne(where);

      if (is) {
         data = await this.update(input, where, where);
      } else {
         data = await this.create(input);
      }
      return data;
   }

   async update(
      input: More,
      options: UpdateOptions,
      findOptions: FindOptions,
   ): Promise<T> {
      await this.model.update(input, options);
      const data = await this.findOne(findOptions);
      return data;
   }

   async delete(options: FindOptions): Promise<T> {
      const data = await this.findOne(options);
      data && (await data.destroy());
      return data;
   }
}
