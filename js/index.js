

// /* Con este primer codigo manejamos el desplazamiento del menu lateral */

// const boton = document.getElementById("hamburguesa");
// const menuDesplegado = document.getElementById("container");
// const brand = document.getElementById("brand");
// const asideOpen = document.getElementById("aside");
// const menuOpen = document.getElementById("menu");




// boton.addEventListener("click", () => {
//     menuDesplegado.classList.toggle("menu__desplegado");
//     asideOpen.classList.toggle("aside__open");
//     brand.classList.toggle("brand_open");
//     menuOpen.classList.toggle("menu_open");

//     asideOpen.classList.toggle("visible");
// });

// /* Con este codigo vamos a manejar el form de contactos */

// const container = document.querySelector("#form_container");
// const formDatosPersonales = document.querySelector("#form_personal");
// const formDatosVehiculo = document.querySelector("#form_vehiculo");
// // const nombre = document.querySelector("#contacto_nombre");
// // const apellido = document.querySelector("#contacto_apellido");
// // const email = document.querySelector("#contacto_email");
// // const telefono = document.querySelector("#contacto_telefono");
// // const vehiculo = document.querySelector("#contacto_vehiculo");
// // const marca = document.querySelector("#contacto_marca");
// // const modelo = document.querySelector("#contacto_modelo");
// // const ano = document.querySelector("#contacto_ano");
// // const problema = document.querySelector("#problema");
// // const contactoBoton = document.querySelector("#contacto_enviar_boton");
// const contenedorNuevo = document.createElement("div");

// // console.log(formDatosPersonales);

// // contactoBoton.addEventListener("click", ()=>{
// //     contenedorNuevo.innerHTML += `
// //     <div class="contacto_respuesta">
// //         <h3>Tu pedido ha sido generado.</h3>
// //         <p> Gracias ${nombre.value} por comunicarte y dejar tu comentario, ${problema.value}. lo trataremos para que quedes totalmente satisfecho/a. </p>
// //     </div>
// //     `
// //     container.appendChild(contenedorNuevo);

// //     formDatosPersonales.reset();
// //     formDatosVehiculo.reset(); 

// // });


// document.getElementById("contacto_enviar_boton").addEventListener("click", function () {
    
//     // Capturamos los campos del formulario personal
//     const nombre = document.getElementById("contacto_nombre").value.trim();
//     const apellido = document.getElementById("contacto_apellido").value.trim();
//     const email = document.getElementById("contacto_email").value.trim();
//     const telefono = document.getElementById("contacto_telefono").value.trim();
    
//     // Capturamos los campos del formulario vehiculo
//     const marca = document.getElementById("contacto_marca").value.trim();
//     const modelo = document.getElementById("contacto_modelo").value.trim();
//     const ano = document.getElementById("ano").value.trim();
//     const problema = document.getElementById("problema").value.trim();
    
//     console.log(nombre.value);
//     // Verificamos si alguno está vacío
//     if (!nombre || !apellido || !email || !telefono || !marca || !modelo || !ano || !problema) {
//         alert("Por favor, complete todos los campos antes de enviar el formulario.");
//         return;
//     }

//     // Si todos están completos, podés hacer el envío manual o mostrar mensaje
//     // alert("Formulario enviado correctamente.");
//     // Acá podrías agregar un fetch(), enviar a backend o resetear los formularios
//     // document.getElementById("form_personal").reset();
//     // document.getElementById("form_vehiculo").reset();

//     contenedorNuevo.innerHTML += `
//      <div class="contacto_respuesta form_container_mensaje">
//          <h3>Tu pedido ha sido generado.</h3>
//         <p> Gracias ${nombre} por comunicarte y dejar tu comentario, ${problema}. lo trataremos para que quedes totalmente satisfecho/a. </p>
//      </div>
//      `
//     container.appendChild(contenedorNuevo);

//     formDatosPersonales.reset();
//     formDatosVehiculo.reset();
// });


/* Estilos agregados 10/07 */

/* ============================================
   Manejo del menú lateral (hamburguesa)
============================================ */

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

/* ============================================
   Validación y respuesta del formulario de contacto
============================================ */

const container = document.querySelector("#form_container");
const formDatosPersonales = document.querySelector("#form_personal");
const formDatosVehiculo = document.querySelector("#form_vehiculo");
const contenedorNuevo = document.createElement("div");

const botonContacto = document.getElementById("contacto_enviar_boton");
if (botonContacto) {
    botonContacto.addEventListener("click", function () {
        const nombre = document.getElementById("contacto_nombre").value.trim();
        const apellido = document.getElementById("contacto_apellido").value.trim();
        const email = document.getElementById("contacto_email").value.trim();
        const telefono = document.getElementById("contacto_telefono").value.trim();
        const marca = document.getElementById("contacto_marca").value.trim();
        const modelo = document.getElementById("contacto_modelo").value.trim();
        const ano = document.getElementById("ano").value.trim();
        const problema = document.getElementById("problema").value.trim();

        if (!nombre || !apellido || !email || !telefono || !marca || !modelo || !ano || !problema) {
            alert("Por favor, complete todos los campos antes de enviar el formulario.");
            return;
        }

        contenedorNuevo.innerHTML = `
            <div class="contacto_respuesta form_container_mensaje">
                <h3>Tu pedido ha sido generado.</h3>
                <p>Gracias ${nombre} por comunicarte y dejar tu comentario: "${problema}". Lo trataremos para que quedes totalmente satisfecho/a.</p>
            </div>
        `;
        container.appendChild(contenedorNuevo);

        formDatosPersonales.reset();
        formDatosVehiculo.reset();
    });
}

/* ============================================
   Formulario de registro de usuarios
============================================ */

const formRegistro = document.getElementById("form_registro");
const mensajeRegistro = document.getElementById("mensaje_registro");

if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault();

        // Se podría agregar validación aquí si se desea
        mensajeRegistro.style.display = "block";
        formRegistro.reset();
    });
}


/* Carga de productos mediante javascript desde un json */

fetch('../js/productos/productos.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.querySelector('.productos_container');
    productos.forEach(producto => {
      const estrellas = '★'.repeat(producto.rating) + '☆'.repeat(5 - producto.rating);
      const card = document.createElement('div');
      card.classList.add('producto_card');
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <span class="precio">$${producto.precio.toLocaleString()}</span>
        <p class="rating">${estrellas}</p>
        <button class="comprar_btn">Comprar</button>
      `;
      contenedor.appendChild(card);
      console.log(producto.imagen);
    });
  })
  .catch(error => console.error('Error al cargar productos:', error));

  