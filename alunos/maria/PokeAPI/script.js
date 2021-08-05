const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscarPokemon() {

    let image = document.getElementById("imagePoke");
    image.src = '';

    let name = document.getElementById("name");
    name.innerHTML = '';

    let height = document.getElementById("height")
    height.innerHTML = '';

    let weight = document.getElementById("weight")
    weight.innerHTML = '';

    let type = document.getElementById("type")
    type.innerHTML = '';
    type = '';

    let move = document.getElementById("moves")
    move.innerHTML = '';
    moves = '';

    const entrada = document.getElementById("nameOuId");
    const namePokemon = entrada.value;

    const result = await chamadaDaApi("pokemon/" + namePokemon);

    image.src = result.sprites.front_default;

    name.innerHTML = result.name.toUpperCase();

    height.innerHTML = `${result.height * 10} cm`

    weight.innerHTML = `${result.weight / 10} kg`
    
}

async function chamadaDaApi(resource) {
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
