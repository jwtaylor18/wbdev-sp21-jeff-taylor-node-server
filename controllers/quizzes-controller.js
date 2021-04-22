const quizzesService = require('../services/quizzes-services')
module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
}


// module.exports = (app) => {
//
//     const quizzesService = require('../services/quizzes/quizzes-service')
//
//     const findAllQuiizes = (req, res) => {
//         // const quizzes = quizzesService.findAllQuizzes()
//         const quizzes = quizzesService.findAllQuizzes()
//             .then((quizzes) => {res.send(quizzes)})
//     }
//     const findQuizById = (req, res) => {
//         const qid = req.params['quizId']
//         // const quiz = quizzesService.findQuizById(qid)
//
//         quizzesService.findQuizById(qid)
//             .then((quiz => {res.send(quiz)}))
//     }
//
//     app.get('/api/quizzes', findAllQuiizes)
//     app.get('/api/quizzes/:quizId', findQuizById)
// }