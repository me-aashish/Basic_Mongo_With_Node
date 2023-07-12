const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    content : {
        type : String,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet', 'Comment'],
        required : true
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        refPath : 'onModel',
        required : true
    },
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment',
            // required : true
        }
    ]
}, {timestamps : true})

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;