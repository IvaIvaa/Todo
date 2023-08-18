import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
var todoList = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", { inputValue : todoList})
    
})

app.post("/", (req, res)=>{
    var input = req.body["newItem"]
    todoList.push(input)
    res.redirect("/")
})

app.listen(port, ()=>{
    console.log("server has started")
})