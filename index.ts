import {
   BuildOptions,
   FindAndCountOptions,
   FindOptions,
   Model,
   ModelCtor,
   UpdateOptions,
} from 'sequelize/types';

interface PaginateOptions extends FindAndCountOptions {
   page?: number;
}

interface More<T = any> {
   [key: string]: T;
}

export class CrudService<T extends any = ModelCtor<Model>> {
   model: T & ModelCtor<Model<any, any>>;

   constructor(model: any) {
      this.model = model;
   }

   async paginate(options: PaginateOptions = {}) {
      const { page, offset } = {
         page: 1,
         offset: 25,
         ...options,
      };
      const end = page * offset;
      const start = end - offset;

      const data = await this.model.findAndCountAll({
         ...options,
         limit: options.offset,
         offset: start,
      });

      const total = data.count;
      const totalPages = Math.ceil(total / offset);
      const next = page + 1 <= totalPages ? page + 1 : null;
      const prev = page - 1 >= 1 ? page - 1 : null;

      return {
         total,
         page,
         totalPages,
         items: data.rows,
         next,
         prev,
      };
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
      const data: any = await this.findOne(options);
      data && (await data.destroy());
      return data;
   }
}
