async function buscarPokemon(){
    let nomeDoPokemon = pegarValorDeNomeDoPokemonDaTela()
    let dadosPokemonApi = await buscarPokemonNaApi(nomeDoPokemon)
    disponibilizarResultadoEmTela(dadosPokemonApi)
}

function pegarValorDeNomeDoPokemonDaTela() {
    let input = document.getElementById("nomeDoPokemon")
    return input.value
}

async function buscarPokemonNaApi(nomeDoPokemon){
    let result

    await $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + nomeDoPokemon,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            result = res
        }
    });

    return result
}

function disponibilizarResultadoEmTela(resultadoAPI){
    disponibilizarImagem(resultadoAPI.sprites)
    disponibilizarHabilidades(resultadoAPI.moves)
}

function disponibilizarImagem(sprites){
    let elementoImgResultado = document.getElementById("imagem-pokemon")
    elementoImgResultado.src = sprites.front_default
}

function disponibilizarHabilidades(moves){
    let elementoListaHabilidades = document.getElementById("habilidades-pokemon")


    moves.forEach(move => {
        elementoListaHabilidades.innerHTML += "<li>" + move.move.name + "</li>"
    });
}