const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { initializeDB } = require("./mongoose");
const CategoryRoutes = require("./routes/Category.routes");
const Category = require("./models/category.model");

const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");

dotenv.config();
initializeDB(process.env.URI);

app.use(bodyParser.json());
app.use(cors());

app.get("/",(req, res) => {
    res.send("server is running")
})

app.use(CategoryRoutes);

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).json({ success: false, message:"route not found on server" ,error:err.message})
})

app.listen(PORT,() => console.log(`listening on port ${PORT}`))