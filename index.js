require("dotenv").config();
const express = require("express");
const path = require('path')
const app = express();
const cors = require("cors");
const connection = require('./db')
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");

// database connection
connection()
// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send("URL-SHORTNER-APPLICATION");
  });

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

//connecting frontend with backend //


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));