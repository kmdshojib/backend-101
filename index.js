import express from "express";

const app = express();

const port = 5000;
app.use(express.json());

let userData = [];
let nesxtId = 1;

app.post("/post", (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: nesxtId++,
        name, email
    }
    userData.push(newUser);
    res.status(201).send(newUser);

})

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})