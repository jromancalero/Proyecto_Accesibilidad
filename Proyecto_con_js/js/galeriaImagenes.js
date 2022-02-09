
/* CREAMOS LOS ELEMENTOS DE LAS ARRAYS */
let imagenes1 = ['../imagenes/galeria-imagenes/lambo.jpg','../imagenes/galeria-imagenes/lambo2.jpg','../imagenes/galeria-imagenes/lambo3.jpg'];
document.slider1.src = "../imagenes/galeria-imagenes/lambo.jpg";
let imagenes2 = ['../imagenes/galeria-imagenes/audi.jpg','../imagenes/galeria-imagenes/audi2.jpg','../imagenes/galeria-imagenes/audi3.jpg'];
document.slider2.src = ['../imagenes/galeria-imagenes/audi.jpg'];
let imagenes3 = ['../imagenes/galeria-imagenes/porsche.jpg','../imagenes/galeria-imagenes/porsche2.jpg','../imagenes/galeria-imagenes/porsche3.jpg'];
document.slider3.src = ['../imagenes/galeria-imagenes/porsche.jpg'];
let imagenes4 = ['../imagenes/galeria-imagenes/mclaren.jpg','../imagenes/galeria-imagenes/mclaren2.jpg','../imagenes/galeria-imagenes/mclaren3.jpg'];
document.slider4.src = ['../imagenes/galeria-imagenes/mclaren.jpg'];
let imagenes5 = ['../imagenes/galeria-imagenes/bmw.jpg','../imagenes/galeria-imagenes/bmw2.jpg','../imagenes/galeria-imagenes/bmw3.jpg'];
document.slider5.src = ['../imagenes/galeria-imagenes/bmw.jpg'];
let imagenes6 = ['../imagenes/galeria-imagenes/lexus.jpg','../imagenes/galeria-imagenes/lexus2.jpg','../imagenes/galeria-imagenes/lexus3.jpg'];
document.slider6.src = ['../imagenes/galeria-imagenes/lexus.jpg'];

let indiceImagenes = 0;

/* EVENTO EN TODA LA PAGINA */

window.addEventListener("load", function () {
    
    /* FUNCIÓN PARA SALTAR LAS IMÁGENES */
    function saltarImagen() {
        document.slider1.src = imagenes1[indiceImagenes];
        document.slider2.src = imagenes2[indiceImagenes];
        document.slider5.src = imagenes5[indiceImagenes];
        document.slider6.src = imagenes6[indiceImagenes];
        if (indiceImagenes < 2) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }   
    }
    setInterval(saltarImagen, 6000);

    function saltarImagen2() {
        document.slider3.src = imagenes3[indiceImagenes];
        document.slider4.src = imagenes4[indiceImagenes];
        if (indiceImagenes < 2) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }   
    }
    setInterval(saltarImagen2, 8000);
});