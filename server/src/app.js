import express from 'express';
import { dbQuery } from './postgresql.js';
import cors from 'cors';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";

const app = express();

app.use(cors(), express.json(), express.urlencoded({extended : false}))


app.post('/register', async(req, res) => {
  
  try{
    
    const email = req.body.email;
    const emailExists = await dbQuery(`SELECT true FROM pg_tourist WHERE email = '${email}';`); // ex : email does exist -> emailExists = true ==> null or ""

    console.log(emailExists);

    if ( emailExists == null || emailExists=="" ) { 

      const name = req.body.name;
      const password = req.body.password;
      
    console.log(JSON.stringify(req.body));
    await dbQuery(`INSERT INTO pg_tourist (name , email , contactno, password ) VALUES ('${name}', '${email}', '${contactno}', '${password}') ON CONFLICT DO NOTHING;`); 


      
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

    const emailExists = await dbQuery(`SELECT true FROM pg_tourist WHERE email = ('${email}') ;`);
    const passwordExists = await dbQuery(`SELECT true FROM pg_tourist WHERE email = ('${email}') AND password = ('${confirmPassword}');`);


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

app.get('/userInfo',  async(req,res) => {

  try{
    
    const email = req.body.email;
    const emailExists = await dbQuery(`SELECT true FROM pg_tourist WHERE email = '${email}';`);

    console.log(emailExists);

    if ( emailExists == null || emailExists=="" ) { 

      const name = req.body.name;
      const contactno = req.body.contactno;
      const password = req.body.password;

      res.send({
        message: `Hello ${name} is already registered!`
      });
      
   } else{
    res.send({
      message: `Hello ${name} is not there!`
    });
    

      
      

  }} catch(e){
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
















  
  // postgresql(async(connection) => {
  //   await connection.query(`INSERT INTO pg_tourist (email, password) VALUES ('${email}', '${pass}}') ON CONFLICT DO NOTHING;`);
  // });


// app.use(cors(), express.json(), express.urlencoded({extended : false}))

// const baseRouter = express.Router();
// const apiRouter = express.Router();




// baseRouter.post('/register', async(req, res) => {
  
//   check('email', 'This email should be valid')
//     .isEmail()
//     .notEmpty()
//     .normalizeEmail()

// })

  
//     // validate the input
//   req.checkBody('name', 'Name is required').notEmpty();
//   req.checkBody('email', 'Email/username is required').notEmpty();
//   req.checkBody('contactno', 'Contact Number is required').notEmpty();
//   req.checkBody('password', 'Password is required').notEmpty();
//   req.checkBody('cpassword', 'Confirm Password').notEmpty();
//   req.checkBody('birthdate', 'DOB is required').notEmpty();
//   req.checkBody('email', 'Email is required').notEmpty();
//   req.checkBody('email', 'Email does not appear to be valid').isEmail();

//   // check the validation object for errors
//   var errors = req.validationErrors();

//   if (errors) {

//     flash = { type: 'alert-danger', messages: errors };
//     res.redirect('register');

//   } else {

//     // pull the form variables off the request body
//     var username = req.body.username;
//     var password = req.body.password;
//     var additional = {
//       Email: req.body.email,
//       DisplayName: req.body.display
//     };

//   }
//   console.log(JSON.stringify(req.body));
//   console.log(req.body.email);

//   const email = req.body.email;

//   console.log(`Email: ${email}`);

//   await dbQuery(`INSERT INTO pg_tourist (email) VALUES ('${email}') ON CONFLICT DO NOTHING;`);
  
//   // postgresql(async(connection) => {
//   //   await connection.query(`INSERT INTO pg_tourist (email, password) VALUES ('${email}', '${pass}}') ON CONFLICT DO NOTHING;`);
//   // });

//   res.send({
//     message: `Hello ${req.body.email} User is registered now!`
//   });
// })

// baseRouter.get('/test', async(req, res) => {
//   console.log("We are in localhost/test.");
//   res.status(200).send({message: "Hi there!"});
// })

// apiRouter.get('/test', async(req, res) => {
//   console.log("We are in  localhost/api/test.");
//   res.status(200).send({message: "Hi there!"});
// })


// app.use('/', baseRouter); //--> http://localhpost  -> http://localhost/test
// app.use('/api', apiRouter);  //--> http://localhost/api  -> http://localhost/api/test

// // app.use('/', router);




// postgresql(async (connection) => {
//   await connection.query('CREATE TABLE IF NOT EXISTS books (id bigserial primary key, title text, author text);');
//   await connection.query('CREATE UNIQUE INDEX IF NOT EXISTS title ON books (title);');

//   const books = [
//     { title: 'Mastering the Lightning Network', author: 'Andreas Antonopoulos' },
//     { title: 'Load Balancing with HAProxy', author: 'Nick Ramirez' },
//     { title: 'Silent Weapons for Quiet Wars', author: 'Unknown' },
//   ];

//   for (let i = 0; i < books.length; i += 1) {
//     const book = books[i];
//     await connection.query(`INSERT INTO books (title, author) VALUES ('${book.title}', '${book.author}') ON CONFLICT DO NOTHING;`);
//   }

//   console.log('PostgreSQL database seeded!');
// });


// import express from 'express' //process json data very easily

// import morgan from 'morgan'
// import postgresql from 'postgresql';

// var app = express()
// app.use(morgan('combined')) //print out the logs //log generator
// app.use(cors()) //allow client/host to access this //you want a server to be hosted on a differnt domain and you want any client around the world to use the server

// postgresql();



// import express from 'express';
// import postgresql from './postgresql.js';



// const app = express();

// app.get('/books', async (req, res) => {
//   const rows = await process.postgresql.query('SELECT * FROM books');
//   res.status(200).send(JSON.stringify(rows));
// });

// app.listen(3000, () => {
//   console.log('App running at http://localhost:3000');
// });



