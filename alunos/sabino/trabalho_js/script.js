
// Constante para utilizar na requisição da chamada da API
const BASE_URL = "https://pokeapi.co/api/v2/"

// =============================================================
// Método para ser chamado ao click do botão
async function buscarPokemon() {
    // 1 - (Input) Pegar elementos e valores da tela para utilizar na busca
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomePokemon = inputNomePokemon.value

    // 2 - (Processamento) Chamar função que fará a requisição ajax, enviando o valor do input como parametro
    const result = await httpGet("pokemon/" + nomePokemon)
    const imageUrl = result.sprites.front_default

    // 3 - (Output) Alterar os elementos HTML para disponibilizar o resultado em tela
    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl
}

// =============================================================
// Método para realizar chamada Ajax
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