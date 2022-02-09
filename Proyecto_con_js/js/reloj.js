
const principal = document.getElementById('hora-pasapaginas1');
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');



window.addEventListener('load', function(e) {

    this.setInterval(function() {
        // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
        var fechahora = new Date();
        var hora = fechahora.getHours();
        var minuto = fechahora.getMinutes();
        var segundo = fechahora.getSeconds();

        // Variable meridiano con el valor 'AM' 
        var meridiano = "AM";


        // Si la hora es igual a 0, declaramos la hora con el valor 12 
        if (hora == 0) {

            hora = 12;

        }

        // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
        if (hora > 12) {

            hora = hora - 12;

            // Variable meridiano con el valor 'PM' 
            meridiano = "PM";

        }

        // Formateamos los ceros '0' del reloj 
        hora = (hora < 10) ? "0" + hora : hora;
        minuto = (minuto < 10) ? "0" + minuto : minuto;
        segundo = (segundo < 10) ? "0" + segundo : segundo;

        //enviamos la hora a la página
        horas.textContent = hora;
        minutos.textContent = minuto;
        segundos.textContent = segundo;

    }, 500);


})

// Cargamos el reloj a los 500 milisegundos