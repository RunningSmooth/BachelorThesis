<template>
 <div>
   <div class="buttonBox" @click="$router.push({name: 'Imprint'})">Impressum</div>
   <div class="buttonBox" @click="$router.push({name: 'Privacy'})">Datenschutz</div>
   <div class="buttonBox" @click="$router.push({name: 'Help'})">Hilfe</div>
   <div class="checkBox tooltip">
     <span class="tooltiptext">
       Wenn diese Option aktiviert ist, wird der Plan von der Express API bezogen.
       Ansonsten wird der Plan aus einer JSON bezogen.
     </span>
     <input type="checkbox" id="checkId" v-model="apiBool" @change="boolFunc()">
     <label for="checkId">API-Mode</label>
   </div>
 </div>

</template>

<script>
export default {
  name: "Footer",
  props: ["inputBool", "boolFunc"],
  data() {
    return {
      apiBool: this.inputBool
    }
  }
}
</script>

<style scoped>
.buttonBox{
  float: right;
  height: 30px;
  width: calc(100% / 8);
  min-width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  font-weight: bold;
  font-size: 16px;
}
.checkBox{
  float: left;
  height: 30px;
  width: calc(100% / 8);
  min-width: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  font-weight: bold;
  font-size: 16px;
}
.buttonBox:hover{
  background: #565656;
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>