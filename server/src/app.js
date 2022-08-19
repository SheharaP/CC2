import express from 'express';
import { dbQuery } from './postgresql.js';
import cors from 'cors';


const app = express(); 

app.use(cors(), express.json(), express.urlencoded({extended : false}))


app.post('/registerTourist', async(req, res) => {
  
  try{
    const email = req.body.email;
    const emailExists = await dbQuery(`SELECT true FROM tourist WHERE tourist_email = '${email}';`); 

    console.log(emailExists);

    if ( emailExists == null || emailExists=="" ) { 

      const name = req.body.name;
      const country = req.body.country;
      const role = req.body.role;
      
    console.log(JSON.stringify(req.body)); 
    await dbQuery(`INSERT INTO tourist (tourist_name , tourist_email , country, role) VALUES
    ('${name}', '${email}', '${country}', '${role}') ON CONFLICT DO NOTHING;`); 


      
   } else{
    res.send({
      message: `Hello ${email} is already registered!`
    });     

  }} catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }

})


app.post('/registerHotel', async(req, res) => {
  
  try{
    const email = req.body.email;
    const emailExists = await dbQuery(`SELECT true FROM hotel WHERE hotel_email = '${email}';`); 

    console.log(emailExists);

    if ( emailExists == null || emailExists=="" ) { 

      const name = req.body.name;
      const dist = req.body.dist;
      const contactno = req.body.contactno;
      const role = req.body.role;
      
    console.log(JSON.stringify(req.body)); 
    await dbQuery(`INSERT INTO tourist (hotel_name , dist , hotel_email , contactno, role) VALUES
    ('${name}', '${dist}', '${email}','${contactno}', '${role}') ON CONFLICT DO NOTHING;`); 


      
   } else{
    res.send({
      message: `Hello ${email} is already registered!`
    });    

  }} catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }

})


app.post('/login', async(req,res) => {

  try{
    const email = req.body.email;
    const confirmPassword = req.body.password;

    const emailExists = await dbQuery(`SELECT true FROM tourist WHERE email = ('${email}') ;`);
    const passwordExists = await dbQuery(`SELECT true FROM tourist WHERE email =
    ('${email}') AND password = ('${confirmPassword}');`);


    if (emailExists == null || emailExists == ""){
  
      res.send({
        message: `User ${email} is not registered.`
      });

    } else if(passwordExists == null || passwordExists == "") { 

        res.send({
          message: `Password is incorrect, Try again`
        });
    } else{
    res.send({
      message: `Hello ${email} you have logged in!`
    });
  }
  } catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }
})

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});




































//import {check, validationResult} from 'express-validator'


//const baseRouter = express.Router();





// function validateName(name) {
//   let errors = [];
//   if (name.length == 0) {
//       errors.push("First Name Is Null");
//   }

//   if (name.length > 50) {
//       errors.push("First Name Length Can Not Exceed 50 Characters.");
//   }
//   return errors;
// }

// function validateBirthDate(date) {
//   let errors = [];
//   if (date === undefined || date === "") {
//       errors.push("Birth Date is Null");
//   }
//   return errors;
// }

// // function validateContactNo(contactno) {

// //   // check whether contact no is empty or not
// //   if (contactno.length == 0) {
// //       errors.push("Contact Number Is Null");
// //   }

// //   // cheaks whether contact no length is less then 10 character
// //   if (contactno.length < 10) {
// //       errors.push("Contact Number Must Be Of 10 Digits");
// //   }

// //   // checks whether contact no length is more then 10 character
// //   if (contactno.length > 10) {
// //       errors.push("Contact No Must Be of 10 Digits");
// //   }

// //   // Using regular expression check whether contactno is only containing digits or not
// //   if (!(/[0-9]/g.test(contactno))) {
// //       errors.push("Contact Number Must Contain Digits Only");
// //   }
  

// //   return errors;
// // }


// function validateEmail (email) {
//   let errors = [];

//   // checks whether email is empty or not
//   if (email.length == 0) {
//       errors.push("Email Is Null");
//   }

//   // checks whether email length is more then 100 or not
//   if (email.length > 100) {
//       errors.push("Email Can not exceed 100 Character");
//   }

//   // checks whether email is valid or not usinf regular expression
//   if (!(/^(([^<>().,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email))) {
//       errors.push("Email Is Not Valid");
//   }


//   return errors;

  
// }