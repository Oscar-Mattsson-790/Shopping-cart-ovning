let shoppingCart = [];

document.getElementById("open-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("hide");
});

let products = document.getElementsByTagName("button");
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function (event) {
    let product = event.target.parentNode.getAttribute("data-product");

    for (const items of shoppingCart) {
      if (items === product) {
        return alert("Item already added in cart");
      }
    }

    shoppingCart.push(product);
    updateCart();
    listProductsInCart();
    console.log(shoppingCart);
  });
}

function listProductsInCart() {
  document.getElementById("productsInCart").innerHTML = shoppingCart.length;
}

function updateCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts +=
      '<li><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      "\t <button class='remove-btn' data-index=" +
      i +
      ">x</button></li>";
  }
  document.getElementById("products").innerHTML = cartProducts;
  let removeButtons = document.getElementsByClassName("remove-btn");
  for (let button of removeButtons) {
    button.addEventListener("click", (event) => {
      let index = event.target.dataset.index;
      shoppingCart.splice(index, 1);
      updateCart();
    });
  }
}

// listProductsInCart();
