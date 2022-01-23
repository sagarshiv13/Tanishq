const express = require('express');
const connect = require('./configs/db');
const app = require('./index');

const bodyparser = require('body-parser');
const path = require('path');

require("dotenv").config()
const PORT = process.env.PORT || 3456


// const app = express();
// app.use(express.json());

// app.set("view engine","ejs")
app.use(express.static("public"));
// app.set('views', path.join(__dirname, 'views'));
const Razorpay = require('razorpay');


const razorpayInstance = new Razorpay({

	// Replace with your key_id
	key_id: "rzp_test_3TC18bJzrvG1rv",

	// Replace with your key_secret
	key_secret: "dBzIlWZpSQM78zJjX9uxAFQG"
});

//Inside app.js
app.post('/createOrder', (req, res)=>{

	// STEP 1:
	const {amount,currency,receipt, notes} = req.body;	
		
	// STEP 2:	
	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		
		//STEP 3 & 4:
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});

app.get("/payment",(req,res)=>{
    // return res.render("payment")
})

    app.listen(PORT, async () =>{
       try {
           await connect()
           console.log("Server is live");
       } catch (e) {
           console.log(e.message);
       }
    })


