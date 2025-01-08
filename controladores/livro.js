const { getTodosLivros } = require("../servicos/livro")
const { getLivroById } = require("../servicos/livro")
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



module.exports ={
    getLivros,
    getLivro
   
}