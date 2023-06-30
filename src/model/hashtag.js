const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({

    title:{
        type : String,
        required : true,
        lowercase: true,
        unique: true
    },
    tweets: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet',
            required : true
        }
    ]
}, {timestamps : true})

// hashtagSchema.pre('save', (next) => {
//     this.title.toLowerCase();
//     next();
// })

const hashtag = mongoose.model('Hashtag', hashtagSchema);

module.exports = hashtag;