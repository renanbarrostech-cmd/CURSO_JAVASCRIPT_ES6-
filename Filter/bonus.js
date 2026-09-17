const usuarios = [
    {
        nome: 'Steve Jobs',
        idade: 17,
    },
    {
        nome: 'Elon Musk',
        idade: 37,
    },
    {
        nome: 'Jeff Bezos',
        idade: 40,
    }
]

const usuariosMaioresDeIdade = usuarios.filter((usuario) => {
    return usuario.idade >= 18
})

console.log(usuariosMaioresDeIdade)