const boton = document.getElementById("hamburguesa");
const menuDesplegado = document.getElementById("container");
const brand = document.getElementById("brand");
const asideOpen = document.getElementById("aside");
const menuOpen = document.getElementById("menu");




boton.addEventListener("click", ()=>{
    menuDesplegado.classList.toggle("menu__desplegado");
    asideOpen.classList.toggle("aside__open");
    brand.classList.toggle("brand_open");
    menuOpen.classList.toggle("menu_open");

    asideOpen.classList.toggle("visible");
});