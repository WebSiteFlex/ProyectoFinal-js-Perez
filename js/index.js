/* 
steps:
-crear una lista de productos
-crear una lista de prodcutos recientes
-mostrar en pantalla los productos recientes

*/

//Enlasarme al DOM

const URLPn = "js/newInStore.json";
const URL = "js/store.json";
const cart = [];
const cartNew = [];
const newInStore = document.querySelector(".newIn");
// const cardError = document.querySelector(".cartError");

// store

//create a new card for product

function createCard(products) {
  return `
    <div class="imgProduct">
    <img src="${products.image}" alt="img-shopOnline">
    <h5 class="titleProduct">${products.title}</h5>
    <h6 class="subtitleProduct">${products.category}</h6>
    <span id="price">$${products.price}</span>
    <button class="purchase" id="${products.id}">Purchase</button>
  </div>
    `;
}

// function cardError() {
//   if (cartNew === 0 || cartNew === undefined) {

//     return `  <div>
//         <img src="img/error.png" alt="icon">
//     </div>
//     <h5 class="sBError">we can´t load the products</h5>`;
//   }
// }

function displayProductsInNewIn() {
  newInStore.innerHTML = "";

  if (cartNew.length > 0) {
    cartNew.forEach((element) => {
      newInStore.innerHTML += createCard(element);
    });
  }
}



function productSelectedOfNewIn() {
  const buttonsBuy = document.querySelectorAll("button.purchase");
  buttonsBuy.forEach((button) => {
    button.addEventListener("click", (event) => {
      Toastify({

        text: "Added Product",
        style: {
          background: "linear-gradient(to right, #8ADAB2, #DF826C)",
        },
        duration: 1000
        
        }).showToast();
      const id = parseFloat(event.target.id);
      const selected = cartNew.find((p) => p.id === id);

      cart.push(selected);
      localStorage.setItem("newCart", JSON.stringify(cart));
    });
  });
}


function obtainProducts() {
  fetch(URLPn)
    .then((answer) => answer.json())
    .then((data) => {
      cartNew.push(...data);
      displayProductsInNewIn();
      productSelectedOfNewIn();
    });
}

obtainProducts();
//obtaining products the backEnd
