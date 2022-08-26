<template>

<div class="body">
    <div class="container">
        <div class="forms">
            <div class="form register">
                <span class="title">Hotel Registration</span> 
            
                <form>
                    <div class="input-field">
                        <input type="text" v-model="name" :class="{invalid: isSubmitting && !name.trim() }" placeholder="Hotel name" required/>
                        <i class="bi bi-person"></i>
                    </div>   
                    
                    <div class="input-field">
                      <select id="district" v-model="district" name="district" class="form-control shadow-none">
                            <option value="" disabled selected>Select your District</option>
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
                    <div class="input-field">
                      <input type="text" v-model="email" :class="{invalid: isSubmitting && !email.trim() }" placeholder="Hotel Email Address" required/>
                        <i class="bi bi-at"></i> 
                    </div>
                    <div class="input-field">
                      <input type="text" v-model="contactno" :class="{invalid: isSubmitting && !email.trim() }" placeholder="Hotel Represententive Contact Number" required/>
                        <i class="bi bi-telephone"></i> 
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
  name: "RegisterHotel",
  data() {
    return {
      name: "",
      district:"",
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
    };
  },
  methods: {
        async registerHotel() {

          createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(  // eslint-disable-next-line
          (data) => {
            console.log("Logged in");
            this.router.push('/hprofile');

          })
          .catch((error) => {
            console.log(error.code);
            alert("Sorry you could not sign up" + error.message);
          }
        );

          console.log("register");
          event.preventDefault();
          const response = await auth.registerHotel({
            name: this.name,
            district: this.district,
            email: this.email,
            contactno: this.contactno,
            role: this.role,
          })
           console.log(response.data)
          
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

  },
};

        
</script>

<style scoped>


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



</style>
