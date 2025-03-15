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
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar que recargue la página
        agregarAmigo();
    }
});
function mostrarAmigos(){
    let lista= document.getElementById("listaAmigos")
    lista.innerHTML="";
    for(let i=0;i<=amigos.length;i++){
        let item = document.createElement("li")
        item.textContent=amigos[i]
        lista.appendChild(item)
    }
}
function animarSorteo(amigoSorteado, callback) {
    let resultado = document.getElementById("resultado");
    let tiempoAnimacion = 2000; // Duración total de la animación (2s)
    let intervalo = 100; // Frecuencia de cambio (100ms)

    let animacion = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<p class="animacion-sorteo">${amigos[randomIndex]}</p>`;
    }, intervalo);

    setTimeout(() => {
        clearInterval(animacion);
        resultado.innerHTML = `<p class="resultado-final">🎉 ${amigoSorteado} 🎉</p>`; // ✅ El último nombre mostrado es el correcto
        setTimeout(callback, 500);
    }, tiempoAnimacion);
}


function sortearAmigo(){
    if(amigos.length === 0){
        alert("no hay amigos para sortear")
        return
        
    } let intentos = parseInt(prompt("¿Cuántos intentos quieres realizar?"), 10);

    if (intentos> amigos.length){
        alert("los intentos sobrepasan el numero de amigos")
        return
    }
    
    if (isNaN(intentos) || intentos <= 0) {
        alert("Ingresa un número de intentos válido.");
        return;
    }
    let i = 0;
    function ejecutarSorteo() {
        if (i >= intentos || amigos.length === 0) {
            alert("Sorteo finalizado.");
            botonSorteo.style.display = "block";
            return;
        }
    
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado]; // 🔹 Se guarda antes de la animación

        animarSorteo(amigoSorteado, () => {
            let eliminar = confirm(`Intento ${i + 1}: ${amigoSorteado}\n¿Quieres eliminarlo de la lista?`);

            if (eliminar) {
                amigos.splice(indiceSorteado, 1);
                mostrarAmigos();
            }

            i++;
            setTimeout(ejecutarSorteo, 1000);
        });
    }

    ejecutarSorteo(); // Iniciar el sorteo

    
}

function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos
    mostrarAmigos(); // ✅ ACTUALIZAR VISUALIZACIÓN INMEDIATAMENTE
    document.getElementById("resultado").innerHTML = ""; // Borrar resultados

    let botonSorteo = document.getElementById("botonSorteo");
    botonSorteo.textContent = "Sortear Amigo"; // Volver al estado inicial
}
