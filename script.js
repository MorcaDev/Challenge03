let navMenu      = document.getElementById("nav-sections");
let navLeft     = document.getElementById("nav-menu_brand");
let navRight    = document.getElementById("nav-cart_user");

let containerMain   = document.querySelector("main");

let openMenu    = document.getElementById("burger-open");
let closeMenu   = document.getElementById("burger-close");

let burgerMenu = (ev) =>{

    let cssShowMenu = "show-nav-sections";
    navMenu.classList.toggle(cssShowMenu)

    let cssOpacity = "opacity-containers"; 
    navLeft.classList.toggle(cssOpacity)
    navRight.classList.toggle(cssOpacity)
    containerMain.classList.toggle(cssOpacity)
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

let trashButton    = document.getElementById("delete-contain")
let checkContain    = document.getElementById("checkbox-contain")

let deleteCheckBoxContain = (ev) =>{

    swal({
        title: "Are you sure?",
        icon: "warning",
        text : "",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) { cartBox.removeChild(checkContain) } 
        else { }
      });

}

trashButton.addEventListener("click",deleteCheckBoxContain)


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let checkoutButton = document.getElementById("check-open");



//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let previewContainer        = document.getElementById("previewContainer") 
let numberPreviewContainer   = 1;

let buttonLeft      = document.getElementById("leftButton")
let buttonRight     = document.getElementById("rightButton")

let changeImage = (ev) =>{

    let typeOfClick = ev.target.id

    if (typeOfClick === "leftButton") {
        
        if(numberPreviewContainer === 1){
            numberPreviewContainer = 4
        }else{
            numberPreviewContainer--
        }

        switch (numberPreviewContainer) {
            case 1:
                previewContainer.classList.replace("main-preview2","main-preview1")
                break;
    
            case 2:
                previewContainer.classList.replace("main-preview3","main-preview2")
                break;
    
            case 3:
                previewContainer.classList.replace("main-preview4","main-preview3")
                break;
    
            case 4:
                previewContainer.classList.replace("main-preview1","main-preview4")
                break;
    
            default:
                break;
        }   

    }else if(typeOfClick === "rightButton"){
        
        if(numberPreviewContainer === 4){
            numberPreviewContainer = 1
        }else{
            numberPreviewContainer++
        }
        
        switch (numberPreviewContainer) {
            case 1:
                previewContainer.classList.replace("main-preview4","main-preview1")
                break;
    
            case 2:
                previewContainer.classList.replace("main-preview1","main-preview2")
                break;
    
            case 3:
                previewContainer.classList.replace("main-preview2","main-preview3")
                break;
    
            case 4:
                previewContainer.classList.replace("main-preview3","main-preview4")
                break;
    
            default:
                break;
        }   

    }else{}

}

buttonLeft.addEventListener("click", changeImage)
buttonRight.addEventListener("click", changeImage)



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



//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

let buttonAdd  = document.getElementById("buttonAdd");

let modifyCart = () =>{

    swal("Good choose", "Thanks for your purchase", "success");
    
}

buttonAdd.addEventListener("click", modifyCart)

/*

<div class="contain-info">
    <img class="info-image" src="./assets/image-product-1-thumbnail.jpg" alt="snickers which you bough"/>
    
    <div class="info-container">
        <p>Autumn Limited Edition...</p>

        <div class="container-row">
            <h3>$125.00 x <span id="quantityJS">3</span></h3>
            <h2 id="priceJS">$375.00</h2>
        </div>   
    </div>
    
    <button id="delete-contain" class="info-button" alt="to delete your purchase form the cart"></button>
</div>
<div class="contain-button">
    <button id="check-open">Checkout</button>
</div>

*/
