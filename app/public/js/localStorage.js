
window.onload = function() {
    var src = document.getElementById("cantCarrito"),
        dst = document.getElementById("cantCompra");
    src.addEventListener('input', function() {
        dst.value = src.value;
    });
};


var prodInstance = document.getElementById("theProd").value;

var prod = {aProduct:{ id: prodInstance.id, prodName: prodInstance.prodName, price: prodInstance.price }};


document.getElementById("addProduct").addEventListener("click", ( ) => {

/* let cart = sessionStorage.getItem('cart');

if(!cart == null){
    cart = [];
}
cart.push(prd); */

if(sessionStorage.getItem('cart') == null){
    sessionStorage.setItem('cart', JSON.stringify(prod));
}else{
    var allProds = sessionStorage.getItem('cart');
    allProds = {...allProds, ...prod};
    var allProdsJSON = JSON.stringify(allProds);
    sessionStorage.setItem('cart',allProdsJSON);
}
 

console.log(prodInstance);
console.log(prod);
console.log(allProds);

 console.log(allProdsJSON);



});

/* function addToCart(product){

} */