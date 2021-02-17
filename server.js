const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/api_v1.0/users");
const profile = require("./routes/api_v1.0/profile");
const posts = require("./routes/api_v1.0/posts");
const auth = require("./routes/api_v1.0/auth");

const app = express();

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// Use Routes
app.use("/api_v1.0/users", users);
app.use("/api_v1.0/profile", profile);
app.use("/api_v1.0/posts", posts);
app.use("/api_v1.0/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
