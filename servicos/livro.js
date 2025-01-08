const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}
function  getLivroById(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const livro_filtrado = livros.filter(livro => livro.id == id)[0]
    console.log(livro_filtrado)
    return livro_filtrado

}




module.exports =  {
    getTodosLivros,
    getLivroById
}