const prompt = require('prompt-sync') ();
const {create, read} = require("./biblioteca.js")

while(true) {
    
}

create({
    nome: "Livro 1",
    autor: "Autor 1",
    qtdPaginas: 100,
    genero: "Romance"
})

read()