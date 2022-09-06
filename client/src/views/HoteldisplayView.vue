<template>
  <div class="hotels">
    <main>
      <HotelDisplay/>
    </main>
  </div>
</template>
  
  <script>
  
  import HotelDisplay from "@/components/HoteldisplaySite.vue";
  
  export default {
    name: "HoteldisplayView",
    components: {
        HotelDisplay,
    },
  };
  
  </script>