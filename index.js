const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://book-store-frontend-nine-tau.vercel.app/"],
    credentials: true,
  })
);

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// main function
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book store is running!");
  });
}

main()
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
