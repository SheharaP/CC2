<template>
  <div class="login">
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
                       <i @click="toggleShowPassword" class="bi bi-eye-slash showHidePw"></i> 
                       <i @click="toggleShowPassword" class="bi bi-eye-slash showHidePw"></i> 
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

  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: 'LoginView',
    data() {
    return {
      loggedIn: false,
      email: "",
      password: "",
       router: useRouter(),
      errMsg: "",
      auth:getAuth(),
      showPassword: false,
      i:1,
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
    },
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
signin() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          console.log("Logged in");
          this.$emit('signin')
          this.router.push("/tprofile");
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
    },
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