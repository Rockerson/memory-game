function Iniciar(){
    intentos = 0;
    Repartir();
    
    document.querySelector("#cont").innerText = "00";
    document.querySelector(".popup").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", Descubrir);
    });

    //IniciarCronometro();
}

function Finalizar(){
    document.querySelector(".popup").classList.add("visible");
}

Iniciar();

