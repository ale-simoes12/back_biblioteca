const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("livros_favoritos.json") )
}


function deletaFavoritoPorId(id){
    const livros =  JSON.parse( fs.readFileSync("livros_favoritos.json") )
    const livrosFiltrados = livros.filter( livro => livro.id   !== Number(id))
    console.log("Tipo do id:", typeof id);
   


    // console.log("id_livrodel" ,  id)
    // console.log("livros_filtrados" , livrosFiltrados)
    fs.writeFileSync("livros_favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = JSON.parse( fs.readFileSync("livros_favoritos.json") )
    const livroInserido = livros.find( livro => livro.id === Number(id))

    
    
    console.log("id_livroinsere" ,  id)
    console.log("livro_inserido" , livroInserido)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("livros_favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}