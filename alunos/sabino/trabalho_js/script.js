
// Constante para utilizar na requisição da chamada da API
const BASE_URL_FILMES = "http://www.omdbapi.com/?apikey=c7acdcff&t="
const BASE_URL_POKE = "https://pokeapi.co/api/v2/"

// =============================================================
// Método para ser chamado ao click do botão
async function buscarPokemon() {
    // 1 - (Input) Pegar elementos e valores da tela para utilizar na busca
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomePokemon = inputNomePokemon.value

    // 2 - (Processamento) Chamar função que fará a requisição ajax, enviando o valor do input como parametro
    const result = await chamadaDaApi(BASE_URL_POKE, "pokemon/" + nomePokemon)

    let resultHabilidades = document.getElementById("habilidades")

    let arrayDeNomesHabilidades = result.moves.map((habilidadeAtual) => {
        return habilidadeAtual.move.name
    })

    resultHabilidades.innerHTML = ""
    arrayDeNomesHabilidades.forEach(nomeAtual => {
        resultHabilidades.innerHTML += `${nomeAtual} <br>`
    });

    const imageUrl = result.sprites.front_default

    // 3 - (Output) Alterar os elementos HTML para disponibilizar o resultado em tela
    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl
}


async function buscarFilme() {
    // 1 - (Input) Pegar elementos e valores da tela para utilizar na busca
    const inputNomePokemon = document.getElementById("nomePokemon")
    const nomeDoFilme = inputNomePokemon.value

    // 2 - (Processamento) Chamar função que fará a requisição ajax, enviando o valor do input como parametro
    const result = await chamadaDaApi(BASE_URL_FILMES, nomeDoFilme)
    console.log(result)

    if (result.Response == "False") {
        let imagemElement = document.getElementById("imagemPokemon")
        imagemElement.src = "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg"
        return
    }

    let resultHabilidades = document.getElementById("habilidades")
    const imageUrl = result.Poster

    // 3 - (Output) Alterar os elementos HTML para disponibilizar o resultado em tela
    let imagemElement = document.getElementById("imagemPokemon")
    imagemElement.src = imageUrl
}

// =============================================================
// Método para realizar chamada Ajax
async function chamadaDaApi(baseUrl, resource) {
    let result

    await $.ajax({
        url: baseUrl + resource,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            result = res
        }
    });

    return result
}