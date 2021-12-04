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


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

openMenu.addEventListener("click",burgerMenu)
closeMenu.addEventListener("click",burgerMenu)

let cartBox    = document.getElementById("checkbox");
let cartButton  = document.getElementById("cart-open");

let cartSquare = (ev) =>{

    let cssShowMenu = "show-checkbox"
    cartBox.classList.toggle(cssShowMenu)

}

cartButton.addEventListener("click",cartSquare)


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let checkoutButton = document.getElementById("check-open");

let warn = (ev) =>{
    
    swal("Good job!", "You clicked the button!", "success");
}

checkoutButton.addEventListener("click", warn)


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let trashButton    = document.getElementById("delete-contain")
let checkContain    = document.getElementById("checkbox-contain")

let deleteCheckBoxContain = (ev) =>{

    cartBox.removeChild(checkContain)

}

trashButton.addEventListener("click",deleteCheckBoxContain)


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let moreButton  = document.getElementById("buttonMore")
let lessButton  = document.getElementById("buttonLess")

let numberBox   = document.getElementById("boxNumber")
let numberOfNumberBox = numberBox.textContent

let modifyNumber = (ev) =>{

    let button = ev.target.id
    let quantity = parseInt(numberOfNumberBox)

    if (button === "buttonMore") 
    {   
        quantity++
    }
    else if (button === "buttonLess" && quantity !== 1)
    {   
        quantity-- 
    }
    else
    { 
        console.log('it is not valiable') 
    }

    numberBox.textContent = quantity
    numberOfNumberBox = quantity
}

moreButton.addEventListener("click",modifyNumber)
lessButton.addEventListener("click", modifyNumber)