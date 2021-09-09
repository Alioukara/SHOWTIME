<template>
  <div>
    <div>Thank you for your reservation, here is your QR CODE:</div>
    <br />
    <qrcode-vue :value="value" :size="size" level="H" />
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      value: `${process.env.VUE_APP_FRONTPOINT}/concertsdetails?id=${this.$route.query.id}`,
      size: 300,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>