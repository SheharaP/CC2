<template>
<div class="body">
    <div class="container">
        <div class="forms">
            <div class="form login">
              <div v-if="!authenticated">
                <span class="title">Login</span> 
            
                <form action="#">
                    <div class="input-field">
                      <i class="bi bi-alarm"></i>
                        <input type="text" v-model="email" :class="{invalid: isLogin && !email.trim() }" placeholder="Enter your email" required/>
                        <i class="bi bi-at"></i>
                        <span><p ref="emailError"></p></span>
                    </div>
                    <div class="input-field">
                        <input type="password"  v-model="password" :class="{invalid: isLogin && !password.trim()}"  autocomplete="off" placeholder="Enter your password" required/>
                        <i class="bi bi-key"></i> 
                       <i class="bi bi-eye-slash showHidePw"></i>
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
                        <input type="button" @click="signin" value="Login"> <p v-if="errMsg">{{ errMsg }}</p>
                    </div>
                </form>

                <div class="login-signup">
                    <span class="text">Not a member?
                        <router-link to="/register" class="text signup-link">Signup Now</router-link>
                    </span>
                </div>
            </div>

            <div v-if="authenticated">
      <button @click="logout" class="myLogout">Logout</button>
    </div>
            </div>
            </div>
    </div>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "LoginBox", 

  data() {
    return {
      loggedIn: false,
      email: "",
      password: "",
      router: useRouter(),
      errMsg: "",
      auth:getAuth()
    };
  },
  mounted() {

    const ref = this;
  onAuthStateChanged(this.auth, (user) =>{
      if (user) {
        ref.loggedIn = true;
      } else {
        ref.loggedIn = false;
      }
    });
  },
  computed: {
    authenticated() {
      return this.loggedIn;
    }
  },
  methods: {
signin() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          console.log("Logged in");
          // this.router.push("/feed");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errMsg = "No account with that email found";
              break;
            case "auth/wrong-password":
              this.errMsg = "Password incorrect";
              break;
            default:
              this.errMsg = "Email or password was incorrect";
              break;
          }
        });
    },
    logout() {

  signOut(this.auth).then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
          this.router.push("/");
        });
    }
  }
};
</script>


<style scoped>

h2{
margin-top: 200px;
}
.body{
  margin:100px 0 100px 0;
  display:flex;
  justify-content: center;
}
.container{
  
    display: inline-block;
    position: relative;
    width: 430px;
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
    height: 440px;
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

</style>


































<!-- 

<script>

import auth from '@/services/auth'


export default {
  name: "RegisterSite",
  data() {
    return{
      email: "",
      password: "",
      isLogin: false,
    }
  },

  methods : {
    async login() {
    
      event.preventDefault();

          const response = await auth.login({
            email: this.email,
            password: this.password
          })
          console.log(response.data);
        }, catch(e) {
          console.log(e);
        },

  }
}

</script>

<style scoped=form>

*{
  position: center;
}

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
  letter-spacing: normal;
  margin: 50px;
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