const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.listen(process.env.PORT);

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const categoryRouter = require("./routes/categories");
const likeRouter = require("./routes/likes");
const cartRouter = require("./routes/carts");
const orderRouter = require("./routes/orders");

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/categories", categoryRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
