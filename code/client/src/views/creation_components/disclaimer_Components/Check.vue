<template>
  <div>
    <p class="textArea">Bevor der Plan generiert wird, bitten wir dich den Disclaimer zu lesen.</p>
    <div id="disclaimerBox" @click="booleans.showBool=true">
      <h2>Zum Disclaimer</h2>
    </div>
    <div>
      <input type="checkbox" id="scales" name="scales" @click="changeLeaveBool()" v-model="booleans.accepted">
      <label for="scales">Ich habe den Disclaimer gelesen und bin einverstanden.</label>
    </div>
    <p v-if="booleans.leaveBool" class="requiredText">
      *Pflichtfeld
    </p>
    <button class="buttonSubmit button" @click="leaveDisclaimer(true)">Plan erstellen</button>
  </div>
</template>

<script>
export default {
  name: "Check",
  props: ["inputBooleans", "leaveDisclaimer"],
  data() {
      return{
        booleans: this.inputBooleans
      }
  },
  methods: {
    // changes value of leave bool
    changeLeaveBool(){
      this.booleans.leaveBool = false
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 799px) {
  #disclaimerBox{
    width: 300px;
    font-size: 15px;
  }
  .textArea{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 800px) {
  #disclaimerBox {
    width: 450px;
    font-size: 20px;
  }
  .textArea{
    padding-left: 0;
    padding-right: 0;
  }
}

#disclaimerBox{
  background: black;
  margin: 0 auto 30px auto;
  border-radius: 20px;
  border: 2px solid white;

}
#disclaimerBox:hover{
  background: #565656;
}
.button{
  margin-top: 30px;
}
.requiredText{
  color: #990000;
}
p{
  font-size: 20px;
}
label{
  font-size: 20px;
}
input[type=checkbox] {
  transform: scale(1.3);
}
</style>