async function login() {
    let res = await fetch("https://tanishq-clone-2.herokuapp.com/users");
    let data = await res.json();
    console.log("data:", data);
    forCheck(data);
  }

  let userArr = [];
   
  async function forCheck(data) {
    let taking_email = document.getElementById("email123").value;
    let taking_pasw = document.getElementById("password1").value;

    if (taking_email == "admin" && taking_pasw == "admin") {
             
      window.location.href = "homepage.html";
    } else {
      var signal = true;
      for (var i = 0; i < data.length; i++) {
        if (
 
          data[i].email === taking_email &&
          data[i].password === taking_pasw
          ){
          signal = false;
          // userArr.push(data[i].email);
          let obj = { 
            email: data[i].email
          }
          userArr.push(obj);
          localStorage.setItem("userarr", JSON.stringify(userArr))
          window.location.href = "homepage.html";
          alert("Welcome!");
          break;
        }
      }
      if (signal) {
        alert("wrong credentials");
      }
    }
  }
