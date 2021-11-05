<template>
  <div>
    <div id="contentBox" style="  ">
      <p class="errorText textArea" v-if="planBool">
        Die Adresse für die fertigen Trainingspläne kann erst geöffnet werden, nachdem gültige Eingaben gemacht wurden.
        Erstelle bitte erstelle erst deinen Trainingsplan.
      </p>
      <p class="textArea">
        Willkommen bei Tobi's Trainingsplaner, deiner Seite zur Trainingsplanerstellung.<br><br>
        Werde zu deinem besten selbst und wachse über dich hinaus.<br>
        Erstelle jetzt deinen Trainingsplan und erreiche dein Ziel. </p>
      <button @click="$router.push({name: 'Creation'})"> Trainingsplan erstellen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["inputBool"],
  data() {
    return {
      planBool: null
    }
  },
  methods:{
  },
  created() {
    this.planBool = this.inputBool === "true"
  }
}

</script>

<style scoped>
@media screen and (max-width: 799px) {
  .textArea{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 800px) {
  .textArea {
    padding-left: 0;
    padding-right: 0;
  }
  #contentBox{
    width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
button{
  background: white;
  font-size: 25px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  border: black;
}
button:hover{
  background: #dedede;
}
p{
  font-size: 30px;
}
.errorText{
  color: #990000;
}
</style>