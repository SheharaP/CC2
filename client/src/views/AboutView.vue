<template>
  <div class="about">
    <main>
      <h2>About Us</h2>
    </main>
    <aboutUs/>
  </div>
</template>

<script>

import aboutUs from "@/components/AboutUsSite.vue";

export default {
  name: "AboutView",
  components: {
    aboutUs,
  },
};

</script>
