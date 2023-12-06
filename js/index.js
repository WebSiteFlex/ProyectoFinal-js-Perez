/* 
steps:
-crear una lista de productos
-crear una lista de prodcutos recientes
-mostrar en pantalla los productos recientes

*/

//Enlasarme al DOM
const cart = JSON.parse(localStorage.getItem("ProductsCart")) || [];
const newInStore = querySelector(".newIn");



// store
// const productsStoreNew = [
//     {image:"#", title:"Stainless Steel", price:25, id:1, category:"bottle"},
//     {image:"#", tittle:"Organic Cotton", price:5, id:2,category:"Mesh Bags"},
//     {image:"#", title:"Seaweed", price:6.50, id:3, category:"Natural Soap"},
//     {image:"#", title:"Eco Glass", price:5.50, id:4, category:"bottle"}
// ];

// const productsStore = [
//     {image:"#", title:"Stainless Steel", price:25, id:1, category:"Kitchen"},
//     {image:"#", tittle:"Organic Cotton", price:5, id:2,category:"On The Go"},
//     {image:"#", title:"Seaweed", price:6.50, id:3, category:"Bath"},
//     {image:"#", title:"Eco Glass", price:5.50, id:4, category:"Kitchen"},
//     {image:"#", title:"Compostable Kitchen Sponges", price:7, id:5, category:"Bag"},
//     {image:"#", title:"Organic Shopping Bag", price:10.80, id:6, category:"On The Go"},
//     {image:"#", title:"Bamboo ToothBrush", price:5.50, id:7, category:"Bath"},
//     {image:"#", title:"Loofah Sponges", price:7, id:8, category:"Bath"},
//     {image:"#", title:"Bamboo HairBrush", price:10, id:9, category:"Bath"},
//     {image:"#", title:"Bamboo Cutlery Set", price:10.80, id:10, category:"Kitchen"},
//     {image:"#", title:"Seaweed Natural Soap", price:6.50, id:11, category:"Bath"},
//     {image:"#", title:"Eco Glass Container", price:1.50, id:12, category:"Kitchen"},
//     {image:"#", title:"Lemongrass Natural Soap", price:7, id:13, category:"Bath"},
//     {image:"#", title:"Organic Cotton Mesh Bags", price:5, id:14, category:"On The Go"},
//     {image:"#", title:"Stainless Steel Lunch Box", price:15, id:15, category:"Kitchen"},
//     {image:"#", title:"Organic Facial Pads", price:5.58, id:16, category:"Bath"},
//     {image:"#", title:"Wood Brush", price:7, id:17, category:"Kitchen"},
//     {image:"#", title:"Organic Canvas Tote Bag", price:10, id:18, category:"On The Go"},
//     {image:"#", title:"Honey Natural Soap", price:6.30, id:19, category:"Bath"},
//     {image:"#", title:"Multi Purpose Silicone", price:7.20, id:20, category:"Kitchen"},
//     {image:"#", title:"Wooden Foot File", price:5.40, id:21, category:"Bath"}
// ];

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