const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscarPokemon() {
  const entrada = document.getElementById("nomeOuId");
  const nomePokemon = entrada.value;

  const result = await chamadaDaApi("pokemon/" + nomePokemon);

  const imagem = document.getElementById("imagemPokemon");
  imagem.src = result.sprites.front_default;

  const nome = document.getElementById("nome");
  console.log(result);
  nome.innerHTML = result.name.toUpperCase();

  const altura = document.getElementById("altura")
  altura.innerHTML = `${result.height * 10} cm`

  const peso = document.getElementById("peso")
  peso.innerHTML = `${result.weight / 10} kg`

  const tipo = document.getElementById("tipos")  
  const tipos = result.types.forEach(element => {
    tipo.innerHTML += capitalizarPrimeiraLetra(`${element.type.name} <br>`)
  });

  const move = document.getElementById("moves")  
  const moves = result.moves.forEach(element => {
    move.innerHTML += capitalizarPrimeiraLetra(`${element.move.name} <br>`)
  });

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

/* Utils */
function capitalizarPrimeiraLetra(frase) {
  return frase.charAt(0).toUpperCase() + frase.slice(1);
}