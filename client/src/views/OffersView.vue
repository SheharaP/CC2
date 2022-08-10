<template>
  <div class="offers">
    <main>
      <h2>Our Offers</h2>
      <Offers />
    </main>
  </div>
</template>

<script>

import Offers from "@/components/OffersSite.vue";

export default {
  name: "OffersView",
  components: {
    Offers,
  },
};
</script>

