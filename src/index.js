import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/DB_test", { useCreateIndex: true, useNewUrlParser: true });


app.use("/api/auth", auth);


dotenv.config();
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port, () => console.log("Runnng on localhost:" + port));
