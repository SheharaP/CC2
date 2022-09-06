<template>
    
 <div id="app">

    <div v-if="!loggedIn">
      <Navigation/>
    </div>
    <div v-else>
      <NavigationProfile/>
    </div>
    
      <router-view /> 
   <Footer />
  </div>
  
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/FooterComp.vue'
import Navigation from '@/components/NavigationEx.vue'
import NavigationProfile from '@/components/NavigationProfile.vue'

import { getAuth, onAuthStateChanged} from "firebase/auth";

export default {
name: 'App',
components: {
Navigation,
NavigationProfile,
Footer
},
data () {
  return { 
    loggedIn: false, 
    auth:getAuth(),
  }
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
}  


  
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
}
#app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
  margin:0 auto;
  width:100%;
}
body {
  margin:0;
  padding:0;
}
</style>


