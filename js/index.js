/* 
steps:
-crear una lista de productos
-crear una lista de prodcutos recientes
-mostrar en pantalla los productos recientes

*/

//Enlasarme al DOM

const URL2= "js/store.json";
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

function displayProducts() {
  newInStore.innerHTML = "";

  if (cartNew.length > 0) {
    cartNew.forEach((element) => {
      newInStore.innerHTML += createCard(element);
    });
  }
}

function productSelected() {
  const buttonsBuy = document.querySelectorAll("button.purchase");
  buttonsBuy.forEach((button) => {
    button.addEventListener("click", (event) => {
      Toastify({
        text: "Added Product",
        style: {
          background: "linear-gradient(to right, #8ADAB2, #DF826C)",
        },
        duration: 1000,
      }).showToast();
      const id = parseFloat(event.target.id);
      const selected = cartNew.find((p) => p.id === id);
      cart.push(selected);
      localStorage.setItem("newCart", JSON.stringify(cart));
    });
  });
}

//obtaining products the backEnd
function obtainProductsCartNew() {
  fetch(URL2)
    .then((answer) => answer.json())
    .then((data) => {
      cartNew.push(...data);
      displayProducts();
      productSelected();
    });
}

obtainProductsCartNew();

//email footer


function obtainDataInput() {
  const sendEmail = document.querySelector("#submit");
  const input = document.querySelector(".inputE");

  function showMessageSuccess() {
    Swal.fire({
      title: "Good job!",
      text: "Your information was sended correctly",
      icon: "success"
    });
  }

  function showMessageError(){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The field is empty!",
    });
  };

  function handleClick() {
    if (input.value.trim() !== "") {
      showMessageSuccess();
    } else {
      showMessageError();
    }
  }

  sendEmail.addEventListener("click", handleClick);
}

obtainDataInput()


const stored = localStorage.getItem("newCart");
const resultStored = JSON.parse(stored);
const table = document.querySelector("tbody");

function createCardC(show){
  return `

  <tr>
      <td><img src="${show.image}"></td>
      <td>${show.title}</td>
      <td>usd${show.price.toFixed(2)}</td>

  </tr>
`
}

//show cart 


 const listCart = document.querySelector(".tableBody");
const cell = document.querySelector("td#price");

function emptyingAndLoading(){
 listCart.innerHTML = "";

 if(resultStored.length > 0 ){
  resultStored.forEach((adding)=> listCart.innerHTML += createCardC(adding));
  showFullPrice()
 } else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something happened while loading the products!",
  });
 }
}

function showFullPrice(){
  const totalCart =  resultStored.reduce((a,b)=> a + b.price,0)  

  cell.textContent = `
  $${totalCart}`
}

emptyingAndLoading()


const finalizePurchase = document.querySelector("#finalizePurchase") 

function finalizePurchaseAndClear(){
  const tfoot = document.querySelector(".tfoot")
  finalizePurchase.addEventListener("click",()=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You bought correctly the products",
      showConfirmButton: false,
      timer: 1500

    
    });
    listCart.innerHTML = "";
    tfoot.innerHTML = "";
  })
}
finalizePurchaseAndClear()







