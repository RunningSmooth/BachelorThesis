<template>
  <h1>{{ day.day }} {{ day.date }}</h1>
  <div id="infoBox">
    <div v-if="day.unit !=='Regeneration'">
      <table >
        <tr>
          <td class="leftColumn">Übungsart: </td>
          <td class="rightColumn">{{ day.unit }}</td>
        </tr>
        <tr v-if="day.info !=='null' && day.extraInfo !=='null'">
          <td class="leftColumn">Zusatz: </td>
          <td class="rightColumn">{{ day.info }} {{ day.extraInfo }} </td>
        </tr>
        <tr v-if="day.info !=='null' && day.extraInfo ==='null'">
          <td class="leftColumn">Zusatz: </td>
          <td class="rightColumn">{{ day.info }}</td>
        </tr>
        <tr v-if="day.distance !=='null' ">
          <td class="leftColumn">Strecke: </td>
          <td class="rightColumn">{{ day.distance }}</td>
        </tr>
        <tr v-if="day.pulse !=='null' ">
          <td class="leftColumn">Pulsbereiche: </td>
          <td class="rightColumn">{{ day.pulse }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>{{ day.unit }}</p>
    </div>
    <div class="descriptionBox" v-if="day.description !=='null'"></div>
    <p class="textArea" v-for="entry in day.description" :key="entry.id" >
      {{ entry }}
    </p>
  </div>
  <button @click="changeView(true)">Zurück</button>
</template>

<script>
export default {
  name: "Day",
  props: ["inputDay", "changeView"],
  inheritAttrs: false,
  data() {
    return{
      day: this.inputDay
    }
  },
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
}
button{
  background: white;
  border: black;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px
}
button:hover{
  background: #dedede;
}
#infoBox{
  padding: 5px 0 30px 0;
  font-size: 20px;
}
table{
  margin: 0 auto;
  width : 80%;
  border-collapse:collapse;
}
.leftColumn{
  width: 40%;
  text-align: right;
  padding: 5px;
}
.rightColumn{
  width: 60%;
  text-align: left;
  padding-left: 10px;
}
.descriptionBox{
  font-size: 20px;
  width: 100%;
}
</style>