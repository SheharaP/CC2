<template>
  <div class="body">
    <div class="container">
      <div class="forms">
        <div class="form">
          <span class="title">Welcome</span>

          <p class="text-muted mb-4">{{userName}} <span class="mx-2">|</span>{{role}}</p>
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{userName}}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{email}}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{contactno}}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{address}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="home">
            <ModalComp @close="toggleModal" :modalActive="modalActive">
              <div class="modal-content">
                <h1>Edit Profile</h1>
                <div class="input-field">
                  <input type="text" v-model=userName />
                  <i class="bi bi-person"></i>
                  <span>
                    <p ref="emailError"></p>
                  </span>
                </div>
                <div class="input-field">
                  <input type="password" v-model="password" :class="{invalid: isLogin && !password.trim()}"
                    autocomplete="off" placeholder="Enter your password" required />
                  <i class="bi bi-key"></i>
                  <span>
                    <p ref="passwordError"></p>
                  </span>
                </div>
              </div>
            </ModalComp>
          </div>


          <button type="button" class="btn" @click="toggleModal">
            Edit Profile
          </button>
        </div>
      </div>
    </div>

  </div>

</template>



<script>

import auth from '@/services/auth'
//import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
//import Swal from 'sweetalert2'
import { ref } from "vue";
import ModalComp from '@/components/ModalComp.vue'


export default {
  name: "RegisterHotel",
  components: {
    ModalComp,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },

  data() {
    return {
      userName: "",
      role: "",
      email: "",
      contactno: null,
      address: "",
      auth: getAuth(),
      isModalVisible: false,
    }

  },
  methods: {

    async findUser() {

      console.log("hi from findUser");

      onAuthStateChanged(this.auth, async (user) => {

        const resp = auth.findUser({
          'email': user.email,
        });

        this.email = user.email;

        console.log(user.email);
        console.log(`This is the name ${(await resp).data} profile.`);
        this.userName = (await resp).data.name;
        this.contactno = (await resp).data.contactno;
        this.address = (await resp).data.address;

        const response = await auth.loginRole({
          'email': user.email,
        });

        console.log(`This is the name ${(response).data.role} profile.`);
        this.role = (response).data.role.toUpperCase();

      })
    }

  },
  mounted() {

    const user = getAuth().currentUser;
    if (user !== null) {
      this.email = user.email;
      console.log(this.email);

      this.findUser();


    }
  }
}

</script>
  



<style lang=scss scoped>
  
.mb-0 {
  padding-inline-end: 0;
}
h2{
  margin-top: 200px;
}

.body {
  margin: 100px 0 100px 0;
  display: flex;
  justify-content: center;
}

.container {

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

.container .forms {
  display: flex;
  align-items: center;
  height: 440px;
  width: 200%;
  transition: height 0.2s ease;
}

.container .form {
  width: 50%;
  padding: 30px;
  background-color: #fff;
  transition: 0.18s ease;
}

.container.active .login {
  margin-left: -50%;
  opacity: 0;
  transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.container .signup {
  opacity: 0;
  transition: opacity 0.09s ease;
}

.container.active .signup {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.container.active .forms {
  height: 600px;
}

.container .form .title {
  position: relative;
  font-size: 27px;
  font-weight: 600;
}

.form .title::before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background-color: #4070f4;
  border-radius: 25px;
}

.form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}

.input-field input {
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

.input-field input:is(:focus, :valid) {
  border-bottom-color: #4070f4;
}

.input-field i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #4070f4;
  font-size: 23px;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid)~i {
  color: #4070f4;
}

.input-field i.icon {
  left: 0;
}

.input-field i.showHidePw {
  right: 0;
  cursor: pointer;
  padding: 10px;
}

.form .checkbox-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.checkbox-text .checkbox-content {
  display: flex;
  align-items: center;
}

.checkbox-content input {
  margin: 0 8px -2px 4px;
  accent-color: #4070f4;
}

.form .text {
  color: #333;
  font-size: 14px;
}

.form a.text {
  color: #4070f4;
  text-decoration: none;
}

.form a:hover {
  text-decoration: underline;
}

.form .button {
  margin-top: 35px;
}

.form .button input {
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

.button input:hover {
  background-color: #265df2;
}

.form .login-signup {
  margin-top: 30px;
  text-align: center;
}

.nav-link {

  margin-top: 10px;
  font-weight: 500;
  list-style: none;
  text-decoration: none;

}

.modal-content {
  padding: 100px;
}

.btn {
  backface-visibility: hidden;
  background-color: #4070f4;
  border-radius: 6px;
  border-width: 0;
  color: white;
  margin-right: 10px;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 5px;
  border: 2px solid #555;
  margin-right: 20px;
  margin-bottom: 20px;
}
		
    .modal-content{
      padding: 100px;
    }
    .mapouter{
      position:relative;
      text-align:right;
      width:600px;
      height:400px;
    }
    .gmap_canvas {
      overflow:hidden;
      background:none!important;
      width:600px;
      height:400px;
    }
    .gmap_iframe {
      width:600px!important;
      height:400px!important;
    }
    .mb-0{
      width: 200px;
    }
    </style>
