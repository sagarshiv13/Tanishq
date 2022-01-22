import navbar from "./header.js";

var Navbar = document.getElementById("navbar");
Navbar.innerHTML = navbar();

var CartArr = JSON.parse(localStorage.getItem("cart")) || [];
var tbody = document.getElementById("tbody");

var orderDiv = document.getElementById("order");
var CartTotal = CartArr.length;

ShowData(CartArr);
console.log(CartArr);

function ShowData(CartArr) {
  CartArr.forEach((item) => {
    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr1");

    var td1 = document.createElement("td");
    var div1 = document.createElement("div");

    div1.setAttribute("id", "div1");
    var detailsDiv = document.createElement("div");

    detailsDiv.setAttribute("id", "detailsDiv");

    var imgdiv = document.createElement("div");
    var hCart = document.getElementById("head1");
    hCart.innerHTML = "CART: " + CartTotal + " ITEM";
    hCart.style.fontSize = "28px";

    var img = document.createElement("img");
    img.src = item.image;
    img.setAttribute("id", "prodImg");

    var name = document.createElement("h2");
    name.innerHTML = item.name;

    var id = document.createElement("h4");
    id.innerText = "500064OUAAPA042JA000047";

    var price = document.createElement("h4");
    price.innerHTML = "₹" + item.newPrice;

    var p1 = document.createElement("p");
    p1.innerText = "Weight (g): 0.197";

    var p2 = document.createElement("p");
    p2.innerText = "Diamond Weight (Carat): 0.014";

    var wishlist = document.createElement("button");
    wishlist.setAttribute("id", "wishlist");
    wishlist.innerHTML = "Move To Wishlist";

    var td2 = document.createElement("td");
    var Quantity = document.createElement("div");
    Quantity.setAttribute("id", "Quantity");
    Quantity.innerHTML = "1";

    var Remove = document.createElement("button");
    Remove.innerHTML = "Remove";
    Remove.setAttribute("id", "Remove");
    Remove.addEventListener("click", function () {
      console.log("here");
      RemoveItem();
    });


    var radioDiv = document.createElement("div");
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "checkbox");
    radioDiv.setAttribute("id", "radioDiv");

    var p3 = document.createElement("p");
    p3.innerHTML = "Add Gift Message";

    var td3 = document.createElement("td");
    var totalprice = document.createElement("h4");
    totalprice.innerHTML = "₹" + item.newPrice;

    var bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("id", "bottomDiv");
    var shipping = document.createElement("h2");
    shipping.innerHTML = "Shipping Method:";

    var Homebox = document.createElement("div");
    Homebox.innerHTML = "HOME DELIVERY";
    Homebox.setAttribute("id", "Homebox");

    var Delivery = document.createElement("div");
    Delivery.setAttribute("class", "innerDiv");
    Delivery.append(shipping, Homebox);

    var contryname = document.createElement("h2");
    contryname.innerText = "COUNTRY";
    contryname.setAttribute("class", "bottomtext");

    var select = document.createElement("select");
    select.setAttribute("id", "sel");


    var opt1 = document.createElement("option");
    var opt2 = document.createElement("option");
    opt1.value = "India";
    opt1.text = "India";

    opt2.value = "America";
    opt2.text = "America";
    select.add(opt1);
    select.add(opt2);
    select.style.fontSize = "16px";

    var country = document.createElement("div");
    country.append(contryname, select);
    country.setAttribute("class", "innerDiv");

    var pincodeText = document.createElement("h2");
    pincodeText.innerHTML = "PIN-CODE/ZIP-CODE";
    pincodeText.setAttribute("class", "bottomtext");

    var pincodeBox = document.createElement("div");
    pincodeBox.setAttribute("id", "pincodeBox");

    var pinInput = document.createElement("input");
    pinInput.setAttribute("id", "pinInput");
    var pin = pinInput.value;
    var checkbtn = document.createElement("button");
    checkbtn.innerHTML = "Check";

    checkbtn.setAttribute("id", "Check");
    pincodeBox.append(pinInput, checkbtn);
    var pincode = document.createElement("div");
    pincode.setAttribute("class", "innerDiv");
    pincode.append(pincodeText, pincodeBox);

    detailsDiv.append(name, id, price, p1, p2, wishlist);
    imgdiv.append(img);
    div1.append(imgdiv, detailsDiv);
    radioDiv.append(checkbox, p3);
    bottomDiv.append(Delivery, country, pincode);
    td1.append(div1);
    td2.append(Quantity, Remove, radioDiv);
    td3.append(totalprice);
    tr.append(td1, td2, td3);
    tbody.append(tr, bottomDiv);
  });
}
// function RemoveItem(index){
//     count--;
//     index.qty--;
//     if (count === 0 && index.qty === 0) {
//         delItemsFromCart(i);
//         item.remove();
//     }

// }
function RemoveItem(index) {
  CartArr.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(CartArr));
  ShowData(CartArr);
  location.reload();


}
var sum;
function applyPromo() {
  var discount = CartArr.reduce(function (acc, cv) {
    sum = (CartPrice * 30) / 100;
    if (promocode.value == "Tanishq30") {
      return CartPrice - sum;
    } else {
      return CartPrice;
    }
  }, 0);
  pTotal.innerHTML = "₹" + discount;
  PricePay.innerHTML = "₹" + discount;
  if (promocode.value == "Tanishq30") {
    pDiscount.innerText = "₹" + sum;
  }
}

var CartPrice = CartArr.reduce(function (acc, cur) {
  return acc + cur.newPrice;
}, 0);
var sideDiv = document.getElementById("sideDiv");

var sideDiv1 = document.getElementById("sidediv1");

var sideDiv2 = document.getElementById("sidediv2");

var priceTotal = document.createElement("p");
priceTotal.innerText = `ORDER TOTAL (${CartTotal} ITEMS) `;

var pTotal = document.createElement("h3");
pTotal.innerHTML = "₹" + CartPrice;
console.log('CartPrice:', CartPrice)

var Oshipping = document.createElement("p");
Oshipping.innerHTML = "SHIPPING";

var free = document.createElement("h2");
free.innerText = "FREE";

var Tdiscount = document.createElement("p");
Tdiscount.innerText = "DISCOUNT";

var promocode = document.getElementById("Promo");
document.getElementById("promobtn").addEventListener("click", function () {
  applyPromo();
});
var pDiscount = document.createElement("h3");
pDiscount.innerText = "₹" + 0;
var PricePay = document.createElement("h2");
PricePay.innerHTML = CartPrice;

var pay = document.createElement("h2");
pay.innerText = "YOU PAY";
var tax = document.createElement("h4");
tax.innerText = "INCLUSIVE OF ALL TAXES*";
sideDiv1.append(priceTotal, Oshipping, Tdiscount, pay, tax);
sideDiv2.append(pTotal, free, pDiscount, PricePay);
//   sideDiv.append(sideDiv1,sideDiv2)
//   orderDiv.append(sideDiv)
var checkout = document
  .getElementById("checkout")
  .addEventListener("click", goToPay);
function goToPay() {
  window.location.href = "payment.html";
}
