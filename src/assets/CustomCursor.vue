<template>
<div id="app">
  <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "CustomCursor",

  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', ()=> {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', ()=> {
      this.hideCursor = false;
    });
    
  }
};
</script>

<style lang="scss" scoped>
body, html {
  width: 100%;
  height: 100%;
  background: #000;
  margin: 0;
  cursor: none;
  display: flex;
  justify-content: center;
  align-items:  center;
}
.g-cursor {

    &_hide {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width .6s ease,
        height .6s ease,
        opacity .6s ease;
    }

    &__circle {
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid #fff;
      border-radius: 100%;
      z-index: 5555;
      backface-visibility: hidden;
      transition: opacity .6s ease;
    }

    &__point {
      top: 0;
      left: 0;
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: #fff;
      z-index: 55555555;
      backface-visibility: hidden;
      will-change: transform;
    }

    &_hover {
      .g-cursor__circle {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
          height .6s ease,
          opacity .6s ease;
      }
    }
    
  }
</style>
