const Categories = require("../models/category.model");

const getQuestions = async(req,res) => {
    try {
        const questions = await Categories.find({}).lean();
        if(questions){
           return res.status(200).json({quiz:questions})
        }
        res.status(404).json({ success:false,message:"Questions not found"})
    } catch (error) {
        res.status(404).json({ success:false,message:"Questions not found"})
    } 
}

const updateLeaderboard = async (req, res) => {
      const {quizID} = req.params; 
      try {
          const quiz = await Categories.findById(quizID);
          quiz.leaderboard.push(req.body);
          await quiz.save((err,quiz) => {
              if(err){
                  return res.status(404).json({status:404,message:"Not able to update leaderboard"})
              }
              if(quiz){
                  res.status(201).json({leaderboard:quiz.leaderboard})
              }
          })
      } catch (error) {
         return res.status(404).json({status:404,message:"Leaderboard not found"})
      }
}

module.exports = {getQuestions,updateLeaderboard};