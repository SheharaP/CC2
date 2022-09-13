import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Modal from "vue-bs-modal";
//import auth from '@/services/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzC5LDigAWQGEsLR2ows2dSMPn1EUlCdo",
  authDomain: "cc-project-f5241.firebaseapp.com",
  projectId: "cc-project-f5241",
  storageBucket: "cc-project-f5241.appspot.com",
  messagingSenderId: "1038249081965",
  appId: "1:1038249081965:web:2646a20d6e2dcb715b5364",
  measurementId: "G-41MBEMNWB8"
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig); // eslint-disable-next-line
const analytics = getAnalytics(fapp);

//const key = true;

// const response = auth.firebaseAuth({
//   'key' : key
// });

// try{
//   const firebaseConfig = (response);
//   console.log(firebaseConfig)
//   // Initialize Firebase
// const fapp = initializeApp(firebaseConfig); // eslint-disable-next-line
// const analytics = getAnalytics(fapp);
// }
// catch(e){
//   console.log("Didn't work "+ e);
// }




createApp(App).use(router, Modal).mount('#app')

import 'bootstrap/dist/css/bootstrap.css';


