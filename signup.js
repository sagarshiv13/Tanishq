let button = document.getElementById("register");
    button.addEventListener("click", async () => {
      let title = document.getElementById("title1").value;
      let f_name = document.getElementById("firstname").value;
      let l_name = document.getElementById("lastname").value;
      let mob_num = document.getElementById("mobnumber").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let checkdon = document.getElementById("checkboxid").checked;
      //   console.log(title,f_name,l_name,mob_num,email,password)

      // let userdata =new Array();

      // userdata=JSON.parse(localStorage.getItem("projectuserdata"))?JSON.parse(localStorage.getItem("projectuserdata")):[];
      let userdata = {
        title,
        f_name,
        l_name,
        mob_num,
        email,
        password,
        checkdon,
      };
      // console.log(userdata);
      userdata = JSON.stringify(userdata);

      if (
          title.length > 1 && f_name.length > 1 && l_name.length > 1 && mob_num.length == 10 && email.length > 1 && password.length > 6 ) {

          
          

      try {
        let res = await fetch("http://localhost:3456/users/signup", {
          method: "POST",

          body: userdata,

          headers: {
            "Content-Type": "application/json",
            //'Access-Control-Allow-Origin':'*'
          },
        });
        let data = await res.json();
        console.log(data);
        goToHome(data);
      } catch (e) {
        console.log(e);
      }
      alert("Signup successful")
       window.location.href = "login.html"  
      
    } else{
              alert("Invalid Credentials")
      
    }
    });