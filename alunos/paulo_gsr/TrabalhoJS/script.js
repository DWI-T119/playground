const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscarPokemon() {
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomePokemon = inputNomePokemon.value

    const result = await chamadaApi("pokemon/" + nomePokemon)
    const imageUrl = result.sprites.front_default

    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl
}
async function chamadaApi(resource) {
    let result

    await $.ajax({
        url: BASE_URL + resource,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            result = res
        }
    })
    return result
}