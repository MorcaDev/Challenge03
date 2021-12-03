console.log(`Hi there`)

let navMenu      = document.getElementById("nav-sections");
let navLeft     = document.getElementById("nav-menu_brand");
let navRight    = document.getElementById("nav-cart_user");

let containerMain   = document.querySelector("main");
let containerFooter = document.querySelector("footer");

let openMenu    = document.getElementById("burger-open");
let closeMenu   = document.getElementById("burger-close");

let burgerMenu = (ev) =>{

    let cssShowMenu = "show-nav-sections";
    navMenu.classList.toggle(cssShowMenu)

    let cssOpacity = "opacity-containers"; 
    navLeft.classList.toggle(cssOpacity)
    navRight.classList.toggle(cssOpacity)
    containerMain.classList.toggle(cssOpacity)
    containerFooter.classList.toggle(cssOpacity)
    
}

openMenu.addEventListener("click",burgerMenu)
closeMenu.addEventListener("click",burgerMenu)