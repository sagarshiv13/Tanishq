
  let ab = document.getElementById("ab");
  import navbar from "./header.js";
  ab.innerHTML = navbar();

  let data;
  let wall = document.getElementById("wall");

  let ProdutArr = JSON.parse(localStorage.getItem("cart")) || [];

  
  // let cartCount = document.getElementById("cart-count")
  // let cartt = ProdutArr.length
  // cartCount.innerHTML = cartt


  async function getProducts(){
    
    
   let response = await fetch("https://tanishq-clone-2.herokuapp.com/products") 
   data = await response.json()
   console.log('data:', data)
   totalProd(data);
  }
  getProducts()


  let sort = document.getElementById("price-so").addEventListener("change",SortByPrice)
  function SortByPrice(){
    
    let select = document.getElementById("price-so").value
    if(select == "Low"){
      
   let product = data.sort(function(a,b){
     
      return a.newPrice - b.newPrice
    })
  }
 
  if(select == "High"){
      
      let product = data.sort(function(a,b){
        
         return b.newPrice - a.newPrice
       })
     }
    
    totalProd(data);
  }






  function totalProd(all) {
    wall.innerHTML= ""
    all.forEach(function (item) {
      let div = document.createElement("div");
      div.id = "hovereffect";
         

      let name = document.createElement("h3");
      name.innerText = item.name;
      // name.setAttribute("id", "name")

      let price = document.createElement("h5");
      price.innerText = item.newPrice;

      let img = document.createElement("img");
      img.src = item.image;

      let btn = document.createElement("button");
      btn.setAttribute("id", "btn");

      btn.innerHTML = "Add To Cart";
      btn.addEventListener("click", function () {
        addProd(item);
      });
 
        //   function sortByPrice(){
        //   let select = document.getElementById("price-so").value;
        //  if (select === low){
        //    product = product.sort(function (a,b){
        //      return a.newPrice - b.newPrice; 
             
        //    })
        //  }
        //  totalProd(products);
        // } 
      
      div.append(img, name, price, btn);
      wall.append(div);
    });
  }

  function addProd(item) {
    // var obj = {

    //   img: item.image,
    //   name: item.name,
    //   price: item.price,

    // }
    ProdutArr.push(item);
    localStorage.setItem("cart", JSON.stringify(ProdutArr));
  }

