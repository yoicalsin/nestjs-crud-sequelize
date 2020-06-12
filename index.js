"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrudService {
    constructor(model) {
        this.model = model;
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
