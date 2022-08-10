<template>
  <div class="dest">
    <h1>Destinations</h1>
    <Destinations />
  </div>
</template>


<script>
import Destinations from '@/components/DestinationSite.vue'
 
export default {
  name: 'DestinationView',
  components: {
    Destinations
  }
}
</script>