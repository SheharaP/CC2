import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Modal from "vue-bs-modal";

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


createApp(App).use(router, Modal).mount('#app')

import 'bootstrap/dist/css/bootstrap.css';



