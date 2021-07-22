const BASE_URL = "https://pokeapi.co/api/v2/"

async function buscarPokemon() {  
  
  let imagem = document.getElementById("imagemPokemon");
  imagem.src = '';

  let nome = document.getElementById("nome");  
  nome.innerHTML = '';

  let altura = document.getElementById("altura")
  altura.innerHTML = '';

  let peso = document.getElementById("peso")
  peso.innerHTML = '';

  let tipo = document.getElementById("tipos")  
  tipo.innerHTML = '';
  tipos = '';

  let move = document.getElementById("moves")
  move.innerHTML = '';  
  moves = '';

  const entrada = document.getElementById("nomeOuId");
  const nomePokemon = entrada.value;

  const result = await chamadaDaApi("pokemon/" + nomePokemon);

  imagem.src = result.sprites.front_default;

  nome.innerHTML = result.name.toUpperCase();

  altura.innerHTML = `${result.height * 10} cm`

  peso.innerHTML = `${result.weight / 10} kg`

  for (let index = 0; index < result.types.length; index++) {
    tipos += capitalizarPrimeiraLetra(`${result.types[index].type.name} <br>`) 
  }

  for (let index = 0; index < result.moves.length; index++) {
    moves += capitalizarPrimeiraLetra(`${result.moves[index].move.name} <br>`)
  }

  tipo.innerHTML = tipos;
  move.innerHTML = moves;
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