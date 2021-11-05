<template>
  <table>
    <tr>
      <td>
        <div class="componentBox navbar">
          <Navbar class="wideShow"></Navbar>
          <Navbar  class="smallShow" :changeBool="() => changeMenuBool()"/>
        </div>
      </td>
    </tr>
    <tr style="height: 100%">
      <td>
        <div class="background"></div>
        <div id="routerBox">
          <router-view
              id="router"
              :inputApiBool="apiBool"
              :getScrollPos="() => getScrollPos()"
              :setScrollPos="(input) => setScrollPos(input)"
          />
        </div>
      </td>
    </tr>
    <tr v-if="menuBool">
      <td>
        <div id="menuBox" class="componentBox">
          <Menu
              :changeBool="() => changeMenuBool()"
              :boolFunc="() => changeApiMode()"
              :inputBool="apiBool"
          />
        </div>
      </td>
    </tr>
    <tr class="wideShow">
      <td>
        <div id="footer" class="componentBox">
          <Footer
              :boolFunc="() => changeApiMode()"
              :inputBool="apiBool"
          />
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  data() {
    return {
      menuBool: false,
      apiBool: false
    }
  },
  components: {
    Menu, Navbar, Footer,
  },
  methods: {
    // Returns position of scrollbar
    getScrollPos() {
      let element = document.getElementById('router')
      return(element.scrollTop)
    },
    // Sets position of scrollbar to input value
    setScrollPos(input) {
      let element = document.getElementById('router')
      element.scrollTop = input;
    },
    // Function opens and closes Menu
    changeMenuBool() {
      this.menuBool = !this.menuBool;
    },
    // Function changes API-Mode
    changeApiMode() {
      this.apiBool = !this.apiBool;
    }
  }
}
</script>

<style>
@media screen and (max-width: 799px) {
  .background{
    display: none !important;
  }
  .wideShow{
    display: none !important;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    min-height: 100%
  }
  #router{
    background-color: rgba(0,0,0, 0.9); /* Black w/opacity/see-through */
    color: white;
    width: 100%;
    text-align: center;
    overflow-y: hidden;
    min-height: calc(100% - 10px);
    height: auto;
    padding-bottom: 10px;
    position: absolute;

  }
  #routerBox{
    background: #3b5998;
    width: 100%;
    position: absolute;
    height: max-content;
    left: 0;
    min-height: calc(100% - 65px);
    overflow:auto;
  }
  .componentBox{
    left: 0;
    z-index: 5;
    width: 100%;
  }
}
@media screen and (min-width: 800px) {
  .smallShow{
    display: none !important;
  }
  #menuBox{
    display: none !important;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 96vh;
    min-height: 500px
  }
  #router{
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.9); /* Black w/opacity/see-through */
    color: white;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
    overflow-y: auto;
    max-height: 80%;
    height: 80%;
    min-width: 750px;
  }
  #routerBox{
  }
  .componentBox{
    position: absolute;
    left: 0;
    z-index: 5;
    width: 100%;
  }
}
.background{
  float: top;
  background-image:url("./assets/marathon.jpg");
  height: 100%;
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  /* Center and scale the image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#footer{
  bottom: 0;
  height: 30px;
  background: rgba(0,0,0, 0.9);
  color: white;
  border-top: 2px solid white;
  min-width: 500px;
}
.navbar{
  top: 0;
  height: 50px;
  background: white;
}

table{
  width: 100%;
  height: 100%;
}
#menuBox{
  top: 65px;
  background: white;
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
}
</style>

