const { getTodosLivros } = require("../servicos/livro")
const { getLivroById } = require("../servicos/livro")
const { insereLivro } = require("../servicos/livro")
const { modificaLivro } = require("../servicos/livro")
const { deletarLivro } = require("../servicos/livro")

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
        if(livro===-1){
            res.status(400)
            res.send("Erro: ID do livro não encontrado.");            
        }
        else{
            res.send(livro)
        }
       
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}



function postLivro(req, res) {
    try {
        const new_book = req.body
        const novo_livro  = insereLivro(new_book)

        

        if(novo_livro === 1){
            res.status(201)
            res.send("livro inserido")
        }

        else if (novo_livro === -1) {
            res.status(400); // Código de erro para requisição inválida
            res.send("Erro: ID do livro já está em uso.");
                
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    } 
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        
        modificaLivro(body, id)
        res.send("Item modificado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



function deletaLivro(req, res) {
    try {
        const id = req.params.id
        
        const deletar = deletarLivro(id)
        if(deletar === -1){
            res.status(400)
            res.send("Erro: ID do livro não encontrado.");   

        }
        else{
            res.send("Item deletado com sucesso")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports ={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletaLivro  
}