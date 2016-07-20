var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}


function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
    if (cart.length === 0) {
      return "Your shopping cart is empty.";
    }
    else {
      var cart_list = "In your cart, you have ";
    for(var i=0; i<cart.length; i++){
      var keys = Object.keys(cart[i]);
      cart_list += `${keys[0]} at $${cart[i][keys[0]]}, `;
    }
    console.log(cart_list.slice(0, -2) + '.');
  }
}

function removeFromCart(item){
  in_cart = 0
  for(var i=0; i<cart.length; i++){
    if (Object.keys(cart[i])[0] === item){
      cart.splice(i, 1);
      return cart;
      in_cart++
    }
  }
  if (in_cart === 0){
        console.log("That item is not in your cart.");
  }
}


function placeOrder(number){
  if (number == null){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
          cart.splice(0, cart.length);
  }
}
