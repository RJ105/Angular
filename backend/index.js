const express = require("express");
const mongoose = require("mongoose");
const Article = require('./model/article')


const app = express()
mongoose.connect("mongodb://localhost/memories", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('open',()=>{
    console.log("connected")
})
app.use(express.json()) //otherwise gives type error


app.get('/', async (req, res) => {
    const article = await Article.find()
    res.send(article)
})

app.post('/', async (req, res) => {
    const article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown
    })

    try{
        const at = await article.save()
        // res.send(at)
    }
    catch(err){
        res.send(err)
    }
  })


app.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})  
app.listen(3000, (req, res) =>{
    console.log("server listening on port 3000")
})