function Iniciar(){
    intentos = 0;
    Repartir();
    IniciarCronometro();
    
    document.querySelector("#cont").innerText = "00";
    document.querySelector(".popup").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", Descubrir);
    });
}

function Finalizar(){
    document.querySelector(".popup").classList.add("visible");
}

Iniciar();

