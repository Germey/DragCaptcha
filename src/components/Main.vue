<template>
  <div id="app">
    <div class="hello">
      <div id="wrapper">
        <img src="./assets/landscape.jpg" class="image">
        <div class="block"></div>
      </div>
      <div id="block">
        <img src="./assets/landscape.jpg" class="image">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #wrapper {
    width: 300px;
    height: 160px;
    position: relative;
    .block {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 100px;
      top: 20px;
      box-shadow: 1px 1px 1px 1px #333;
      opacity: 0.8;
    }

    .image {
      width: 100%;
      height: 100%;
    }
  }

  #block {
    width: 50px;
    height: 50px;
    overflow: hidden;
    position: relative;
    .image {
      left: -100px;
      top: -20px;
      width: 300px;
      height: 160px;
      display: block;
      position: relative;
    }
  }

</style>