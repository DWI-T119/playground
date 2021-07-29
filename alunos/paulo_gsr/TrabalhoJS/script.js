const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscarPokemon() {
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomePokemon = inputNomePokemon.value

    const result = await chamadaApi("pokemon/" + nomePokemon)
    const imageUrl = result.sprites.front_default

    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl

    let spanNome = document.getElementById("pokemonNome")
    spanNome.innerHTML = result.name
    
    let spanGolpes = document.getElementById("golpes")
    spanGolpes.innerHTML = " "
    const golpes = result.moves.forEach(element => {
        spanGolpes.innerHTML += " " + element.move.name + ", " 
    });

    let spanTipos = document.getElementById("tipos")
    spanTipos.innerHTML = ""
    const tipos = result.types.forEach(element => {
        spanTipos.innerHTML += " " + element.type.name 
    })
   
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