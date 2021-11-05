<template>
  <div>
    <Sport
        v-if="pageCounter === 1"
        :inputSports="sportAll"
        :inputSport="sport"
        :doSubmit="() => doSubmit()"
        :changeSport="(inputValue) => changeSport(inputValue)"
    />
    <Discipline
        v-else-if="pageCounter === 2"
        :inputDisciplines="sportAll[sport].disciplines"
        :inputDiscipline="discipline"
        :doSubmit="() => doSubmit()"
        :doBack="() => doBack()"
        :changeDiscipline="(inputValue) => changeDiscipline(inputValue)"
    />
    <Level
        v-else-if="pageCounter === 3"
        :inputDisciplines="sportAll[sport].disciplines"
        :inputStats="currentStats"
        :doSubmit="() => doSubmit()"
        :doBack="() => doBack()"
        :calculateExpected="(reference) => calculateExpected(reference)"
    />
    <Goal
        v-else-if="pageCounter === 4"
        :inputGoal="goal"
        :inputMinGoal="minGoal"
        :doSubmit="() => doSubmit()"
        :doBack="() => doBack()"
        :changeGoal="(inputValue) => changeGoal(inputValue)"
    />
    <Pulse
        v-else-if="pageCounter === 5"
        :inputPulse="pulse"
        :inputZones="sportAll[sport].zones"
        :doSubmit="() => doSubmit()"
        :doBack="() => doBack()"
    />
    <Time
        v-else-if="pageCounter === 6"
        :inputWeeks="weeks"
        :inputEndDate="endDate"
        :inputStartDate="startDate"
        :inputDayBool="dayBool"
        :inputMinDays="sportAll[sport].disciplines[discipline].minDays"
        :inputMinWeeks="sportAll[sport].disciplines[discipline].minWeeks"
        :inputTracksBool="loadTracks"
        :doSubmit="(step) => doSubmit(step)"
        :doBack="() => doBack()"
        :changeDuration="(inputWeeks) => changeDuration(inputWeeks)"
        :changeEndDate="(inputDate) => changeEndDate(inputDate)"
        :changeStartDate="(inputDate) => changeStartDate(inputDate)"
        :setLoadTracksBool="() => setLoadTracksBool()"
    />
    <Track
        v-else-if="pageCounter === 7"
        :inputLengths="lengths"
        :inputInterval="trackInterval"
        :inputMinDistance="minDistance"
        :doSubmit="() => doSubmit()"
        :doBack="() => doBack()"
    />
    <Disclaimer
        v-else-if="pageCounter === 8"
        :inputTracksBool="loadTracks"
        :doBack="(step) => doBack(step)"
        :createPlan="() => createPlan()"
    />
  </div>
</template>

<script>
import Sport from "@/views/creation_components/Sport"
import Discipline from "@/views/creation_components/Discipline";
import Level from "@/views/creation_components/Level";
import Goal from "@/views/creation_components/Goal";
import Pulse from "@/views/creation_components/Pulse";
import Time from "@/views/creation_components/Time";
import Track from "@/views/creation_components/Track";
import Disclaimer from "@/views/creation_components/Disclaimer";

import sportJson from "@/jsons/sport.json"

export default {
  name: "Creation",
  data () {
    return {
      pageCounter: 7,

      sport: "sport1",
      discipline: "discipline1",
      currentStats: {
        statType: null,
        disc: {
          discipline: null,
          length: null,
          time: null
        },
        sample: {
          length: null,
          time: null
        }
      },
      goal: null,
      minGoal: sportJson["sport1"].disciplines["discipline1"].minGoal,
      pulse: {
        pulseType: null,
        maxPulse: "",
        lacPulse: {
          minFat: 100,
          maxFat: 120,
          minGA1: 120,
          maxGA1: 140,
          minGA2: 140,
          maxGA2: 160,
          minEB1: 160,
          maxEB1: 180,
        },
      },
      weeks: sportJson["sport1"].disciplines["discipline1"].minWeeks,
      endDate: "",
      startDate: "",
      dayBool: {
        numActive: 7,
        day1: true,
        day2: true,
        day3: true,
        day4: true,
        day5: true,
        day6: true,
        day7: true,
      },
      loadTracks: true,
      lengths: {
        counter: [1, 1, 1],
        min: [],
        mid: [22.6, 23.0, 25.4, 19.3],
        max: [35.0, 37.0, 35.4, 33.3]
      },
      trackInterval: sportJson["sport1"].disciplines["discipline1"].trackInterval,
      minDistance: sportJson["sport1"].disciplines["discipline1"].minDistance,
      inputAll: {},
      sportAll: sportJson
    }
  },
  components: { Sport, Discipline, Level, Goal, Pulse, Time, Track, Disclaimer },
  methods: {
    // Sport-Functions
    // When changing sport this function sets other variables so that the creation fits the sport
    changeSport(inputValue) {
      this.sport = inputValue;
      this.discipline = "discipline1";
      this.currentStats = {
        "statType": null,
            "disc": {
          "discipline": null,
              "length": null,
              "time": null
        },
        "sample": {
          "length": null,
              "time": null
        }
      };
      this.trackInterval = this.sportAll[this.sport].disciplines[this.discipline].trackInterval
      this.lengths.min = [this.trackInterval[0], this.trackInterval[0], this.trackInterval[0], this.trackInterval[0]]
      this.lengths.mid = [this.trackInterval[1], this.trackInterval[1], this.trackInterval[1], this.trackInterval[1]]
      this.lengths.max = [this.trackInterval[2], this.trackInterval[2], this.trackInterval[2], this.trackInterval[2]]
      this.minGoal = sportJson[this.sport].disciplines[this.discipline].minGoal;
      this.minDistance = this.sportAll[this.sport].disciplines[this.discipline].minDistance
    },

    // Discipline-Functions
    // When changing discipline this function sets other variables so that the creation fits the discipline
    changeDiscipline(inputValue) {
      this.discipline = inputValue;
      this.trackInterval = this.sportAll[this.sport].disciplines[this.discipline].trackInterval
      this.lengths.min = [this.trackInterval[0], this.trackInterval[0], this.trackInterval[0], this.trackInterval[0]]
      this.lengths.mid = [this.trackInterval[1], this.trackInterval[1], this.trackInterval[1], this.trackInterval[1]]
      this.lengths.max = [this.trackInterval[2], this.trackInterval[2], this.trackInterval[2], this.trackInterval[2]]
      this.minGoal = sportJson[this.sport].disciplines[this.discipline].minGoal;
      this.minDistance = this.sportAll[this.sport].disciplines[this.discipline].minDistance
    },

    // Level-Functions
    // Function calculates a time-goal out of the users input references and the chosen discipline
    calculateExpected(reference) {
      if (reference) {
        let time1 = 0;
        let temp = this.currentStats[this.currentStats.statType].time.split(':')
        let factor = 3600
        for (let entry of temp) {
          time1 += entry * factor
          factor /= 60
        }
        let distance1 = this.currentStats[this.currentStats.statType].length
        let distance2 = this.sportAll[this.sport]['disciplines'][this.discipline].length
        let time2 = time1 * Math.pow( distance2 / distance1 , 1.06)
        this.goal = new Date(Math.round(time2) * 1000).toISOString().substr(11, 8);
      } else {
        this.goal = sportJson[this.sport].disciplines[this.discipline].amateurGoal;
      }
    },

    // Goal-Functions
    // Sets the time-goal to the users input
    changeGoal(inputValue) {
      this.goal = inputValue;
    },

    // Time-Functions
    // changes the date for the competition to the users input
    changeEndDate(inputDate){
      this.endDate = inputDate;
    },
    // changes the date of plan start
    changeStartDate(inputDate){
      this.startDate = inputDate;
    },
    // changes the duration of the plan to the users input
    changeDuration(inputWeeks){
      this.weeks = inputWeeks;
    },
    // changes the track loading boolean
    setLoadTracksBool() {
      this.loadTracks = !this.loadTracks
    },

    // Button-Functions
    // Shows next vue
    doSubmit(step=1) {
      this.pageCounter += step;
    },
    // Shows recent view
    doBack(step=1) {
      this.pageCounter -= step;
    },
    // Function creates a Json with the input of the user. Then changes to plan-vue.
    createPlan(){
      // If the user doesn't give any tracks, the value is set to null, so the backend can create own lengths.
      if (this.loadTracks === false) {
        this.lengths = null
      }
      let input = {
        sport: this.sport,
        discipline: this.discipline,
        stats: this.currentStats,
        goal: this.goal,
        pulse: this.pulse,
        weeks: this.weeks,
        date: this.endDate,
        days: this.dayBool,
        lengths: this.lengths
      }
      input = JSON.stringify(input)
      this.$router.push({name: 'Plan', params: { inputData: input } })
    }
  },
  created() {
    this.lengths.min = [this.trackInterval[0], this.trackInterval[0], this.trackInterval[0], this.trackInterval[0]]
    this.lengths.mid = [this.trackInterval[1], this.trackInterval[1], this.trackInterval[1], this.trackInterval[1]]
    this.lengths.max = [this.trackInterval[2], this.trackInterval[2], this.trackInterval[2], this.trackInterval[2]]
  }
}
</script>

<style>
.buttonSubmit{
  background: white;
  border: black;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px
}
.buttonSubmit:hover{
  background: #dedede;
}
.buttonBack{
  background: white;
  border: black;
  position: absolute;
  left: 50px;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px;
}
.buttonBack:hover{
  background: #dedede;
}
.arrowButton{
  background: white;
  color: rgba(0,0,0, 0.9); /* Black w/opacity/see-through */
  border: black;
  position: absolute;
  left: 10px;
  width: 50px;
  height: 35px;
  border-radius: 20px;
}
.arrowButton:hover{
  background: #dedede;
}
.fa-long-arrow-alt-left{
  font-size: 30px;
}
@media screen and (max-width: 799px) {
  .buttonBack{
    display: none !important;
  }
}
@media screen and (min-width: 800px) {
  .arrowButton{
    display: none !important;
  }
}
.dropDown{
  font-size: 20px;
}
.descriptionBox{
  font-size: 20px;
}
.inputBox{
  padding: 5px 0 30px 0;
  font-size: 20px;
}
.inputField{
  font-size: 20px;
}
.requiredText{
  color: #990000;
}
</style>