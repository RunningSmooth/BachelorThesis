<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="doBack()">Zurück</button>
    <button class="arrowButton" @click="doBack()"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Deine Strecken</h1>
    <div class="inputBox">
      <div style="padding: 10px 0 10px 0">
        <p class="textArea">
          Du hast bereits eigene Strecken? Gib hier die Länge dieser Strecken ein und es wird versucht sie während der
          Erstellung des Trainingsplans zu berücksichtigen.
          <br>
          Regel: Die erste Strecke jedes Streckentyps muss mindestens {{ minDistance }} Kilometer von den anderen ersten
          Strecken entfernt sein. Für alle nachfolgenden Strecken gibt es keine Einschränkungen.
        </p>
        <div id="minBox" class="trackBox">
          <table>
            <tr>
              <td class="leftColumn">
                <button class="mathButton" @click="subtractTrackNum(0)">-</button>
                <label>
                  <input class="trackCounter" step="1" max="4" min="1" v-model="lengths.counter[0]" readonly>
                </label>
                <button class="mathButton" @click="addTrackNum(0)">+</button>
              </td>
              <th class="middleColumn">
                <p>Kurze Strecken ({{ trackInterval[0] }}-{{ trackInterval[1] }} Km)</p>
              </th>
              <td class="rightColumn">
              </td>
            </tr>
            <tr v-if="lengths.counter[0] > '0'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.min[0]" class="slider" @change="validMin()" :min="trackInterval[0]" :max="trackInterval[1]" step="0.1">
                </label>
                <p>Länge: {{ lengths.min[0] }} Kilometer</p>
                <p class="requiredText" v-if="minBool">Diese Strecke muss mindestens {{ minDistance }} Kilometer kürzer
                  sein als die erste der mittleren Strecken.</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[0] > '1'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.min[1]" class="slider" :min="trackInterval[0]" :max="trackInterval[1]" step="0.1">
                </label>
                <p>Länge: {{ lengths.min[1] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[0] > '2'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.min[2]" class="slider" :min="trackInterval[0]" :max="trackInterval[1]" step="0.1">
                </label>
                <p>Länge: {{ lengths.min[2] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[0] > '3'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.min[3]" class="slider" :min="trackInterval[0]" :max="trackInterval[1]" step="0.1">
                </label>
                <p>Länge: {{ lengths.min[3] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
          </table>
        </div>
        <div id="midBox" class="trackBox">
          <table>
            <tr>
              <td class="leftColumn">
                <button class="mathButton" @click="subtractTrackNum(1)">-</button>
                <label>
                  <input class="trackCounter" step="1" max="4" min="1" v-model="lengths.counter[1]" readonly>
                </label>
                <button class="mathButton" @click="addTrackNum(1)">+</button>
              </td>
              <th class="middleColumn">
                <p>Mittlere Strecken ({{ trackInterval[1] }}-{{ trackInterval[2] }} Km)</p>
              </th>
              <td class="rightColumn">
              </td>
            </tr>
            <tr v-if="lengths.counter[1] > '0'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.mid[0]" class="slider" @change="validMid()" :min="trackInterval[1]" :max="trackInterval[2]" step="0.1">
                </label>
                <p>Länge: {{ lengths.mid[0] }} Kilometer</p>
                <p class="requiredText" v-if="midMinBool">Diese Strecke muss mindestens {{ minDistance }} Kilometer
                  länger sein als die erste der kurzen Strecken.</p>
                <p class="requiredText" v-if="midMaxBool">Diese Strecke muss mindestens {{ minDistance }} Kilometer
                  kürzer sein als die erste der langen Strecken.</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[1] > '1'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.mid[1]" class="slider" :min="trackInterval[1]" :max="trackInterval[2]" step="0.1">
                </label>
                <p>Länge: {{ lengths.mid[1] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[1] > '2'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.mid[2]" class="slider" :min="trackInterval[1]" :max="trackInterval[2]" step="0.1">
                </label>
                <p>Länge: {{ lengths.mid[2] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[1] > '3'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.mid[3]" class="slider" :min="trackInterval[1]" :max="trackInterval[2]" step="0.1">
                </label>
                <p>Länge: {{ lengths.mid[3] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
          </table>
        </div>
        <div id="maxBox" class="trackBox">
          <table>
            <tr>
              <td class="leftColumn">
                <button class="mathButton" @click="subtractTrackNum(2)">-</button>
                <label>
                  <input class="trackCounter" step="1" max="4" min="1" v-model="lengths.counter[2]" readonly>
                </label>
                <button class="mathButton" @click="addTrackNum(2)">+</button>
              </td>
              <th class="middleColumn">
                <p>Lange Strecken ({{ trackInterval[2] }}-{{ trackInterval[3] }} Km)</p>
              </th>
              <td class="rightColumn">
              </td>
            </tr>
            <tr v-if="lengths.counter[2] > '0'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.max[0]" class="slider" @change="validMax()" :min="trackInterval[2]" :max="trackInterval[3]" step="0.1">
                </label>
                <p>Länge: {{ lengths.max[0] }} Kilometer</p>
                <p class="requiredText" v-if="maxBool">Diese Strecke muss mindestens {{ minDistance }} Kilometer länger
                  sein als die erste der mittleren Strecken.</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[2] > '1'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.max[1]" class="slider" :min="trackInterval[2]" :max="trackInterval[3]" step="0.1">
                </label>
                <p>Länge: {{ lengths.max[1] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[2] > '2'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.max[2]" class="slider" :min="trackInterval[2]" :max="trackInterval[3]" step="0.1">
                </label>
                <p>Länge: {{ lengths.max[2] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
            <tr v-if="lengths.counter[2] > '3'">
              <td class="leftColumn"></td>
              <td class="middleColumn">
                <label>
                  <input type="range" v-model="lengths.max[3]" class="slider" :min="trackInterval[2]" :max="trackInterval[3]" step="0.1">
                </label>
                <p>Länge: {{ lengths.max[3] }} Kilometer</p>
              </td>
              <td class="rightColumn"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <button class="buttonSubmit" @click="doSubmit()">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: ["inputLengths", "inputInterval", "inputMinDistance", "doSubmit", "doBack"],
  data () {
    return {
      lengths: this.inputLengths,
      minBool: false,
      midMinBool: false,
      midMaxBool: false,
      maxBool: false,
      minDistance: this.inputMinDistance,
      trackInterval: this.inputInterval
    }
  },
  methods: {
    // rounds length just in case there is a problem with a float
    round(number) {
      return Math.round(number*10) / 10;
    },
    // checks if the first min track is legal
    validMin() {
      if (parseFloat(this.lengths.min[0]) > parseFloat(this.lengths.mid[0]) - this.minDistance) {
        this.lengths.min[0] = this.round(parseFloat(this.lengths.mid[0]) - this.minDistance);
        this.minBool = true
      }
      else {
        this.minBool = false
      }
    },
    // checks if the first mid track is legal
    validMid() {
      if (parseFloat(this.lengths.mid[0]) > parseFloat(this.lengths.max[0]) - this.minDistance) {
        this.lengths.mid[0] = this.round(parseFloat(this.lengths.max[0]) - this.minDistance)
        this.midMaxBool = true
      }
      else {
        this.midMaxBool = false
      }
      if (parseFloat(this.lengths.mid[0]) < parseFloat(this.lengths.min[0]) + this.minDistance) {
        this.lengths.mid[0] = this.round(parseFloat(this.lengths.min[0]) + this.minDistance)
        this.midMinBool = true
      }
      else {
        this.midMinBool = false
      }
    },
    // checks if the first max track is legal
    validMax() {
      if (parseFloat(this.lengths.max[0]) < parseFloat(this.lengths.mid[0]) + this.minDistance) {
        this.lengths.max[0] = this.round(parseFloat(this.lengths.mid[0]) + this.minDistance)
        this.maxBool = true
      }
      else {
        this.maxBool = false
      }
    },
    // Subtracts the number of tracks by 1
    subtractTrackNum(trackType) {
      if (this.lengths.counter[trackType] > 1){
        this.lengths.counter[trackType] -= 1
      }
    },
    // Adds 1 to the number of tracks
    addTrackNum(trackType) {
      if (this.lengths.counter[trackType] < 4){
        this.lengths.counter[trackType] += 1
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
  .textArea {
    padding-left: 0;
    padding-right: 0;
  }
  p{
    font-size: 20px;
  }
  .slider{
    width: 500px
  }
  input[type='range']::-webkit-slider-runnable-track{
    background: white;
    border: 1px solid black;
  }
  table{
    background: transparent;
    width: 100%;
    min-width: 700px;
  }
  .trackBox{
    border: 2px solid white;
    min-width: 730px;
  }
  .trackCounter{
    font-size: 20px;
    width: 30px;
    text-align: center;
  }
  .mathButton{
    font-size: 20px;
    width: 30px;
    text-align: center;
  }
  .rightColumn{
    min-width: 100px;
    width: 15%;
  }
  .leftColumn{
    width: 15%;
    min-width: 100px;
  }
  .middleColumn{
    width: 70%;
    min-width: 500px;
  }
}
@media screen and (max-width: 799px) {
  .textArea{
    padding-left: 10px;
    padding-right: 10px;
  }
  p{
    font-size: 20px;
  }
  .slider{
    width: 90%;
  }
  input[type='range']::-webkit-slider-runnable-track{
    background: white;
    border: 1px solid black;
  }
  table{
    background: transparent;
    width: 100%;

  }
  .trackBox{
    border: 2px solid white;
  }
  .trackCounter{
    font-size: 20px;
    width: 30px;
    text-align: center;
  }
  .mathButton{
    font-size: 20px;
    width: 30px;
    text-align: center;
  }
  .rightColumn{
    width: 15%;
  }
  .leftColumn{
    width: 15%;
  }
  .middleColumn{
    width: 70%;
  }
}
td{
  background: transparent;
}
</style>