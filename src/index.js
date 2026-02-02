
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth_route");


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/api/auth", authRoutes);

app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/home",(req,res)=> res.render("home"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT =7000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
