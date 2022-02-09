const navBoton = document.querySelector('.toggle');
console.log(navBoton);
const navMenu = document.getElementById('lista-tercer-bloque-header');
console.log(navMenu);

navBoton.addEventListener('click', function(e) {

    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "block";
        return;
    }
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        return;
    }
});