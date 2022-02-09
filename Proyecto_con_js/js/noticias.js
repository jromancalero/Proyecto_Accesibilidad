
/* QUITAR ALERTA MOLESTA*/

const alerta = document.querySelector('.alerta');
console.log(alerta);

alerta.addEventListener('click', function(e){
    alerta.setAttribute('style','visibility: hidden');
});

/* CAMBIAR IMAGENES*/

/* Selectores */

const botones = document.querySelectorAll('#articulo1 button')
const botones2 = document.querySelectorAll('#articulo2 button')
const botones3 = document.querySelectorAll('#articulo3 button')

const titulo1 = document.querySelector('#articulo1 a');
const imagen1 = document.querySelector('#articulo1 img')

const titulo2 = document.querySelector('#articulo2 h2');
const imagen2 = document.querySelector('#articulo2 img');

const titulo3 = document.querySelector('#articulo3 h2');
const imagen3 = document.querySelector('#articulo3 img');


/* Arrays de imagenes */
const arrayImagenes = [
    '../imagenes/noticias/camionroto.jpg',
    '../imagenes/noticias/accidenteA7.jpg',
    '../imagenes/noticias/fiat4x4.jpg',
    '../imagenes/noticias/atascoN47.jpg'
];

const arrayImagenes2 = [
    '../imagenes/noticias/prschenuevo.jpg',
    '../imagenes/noticias/ford2022.jpg',
    '../imagenes/noticias/tesla2022.jpg',
];
const arrayImagenes3 = [
    '../imagenes/noticias/limpIador.jpg',
    '../imagenes/noticias/quitagrasas.jpg',
    '../imagenes/noticias/piezasmecanicas.jpg',
    '../imagenes/noticias/limpiaparabrisas.jpg'
];

/* Arrays de titulos */
const arrayTitulos = [
    'Devastador accidente en la A-7',
    'Increible accidenteS en la AP-7',
    'Insuperable coche 4x4 Fiat',
    'Atasco de 5 h en la nacional 47'
];
const arrayTitulos2 = [
    'Nuevo Porsche 2022',
    'Nuevo Ford gama alta 2022',
    'Nuevo Tesla 2022',
];
const arrayTitulos3 = [
    'Limpiador 361 Nueva Gama alta',
    'Quita grasas para coche',
    'Piezas mecánicas con un 20% de aumento de precio ',
    'Limpiaparabrisas económico'
];

/* Alt de las imeagenes */
const arrayAlt1 = [
    'Camion roto',
    'Accidente AP7',
    'Fiat 4x4',
    'Atasco Nac 47'
];
const arrayAlt2 = [
    'Porsche 2022',
    'Ford Focus 2022',
    'Tesla 2022'
];
const arrayAlt3 = [
    'Limpiador 361',
    'Quita grasas coche',
    'Subida precio piezas mecanicas',
    'Limpiaparabrisas'
];

/* BUCLES CAMBIOS DE ELEMENTOS DENTRO DE LOS ARTÍCULOS */

for(let i = 0; i < botones.length; i ++){
    botones[i].addEventListener('click', function(event){
        console.log(event.target);

        /* Cambiamos de color los botones */
        event.target.setAttribute('style', 'background: blue');
        for(let j = 0; j < botones.length; j++){
            if(botones[i] !== botones[j]){
                botones[j].setAttribute('style', 'background: none');
            }
        }
        /* Cambiamos los valores de los elementos dentro de los articulos */   
        if(event.target === botones[i]){
            titulo1.textContent = arrayTitulos[i];
            imagen1.src = arrayImagenes[i];
            imagen1.alt = arrayAlt1[i];
        }
    });
}
for(let i = 0; i < botones2.length; i ++){
    botones2[i].addEventListener('click', function(event){
        console.log(event.target);

        /* Cambiamos de color los botones */
        event.target.setAttribute('style', 'background: blue');
        for(let j = 0; j < botones2.length; j++){
            if(botones2[i] !== botones2[j]){
                botones2[j].setAttribute('style', 'background: none');
            }
        }
        /* Cambiamos los valores de los elementos dentro de los articulos */
        if(event.target === botones2[i]){
            titulo2.textContent = arrayTitulos2[i];
            imagen2.src = arrayImagenes2[i];
            imagen2.alt = arrayAlt2[i];
        }
    });
}
for(let i = 0; i < botones3.length; i ++){
    botones3[i].addEventListener('click', function(event){
        console.log(event.target);

        /* Cambiamos de color los botones */
        event.target.setAttribute('style', 'background: blue');
        for(let j = 0; j < botones3.length; j++){
            if(botones3[i] !== botones3[j]){
                botones3[j].setAttribute('style', 'background: none');
            }
        }
        /* Cambiamos los valores de los elementos dentro de los articulos */
        if(event.target === botones3[i]){
            titulo3.textContent = arrayTitulos3[i];
            imagen3.src = arrayImagenes3[i];
            imagen3.alt = arrayAlt3[i];
        }
    });
}


for(let i = 0; i < botones3.length; i ++){
    botones3[i].addEventListener('click', function(event){
        console.log(event.target);

        /* Cambiamos de color los botones */
        event.target.setAttribute('style', 'background: blue');
        for(let j = 0; j < botones3.length; j++){
            if(botones3[i] !== botones3[j]){
                botones3[j].setAttribute('style', 'background: none');
            }
        }
        /* Cambiamos los valores de los elementos dentro de los articulos */
        if(event.target === botones3[i]){
            titulo3.textContent = arrayTitulos3[i];
            imagen3.src = arrayImagenes3[i];
            imagen3.alt = arrayAlt3[i];
        }
    });
}

Input.addEventListener('click',function(){
    input[1]
})