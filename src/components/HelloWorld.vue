<template>
  <div class="hello">
    <div id="demo">
      <div id="inner-demo">
        <h1 id="inner-demo-2">
          <br />
        </h1>
      </div>
    </div>
    <VueParticle domId="demo" :config="particleConfig" />
  </div>
</template>

<script>
import VueParticle from "vue-particlejs";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    VueParticle,
  },
  data() {
    const randomHex = () =>
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return {
      particleConfig: {
        particles: {
          number: { value: 300, density: { enable: true, value_area: 800 } },
          color: { value: randomHex() },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false },
          },
          size: {
            value: 6,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: randomHex(),
            opacity: 0.9,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      },
    };
  },

  mounted() {
    setInterval(() => {
      const color =
        "#" +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0");
      this.particleConfig.particles.color.value = color;
      this.particleConfig.particles.line_linked.color = color;
    }, 1200);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo {
  width: 100%;
  height: 20vh;
  background: #000000;
}

canvas {
  filter: drop-shadow(0 0 6px #00ff66);
}

#inner-demo {
  width: 100%;
  height: 0%;
  display: flex;
  align-items: left;
  justify-content: left;
  color: #00ff99;
  font-size: 1em;
}
#inner-demo h1 {
  position: relative;
  left: 1em;
  top: 0em;
}
</style>
