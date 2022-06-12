function Barajar(){
    var resultado;
    
    resultado = totalTarjetas.sort(function() {
        return 0.5 - Math.random();
    });

    return resultado;
}

function Repartir(){
    var tarjetasBarajadas = Barajar();
    var mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
            '<div class="tarjeta" data-valor=' + elemento + ' >' + 
                '<div class="tarjeta__contenido">' + 
                    elemento + 
                '</div>' +    
            '</div>';

        mesa.appendChild(tarjeta);
    })
}

function Descubrir(){
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if(totalDescubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if(descubiertas.length < 2){
        return;
    }

    Comparar(descubiertas);
    ActualizarContador();
}

function Comparar(tarjetasAComparar){
    if(tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
        Acierto(tarjetasAComparar);
    }else{
        Error(tarjetasAComparar);
    }
}

function Acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    });
}

function Error(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    });

    setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        });
    }, 1000);
}