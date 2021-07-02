// Pegando botao do HTML
let meuBotao = document.getElementById("incluirExterno")
// Adicionando um evento ao Botão
meuBotao.addEventListener("click", dispararAlert)
// Função efetuando algo
function dispararAlert() {
    alert("Olá javascript externo!")
}