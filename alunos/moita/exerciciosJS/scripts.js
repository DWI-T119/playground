const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscaPokemon(resource) {
    let pokemon

    await $.ajax({
        url: BASE_URL + resource,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            pokemon = res
        }
    })
    return pokemon
}

let meuobjeto = {
    nome: "lucas",
    cidade: "Porto Alegre",
    namorada: {
        nome: "Isadora",
        cidade: "canoas"
    },
    cursos: [{
        nome: "Técnico de informática",
        local: "fundatec"
    }, {
        nome: "eletronica",
        local: "senac"
    }]
}


meuobjeto.cursos.forEach(function(element, index) {
    console.log("nova volta do loop =========" + index)
    console.log("elemento atual do forEach: ")
    console.log(element.local)
})


async function buscarPokemonAPI() {
    const inputNomePokemon = document.getElementById("pokemonName")
    const pokemonName = inputNomePokemon.value

    const result = await buscaPokemon("pokemon/" + pokemonName)
    console.log("passou aqui")
    console.log(result)
    const imgURL = result.sprites.front_default
    console.log("passou aqui 2")

    let imgElement = document.getElementById("pokemonImg")
    imgElement.src = imgURL

    let pokedexName = document.getElementById("pokemonNamePokedex")
    pokedexName.innerHTML = result.name

    let pokedexMoves = document.getElementById("pokemonMovesPokedex")
    pokedexMoves.innerHTML = " "
    result.moves.forEach(element => {
        pokedexMoves.innerHTML += " " + element.move.name + ", <br>"
    });

    let pokedexTypes = document.getElementById("pokemonTypesPokedex")
    pokedexTypes.innerHTML = " "
    const pokemonTypes = result.types.forEach(element => {
        pokedexTypes.innerHTML += " " + element.type.name
    })
}