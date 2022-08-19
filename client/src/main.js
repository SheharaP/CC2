import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/css/bootstrap.css';

import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';



