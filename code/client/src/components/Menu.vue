<template>
  <div>
    <hr>
    <div class="buttonBox" @click="routerPush('Home')">Home</div>
    <div class="buttonBox" @click="routerPush('Creation')">Trainingsplan erstellen</div>
    <hr>
    <div class="buttonBox" @click="routerPush('Help')">Hilfe</div>
    <div class="buttonBox" @click="routerPush('Privacy')">Datenschutz</div>
    <div class="buttonBox" @click="routerPush('Imprint')">Impressum</div>
    <div class="checkBox">
      <input type="checkbox" id="checkId" v-model="apiBool" @change="boolFunc()">
      <label for="checkId">API-Mode</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["changeBool", "inputBool", "boolFunc"],
  data() {
    return {
      apiBool: this.inputBool
    }
  },
  methods: {
    routerPush(name){
      this.changeBool()
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
.buttonBox{
  background: white;
  font-size: 40px;
  padding: 10px;
}
.buttonBox:hover{
  background: #dedede;
}
.checkBox{
  background: white;
  font-size: 30px;
  padding: 60px 10px 10px 10px;
}

</style>