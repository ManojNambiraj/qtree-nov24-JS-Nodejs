const express = require("express")
const app = express()

app.use(express.json())

app.get("/demo", (req, res) => {
    res.send("Hello, Good morning")
})

app.listen(8081, () => {
    console.log(`Server running in ${8081}`);
})

// CRUD   ->     Create  Read  Update  Delete
// HTTP Method:  POST    GET    PUT    DELETE