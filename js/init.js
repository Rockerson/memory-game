function Iniciar(){
    intentos = 0;
    aciertos = 0;
    errores = 0;
    Repartir();
    IniciarCronometro();
    
    document.querySelector("#cont").innerText = "00";
    document.querySelector(".popup").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", Descubrir);
    });
}

function IniciarModoReto(){
    document.querySelector("#bienvenida").classList.remove(".visible");
    Iniciar();
}

function IniciarModoLibre(){
    document.querySelector("#bienvenida").classList.remove(".visible");
    Iniciar();
}

function JuegoTerminado(){
    //por crear
}

function TiempoTerminado(){
    //por crear
}

function CargaLobby(){
    document.querySelector("#bienvenida").classList.add("visible");
}

function Finalizar(){
    document.querySelector(".popup").classList.add("visible");
}

CargaLobby();