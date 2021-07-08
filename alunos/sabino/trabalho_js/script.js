
const BASE_URL = "https://pokeapi.co/api/v2/"

async function httpGet(resource) {
    let result
    await $.ajax({
        url: BASE_URL + resource,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            result = res
        }
    });
    return result
}

async function buscarPokemon() {
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomePokemon = inputNomePokemon.value

    const result = await httpGet("pokemon/" + nomePokemon)
    const imageUrl = result.sprites.front_default

    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl
}