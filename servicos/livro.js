const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}



function  getLivroById(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const idExiste = livros.some(livro => livro.id === id);
    if(idExiste){
        const livro_filtrado = livros.filter(livro => livro.id == id)[0]
        console.log(livro_filtrado)
        return livro_filtrado
    }
    else{
        return -1
    }

}

function insereLivro(new_book){
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const idExiste = livros.some(livro => livro.id === new_book.id);

    if(idExiste){
    return -1
    }
    else{

    const novaListadeLivros =  [...livros,new_book]
    fs.writeFileSync("livros.json" , JSON.stringify(novaListadeLivros) )
    return 1
    }
       

}

function modificaLivro(modificacoes , id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}


function deletarLivro(id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    

    if(indiceModificado === -1){
        return -1
    }
    else{
        livrosAtuais.splice(indiceModificado,1);
        fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    }


   

}



module.exports =  {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro,
    deletarLivro
}