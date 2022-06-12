function ActualizarContador(){
    intentos++;
    
    var intText;
    intText = intentos;
    
    if(intentos < 10) {
        intText = "0" + intentos;
    }

    document.querySelector("#cont").innerText = intText;
}