import { Service } from 'egg';

class DanmuService extends Service {
    async query({ page, size, sortBy, sortOrder, title, player, target }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.text = { $regex: title, $options: '$i' });
        player && (query.player = player);
        target && (query.target = target);

        const result = await this.ctx.model.Danmu.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate('target', 'title _id');

        const total = await this.ctx.model.Danmu.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Danmu.findById(id).populate('target');
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Danmu.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Danmu.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Danmu.deleteMany(query);
        return result;
    }
}

export default DanmuService;