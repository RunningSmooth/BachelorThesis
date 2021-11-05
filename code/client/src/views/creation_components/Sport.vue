<template>
  <div>
    <h1>Deine Sportart</h1>
    <h3>Wähle deine Sportart:</h3>
    <div class="inputBox">
      <label for="sportSelect">
        <select class="dropDown" id="sportSelect" v-model="sport" @change="changeSport(sport)">
          <option v-for="entry in sportAll" :key="entry.id" :value=entry.value >{{ entry.name }}</option>
        </select>
      </label>
      <div class="descriptionBox">
        <p class="textArea" v-for="entry in sportAll[sport].description" :key="entry.id">{{ entry }}</p>
      </div>
    </div>
    <button class="buttonSubmit" @click="doSubmit()">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Sport",
  props: ["inputSports", "inputSport", "doSubmit", "changeSport"],
  data () {
    return {
      sportAll: this.inputSports,
      sport: this.inputSport
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
</style>