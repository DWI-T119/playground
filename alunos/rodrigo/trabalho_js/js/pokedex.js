
$(document).ready(function() {
    $('.results').css("display", "hidden");
});

async function searchPokemon() {
    const pokemon = await getData($('input[name="txtSearch"]').val());

    const movesNames = pokemon.moves.map(m => m.move.name);
    const typesNames = pokemon.types.map(t => t.type.name);
    const imgSrc = pokemon.sprites.front_default;

    $('.results').css("display", "flex");
    $('#txtName').text(pokemon.name);
    $('#txtMoves').text(movesNames);
    $('#txtTypes').text(typesNames);
    $('#txtImg').attr('src', imgSrc);
}

async function getData(name) {
    return await $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + name,
        success: function (response) {
            console.log('success', response)
        }
    });
}

