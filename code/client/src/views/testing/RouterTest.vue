<template>
  <div>
    <h1>Temporäre Seite zu Testzwecken. Wird später gelöscht.</h1>
    <p>{{ test }}</p>
    <p>Sportart: {{ sportInfo[test.sport].name }}</p>
    <p>Disziplin: {{ sportInfo[test.sport].disciplines[test.discipline].name }}</p>
    <p>Stats: {{ test.stats }}</p>
    <p>Zielzeit: {{ test.goal }}</p>
    <p>Puls: {{ test.pulse }}</p>
    <p>Planlänge: {{ test.weeks }} Wochen</p>
    <p>Zieldatum: {{ test.date }}</p>
    <p>Trainingstage: {{ test.days }}</p>
    <p>Strecken: {{ test.lengths }}</p>
    <button @click="$router.push({name: 'Plan'})">Plan erstellen</button>
  </div>
</template>

<script>
import sportJson from "@/jsons/sport.json"

export default {
  name: "RouterTest",
  props: ["inputData"],
  data() {
    return {
      test: JSON.parse(this.inputData),
      sport: this.inputData["sport"],
      bla: "",
      sportInfo: sportJson
    }
  },
  methods: {
    func(){
      console.log(this.test)
      console.log(this.sport)

    }
  },
  created() {
    console.log("inputDataContent: ", this.inputData)
  }

}
</script>

<style scoped>

</style>