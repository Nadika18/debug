<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Alert/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Alert from "@/components/Alert.vue";

export default {
  name: "Home",
  components: {
    HelloWorld, Alert
  }
};
</script>
