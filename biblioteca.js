const biblioteca = [];

function create(livro) {
    biblioteca.push(livro)
}

const read = () => {
    biblioteca.forEach((livro, indice) => {
        console.log(`${indice + 1} - ${livro}`)
    })
}

const update = function(livro, indice){
    biblioteca[indice] = livro
}

const destroy = indice => {
    biblioteca.splice(indice, 1)
}

module.exports = {
    create,
    read,
    update,
    destroy
}