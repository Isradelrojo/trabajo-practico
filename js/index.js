/* Con este primer codigo manejamos el desplazamiento del menu lateral */

const boton = document.getElementById("hamburguesa");
const menuDesplegado = document.getElementById("container");
const brand = document.getElementById("brand");
const asideOpen = document.getElementById("aside");
const menuOpen = document.getElementById("menu");




boton.addEventListener("click", () => {
    menuDesplegado.classList.toggle("menu__desplegado");
    asideOpen.classList.toggle("aside__open");
    brand.classList.toggle("brand_open");
    menuOpen.classList.toggle("menu_open");

    asideOpen.classList.toggle("visible");
});

/* Con este codigo vamos a manejar el form de contactos */

const container = document.querySelector("#form_container_personal");
const nombre = document.querySelector("#contacto_nombre");
const apellido = document.querySelector("#contacto_apellido");
const email = document.querySelector("#contacto_email");
const telefono = document.querySelector("#contacto_telefono");
const vehiculo = document.querySelector("#contacto_vehiculo");
const marca = document.querySelector("#contacto_marca");
const modelo = document.querySelector("#contacto_modelo");
const ano = document.querySelector("#contacto_ano");
const problema = document.querySelector("#contacto_problema");
const contactoBoton = document.querySelector("#contacto_enviar_boton");

contactoBoton.addEventListener("click", ()=>{
    container.innerHTML = `
    <div class="contacto_respuesta">
        <h3>Tu pedido ha sido generado.</h3>
        <p> Gracias ${nombre.value} por comunicarte y dejar tu comentario, ${problema}. lo trataremos para que quedes totalmente satisfecho/a. </p>
    </div>
    `
});