import express from "express"
import cors from "cors"
import pg from "pg"


const app = express();
const port = 5000;
let last = "new"

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello there");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})