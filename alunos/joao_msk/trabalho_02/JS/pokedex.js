const apiPoke = `https://pokeapi.co/api/v2/`

async function chamadaAPI(resource) {
    let resultado;
    await $.ajax({
        url: apiPoke + resource,
        type: `GET`,
        dataType: `json`,

        success: function (response) {
            resultado = response
        }

    });

    return resultado;
}

async function chamarPoke() {

    const inputPokeName = document.getElementById("buscarPokemon")
    let pokeName = inputPokeName.value

    const resultado = await chamadaAPI(`pokemon/` + pokeName)
    
    console.log(resultado) 
    
    const radioShiny = document.getElementById(`pokemonNormal`)
    let pokeShiny = radioShiny.checked
    
    const imagemPoke = document.getElementById(`pokeImagem`)
    if (pokeShiny) {
        imagemPoke.src = resultado.sprites.front_shiny
    } else {
        imagemPoke.src = resultado.sprites.front_default
    }
    
    const resultadoDeSkills = document.getElementById(`skillsmoves`)
    const moves = resultado.moves

    resultadoDeSkills.innerHTML = ``
    for (posicao = 0; posicao < 7; posicao++) {
        resultadoDeSkills.innerHTML += `<li>${moves[posicao].move.name}</li>`
    }
    
    const resultadoDeTipos = document.getElementById(`pokemonstipos`)
    resultadoDeTipos.innerHTML = ``
    resultado.types.forEach(element => {
        resultadoDeTipos.innerHTML += `<li>${element.type.name}</li>`
        console.log(element.type.name)
    });
    
}
