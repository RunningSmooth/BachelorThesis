<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="doBack()">Zurück</button>
    <button class="arrowButton" @click="doBack()"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Deine Disziplin</h1>
    <h3>Wähle deine Disziplin:</h3>
    <div class="inputBox">
      <label for="disciplineSelect">
        <select class="dropDown" id="disciplineSelect" v-model="discipline" @change="changeDiscipline(discipline)">
          <option v-for="entry in disciplineAll" :key="entry.id" :value="entry.value">{{ entry.name }}</option>
        </select>
      </label>
      <div class="descriptionBox">
        <p class="textArea" v-for="entry in disciplineAll[discipline].description" :key="entry.id">{{ entry }}</p>
        <p class="textArea">
          Die Trainingspläne für diese Disziplin sind mindestens {{ disciplineAll[discipline].minWeeks }} Wochen lang.
          Du musst an mindestens {{ disciplineAll[discipline].minDays }} Tagen pro Woche Zeit für das Training haben.
        </p>
      </div>
    </div>
    <button class="buttonSubmit" @click="doSubmit()">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Discipline",
  props: ["inputDisciplines", "inputDiscipline", "changeDiscipline", "doSubmit", "doBack"],
  data() {
    return {
      disciplineAll: this.inputDisciplines,
      discipline: this.inputDiscipline,
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