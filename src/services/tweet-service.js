const { TweetRepository, HashtagRepository } = require('../repository/index');

class TweetService{

    constructor(){
        this.TweetRepository = new this.TweetRepository();
        this.HashtagRepository = new this.HashtagRepository();
    }

    async create(data){
        try {

            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map( (tag) => tag.substring(1));
            console.log(tags);

            const tweet = await this.TweetRepository.create(data);

            /**
             * todo create hashtags - 
             *  1. bilkcreate in mongoose
             *  2. filter title of hashtags based on multiple tags
             *  3. how to add tweet id inside all the hashtags
            */

            let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
            let titleOfPresetnTags  = alreadyPresentTags.map((tags) => tags.title);
            let newTags = tags.filter((tag) => !titleOfPresetnTags.includes(tag));
            newTags = newTags.map(tag => {
                return {
                    title : tag,
                    tweets : [tweet.id]
                }
            })

            const response = await this.HashtagRepository.bulkCreate(newTags);

            alreadyPresentTags.forEach((tag) => {
                tag.tweet.push(tweet.id);
                tag.save();
            })

            return tweet
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
    
}

module.exports = TweetService;