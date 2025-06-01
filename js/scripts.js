// declaracion de variables 

const menu_side = document.querySelector("#menu_side");
const btn_open = document.querySelector("#btn_open");
const body = document.querySelector("#body");

// Evento para mostrar y ocultar menu.

btn_open.addEventListener("click", ()=>{
    menu_side.classList.toggle("menu__side_move");
    body.classList.toggle("body__move");
});

if(window.innerWidth < 760){
    body.classList.add("body__move");
    menu_side.classList.add("menu__side_move");
}

// window.addEventListener("resize", function(){

//     if (window.innerWidth > 760){

//         body.classList.remove("body_move");
//         side_menu.classList.remove("menu__side_move");
//     }

//     if (window.innerWidth < 760){

//         body.classList.add("body_move");
//         side_menu.classList.add("menu__side_move");
//     }

// });