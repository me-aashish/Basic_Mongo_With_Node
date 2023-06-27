const { TweetRepository } = require('../repository/index');

class TweetService{

    constructor(){
        this.TweetRepository = new this.TweetRepository();
    }

    async create(data){
        try {
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map( (tag) => tag.substring(1));
            console.log(tags);

            const tweet = await this.TweetRepository.create(data);
            return tweet
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
    
}