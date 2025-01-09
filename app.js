const express = require("express")
const cors = require("cors")
const rotaLivro =  require("./rotas/livro")
const app =  express()
app.use(express.json())
app.use(cors({origin:"*"}))
const port  = 8000

console.log(rotaLivro)
app.use('/livros', rotaLivro)

app.listen(port,() =>{
    console.log(`Escutando a porta ${port}`)
})