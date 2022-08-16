<template>
  <div class="pay">
    <main>
      <Payment />
    </main>
  </div>
</template>

<script>

import Payment from "@/components/PaymentSite.vue";

export default {
  name: "PaymentView",
  components: {
    Payment,
  },
};
</script>