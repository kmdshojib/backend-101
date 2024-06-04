import 'dotenv/config'
import express from "express";
const app = express();

const port =process.env.PORT || 5000;
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})