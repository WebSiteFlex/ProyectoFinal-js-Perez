/* 
steps:
-crear una lista de productos
-crear una lista de prodcutos recientes
-mostrar en pantalla los productos recientes

*/

//Enlasarme al DOM

const newProducts = querySelector(".newIn");
const cart = JSON.parse(localStorage.getItem("ProductsCart")) || [];


//create a new card for product

function createCard(products) {
  return `
        <div class="imgProduct">
            <img src="${products.img}" alt="img-shopOnline">
            <h5 class="titleProduct">${products.name}/h5>
            <h6 class="subtitleProduct"${products.subtitle}</h6>
            <span id="price">${products.price}</span>
        </div>
    `;
}

function addProducts(){
    if(cart <= 0){

        newProducts.innerHTML += "";

        cart.forEach(element => {
           newProducts.innerHTML += createCard(element);
        });
    }
}