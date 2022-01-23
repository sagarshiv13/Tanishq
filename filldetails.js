
 
   

   var CartArr = JSON.parse(localStorage.getItem("cart")) || [];
   var total = 0

 var CartPrice = CartArr.reduce(function (acc, cur) {
  return acc + cur.newPrice;
}, 0);
 
console.log(CartPrice);

 
      // const price = localStorage.getItem("totalprice")

      // var options = {
      //   key: "rzp_test_eLwrqAde1iXXjF",
      //   amount: CartPrice * 100,
      //   currency: "INR",
      //   name: "Tanishq",
      //   image:
      //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcJD09Q0m4l05BohZwUtZYJ2tpzmZy2LTXQ&usqp=CAU",

      //   theme: {
      //     color: "#66ccff",
      //   },
      //   callback_url: "/sucess",
      // };
      let order_id = "team-tanishq"
      var options = {
        "key": "rzp_test_eLwrqAde1iXXjF", // Enter the Key ID generated from the Dashboard
        "amount": CartPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Tanishq",
        "description": "Test Transaction",
        "image": "https://www.tanishq.co.in/wps/wcm/connect/tanishq/cb53f671-01d0-449e-b18d-a4e61e6ffa0b/TanishqLogo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-cb53f671-01d0-449e-b18d-a4e61e6ffa0b-mC036IT",
        // "order_id": "team-tanishq", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            // alert(response.razorpay_signature)
            alert("Payment Successful");
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };



      var razorpayObject = new Razorpay(options);
      console.log(razorpayObject);
      razorpayObject.on("payment.failed", function (response) {
        console.log(response);
        alert("This step of Payment Failed");
      });

      document.getElementById("btn").onclick = function (e) {
        razorpayObject.open();
        e.preventDefault();
      };

      var rzp1 = new Razorpay(options);
      document.getElementById("btn").onclick = function (e) {
        rzp1.open();
        e.preventDefault();
      };
   
     


//   function btnfunction(){
    
//       location.href = 'gotorazorpay.html';  
  
//  }
 document.getElementById("logo").addEventListener("click",logofunction);

 function logofunction() {
    location.href = "homepage.html";
 }
 