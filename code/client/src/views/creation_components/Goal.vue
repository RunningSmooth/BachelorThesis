<template>
  <div>
    <button class="buttonBack" @click="leaveGoal(false)">Zurück</button>
    <button class="arrowButton" @click="leaveGoal(false)"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Deine Zielzeit</h1>
    <div class="inputBox">
      <div class="descriptionBox">
        <p class="textArea">
          Gib bitte deine Zielzeit ein. Klicke auf Zurücksetzen, um die vorgeschlagene Zeit zu setzen. Die
          vorgeschlagene Zeit stellt lediglich eine Schätzung dar. Es ist nicht garantiert das es die optimale Zeit für
          dich ist.
        </p>
      </div>
      <input class="inputField" type="time" step="1" min="00:00:00" max="23:59:59" v-model="goal" @change="check()"><br>
      <div id="buttonBox">
      <button class="resetButton" @click="setToProb()">Zurücksetzen</button>
      </div>
      <p class="requiredText" v-if="compareBool">Die Mindestzeit muss {{ minGoal}} betragen.</p>
    </div>
    <button class="buttonSubmit" @click="leaveGoal(true)">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Goal",
  props: ["inputGoal", "inputMinGoal", "doSubmit","doBack", "changeGoal"],
  data() {
    return {
      goal: this.inputGoal,
      propTime: this.inputGoal,
      minGoal: this.inputMinGoal,
      compareBool: false
    }
  },
  methods: {
    // checks if the goal is smaller as the min goal
    check() {
      this.compareBool = (this.goal < this.minGoal)
    },
    // sets the goal to the proposed goal
    setToProb() {
      this.goal = this.propTime
      this.compareBool = false
    },

    // sets goal time to users input and changes vue
    leaveGoal(next) {
      this.changeGoal(this.goal);
      if (next) {
        if (this.compareBool === false) {
          this.doSubmit()
        }
      } else {
        this.doBack()
      }
    }
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
}
#buttonBox{
  padding-top: 20px;
}
.resetButton{
  font-size: 20px;
  width: 150px;
  text-align: center;
}
</style>