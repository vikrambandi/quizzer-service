import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const games = require("./routes/games");
const collections = require("./routes/collections");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

// handle routes
app.get('/', function (req, res) {
    res.send('Go Quizzer api')
})
app.use("/games", games);
app.use("/collections", collections);


// handle a request if url path is not found
const notFound = (req, res, next) => {
    res.status(404);
    res.json({
        status: 404,
        error: "not found",
    });
};

// handle an error if occured in the controller
const handleError = (error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        message: error.message || "failed: not known error",
        msg: error.msg,
        stack: error.stack,
    });
};
app.use(notFound); // in-case a url path is not found
app.use(handleError); // in-case an error has occured

const PORT = 5000;
app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server started on port: ${PORT}`);
});