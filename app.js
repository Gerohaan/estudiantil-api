const express = require('express')
const app = express()
const cors = require('cors')
const { sequelize } = require('./models/index')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config({
  path: '.env'
})
//Rutas
var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')
var teacherRouter = require('./routes/teacher')
var subjectRouter = require('./routes/subject')
var studentRouter = require('./routes/student')
var sectionRouter = require('./routes/section')
var lapsesRouter = require('./routes/lapses')
var gradesRouter = require('./routes/grades')
//configuracion
app.set('port', process.env.PORT || 3030)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(cookieParser())
//configuracion

//Rutas use
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/teacher', teacherRouter)
app.use('/subject', subjectRouter)
app.use('/student', studentRouter)
app.use('/section', sectionRouter),
app.use('/lapses', lapsesRouter),
app.use('/grades', gradesRouter)
//Rutas use

app.listen(app.get('port'), function () {
  console.log('Corriendos Servidor Puerto '+process.env.PORT+' y el host '+process.env.HOST+'.')

  sequelize
    .authenticate()
    .then(() => {
      console.log('Nos hemos conectado a la Base de Datos')
    })
    .catch(err => {
      console.log('Error de conexion a la base de Datos')
    })
})
module.exports = app
