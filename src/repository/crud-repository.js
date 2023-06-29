class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("SOmething went wrong in crud repo");
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log("SOmething went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try {
            const response = await this.model.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log("SOmething went wrong in crud repo");
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.findByIdAndUpdate(id,data);
            return response;
        } catch (error) {
            console.log("SOmething went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository