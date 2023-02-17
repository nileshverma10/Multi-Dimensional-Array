// const { json } = require("express");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost:27017/nileshverma",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("connection Succesfull"))
  .catch((err) => console.log(err));

const express = require("express");
const app = express();
var port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getUser", async function (req, res) {
  try {
    const schema = new mongoose.Schema(
      {
        name: { type: String, required: true },
        email: { type: String },
      },
      { timestamps: true }
    );
    const User = mongoose.model("User", schema);
    const userList = await User.find();
    return res.json(200, {
        status: 200,
        message: "User get successfuly!",
        data: userList,
        });
  } catch {
    return res.json({ status: 400, message: "Something went wrong" });
  }
});

app.post("/saveUser", async function (req, res) {
  try {
    const user = req.body;
    const schema = new mongoose.Schema(
      {
        name: { type: String, required: true },
        email: { type: String },
      },
      { timestamps: true }
    );
    const User = mongoose.model("User", schema);
    const newUser = new User(user);
    await newUser.save();
    return res.json(200, {
      status: 200,
      message: "User added successfuly!",
      data: newUser,
    });
  } catch {
    return res.json({ status: 400, message: "Something went wrong" });
  }
});

app.listen(port);
