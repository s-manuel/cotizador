// 5. Create and mount the root instance.
import { createApp } from "vue";
// const app = Vue.createApp({})
import App from "./App.vue";
import route from "./routes";

// Make sure to _use_ the router instance to make the
// whole app router-aware.

const app = createApp(App);

app.use(route);

app.mount("#app");