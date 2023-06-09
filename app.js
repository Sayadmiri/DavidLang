const express = require("express");
const indexRouter = require("./routes/indexRouter");
const path = require("path");
const sequelize = require("./database");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(indexRouter);

app.use((req, res, next) => {
    res.status(404).json({message: "The page you're looking for was not found!"});
});

sequelize.sync().then(() => {
    app.listen(5000);
}).catch(err => console.log(err));


