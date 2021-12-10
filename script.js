//////////////////////////////////////////////
/*               BURGER MENU                */
//////////////////////////////////////////////

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
/*              CHECKBOX OPEN               */
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
/*          PREVIEW MOBILE-TABLET           */
//////////////////////////////////////////////
let previewImg          = document.getElementById("imagePreview")
let numberPreviewImg    = 1;

let buttonLeft      = document.getElementById("leftButton")
let buttonRight     = document.getElementById("rightButton")

let changeImageMobile = (ev) =>{

    let typeOfClick = ev.target.id

    if (typeOfClick === "leftButton") {
        
        if(numberPreviewImg === 1){
            numberPreviewImg = 4
        }else{
            numberPreviewImg--
        }

    }else if(typeOfClick === "rightButton"){
        
        if(numberPreviewImg === 4){
            numberPreviewImg = 1
        }else{
            numberPreviewImg++
        }

    }else{}

    switch (numberPreviewImg) {
        case 1:
            previewImg.src = "./assets/image-product-1.jpg"
            break;

        case 2:
            previewImg.src = "./assets/image-product-2.jpg"
            break;

        case 3:
            previewImg.src = "./assets/image-product-3.jpg"
            break;

        case 4:
            previewImg.src = "./assets/image-product-4.jpg"
            break;

        default:
            break;
    }   

}

buttonLeft.addEventListener("click", changeImageMobile)
buttonRight.addEventListener("click", changeImageMobile)



//////////////////////////////////////////////
/*             QUANTITY NUMBER              */
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
/*            CHECKBOX CONTAIN              */
//////////////////////////////////////////////
let checkBoxContain    = document.getElementById("checkbox-contain")

let fromEmpty = () =>{

    let firstBrother    = 
    `<div class="contain-info">
        <img class="info-image" src="./assets/image-product-1-thumbnail.jpg" alt="snickers which you bough"/>
    
        <div class="info-container">
            <p>Autumn Limited Edition...</p>

            <div class="container-row">
                <h3>$125.00 x <span id="quantityJS">${numberOfNumberBox}</span></h3>
                <h2 id="priceJS">$${numberOfNumberBox*125}</h2>
            </div>   
        </div>

        <button id="delete-contain" class="info-button" alt="to delete your purchase form the cart"></button>
    </div>`;

    let secondBrother   = 
    `<div class="contain-button">
        <button id="check-open">Checkout</button>
    </div>`;

    checkBoxContain.innerHTML = firstBrother + secondBrother

    let trashIcon   = document.getElementById("delete-contain")
    trashIcon.addEventListener("click", deleteCheckBox)

}

let fromFull = () =>{

    let quantity= document.getElementById("quantityJS")    
    quantity.textContent = numberOfNumberBox

    let price   = document.getElementById("priceJS")
    price.textContent = `$${numberOfNumberBox * 125}`

}



//////////////////////////////////////////////
/*              DELETE CHECKBOX             */
//////////////////////////////////////////////

let deleteCheckBox = () =>{

    swal({
        title: "Are you sure?",
        icon: "warning",
        text : "",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) { 
            checkBoxContain.innerHTML = `<h3 id="emptyMessage">Your cart is empty</h3>` 
        } 
        else {

        }
      });
    
}



//////////////////////////////////////////////
/*              REVIEW CHECKBOX             */
//////////////////////////////////////////////

let checkChildren = ( ) =>{

    let collectionChildrenCheckBox = checkBoxContain.children
    let arrayChildrenCheckBox      = [...collectionChildrenCheckBox]
    let numberOfChildren        = arrayChildrenCheckBox.length
    
    if (numberOfChildren === 1 || numberOfChildren === 0) {
        fromEmpty()

    }else{
        fromFull()
    }


}



//////////////////////////////////////////////
/*                  ADD BUTTON              */
//////////////////////////////////////////////

let buttonAdd  = document.getElementById("buttonAdd");

let modifyCart = () =>{

    swal("Good choose", "Thanks for your purchase", "success");
    checkChildren()
}

buttonAdd.addEventListener("click", modifyCart)



//////////////////////////////////////////////
/*              PREVIEW DESKTOP             */
//////////////////////////////////////////////

let optionsPreview = document.getElementById("optionsPreview");

let identifyOption = (ev) =>{
    
    let option = ev.target.id 

    switch (option) {
        case "pv1":
            previewImg.src = "./assets/image-product-1.jpg"
            break;

        case "pv2":
            previewImg.src = "./assets/image-product-2.jpg"
            break;

        case "pv3":
            previewImg.src = "./assets/image-product-3.jpg"
            break;

        case "pv4":
            previewImg.src = "./assets/image-product-4.jpg"
            break;

        default:
            break;
    } 

}

optionsPreview.addEventListener("click", identifyOption)