/* 
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll(".personagem");//seleciona um persogem mas verifica todas que tem. pode aumentar os personagem sem aumentar o codigo aqui no js.

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const persogemSelecionado = document.querySelector(".selecionado");
        persogemSelecionado.classList.remove(".selecionado");

        personagem.classList.add("selecionado");//adiciiona a classe a qual passamos o mouse bem rapido quase que nem da pra ver

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersogemGrande = document.querySelector(".persogem-grande");
        
        // passo 2 - alterar imagem do personagem grande
         const idPersonagem = personagem.attributes.id.value;
         imagemPersogemGrande.src = `./src/imagens/card-${idPersonagem}`;

        // passo 3 - alterar o nome do personagem grande
         const nomePersonagem = document.getElementById("nome-personagem");

         nomePersonagem.innerText = personagem.getAttribute()


    })
})