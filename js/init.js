function Iniciar(){
    intentos = 0;
    aciertos = 0;
    errores = 0;
 
    IniciarCronometro();
    IntentosMax();
    Repartir();
    
    document.querySelector("#intentos").innerText = "00";
    document.querySelector(".popup").classList.remove("visible");
    document.querySelector("#gana").classList.remove("visible");
    document.querySelector("#pierde").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", Descubrir);
    });
}

function IniciarModoReto(){
    document.querySelector("#bienvenida").classList.remove("visible");
    Iniciar();
}

function IniciarModoLibre(){
    document.querySelector("#bienvenida").classList.remove("visible");
    Iniciar();
}

function JuegoTerminado(){
    document.querySelector("#pierde").classList.add("visible");
}

function TiempoTerminado(){
    //por crear
}

function Finalizar(){
    document.querySelector("#gana").classList.add("visible");
}

function CargaLobby(){
    document.querySelector("#bienvenida").classList.add("visible");
}



CargaLobby();