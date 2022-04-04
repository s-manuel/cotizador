<script>
// setup
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";


export default {
  
  components: {
    HelloWorld,
    TheWelcome,
  },
  setup() {
    
  }
}

</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <ProductosVue></ProductosVue> -->
    <router-view></router-view>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}


</style>
