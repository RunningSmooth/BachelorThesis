<template>
  <div id="main">
    <Loader
        v-if="showStepper === 0"
    />
    <Overview
        v-if="showStepper === 1"
        :inputPlanInfo="planData"
        :inputDay="dayData"
        :changeView="(input) => changeView(input)"
    />
    <Day
        v-else-if="showStepper === 2"
        :inputDay="dayData"
        :changeView="(input) => changeView(input)"
    />
  </div>
</template>

<script>
import Overview from "@/views/plan_components/Overview";
import Day from "@/views/plan_components/Day";
import Loader from "@/views/plan_components/Loader";

import planJson from "@/jsons/plan.json"

export default {
  name: "Plan",
  props: ["getScrollPos", "setScrollPos", "inputData", "inputApiBool"],
  /*The scroll-functions are for the positioning of the scrollbar of the content-box. input data is the user input from
    creation*/
  data() {
    return {
      showStepper: 0,
      dayData: {
        "dayNo": "",
        "day" : "",
        "unit": "",
        "info": "null",
        "distance" : "null",
        "duration": "null",
        "pulse": "null",
        "description": "null"
      },
      scrollPos: 0,
      setterBool: false,
      planData: {},
    }
  },
  components: { Loader, Overview, Day },
  methods: {
    // Function switches between the day-vue and the overview-vue
    changeView(input) {
      if (input === true){
        this.showStepper -= 1;
        this.setterBool = true
      } else {
        this.scrollPos = this.getScrollPos()
        this.showStepper += 1
      }
    },
    // Sets the position of scrollbar
    setter(){
      this.setScrollPos(this.scrollPos)
      this.setterBool = false
    },
    // Sends the user input to api, gets the plan from api and changes content from loader-vue to overview-vue
    getPlan: async function(){
      console.log("Post")
      let response = await fetch("http://localhost:5000/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: this.inputData,
    });
      response = await response.json();
      this.planData = response
      this.showStepper += 1;
    },
  },
  updated() {
    // Calls function for setting scrollbar if needed (When switching from day.vue to overview.vue)
    if (this.setterBool) {
      this.setter()
    }
  },
  // checks if the props are a valid user input. If not the user will be redirected to Home. Else the plan is created
  created() {
    if (this.inputData === undefined) {
      this.$router.push({name: 'Home', params: {inputBool: "true"}})
    } else{
      if (this.inputApiBool === false) {
        this.planData = planJson
        this.showStepper += 1
      } else {
        this.getPlan()
      }
    }
  }
}
</script>

<style scoped>
</style>
