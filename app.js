const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./model/itemModel');


const path = require('path');


app.use(express.urlencoded({extended: true}));

app.use(express.json());

// Импорт маршрутов.
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect("mongodb+srv://artem:artem@cluster0-nnm84.mongodb.net/ozonItems", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', async function (req, res) {
  let objItem = await Item.find({});
  // console.log(objItem);
  res.render('index', {
    objItem
  });
});


// Обработка ошибок.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
