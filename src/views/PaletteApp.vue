<template>
  <h1>Vue パレット</h1>
  <div class="app">
    <div
      class="palette"
      v-on:mousemove="changeColor"
      v-on:click="pickColor"
      v-bind:style="paletteStyle"
    ></div>
    <p>rgba( 50, {{ green }}, {{ blue }}, 0.5 )</p>
    <div class="colors-container">
      <div
        class="mini-palette"
        v-for="color in colors"
        :key="color"
        v-bind:style="{
          backgroundColor: `rgba(${color.blue}, ${color.green}, 200, 0.5)`,
        }"
        v-on:click="showColor(color)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blue: 0,
      green: 0,
      colors: [
        // { red: 0, green: 0 }
      ],
    }
  },
  methods: {
    changeColor(e) {
      this.blue = e.offsetX
      this.green = e.offsetY
    },

    pickColor() {
      const newColor = {
        blue: this.blue,
        green: this.green,
      }
      this.colors.push(newColor)
    },

    showColor(color) {
      this.blue = color.blue
      this.green = color.green
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.blue}, ${this.green}, 200, 0.5)`,
      }
    },
  },
}
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.palette {
  width: 255px;
  height: 255px;
}
.mini-palette {
  min-width: 60px;
  height: 60px;
}
.colors-container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding-top: 8px;
}
</style>
