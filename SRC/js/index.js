// Passo 1 - Pegar no JS o elemento HTML correspondente ao botao de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2 - trazer para o JS o elemento HTML correspondente ao body
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Passo 3 - Identificar o clique do usuario no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    // Passo 4 - adicionar a classe modo-escuro no body

    // Passo 5 - trocar a imagem do botao de alterar tema para a lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
