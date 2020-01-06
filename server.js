const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1> Hello </h1>")
})

app.get('/contact', (req, res) => {
  res.send("<h2>Contact me by s.t.janibekova@gmail.com")
})

app.get('/about', (req, res)=> {
  res.send("<h1> My name is Saltanat</h1> <p>I am 25 years old</p> Nice to meet you!!!!")
})


app.get('/hobbie', (req, res) => {
  res.send("<ul>My hobbies <li> Coffee</li> <li>Programming</li></ul>")
})

app.listen(3000, function(req,resnode) {
  console.log("Server is listening port 3000")
})
