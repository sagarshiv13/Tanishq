document.getElementById("delivery-info").addEventListener('click',addFunction)
   function addFunction(){
location.href = "filldetails.html"
   }

   document.getElementById("logo").addEventListener("click",logofunction);

   function logofunction() {
      location.href = "homepage.html";
   }
  
   let user = JSON.parse(localStorage.getItem("userarr"))
   console.log('user:', user[0].email)

   let a = document.getElementById("email-id")
   a.innerHTML = "SIGNED IN AS   - " + user[0].email



