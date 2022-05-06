require("dotenv").config();
const express = require("express");
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

app.get("/",(req,res)=>{
    res.send("URL_SHORTNER_APPLICATION")
})

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

//connecting frontend with backend

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));