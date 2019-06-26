<template>
  <div id="app">
    <h2 :style="titleStyle">拖动验证码样例</h2>
    <div id="wrapper" :style="wrapperStyle">
      <drop class="drop" id="target"
            :class="{ 'over': state.over }"
            @dragover="onDragOver"
            @dragleave="onDragLeave"
            :style="targetStyle">
      </drop>
      <drag class="drag" id="source"
            :transfer-data="true"
            @dragstart="onDragStart"
            @dragend="onDragEnd"
            @drag="onDrag" v-if="!state.dragged"
            :style="sourceStyle">
        <div slot="image" id="float" :style="sourceStyle">
        </div>
      </drag>
    </div>
    <div>
      <p v-if="state.dragged" id="trace">
        拖动轨迹：{{ trace }}
      </p>
    </div>
  </div>
</template>

<script>
  import {Drag, Drop} from 'vue-drag-drop'

  export default {
    name: 'App',
    components: {Drag, Drop},
    data() {
      return {
        trace: [],
        state: {
          over: false,
          dragging: false,
          dragged: false
        },
        init: {
          x: null,
          y: null,
        },
        block: {
          x: 50,
          y: 20
        },
        size: {
          width: 300,
          height: 160
        },
        image: 'landscape.jpg'
      }
    },
    computed: {
      titleStyle() {
        return {
          textAlign: 'center'
        }
      },
      wrapperStyle() {
        return {
          width: this.size.width + 'px',
          height: this.size.height + 'px',
          backgroundImage: 'url(' + this.image + ')',
          backgroundSize: 'cover'
        }
      },
      targetStyle() {
        return {
          left: this.block.x + 'px',
          top: this.block.y + 'px'
        }
      },
      sourceStyle() {
        return {
          backgroundImage: 'url(' + this.image + ')',
          backgroundSize: this.size.width + 'px ' + this.size.height + 'px',
          backgroundPosition: -this.block.x + 'px ' + -this.block.y + 'px'
        }
      }
    },
    mounted() {
      this.onInit()
    },
    methods: {
      onInit() {
        this.block.x = Math.floor((Math.random() * this.block.x) + 1)
        this.block.y = Math.floor((Math.random() * this.block.y) + 1)
      },
      onDragStart(data, event) {
        this.init = {
          x: event.offsetX,
          y: event.offsetY,
        }
        this.trace = []
        this.state.dragging = true
      },
      onDrag(data, event) {
        console.log('event', event)
        let offsetX = event.offsetX - this.init.x
        let offsetY = event.offsetY - this.init.y
        this.trace.push({
          x: offsetX,
          y: offsetY,
        })
      },
      onDragEnd() {
        if (this.state.over) {
          this.state.dragging = false
          this.state.dragged = true
          this.$message.success('拖动成功')
        }
        else {
          this.state.dragging = false
          this.state.dragged = false
          this.$message.error('拖动失败')
        }
        this.state.over = false
      },
      onDragOver() {
        this.state.over = true
      },
      onDragLeave() {
        this.state.over = false
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
  }

  #wrapper {
    position: relative;
    margin: auto;
    #target {
      width: 50px;
      height: 50px;
      position: absolute;
      box-shadow: 1px 1px 1px 1px #333;
      opacity: 0.8;
      &.over {
        box-shadow: 1px 1px 1px 1px #FFF;
        opacity: 0.3;
      }
    }
    #source {
      cursor: move;
      width: 50px;
      height: 50px;
      bottom: 0;
      left: 0;
      position: absolute;
    }

    #float {
      width: 50px;
      height: 50px;
    }
  }

  #trace {
    width: 100%;
    font-size: 12px;
    padding: 50px;
  }
</style>
