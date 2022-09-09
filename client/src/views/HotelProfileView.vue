<template>

  <div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white"> {{role}}</span>
                    <h5 class="mt-2 mb-0">Welcome Hotel {{userName}}</h5>
                    <span>UI/UX Designer</span>
                    
                    <div class="px-4 mt-1">
                        <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    
                    <div class="buttons">
                        
                        <button class="btn btn-outline-primary px-4">Message</button>
                        <button class="btn btn-primary px-4 ms-3">Contact</button>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>


</template>
  

  
<script>

import auth from '@/services/auth'
  //import { useRouter } from "vue-router";
 import {getAuth, onAuthStateChanged} from "firebase/auth"
  //import Swal from 'sweetalert2'
  
  export default {
    name: "RegisterHotel",
    data() {
      return{
        userName:"",
        role:"",
        auth:getAuth(),
      }
      
    },
methods:{

  async findUser(){

    console.log("hi from findUser");

    onAuthStateChanged(this.auth, async (user) => {
  
        const resp = auth.findUser({
          'email': user.email,
        });
      
        console.log(user.email);
        console.log(`This is the name ${(await resp).data} profile.`);
        this.userName = (await resp).data;

        const response = await auth.loginRole({
            'email': user.email,
          });

          console.log(`This is the name ${(response).data.role} profile.`);
          this.role = (response).data.role;

        })
  }
},
  mounted(){

    const user = getAuth().currentUser;
    if (user !== null) {
    this.email = user.email;
   console.log(this.email);

   this.findUser();

   
}
  }
}
   
  </script>

  <style scoped>
.container{
  margin-bottom: 100px;
}
.card{
    border:none;
    position:relative;
    overflow:hidden;
    border-radius:8px;
    cursor:pointer;
}

.card:before{
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#E1BEE7;
    transform:scaleY(1);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:after{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#8E24AA;
    transform:scaleY(0);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:hover::after{
    transform:scaleY(1);
}


.fonts{
    font-size:24px;
}


.buttons button:nth-child(1){
       border:1px solid #8E24AA !important;
       color:#8E24AA;
       height:40px;
}

.buttons button:nth-child(1):hover{
       border:1px solid #8E24AA !important;
       color:#fff;
       height:40px;
       background-color:#8E24AA;
}

.buttons button:nth-child(2){
       border:1px solid #8E24AA !important;
       background-color:#8E24AA;
       color:#fff;
        height:40px;
}
  
  </style>