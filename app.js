// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
function agregarAmigo(){
    let nombres= document.getElementById("amigo").value
    if(nombres==''|| !soloLetras.test(nombres)){
        alert("Por favor, inserte un nombre")
    }else{
    amigos.push(nombres)
    mostrarAmigos();
    }
    document.getElementById("amigo").value=''
}
function mostrarAmigos(){
    let lista= document.getElementById("listaAmigos")
    lista.innerHTML="";
    for(let i=0;i<=amigos.length;i++){
        let item = document.createElement("li")
        item.textContent=amigos[i]
        lista.appendChild(item)
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("no hay amigos para sortear")
    }else{
    let amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)];
    let resultado= document.getElementById("resultado")
    resultado.innerHTML= `El amigo Sorteado es: ${amigoSorteado}`
    let limpiaLista= document.getElementById("listaAmigos")
    }
}
