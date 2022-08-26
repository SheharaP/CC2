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

app.post('/showPromo', async(req, res) => {
  try{
    console.log(JSON.stringify(req.body));
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

app.post('/book', async(req, res) => {
  try{
    console.log(JSON.stringify(req.body));
    
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const indate = req.body.indate;
    const outdate = req.body.outdate;
    const adult = req.body.adult;
    const children = req.body.children;
    const sreq = req.body.sreq;
    const atime = req.body.atime;

    
    await dbQuery(`INSERT INTO booking (fname , lname , email , indate , outdate, adult, children, sreq, atime) 
    VALUES ('${fname}', '${lname}', '${email}', '${indate}', '${outdate}','${adult}','${children}','${sreq}','${atime}') ON CONFLICT DO NOTHING;`);

  }catch(e){
    res.send({
      message: `Error : ${e}`
    });
  }

})



app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});
