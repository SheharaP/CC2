<template>


<div class="body">
    <div class="container">
        <div class="forms">
            <div class="form register">
                <span class="title">Hotel Registration</span> 
            
                <form action="#">
                    <div class="input-field">
                        <input type="text" v-model="name" :class="{invalid: isSubmitting && !name.trim() }" placeholder="Hotel name" required/>
                        <i class="bi bi-person"></i>
                        <span><p ref="emailError"></p></span>
                    </div>
                    <div class="input-field">
                      <input type="text" v-model="email" :class="{invalid: isSubmitting && !email.trim() }" placeholder="Hotel Email Address" required/>
                        <i class="bi bi-at"></i> 
                        <span><p ref="emailError"></p></span>
                    </div>
                    <div class="input-field">
                      <input type="text" v-model="contactno" :class="{invalid: isSubmitting && !contactno.trim() }" placeholder="Representative Contact Number" required/>
                        <i class="bi bi-telephone"></i> 
                        <span><p ref="emailError"></p></span>
                    </div>
                     <div class="input-field">
                      
                    <div >
                        <select class="dist form-control shadow-none">
                            <option value="none">Select a District</option>
                            <option value="Nuwara Eliya">Nuwara Eliya</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Galle">Galle</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Ratnapura">Ratnapura</option>
                            <option value="Hambantota">Hambantota</option>
                            <option value="Matara">Matara</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Ampara">Ampara</option>
                            <option value="Anuradhapura	">Anuradhapura</option>
                            <option value="Batticaloa">Batticaloa</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Kalutara">Kalutara</option>
                            <option value="Kegalle">Kegalle</option>
                            <option value="Kilinochchi">Kilinochchi</option>
                            <option value="Kurunegala">Kurunegala</option>
                            <option value="Mannar">Mannar</option>
                            <option value="Matale">Matale</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Mullaitivu">Mullaitivu</option>
                            <option value="Polonnaruwa">Polonnaruwa</option>
                            <option value="Puttalam">Puttalam</option>
                            <option value="Trincomalee">Trincomalee</option>
                            <option value="Vavuniya">Vavuniya</option>
                        </select>
                    </div>

                    </div>
                    <ul>
                        <li :class="{ is_valid: contains_eight_characters }">8 Characters</li>
                        <li :class="{ is_valid: contains_number }">Contains Number</li>
                        <li :class="{ is_valid: contains_uppercase }">Contains Uppercase</li>
                        <li :class="{ is_valid: contains_special_character }">Contains Special Character</li>
                      </ul>
                    <div class="input-field">
                      <input type="password" @input="checkPassword" v-model="password" :class="{invalid: isSubmitting && !password.trim()}"  autocomplete="off" placeholder="Password" required/>
                        <i class="bi bi-key"></i> 
                        <span><p ref="passwordError"></p></span>
                    </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="logCheck">
                            <label for="logCheck" class="text">Remember me</label>
                        </div>
                        
                        <a href="#" class="text">Forgot password?</a>
                    </div>

                    <div class="input-field button">
                        <input type="button" @click.prevent="registerHotel" value="Register">
                    </div>
                </form>

                <div class="login-signup">
                    <span class="text">Already a member?
                      <router-link to="/login" class="text signup-link">Sign in Now</router-link>
                    </span>
                </div>
            </div>
            </div>
    </div>
</div>


</template>

<script>
import auth from '@/services/auth'
import { useRouter } from "vue-router";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"



export default {
  name: "RegisterSiteHotel",
  data() {
    return {
      name: "",
      dist:"",
      email: "",
      contactno:"",
      role: "hotel",
      password: "",
      router: useRouter(),
      isSubmitting: false,
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false
    }
  },
  methods : {
    async register() {
    
      event.preventDefault();
          const response = await auth.register({
            name: this.name,
            email: this.email,
            contactno: this.contactno,
            password: this.password,
            cpassword: this.cpassword
          })
          Swal.fire(
            `${this.name} is registered!`,
            'Have a great time!',
              'success'
            )
          console.log(response.data);
        }, catch(e) {
          console.log(e);
        },
    
      checkPassword() {
      this.password_length = this.password.length;
			const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			
      if (this.password_length > 7) {
        this.contains_eight_characters = true;
      } else {
        this.contains_eight_characters = false;
			}
			
      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);
			this.contains_special_character = format.test(this.password);
      
        if (this.contains_eight_characters === true &&
					this.contains_special_character === true &&
					this.contains_uppercase === true &&
					this.contains_number === true) {
						this.valid_password = true;	
            
      } else {
        this.valid_password = false;
      }
      return this.valid_password;
    },
    confirmPassword(pwd, cpwd){
      if(pwd === cpwd){
        return true;
      } else {
        return false;
      }
    },
    validate(){
      if (this.name == null || this.name == "") {
        let nameError = "Please enter your name";
        this.$refs.nameError.innerHTML = nameError;
        this.name ="";
        this.isSubmitting = true
        continueStatement;
      } 
      
      else if(this.email != String(this.email) .toLowerCase() .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        let emailError = "You have entered an invalid email address!";
        this.$refs.emailError.innerHTML = emailError;
        this.email ="";
        this.isSubmitting = true
        continueStatement;
      }
      else if (this.contactno == null || this.contactno == "") {
        let contactError = "Please enter valid contact number";
        this.$refs.contactError.innerHTML = contactError;
        this.contactno ="";
        this.isSubmitting = true
        continueStatement;
      } 
      else if(!this.checkPassword){
        let passwordError = "Please enter valid password";
        this.$refs.passwordError.innerHTML = passwordError;
        this.password ="";
        this.isSubmitting = true
        continueStatement;
      }
      else if(!this.confirmPassword(this.password, this.cpassword)){
        let passwordError = "Passwords do not match";
        this.$refs.passwordError.innerHTML = passwordError;
        this.cpassword ="";
        this.isSubmitting = true
        continueStatement;
      }
      
      else{
        this.$refs.nameError.innerHTML = "";
        this.$refs.emailError.innerHTML = "";
        this.$refs.contactError.innerHTML = "";
        this.$refs.passwordError.innerHTML = "";
        this.isSubmitting = false
        this.register();
      }
    },
}
}
        
</script>

<style lang = "scss" scoped>

.body{
  margin: 100px 0 200px 0;
  display:flex;
  justify-content: center;
}
.container{
  
    display: inline-block;
    position: relative;
    width: 500px;
    max-width: 100%;
     background-color: #fff;
    border-radius: 10px;
     box-sizing: border-box;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    margin: 0 20px;
}
.container .forms{
    display: flex;
    align-items: center;
    height: auto;
    width: 200%;
    transition: height 0.2s ease;
}
.container .form{
    width: 50%;
    padding: 30px;
    background-color: #fff;
    transition: 0.18s ease;
}
.container.active .login{
    margin-left: -50%;
    opacity: 0;
    transition: margin-left 0.18s ease, opacity 0.15s ease;
}
.container .signup{
    opacity: 0;
    transition: opacity 0.09s ease;
}
.container.active .signup{
    opacity: 1;
    transition: opacity 0.2s ease;
}
.container.active .forms{
    height: 600px;
}
.container .form .title{
    position: relative;
    font-size: 27px;
    font-weight: 600;
}
.form .title::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: #4070f4;
    border-radius: 25px;
}
.form .input-field{
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
}
.input-field input{
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
}
.input-field input:is(:focus, :valid){
    border-bottom-color: #4070f4;
}
.input-field i{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color:#4070f4;
    font-size: 23px;
    transition: all 0.2s ease;
}
.input-field input:is(:focus, :valid) ~ i{
    color: #4070f4;
}
.input-field i.icon{
    left: 0;
}
.input-field i.showHidePw{
    right: 0;
    cursor: pointer;
    padding: 10px;
}
.form .checkbox-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}
.checkbox-text .checkbox-content{
    display: flex;
    align-items: center;
}
.checkbox-content input{
    margin: 0 8px -2px 4px;
    accent-color: #4070f4;
}
.form .text{
    color: #333;
    font-size: 14px;
}
.form a.text{
    color: #4070f4;
    text-decoration: none;
}
.form a:hover{
    text-decoration: underline;
}
.form .button{
    margin-top: 35px;
}
.form .button input{
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: #4070f4;
    cursor: pointer;
    transition: all 0.3s ease;
}
.button input:hover{
    background-color: #265df2;
}

.form .login-signup{
    margin-top: 30px;
    text-align: center;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.invalid {
  color: #212529;
  background-color: rgb(202, 144, 144);
  border-color: #c81e12;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(253, 13, 21, 0.25);
}
ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
}
li { 
	margin-top: 8px;
	position: relative;
  color: rgba(92, 90, 107, 0.8);
  list-style: none;
}
li:before {
  content: "";
	width: 0%; height: 2px;
	background: #2ecc71;
	position: absolute;
	left: 0; top: 50%;
	display: block;
	transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Checkmark & Strikethrough --------- */
.is_valid { 
  color: rgba(136, 152, 170, 0.8);
}
.is_valid:before { width: 100%; }



<<<<<<< HEAD
</style>
=======
</style>
<!-- 
<style scoped>

form {
  max-width: 100vw; 
  margin-left : 33vw;
  display: block;
}
.mt-1{
 font-weight: bold;
}
.col-md-2{
  width: 100%;
}
.col-md-6{
  margin-bottom: 20px;
   width: 50%;
}
.btn{
  text-align: center;
  width: 50%;
  margin-bottom: 50px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.invalid {
  color: #212529;
  background-color: rgb(202, 144, 144);
  border-color: #c81e12;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(253, 13, 21, 0.25);
}
h2{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:rebeccapurple;
  text-align: center;
  margin: 120px 0 50px 0;
  letter-spacing: normal;
  
}
ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  margin-left: 0;
  padding: 0;
}
li { 
	margin-bottom: 8px;
	position: relative;
  color: rgba(92, 90, 107, 0.8);
  list-style: none;
}
li:before {
  content: "";
	width: 0%; height: 2px;
	background: #2ecc71;
	position: absolute;
	left: 0; top: 50%;
	display: block;
	transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
/* Password Input --------- */
input[type] {
	line-height: 1.5;
	display: block;
	color: #000000;
	font-weight: 300;
	width: 100%;
	height: calc(2.75rem + 2px);
	padding: .625rem .75rem;
	border-radius: .25rem;
	background-color: #fff;
	transition: border-color .4s ease;
	border: 1px solid #cad1d7;
	outline: 0;
  
}
input[type]:focus {
	border-color: rgba(50, 151, 211, .45);
}
/* Checkmark & Strikethrough --------- */
.is_valid { 
  color: rgba(136, 152, 170, 0.8);
}
.is_valid:before { width: 100%; }


</style> -->













<!-- 
<script>
import axios from 'axios';
export default {
  name: "RegisterSite",
  data() {
    return{
      fname: "",
      lname: "",
      email: "",
      contactno: "",
      birthdate: "",
      pwd: "",
      cpwd: ""
    }
  },
  methods: {
    registerStudent: function() {
      axios.post("/api/student", {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        contactno: this.contactno,
        birthdate: this.birthdate,
        semester: this.pwd,
        course: this.cpwd
      }).then((res) => {
        if(res.data.msg === "Validation Failed"){
          let errors = res.data.errors;
          let errorMsg = "";
          if(errors.fname.length != 0){
            for(let i=0; i<errors.fname.length; i++){
              errorMsg += `${errors.fname[i]}\n`;
            }
          } 
          
          if(errors.lname.length != 0){
            for(let i=0; i<errors.lname.length; i++){
              errorMsg += `${errors.lname[i]}\n`;
            }
          }
          if(errors.email.length != 0){
            for(let i=0; i<errors.email.length; i++){
              errorMsg += `${errors.email[i]}\n`;
            }
          }
          if(errors.contactno.length != 0){
            for(let i=0; i<errors.contactno.length; i++){
              errorMsg += `${errors.contactno[i]}\n`;
            }
          }
          if(errors.birthdate.length != 0){
            for(let i=0; i<errors.birthdate.length; i++){
              errorMsg += `${errors.birthdate[i]}\n`;
            }
          }
          if(errors.semester.length != 0){
            for(let i=0; i<errors.semester.length; i++){
              errorMsg += `${errors.semester[i]}\n`;
            }
          }
          if(errors.pwd.length != 0){
            for(let i=0; i<errors.pwd.length; i++){
              errorMsg += `${errors.pwd[i]}\n`;
            }
          }
          if(errors.cpwd.length != 0){
            for(let i=0; i<errors.cpwd.length; i++){
              errorMsg += `${errors.cpwd[i]}\n`;
            }
          }
          alert(errorMsg);
        }
        else{
          alert("Successfully Saved");
        }
      }).catch(()=>{
        alert("Something Went Wrong");
      })
    }
  }
};
</script> -->