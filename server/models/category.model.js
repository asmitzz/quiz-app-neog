const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    isRight:{
        type:Boolean,
        required:true
    }
})

const QuestionSchema = new mongoose.Schema({
     question:{
         type:String,
         required:true,
         true:true
     },
     options:[OptionSchema]
});

const leaderboardSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    score:{
        type:Number,
        trim:true,
        required:true
    }
},{timestamps:true});

const CategorySchema = new mongoose.Schema({
     name:{
         type:String,
         required:true,
         trim:true
     },
     questions:[QuestionSchema],
     leaderboard:[leaderboardSchema]
});

module.exports = mongoose.model("Category",CategorySchema);