//Capturando o Elemento botão produtos e o Elemento Div Produtos
let botaoProdutos = document.getElementById("botao-produtos");
let divProdutos = document.getElementById("div-produtos");

divProdutos.addEventListener("mouseover", ()=>{
    botaoProdutos.classList.remove("invisible");
    botaoProdutos.classList.add("mostra-botao-produtos-index");
})
divProdutos.addEventListener("mouseout", ()=>{
    botaoProdutos.classList.add("invisible");
    botaoProdutos.classList.remove("mostra-botao-produtos-index");
})

//Capturando os itens do Carrinho
let quantidadeCarrinho = document.getElementById("quantidade-carrinho");
//Adiocionando o Valor de itens no Carrinho
let contador = 0;
botaoProdutos.addEventListener("click", ()=>{
    contador = contador + 1;
    quantidadeCarrinho.innerText = contador;
})

//Criando Produtos/Objetos para inserção na DivPai com DOM
const arrayProdutos = [
    {   
        imagem: "../img/acessorios_img/completo.jpg",
        produto: "Kit Completo",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {   
        imagem: "../img/acessorios_img/enxada.jpg",
        produto: "Enxada",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    },
    {   
        imagem: "../img/acessorios_img/jogopequeno.jpg",
        produto: "Jogo Pequeno",
        precoSublinhado: "De: R$ 199,90",
        preco: "Por: R$ 159,90"
    },
    {   
        imagem: "../img/acessorios_img/rastelo.jpg",
        produto: "Rastelo",
        precoSublinhado: "De: R$ 209,90",
        preco: "Por: R$ 189,90"
    },
    {   
        imagem: "../img/acessorios_img/tesoura.jpg",
        produto: "Tesoura",
        precoSublinhado: "De: R$ 299,90",
        preco: "Por: R$ 99,90"
    }
    // {   
    //     imagem: "../img/vasos_img/vaso7.jpg",
    //     produto: "Vaso de Parede",
    //     precoSublinhado: "De: R$ 9,90",
    //     preco: "Por: R$ 5,90"
    // }
    // {   
    //     imagem: "../img/index_img/index-8.jpg",
    //     produto: "Muda de Palmeira Areca",
    //     precoSublinhado: "De: R$ 19,90",
    //     preco: "Por: R$ 12,90"
    // }
]

//Criando o elemento Div Produtos com o DOM
for(i = 0; i < arrayProdutos.length; i++){
    let div = document.createElement("div");
    div.innerHTML = `
        <div id="div-produtos" class="produtos-index">
            <img class="img-produtos-index" src=${arrayProdutos[i].imagem} alt="produto-1-index">
            <p class="text-produtos">${arrayProdutos[i].produto}</p>
            <small><s class="text-produtos">${arrayProdutos[i].precoSublinhado}</s></small>
            <p class="text-produtos">${arrayProdutos[i].preco}</p>
            <p id="botao-produtos" class="invisible">Adicionar ao Carrinho</p>
        </div>
    `
    let divPai = document.getElementById("div-pai");
    divPai.appendChild(div);
}

