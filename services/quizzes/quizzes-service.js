const quizzesDao = require('../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }



// const quizzes = require('./quizzes.json')
// const quizzesModel = require('../../models/quizzes/quizzes-model')
//
//
// const findAllQuizzes = () => {
//     // return quizzes
//     return quizzesModel.find()
// }
// const findQuizById = (quizId) => {
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // })
//
//     return quizzesModel.findById(quizId)
// }
//
// //TODO: MongoDB Assignment
// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findAllQuizzes,
//     findQuizById,
//     updateQuiz,
//     deleteQuiz
// }