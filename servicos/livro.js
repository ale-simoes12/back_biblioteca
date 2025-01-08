const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}
function  getLivroById(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const livro_filtrado = livros.filter(livro => livro.id == id)[0]
    console.log(livro_filtrado)
    return livro_filtrado

}

function insereLivro(new_book){
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const novaListadeLivros =  [...livros,new_book]
    fs.writeFileSync("livros.json" , JSON.stringify(novaListadeLivros) )

       

}

function modificaLivro(modificacoes , id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}



module.exports =  {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro
}