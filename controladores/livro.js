const { getTodosLivros } = require("../servicos/livro")
const { getLivroById } = require("../servicos/livro")
const { insereLivro } = require("../servicos/livro")
function getLivros(req, res) {
    try {
        const fs = require("fs")
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}



function getLivro(req, res) {
    try {
        const id = req.params.id
        const fs = require("fs")
        const livro = getLivroById(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}



function postLivro(req, res) {
    try {
        const new_book = req.body
        insereLivro(new_book)
        res.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        res.send("livro inserido")
    } 
}




module.exports ={
    getLivros,
    getLivro,
    postLivro
   
}