//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let campo = document.getElementById('amigo');
    let nome = campo.value.trim();

    if (nome !== "") {
        listaDeAmigos.push(nome);
        atualizarLista(nome); 
        campo.value = ""; // Limpa o campo de input
    } else {
        alert("Digite um nome válido!");
    }
}


function atualizarLista(nome) {
    let ul = document.getElementById('listaAmigos'); 

    let li = document.createElement('li'); 
    li.textContent = nome;
    
    ul.appendChild(li); 
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos 1 amigo para sortear.");
        return;
    }

    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: ${sorteado}</li>`;
}

