<template>
  <div style="padding-bottom: 30px">
    <button class="buttonBack" @click="leavePulse(false)">Zurück</button>
    <button class="arrowButton" @click="leavePulse(false)"><i class="fas fa-long-arrow-alt-left" ></i></button>
    <h1>Dein Puls</h1>
    <div class="inputBox">
      <div class="descriptionBox">
        <p class="textArea">
          Gib deinen Puls an. Entweder gibst du deinen Maximalpuls an oder deine Werte nach Untersuchung. Wir empfehlen
          die getesten Werte anzugeben, weil die Pulsbestimmung nach dem Maximalpuls schnell ungenau ist.
        </p>
      </div>
      <div style="padding-bottom: 10px">
        <div style="margin-bottom: 20px">
          <input type="radio" name="radioPulse" id="max" value="maxPulse" v-model="pulseAll['pulseType']">
          <label for="max">Maximalpuls</label><br>
          <div class="pulseBox" id="maxBox" v-if="pulseAll['pulseType'] === 'maxPulse'">
            <h3>Gib deinen Maximalpuls ein:</h3>
            <button class="mathButton" @click="subtractMaxPulse()">-</button>
            <label>
              <input class="input pulseField"
                     type="number"
                     placeholder="170"
                     @input="pulseInputMax('maxPulse')"
                     v-model="pulseAll['maxPulse']">
            </label>
            <button class="mathButton" @click="addMaxPulse()">+</button>
            <p class="requiredText" v-if="maxPulseBool===false">*Pflichteingabe</p>
            <p class="requiredText" v-if="formatBool===false">
              Ungültige Eingabe. Tätige bitte eine ganzahlige Eingabe zwischen 120 und 260.
            </p>
            <p>Wenn du deinen Maximalpuls nicht kennst, kannst du ihn mit folgender Formel schätzen:</p>
            <p>Maximalpuls = 220 - Alter</p>
          </div>
        </div>
        <div>
          <input type="radio" name="radioPulse" id="lac" value="lacPulse" v-model="pulseAll['pulseType']">
          <label for="lac">Untersuchung (empfohlen)</label>
          <div class="pulseBox" id="lacBox" v-if="pulseAll['pulseType'] === 'lacPulse'">
            <h3>Gib die Pulsbereiche deiner Laktatdiagnostik ein:</h3>
            <table class="table">
              <tr>
                <th class="typeColumn"></th>
                <th class="minColumn"><p>Minimum</p></th>
                <th class="maxColumn"><p>Maximum</p></th>
              </tr>
<!--              <tr v-for="entry in zoneValues" :key="entry.id">
                <th class="typeColumn"><p>{{ entry.name }}:</p></th>
                <td class="minColumn">
                  <button class="mathButton" @click="subtractLacPulse(entry.borders[0])">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder[entry.borders[0]]"
                           @input="lacFunction(entry.borders[0])"
                           :value="lacPulses[entry.borders[0]]"
                           @change="(e) => lacPulses[entry.borders[0]] = e.target.value">
                  </label>
                  <button class="mathButton" @click="addLacPulse(entry.borders[0])">+</button>
                </td>
                <td class="maxColumn">
                  <button class="mathButton" @click="subtractLacPulse(entry.borders[1])">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder[entry.borders[1]]"
                           @input="lacFunction(entry.borders[1])"
                           :value="lacPulses[entry.borders[1]]"
                           @change="(e) => lacPulses[entry.borders[1]] = e.target.value">
                  </label>
                  <button class="mathButton" @click="addLacPulse(entry.borders[1])">+</button>
                </td>
              </tr>-->
              <tr>
                <th class="typeColumn"><p>{{ zoneValues.zone1.name }}:</p></th>
                <td class="minColumn">
                  <button class="mathButton" @click="subtractLacPulse('minFat')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['minFat']"
                           @input="lacFunction('minFat')"
                           v-model="lacPulses['minFat']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('minFat')">+</button>
                </td>
                <td class="maxColumn">
                  <button class="mathButton" @click="subtractLacPulse('maxFat')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['maxFat']"
                           @input="lacFunction('maxFat')"
                           v-model="lacPulses['maxFat']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('maxFat')">+</button>
                </td>
              </tr>
              <tr>
                <th class="typeColumn"><p>{{ zoneValues.zone2.name }}:</p></th>
                <td class="minColumn">
                  <button class="mathButton" @click="subtractLacPulse('minGA1')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['minGA1']"
                           @input="lacFunction('minGA1')"
                           v-model="lacPulses['minGA1']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('minGA1')">+</button>
                </td>
                <td class="maxColumn">
                  <button class="mathButton" @click="subtractLacPulse('maxGA1')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['maxGA1']"
                           @input="lacFunction('maxGA1')"
                           v-model="lacPulses['maxGA1']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('maxGA1')">+</button>
                </td>
              </tr>
              <tr>
                <th class="typeColumn"><p>{{ zoneValues.zone3.name }}:</p></th>
                <td class="minColumn">
                  <button class="mathButton" @click="subtractLacPulse('minGA2')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['minGA2']"
                           @input="lacFunction('minGA2')"
                           v-model="lacPulses['minGA2']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('minGA2')">+</button>
                </td>
                <td class="maxColumn">
                  <button class="mathButton" @click="subtractLacPulse('maxGA2')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['maxGA2']"
                           @input="lacFunction('maxGA2')"
                           v-model="lacPulses['maxGA2']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('maxGA2')">+</button>
                </td>
              </tr>
              <tr>
                <th class="typeColumn"><p>{{ zoneValues.zone4.name }}:</p></th>
                <td class="minColumn">
                  <button class="mathButton" @click="subtractLacPulse('minEB1')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['minEB1']"
                           @input="lacFunction('minEB1')"
                           v-model="lacPulses['minEB1']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('minEB1')">+</button>
                </td>
                <td class="maxColumn">
                  <button class="mathButton" @click="subtractLacPulse('maxEB1')">-</button>
                  <label>
                    <input class="input pulseField"
                           type="number"
                           :placeholder="lacPulsePlaceholder['maxEB1']"
                           @input="lacFunction('maxEB1')"
                           v-model="lacPulses['maxEB1']">
                  </label>
                  <button class="mathButton" @click="addLacPulse('maxEB1')">+</button>
                </td>
              </tr>
            </table>

            <p class="requiredText" v-if="lacPulseBool===false">*Pflichteingabe</p>
            <p class="requiredText" v-if="lacRulesBool===false">*Falsche Eingabe. Intervalle überschneiden sich oder
              sind nicht korrekt.</p>
            <p class="requiredText" v-if="formatLacBool===false">
              Ungültige Eingabe. Tätige bitte nur ganzahlige Eingaben zwischen 50 und 240.
            </p>
          </div>
        </div>
        <p class="requiredText" v-if="radioBool===false">*Pflichteingabe</p>
      </div>
    </div>
    <button class="buttonSubmit" @click="leavePulse(true)">Weiter</button>
  </div>
</template>

<script>
export default {
  name: "Pulse",
  props: ["inputPulse", "inputZones", "doSubmit", "doBack"],
  data(){
    return {
      pulseAll: this.inputPulse,
      lacPulses: this.inputPulse['lacPulse'],
      zones: this.inputZones,
      radioBool: true,
      maxPulseBool: true,
      lacPulseBool: true,
      lacRulesBool: true,
      formatBool: true,
      borderNames: ["minFat", "maxFat", "minGA1", "maxGA1", "minGA2", "maxGA2", "minEB1", "maxEB1"],
      lacPulsePlaceholder: {
        minFat: 100,
        maxFat: 120,
        minGA1: 120,
        maxGA1: 140,
        minGA2: 140,
        maxGA2: 160,
        minEB1: 160,
        maxEB1: 180,
      },
      zoneValues: {
        zone1: {
          name: this.inputZones[0],
          borders: ["minFat", "maxFat"]
        },
        zone2: {
          name: this.inputZones[1],
          borders: ["minGA1", "maxGA1"]
        },
        zone3: {
          name: this.inputZones[2],
          borders: ["minGA2", "maxGA2"]
        },
        zone4: {
          name: this.inputZones[3],
          borders: ["minEB1", "maxEB1"]
        }
      },
      borderBoolean: {
        minFat: true,
        maxFat: true,
        minGA1: true,
        maxGA1: true,
        minGA2: true,
        maxGA2: true,
        minEB1: true,
        maxEB1: true
      },
      formatLacBool: true
    }
  },
  methods: {

    lacFunction(type) {
      this.lacRulesBool = true
      this.formatLacBool = true
      this.lacPulseBool = true
      this.pulseInputLac(type)
    },
    // Lac Pulse Functions
    // Subtracts the lac pulse by one
    subtractLacPulse(type) {
      this.lacRulesBool = true
      this.formatLacBool = true
      this.lacPulseBool=true
      if (this.lacPulses[type] === "") {
        this.lacPulses[type] = this.lacPulsePlaceholder[type] - 1
      } else {
        if (this.lacPulses[type] - 1 >= 50) {
          this.lacPulses[type] = this.lacPulses[type] - 1;
        }
      }
    },
    // Adds one to the lac pulse
    addLacPulse(type) {
      this.lacRulesBool = true
      this.formatLacBool = true
      this.lacPulseBool=true
      if (this.lacPulses[type] === "") {
        this.lacPulses[type] = this.lacPulsePlaceholder[type] + 1
      } else {
        if (parseInt(this.lacPulses[type]) + 1 <= 240) {
          this.lacPulses[type] = parseInt(this.lacPulses[type]) + 1;
        }
      }
    },
    // Cuts input to three digits for max pulse
    pulseInputLac(type) {
      if (this.lacPulses[type].length > 3) {
        this.lacPulses[type] = this.lacPulses[type].slice(0,3);
      }
    },
    // checks if the user input in lac pulse of type has the correct format and is in the right interval
    checkFormatLac(type) {
      let number_zero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      let number_else = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      for (let i = 0; i < this.lacPulses[type].length; i++) {
        if (i === 0) {
          if (number_zero.includes(this.lacPulses[type][i]) === false) {
            return false;
          }
        } else {
          if (number_else.includes(this.lacPulses[type][i]) === false){
            return false;
          }
        }
      }
      return !(50 > this.lacPulses[type] || this.lacPulses[type] > 240);
    },

    // Max Pulse Functions
    // Subtracts the max pulse by one
    subtractMaxPulse() {
      if (this.pulseAll['maxPulse'] === "") {
        this.pulseAll['maxPulse'] = 169
      } else if (this.pulseAll['maxPulse'] > 120) {
        this.pulseAll['maxPulse'] -= 1;
      }
    },
    // Adds one to the max pulse
    addMaxPulse() {
      if (this.pulseAll['maxPulse'] === "") {
        this.pulseAll['maxPulse'] = 171
      } else if (this.pulseAll['maxPulse'] < 260) {
        this.pulseAll['maxPulse'] = parseInt(this.pulseAll['maxPulse']) + 1;
      }
    },
    // Cuts input to three digits for max pulse
    pulseInputMax(type) {
      if (this.pulseAll[type].length > 3) {
        this.pulseAll[type] = this.pulseAll[type].slice(0,3);
      }
    },
    // checks if the user input in max pulse has the correct format and is in the right interval
    checkFormatMax() {
      let number_zero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      let number_else = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      for (let i = 0; i < this.pulseAll['maxPulse'].length; i++) {
        if (i === 0) {
          if (number_zero.includes(this.pulseAll['maxPulse'][i]) === false) {
            this.formatBool = false
            break
          }
        } else {
          if (number_else.includes(this.pulseAll['maxPulse'][i]) === false){
            this.formatBool = false
            break
          }
        }
      }
      (120 <= this.pulseAll['maxPulse'] && this.pulseAll['maxPulse'] <= 260) ? this.formatBool = true
          : this.formatBool = false
    },

    // Checks if users meets the leaving conditions. Then changes vue.
    leavePulse(next) {
      if (next) {
        // checks if user has selected one of the two input categories
        if (this.pulseAll.pulseType === null) {
          this.radioBool = false;
      } else {
          // triggered if user has chosen the max pulse input
          if (this.pulseAll.pulseType === 'maxPulse') {
            (this.pulseAll.maxPulse === "") ? (this.pulseAll.maxPulse = 170) : this.checkFormatMax();
            (this.formatBool) && (this.doSubmit());
          // triggered if user has chosen the lac pulse input
          } else if (this.pulseAll.pulseType === 'lacPulse') {
            for (let type of this.borderNames) {
              // Sets the placeholder value as actual value if there is no input. Else check if input is legal.
              this.formatLacBool = true
              if (this.pulseAll.lacPulse[type] === "") {
                this.pulseAll.lacPulse[type] = this.lacPulsePlaceholder[type]
              } else if (this.checkFormatLac(type) === false) {
                console.log("test")
                this.formatLacBool = false
                break
              }
            }
            if (this.formatLacBool) {
              // checks if the inputs are in a correct interval
              if (this.pulseAll.lacPulse.minFat < this.pulseAll.lacPulse.maxFat &&
                  this.pulseAll.lacPulse.maxFat <= this.pulseAll.lacPulse.minGA1 &&
                  this.pulseAll.lacPulse.minGA1 < this.pulseAll.lacPulse.maxGA1 &&
                  this.pulseAll.lacPulse.maxGA1 <= this.pulseAll.lacPulse.minGA2 &&
                  this.pulseAll.lacPulse.minGA2 < this.pulseAll.lacPulse.maxGA2 &&
                  this.pulseAll.lacPulse.maxGA2 <= this.pulseAll.lacPulse.minEB1 &&
                  this.pulseAll.lacPulse.minEB1 < this.pulseAll.lacPulse.maxEB1) {
                this.doSubmit()
              } else{
                this.lacRulesBool = false
              }
            }
          }
        }
      } else {
        this.doBack()
      }
    },
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

.mathButton{
  font-size: 20px;
  width: 30px;
  text-align: center;
}
.input{
  font-size: 20px;
}
.pulseBox{
  padding: 0 0 10px 0;
  border: 2px solid white;
}
#maxBox{
  margin-top: 10px;
  margin-bottom: 20px;
}
#lacBox{
  margin-top: 10px;
}
.pulseField{
  width: 40px;
  text-align: center;
}
.table{
  margin: 0 auto;
  width : 50%;
}
.typeColumn{
  text-align: right;
  width: 20%;
}
.minColumn{
  width: 30%;
}
.maxColumn{
  width: 30%;
}


/* Hide Arrows from Number input */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>