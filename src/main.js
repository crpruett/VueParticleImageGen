import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: false,
})
  .type('Initializing reason <span style="color:#3399ff;">module</span>...')
  .pause(1000)
  //.type('<span style="font-family: Segoe UI Emoji">👋</span>', {
  // html: true,
  // })
  //.type("&nbspInitalizing&nbspreason&nbspmodule...&nbsp")
  .pause(750)
  .delete(40, { deleteSpeed: 200 })
  .pause(500)
  .type("Excellence is not an act, but a habit. - Aristole, NC II.1")
  .pause(500)
  //.move(-10)
  // .type("https://")
  //.move(8)
  //.delete(1)
  //.type(".")
  //.move("END")
  //.pause(1000)
  .go();
