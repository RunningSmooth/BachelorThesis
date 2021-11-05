<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="leaveDisclaimer(false)" v-if="!booleans.showBool">Zurück</button>
    <button class="arrowButton" @click="leaveDisclaimer(false)" v-if="!booleans.showBool">
      <i class="fas fa-long-arrow-alt-left" ></i>
    </button>
    <h1>Disclaimer</h1>
    <Info
        v-if="booleans.showBool"
        :changeView="() => changeView()"
    />
    <Check
        v-else
        :inputBooleans="booleans"
        :leaveDisclaimer="(next) => leaveDisclaimer(next)"
    />
  </div>
</template>

<script>
import Check from "@/views/creation_components/disclaimer_Components/Check";
import Info from "@/views/creation_components/disclaimer_Components/Info";

export default {
  name: "Disclaimer",
  props: ["inputTracksBool", "doBack", "createPlan"],
  components: { Check, Info },
  data() {
    return {
      booleans: {
        showBool: false,
        accepted: false,
        leaveBool: false
      }
    }
  },
  methods: {
    // changes value of show bool. the view is changed based on the value
    changeView() {
      this.booleans.showBool = !this.booleans.showBool
    },
    // function checks if user wants to go forward or backward. if user wants to next view it checks if he meets the conditions
    leaveDisclaimer(next) {
      if (next) {
        if (this.booleans.accepted) {
          this.createPlan()
        } else {
          this.booleans.leaveBool = true
        }
      }
      else {
        (this.inputTracksBool) ? this.doBack(1) : this.doBack(2)
      }
    }
  }
}
</script>

<style scoped>

</style>