const Hashtag = require('../model/hashtag');

class HashtagRepository{

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(offset, limit) {
        try {
            const tags = await Hashtag.find().skip(offset).limit(limit);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 
    
    async destroy(id){
        try {
            await Hashtag.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByNameTitleOnly(titleList){
        var usersProjection = { 
            title: true,
            _id: false
        };
        try {
            // console.log(titleList)
            const tags = await Hashtag.find({
                title : titleList
            },usersProjection);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByName(titleList){
        try {
            // console.log(titleList)
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = HashtagRepository