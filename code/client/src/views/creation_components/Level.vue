<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="leaveLevel(false)">Zurück</button>
    <button class="arrowButton" @click="leaveLevel(false)"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Dein Niveau</h1>
    <div class="inputBox">
      <div style="padding: 10px 0 10px 0">
        <p class="textArea">
          Für die Gestaltung des Trainingsplans brauchen wir Informationen über dein Niveau.<br>
          Wenn die letzte Teilnahme an einem Event nicht länger als ein Jahr her ist, gib bitte deine erreichte Zeit
          an. Ansonsten gibt die Daten eines Tests ein. Solltest du neu sein und keine Referenzen haben, wähle dies
          entsprechend aus.
        </p>
        <div style="margin-bottom: 20px">
          <input type="radio" name="radioLevel" id="disc" value="disc" v-model="radio" @input="radioBool=true">
          <label for="disc">Disziplin</label>
          <div class="levelBox" id="discBox" v-if="radio === 'disc'">
            <h3>Wähle die absolvierte Disziplin:</h3>
            <label for="disciplineSelect">
              <select class="dropDown" id="disciplineSelect" v-model="discipline" @change="discBool=true">
                <option v-for="entry in disciplineAll" :key="entry.id" :value="entry.value" >{{ entry.name }}</option>
              </select>
            </label>
            <p class="requiredText"  v-if="discBool===false">*Pflichteingabe</p>

            <h3>Gib deine erreichte Zeit an:</h3>
            <label>
              <input class="inputField"
                     type="time"
                     step="1"
                     min="00:00:00"
                     max="23:59:59"
                     @input="discTimeBool=true; discIntervalBool=true"
                     v-model="discTime">
            </label>
            <br>
            <p class="requiredText" v-if="discTimeBool===false">*Pflichteingabe</p>
            <p class="requiredText" v-if="discIntervalBool===false">
              Die eingegebene Zeit muss mindestens {{ disciplineAll[discipline].minGoal }} betragen.
            </p>
          </div>
        </div>
        <div style="margin-bottom: 20px">
          <input type="radio" name="radioLevel" id="testrun" value="sample" v-model="radio" @input="radioBool=true">
          <label for="testrun">Testlauf</label>
          <div class="levelBox" id="sampleBox" v-if="radio === 'sample'">
            <h3>Gib die Länge der absolvierten Strecke ein:</h3>
            <table>
              <tr>
                <td style="text-align: right; width: 50%" >
                <label>
                  <input
                      id="sampleInput"
                      class="inputField"
                      type="number"
                      min="5.0"
                      max="70.0"
                      step="0.1"
                      placeholder="10.5"
                      @input="lengthBool=true"
                      v-model="sampleLength"
                      @change="decimalLength">
                </label>
                </td>
                <td style="text-align: left; width: 50%">
                <p>Kilometer</p>
                </td>
              </tr>
            </table>
            <p class="requiredText"  v-if="lengthBool===false">*Pflichteingabe</p>
            <h3>Gib deine erreichte Zeit an:</h3>
            <label>
              <input class="inputField"
                     type="time"
                     step="1"
                     min="00:00:00"
                     max="23:59:59"
                     @input="sampleTimeBool=true"
                     v-model="sampleTime">
            </label><br>
            <p class="requiredText"  v-if="sampleTimeBool===false">*Pflichteingabe</p>
          </div>
        </div>
        <div>
          <input type="radio" name="radioLevel" id="new" value="new" v-model="radio" @input="radioBool=true">
          <label for="new">Keine Referenzen</label>
        </div>
        <p class="requiredText" v-if="radioBool===false">*Pflichteingabe</p>
      </div>
    </div>
    <button class="buttonSubmit" @click="leaveLevel(true)">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Level",
  props: ["inputDisciplines", "inputStats", "doSubmit", "doBack", "calculateExpected"],
  data() {
    return {
      disciplineAll: this.inputDisciplines,
      stats: this.inputStats,
      discipline: this.inputStats["disc"].discipline,
      sampleLength: this.inputStats["sample"].length,
      discTime: this.inputStats["disc"].time,
      sampleTime: this.inputStats["sample"].time,
      radio: this.inputStats["statType"],

      radioBool: true,
      discBool: true,
      discTimeBool: true,
      lengthBool: true,
      sampleTimeBool: true,
      discIntervalBool: true
    }
  },
  methods: {
    // sets length to float with one decimal place
    decimalLength() {
      this.sampleLength = parseFloat(this.sampleLength).toFixed(1);
      if (this.sampleLength > 70.0){
        this.sampleLength = 70.0
      }
      if (this.sampleLength < 5.0){
        this.sampleLength = 5.0
      }
    },
    // Sets the users level to the input references. Then changes vue.
    leaveLevel(next) {
      if (next) {
        if (this.radio === null) {
          this.radioBool = false
        } else if (this.radio === "new") {
          this.stats.statType = "new"
          this.calculateExpected(false)
          this.doSubmit()
        } else if (this.radio === "disc") {
          if (this.discipline === null) {
            this.discBool = false
          }
          if (this.discTime === null) {
            this.discTimeBool = false
          }
          if (this.discTimeBool && this.discBool){
            if (this.discTime < this.disciplineAll[this.discipline].minGoal){
              this.discIntervalBool = false
            } else{
              this.stats.statType = "disc";
              this.stats["disc"].discipline = this.discipline
              this.stats["disc"].length = this.disciplineAll[this.discipline].length
              this.stats["disc"].time = this.discTime
              this.calculateExpected(true)
              this.doSubmit()
            }
          }
        } else if (this.radio === "sample") {
          if (this.sampleLength === null) {
            this.lengthBool = false
          }
          if (this.sampleTime === null) {
            this.sampleTimeBool = false
          }
          if (this.lengthBool && this.sampleTimeBool){
            this.stats.statType = "sample";
            this.stats["sample"].length = this.sampleLength
            this.stats["sample"].time = this.sampleTime
            this.calculateExpected(true)
            this.doSubmit()
          }
        }
      } else {
        this.stats['statType'] = this.radio;
        if (this.discipline !== null) {
          this.stats["disc"].discipline = this.discipline
          this.stats["disc"].length = this.disciplineAll[this.discipline].length
          this.stats["disc"].time = this.discTime
        }
        this.stats["sample"].length = this.sampleLength
        this.stats["sample"].time = this.sampleTime
        this.doBack()
      }
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
.levelBox{
  padding: 0 0 10px 0;
  border: 2px solid white;
}
#discBox{
  margin-top: 10px;
  margin-bottom: 20px;
}
#sampleBox{
  margin-top: 10px;
}
#sampleInput{
  width: 60px;
}
</style>