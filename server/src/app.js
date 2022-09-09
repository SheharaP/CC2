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
    await dbQuery(`INSERT INTO hotel (hotel_name , dist , hotel_email , contactno, role) VALUES
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

app.post('/loginRole', async(req,res) => {
  try{
    const email = req.body.email;

    const touristQuery = await dbQuery(`SELECT role FROM tourist WHERE tourist_email = ('${email}') ;`);

    if (!(touristQuery.length)){
      const hotelQuery = await dbQuery(`SELECT role FROM hotel WHERE hotel_email = ('${email}') ;`);
      res.status(200).json({ role: hotelQuery[0].role });
      
    }
    else{
      res.status(200).json({ role: touristQuery[0].role });
    }
  } catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }
})

app.post('/findUser', async(req,res) => {
  try{
    const email = req.body.email;

    const touristQuery = await dbQuery(`SELECT tourist_name FROM tourist WHERE tourist_email = ('${email}') ;`);

    if (!(touristQuery.length)){
      const hotelQuery = await dbQuery(`SELECT hotel_name FROM hotel WHERE hotel_email = ('${email}') ;`);
      const name = hotelQuery[0].hotel_name;
      res.send(name);
   
    }
    else{
      const name = touristQuery[0].tourist_name;
      res.send(name);
    }
  } catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }
})

app.post('/showPromo', async(req, res) => {
  
  try{
    const pName = req.body.pName;
    const desc = req.body.desc;
    const sDate = req.body.sDate;
    const eDate = req.body.eDate;
    const price = req.body.price;
    const feature = req.body.feature;

    
    await dbQuery(`INSERT INTO offers (p_name , para , s_date , e_date , price, feature) 
    VALUES ('${pName}', '${desc}', '${sDate}', '${eDate}', '${price}','${feature}') ON CONFLICT DO NOTHING;`);

  }catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }

})

app.get('/users', async(req,res) =>{
  try{
    const users = await dbQuery(`SELECT * FROM booking`);

    if (users == null || users == ""){
      const response = "No user found" ;
      res.send(response);
    }
    else{
    res.send(users);
  }
  } catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }
})

app.get('/users/:id', async(req,res) =>{
  try{
    const user = await dbQuery(`SELECT * FROM booking WHERE bookingid = ('${req.params.id}');`);

    if (user == null || user == ""){
      const response = "No user found" ;
      res.send(response);
    }
    else{
    res.send(user);
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