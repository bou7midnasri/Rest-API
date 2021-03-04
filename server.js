const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/user"));

connectDB();

const port = process.env.PORT || 9000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${port}`);
});
