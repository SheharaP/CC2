<template>
  <div class="hotels">
    <main>
      <OfferDisplay/>
    </main>
  </div>
</template>
  
  <script>
  
  import OfferDisplay from "@/components/OfferdisplaySite.vue";
  
  export default {
    name: "OfferdisplayView",
    components: {
        OfferDisplay,
    },
  };
  
  </script>