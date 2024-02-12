const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const Connect = require("./config/db");

const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.get("/", (req, res) => {
  res.send("SkinStore App");
});

app.listen(PORT, async () => {
  try {
    await Connect();
    console.log("Server is running on http://localhost:8080");
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
