const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const Schema = mongoose.Schema;
const jsonParser = express.json();
app.use(morgan("dev"));

const Item = require("./model/itemModel");

const path = require("path");

app.use(express.static(__dirname + "/public"));

console.log(`${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`)
// USERNAME PASSWORD в .env
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-nnm84.mongodb.net/ozonItems`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) return console.log(err);
    //! ВАЖНО
    const PORT = process.env.PORT || 5000;
    console.log(" Port test", PORT)
    app.listen(PORT, function() {
      console.log("Сервер ожидает подключения...", PORT);
    });
  }
);
app.get("/test", (req, res) => {
  console.log('123')
  res.send("work");
});

app.get("/", async function(req, res) {
  let objItem = await Item.find({});
  // console.log(objItem);
  res.render("index", {
    objItem
  });
});

app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// Импорт маршрутов.
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Подключаем статику
app.use(express.static(path.join(__dirname, "public")));

// Подключаем views(hbs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Подключаем импортированные маршруты с определенным url префиксом.
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

mongoose.connect(
  "mongodb+srv://artem:artem@cluster0-nnm84.mongodb.net/ozonItems",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get("/", async function(req, res) {
  let objItem = await Item.find({});
  // console.log(objItem);
  res.render("index", {
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
