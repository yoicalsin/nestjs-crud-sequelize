"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrudService {
    constructor(model) {
        this.model = model;
    }
    async paginate(options = {}) {
        const { page, offset } = Object.assign({ page: 1, offset: 25 }, options);
        const end = page * offset;
        const start = end - offset;
        const data = await this.model.findAndCountAll(Object.assign(Object.assign({}, options), { limit: options.offset, offset: start }));
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
    async findAll(options = {}) {
        const data = (await this.model.findAll(options));
        return data;
    }
    async findOne(options) {
        const data = (await this.model.findOne(options));
        return data;
    }
    async create(input, options = {}) {
        const data = new this.model(input, options);
        return await data.save();
    }
    async updateOrCreate(where, input) {
        let data = undefined;
        const is = await this.findOne(where);
        if (is) {
            data = await this.update(input, where, where);
        }
        else {
            data = await this.create(input);
        }
        return data;
    }
    async update(input, options, findOptions) {
        await this.model.update(input, options);
        const data = await this.findOne(findOptions);
        return data;
    }
    async delete(options) {
        const data = await this.findOne(options);
        data && (await data.destroy());
        return data;
    }
}
exports.CrudService = CrudService;
