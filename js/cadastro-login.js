//Funções de Informações certas e erradas
function correto(nomeInput,textoAjudaNome){
    nomeInput.classList.remove("errado");
    textoAjudaNome.classList.remove("visible");
    nomeInput.classList.add("correto");
}
function errado(nomeInput,textoAjudaNome){
    nomeInput.classList.add("errado");
    textoAjudaNome.classList.add("visible");
    nomeInput.classList.remove("correto");
}

//Criação de Objeto para verificação de envio do Formulário
let validacao = {
    nome: false,
    idade: false,
    email: false,
    confirmaEmail: false,
    senha: false
}

//Validação Nome
let nomeInput = document.getElementById("nome");
let textoAjudaNome = document.getElementById("texto-ajuda-nome");

nomeInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.length >= 3){
        correto(nomeInput,textoAjudaNome);
        validacao.nome = true;
    }else{
        errado(nomeInput,textoAjudaNome);
        textoAjudaNome.innerText = "Insira um Nome Válido"
    }
})

//Validação Idade
let idadeInput = document.getElementById("idade");
let textoAjudaIdade = document.getElementById("texto-ajuda-idade");

idadeInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor >= 18){
        correto(idadeInput,textoAjudaIdade);
        validacao.idade = true;
    }else{
        errado(idadeInput,textoAjudaIdade);
        textoAjudaIdade.innerText = "Você precisa ter mais que 18 anos"
    }
})

//Validação E-mail
let emailInput = document.getElementById("email");
let textoAjudaEmail = document.getElementById("texto-ajuda-email");

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.includes("@") && valor.includes(".com")){
        correto(emailInput,textoAjudaEmail);
        validacao.email = true;
    }else{
        errado(emailInput,textoAjudaEmail);
        textoAjudaEmail.innerText = "Insira um E-mail Válido"
    }
})

//Validação Repetir E-mail
let confirmaEmailInput = document.getElementById("confirma-email");
let textoConfirmaEmail = document.getElementById("texto-ajuda-confirma-email");

confirmaEmailInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor == emailInput.value){
        correto(confirmaEmailInput,textoConfirmaEmail);
        validacao.confirmaEmail = true;
    }else{
        errado(confirmaEmailInput,textoConfirmaEmail);
        textoConfirmaEmail.innerText = "Os E-mails precisam ser iguais"
    }
})

//Validação Senha
let senhaInput = document.getElementById("senha");
let textoAjudaSenha = document.getElementById("texto-ajuda-senha");

senhaInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.length >= 5){
        correto(senhaInput,textoAjudaSenha);
        validacao.senha = true;
    }else{
        errado(senhaInput,textoAjudaSenha);
        textoAjudaSenha.innerText = "Sua Senha precisa ter pelo menos 5 caracteres"
    }
})

//Criação de Objeto para verificação de envio do Formulário

console.log(validacao.nome);