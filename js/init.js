function Iniciar(){
    var intentos = 0;
    var aciertos = 0;
    var errores = 0;
    //tiempo = 120;
 
    IniciarCronometro();
    IntentosMax();
    Repartir();
    
    document.querySelector("#intentos").innerText = "00";
    document.querySelector("#gana").classList.remove("visible");
    document.querySelector("#pierde").classList.remove("visible");
    // document.querySelector("#clasificacion").classList.remove("visible");

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
    document.querySelector("#clasificacion").classList.add("visible");
    //Iniciar();
}

function JuegoTerminado(){
    document.querySelector("#pierde").classList.add("visible");
}

function TiempoTerminado(){
    //por crear
}

function Finalizar(){
    document.forms["score"]["movements"].value = intentos;
    document.forms["score"]["score_time"].value = tiempo;
    document.querySelector("#gana").classList.add("visible");
    document.querySelector("#tiempo-final").innerText(tiempo);
    document.querySelector("#movimiento-final").innerText(intentos);
}

function CargaLobby(){
    document.querySelector("#bienvenida").classList.add("visible");
}

CargaLobby();