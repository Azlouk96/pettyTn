const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/submittedPosts");
const publicPostsRouter = require("./routes/publicPosts");
app.use(express.json());

// app.use((req, res, next) => {
//     console.log(req.path + " " + req.method)
//     next();
// })

app.use('/api/user', userRoute);

app.use('/api/admin', postRoute);

app.use('/api/public', publicPostsRouter);




mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to databse");
    app.listen(process.env.PORT,() => console.log("listening to "+ process.env.PORT))
}).catch((err) => {
    console.log(err); 
});