<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="leaveDate(false)">Zurück</button>
    <button class="arrowButton" @click="leaveDate(false)"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Dein Zeitplan</h1>
    <div class="inputBox">
      <h3 class="textArea">Gib die gewünschte Länge deines Trainingsplans ein:</h3>
      <div>
        <table>
          <tr>
            <td style="text-align: right; width: 50%">
              <button class="mathButton" @click="subtractWeeks()">-</button>
              <label for="weekField"></label>
              <input class="input" id="weekField" v-model="weeks" readonly>
              <button class="mathButton" @click="addWeeks()">+</button>
            </td>
            <td style="text-align: left">
              <p>Wochen</p>
            </td>
          </tr>
        </table>
      </div>
      <p class="textArea">Die Trainingszeitraum ist immer eine Vielzahl von vier Wochen, um Zyklen innerhalb des Trainings zu ermöglichen.</p>
      <h3>Wähle den Tag an dem dein Training abgeschlossen sein soll:</h3>
      <p>Startdatum: {{ changeDateFormat(startDate) }}</p>
      <label>
        Zieldatum: <input class="input" type="date" :min="minDate" v-model="endDate" @input="setStartDate()">
      </label><br>
      <p class="requiredText" v-if="validDateBool===false">
        Das gewählte Datum ist nicht gültig.<br>
        Wähle ein Datum zwischen dem {{ changeDateFormat(minDate) }} und dem {{ changeDateFormat(latestDate) }}
      </p>

      <div id="dayBox">
        <h3>Wähle die Tage, an denen du Zeit hast</h3>
        <table style="width: 100%">
          <tr>
            <th v-for="day in daysArray" :key="day.id" style="width: calc(100%/7)">
              <div v-if="dayBool[day['value']] === false" class="dayNo wide" @click="changeState(day['value'], true)">
                {{ day['name'] }}<i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <div v-else class="dayYes wide" @click="changeState(day['value'], false)">
                {{ day['name'] }}<i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-if="dayBool[day['value']] === false" class="dayNo small" @click="changeState(day['value'], true)">
                {{ getShortDay(day['name']) }}<i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <div v-else class="dayYes small" @click="changeState(day['value'], false)">
                {{ getShortDay(day['name']) }}<i class="fa fa-check" aria-hidden="true"></i>
              </div>
            </th>
          </tr>
        </table>
        <p class="requiredText" v-if="dayNumBool">
          Es müssen Mindestens {{ minDays}} Tage verfügbar sein.
        </p>
        <p class="requiredText" v-if="dayDistBool">
          Beachte das du deine Trainingstage nicht nur an aufeinanderfolgenden Tagen hast.
        </p>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" v-model="loadTracks" @change="setLoadTracksBool" checked>
        <label for="scales">Eigene Strecke eingeben?</label>
      </div>
    </div>
    <button class="buttonSubmit" @click="leaveDate(true)">Weiter</button>

  </div>
</template>

<script>
export default {
  name: "Time",
  props: ["inputWeeks", "inputEndDate", "inputStartDate", "inputDayBool", "inputMinDays", "inputMinWeeks", "inputTracksBool", "doSubmit",
    "doBack", "changeDuration" , "changeEndDate", "changeStartDate", "setLoadTracksBool"],
  data() {
    return {
      weeks: this.inputWeeks,
      endDate: this.inputEndDate,
      startDate: this.inputStartDate,
      minDate: null,
      latestDate: "2049-12-31",
      minDays: this.inputMinDays,
      minWeeks: this.inputMinWeeks,
      dayNumBool: false,
      dayDistBool: false,
      cycleLength: 4,
      dayBool: this.inputDayBool,
      validDateBool: true,
      daysArray: {
        day1: {
          name: "Montag",
          value: "day1",
          num: 1
        },
        day2: {
          name: "Dienstag",
          value: "day2",
          num: 2
        },
        day3: {
          name: "Mittwoch",
          value: "day3",
          num: 3
        },
        day4: {
          name: "Donnerstag",
          value: "day4",
          num: 4
        },
        day5: {
          name: "Freitag",
          value: "day5",
          num: 5
        },
        day6: {
          name: "Samstag",
          value: "day6",
          num: 6
        },
        day7: {
          name: "Sonntag",
          value: "day7",
          num: 7
        }
      },
      loadTracks: this.inputTracksBool

    }
  },
  methods: {
    // changes state of day and decreases or increases number of active days
    changeState(day, bool) {
      this.dayBool[day] = bool;
      (bool) ? this.dayBool.numActive += 1 : this.dayBool.numActive -= 1;
      this.dayNumBool = this.dayBool.numActive < this.minDays;
      (this.dayNumBool) ? this.dayDistBool = false : this.dayDistBool = this.blockCheck()
    },
    // Checks if there are to big breaks between exercises
    blockCheck() {
      let counter = 0;
      for (let i of ["day1", "day2", "day3", "day4", "day5", "day6", "day7"]) {
        if (this.dayBool[i] === false) {
          counter += 1;
          if (counter >= 7- this.minDays) return true;
          if (i === "day7") {
            for (let j of ["day1", "day2", "day3", "day4", "day5", "day6"]) {
              if (this.dayBool[j] === false) {
                counter += 1;
                if (counter >= 7- this.minDays) return true;
              } else {
                break;
              }
            }
          }
        }
        else {
          counter = 0;
        }
      }
      return false;
    },
    // Subtracts the duration by the length of one cycle. If the duration would be to short, do nothing
    subtractWeeks() {
      this.validDateBool = true
      if ((this.weeks - this.cycleLength) >= this.minWeeks) {
        this.weeks -= this.cycleLength;
        this.getMinDate()
      }
    },
    // Adds one cycle length to the duration
    addWeeks() {
      this.validDateBool = true
      this.weeks += this.cycleLength;
      this.getMinDate()
    },
    // Sets the earliest possible date for the end of the plan
    getMinDate() {
      this.validDateBool = true
      let today = new Date();
      let start = new Date();
      start.setDate(start.getUTCDate() + 1)
      today.setDate(today.getUTCDate() + (this.weeks * 7 + 1))
      this.minDate = today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'+('0'+(today.getDate())).slice(-2);
      if (this.endDate < this.minDate ) {
        this.endDate = this.minDate
        this.startDate = start.getFullYear()+'-'+('0'+(start.getMonth()+1)).slice(-2)+'-'+('0'+(start.getDate())).slice(-2);
      }
    },
    // calculates the startDate
    setStartDate(){
      this.validDateBool = true
      let start = new Date(this.endDate)
      start.setDate(start.getUTCDate() - this.weeks * 7)
      this.startDate = start.getFullYear()+'-'+('0'+(start.getMonth()+1)).slice(-2)+'-'+('0'+(start.getDate())).slice(-2);
    },
    // changes the format of a date for displaying reasons
    changeDateFormat(date) {
      let year = date.slice(0, 4)
      let month = date.slice(5, 7)
      let day = date.slice(8, 10)
      return day + "." + month + "." + year
    },
    // return first two letters of a day string
    getShortDay(dayName) {
      return dayName.substr(0,2)
    },
    // checks if the input end date is possible.
    checkValidDate() {
      let regEx = /^\d{4}-\d{2}-\d{2}$/
      // checks if user input has yyyy-mm-dd format
      if(!this.endDate.match(regEx)) return false
      let earliest = new Date()
      earliest.setDate(earliest.getUTCDate() + (this.weeks * 7 + 1))
      earliest = earliest.getFullYear()+'-'+('0'+(earliest.getMonth()+1)).slice(-2)+'-'+('0'+(earliest.getDate())).slice(-2);
      // checks if user input is in a valid interval
      return (this.endDate >= earliest && this.latestDate > this.endDate)
    },
    // Sets values from user input and changes vue
    leaveDate(next) {
      this.changeDuration(this.weeks);
      this.changeEndDate(this.endDate);
      this.changeStartDate(this.startDate);
      if (next) {
        if (this.checkValidDate()){
          if (this.dayNumBool === false && this.dayDistBool === false) {
            (this.loadTracks) ? this.doSubmit(1) : this.doSubmit(2)
          }
        } else {
          this.validDateBool = false
        }
      } else {
        this.doBack();
      }
    }
  },
  created() {
    if (this.weeks < this.minWeeks){
      this.weeks = this.minWeeks
    }
    this.getMinDate()
    this.dayNumBool = this.dayBool.numActive < this.minDays;
    (this.dayNumBool === false) && (this.dayDistBool = this.blockCheck())
  }
}

</script>

<style scoped>
@media screen and (max-width: 1299px) {
  .wide {
    display: none !important;
  }
}
@media screen and (min-width: 1300px) {
  .small {
    display: none !important;
  }
}
@media screen and (max-width: 799px) {
  .textArea{
    padding-left: 10px;
    padding-right: 10px;
  }
  .buttonBack{
    display: none !important;
  }
}
@media screen and (min-width: 800px) {
  .textArea {
    padding-left: 0;
    padding-right: 0;
  }
  .arrowButton{
    display: none !important;
  }
}
#dayBox{
  padding-bottom: 20px;
}
.dayNo{
  background: #990000;
  height: 50px;
  font-size: 20px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dayYes{
  background: green;
  height: 50px;
  font-size: 20px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mathButton{
  font-size: 20px;
  width: 30px;
  text-align: center;
}
.input{
  font-size: 20px;
}
#weekField{
  width: 30px;
  text-align: center;
}
.fa-check{
  margin-left: 2px;
}
.fa-times{
  margin-left: 2px;
}
</style>