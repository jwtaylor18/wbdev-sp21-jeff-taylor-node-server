const express = require('express')
const connectDB = require('./config/db')
const app = express()

//Connect Database
connectDB()

//Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)



// require('./controllers/quizzes-controller')(app)
// require('./controllers/questions-controller')(app)
// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)





// const add = (request, response) => {
//     const a = parseInt(request.params['paramA'])
//     const b = parseInt(request.params['paramB'])
//     response.send(`${a+b}`)
// }
//
// app.get('/add/:paramA/:paramB', add)
//
// app.get('/', function(req, res) {
//     res.send('Hello World')
// })

app.listen(4000)