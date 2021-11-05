<template>
  <div style="padding-bottom: 30px">
    <h1>Dein Trainingsplan</h1>
    <h2 class="textArea">{{ planHead.discipline }} || {{ planHead.goal }} || {{ planHead.endDate }} || {{ planHead.weeks }} Wochen</h2>
    <button class="buttonDownload" @click="downloadPlan()">Download</button>
    <div id="tableBox" v-for="week of plan" :key="week.id">
      <h2>{{ week.weekNum }}. Woche ({{ week.date }})</h2>
      <table :id="'table' + week.weekNum"  class="table">
        <tr id="headRow">
          <th></th><th>Übungsart</th><th>Strecke [Km]</th><th>Pulsbereiche</th>
        </tr>
            <tr class="tableRow" v-for="dayInfo in week.days" :key="dayInfo.id" @click="openDay(dayInfo)">
              <th id="dayCell" >{{ dayInfo.day }}</th>
              <td class="unitCell" v-if="dayInfo.info !== 'null' && dayInfo.extraInfo !== 'null'" >
                {{ dayInfo.unit }}<br>{{ dayInfo.info }} {{dayInfo.extraInfo}}
              </td>
              <td class="unitCell" v-else-if="dayInfo.info !== 'null' && dayInfo.extraInfo === 'null'">
                {{ dayInfo.unit }}<br>{{ dayInfo.info }}
              </td>
              <td class="unitCell" v-else>
                {{ dayInfo.unit }}
              </td>
              <td class="distanceCell" v-if="dayInfo.distance !== 'null'">{{ dayInfo.distance }}</td>
              <td class="distanceCell" v-else></td>

              <td class="pulseCell" v-if="dayInfo.pulse !== 'null'">{{ returnPulseString(dayInfo.pulse)}}</td>
              <td class="pulseCell" v-else></td>
            </tr>
      </table>
    </div>
    <div id="pulseBox">
      <h3>Deine Pulszonen</h3>
      <table id="pulseTable">
        <tr id="pulseHeadRow">
          <th></th><th>Untere Grenze</th><th>Obere Grenze</th>
        </tr>
        <tr class="pulseTableRow" v-for="entry in pulseData" :key="entry.name">
          <td>{{entry.name}}</td><td>{{entry.min}}</td><td>{{entry.max}}</td>

        </tr>
      </table>
    </div>
    <button class="buttonDownload" @click="downloadPlan()">Download</button>
    <p>Nicht zufrieden? Erstelle hier direkt einen neuen Plan:</p>
    <button id="creationButton" @click="$router.push({name: 'Creation'})">Trainingsplan erstellen</button><br>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import 'jspdf-autotable'

export default {
  name: "Overview",
  props: ["inputPlanInfo", "inputDay", "changeView"],
  data() {
    return {
      plan: this.inputPlanInfo[0].plan,
      planHead: this.inputPlanInfo[0].header,
      day: this.inputDay,
      unitData: this.inputPlanInfo[1],
      pulseData: this.inputPlanInfo[2]
    }
  },
  methods: {
    // Sets day information for day-vue. Then Calls function to switch to day-vue.
    openDay(info){
      this.day.dayNo = info.dayNo;
      this.day.day = info.day;
      this.day.date = info.date;
      this.day.unit = info.unit;
      this.day.info = info.info;
      this.day.extraInfo = info.extraInfo
      this.day.distance = info.distance;
      this.day.duration = info.duration;
      this.day.pulse = this.returnPulseString(info.pulse);
      this.day.description = []
      for(let i = 0; i < this.unitData.length; i++) {
        if (info.unit === this.unitData[i].text) {
          this.day.description.push(this.unitData[i].info)
        }
        if (info.info === this.unitData[i].text){
          this.day.description.push(this.unitData[i].info)
        }
      }
      this.changeView(false)
    },
    //
    returnPulseString(stringArray) {
      if (stringArray === "null") return "null"
      let string = ""
      for (let i in stringArray) {
        string = string + stringArray[i]
        if (i < stringArray.length - 1) {
          string += " | "
        }
      }
      return string
    },
    // Checks if string is 'null'. If yes then it returns an empty string. Else it returns the original string.
    returnEmpty(string) {
      return string = ((string === 'null') ? "" : string)
    },
    // Checks if the unit has some extra information. If not it just returns the name. Else the name with information
    returnUnit(name, info, extraInfo) {
      return ((info ==='null') ? name : name+"\n"+info+" "+this.returnEmpty(extraInfo))
    },

    downloadPlan() {
      const doc = new jsPDF()
      doc.setProperties({
        title: 'Trainingsplan',
        subject: 'This is the subject',
        author: 'author',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'author'
      });
      doc.autoTable({
        columns: [ { header: this.planHead.discipline, dataKey: 'head' } ],
        headStyles: { fillColor: [255, 255, 255], halign: 'center', textColor: [0, 0, 0], fontSize: 25 },
      })
      doc.autoTable({
        columns: [
          { header: this.planHead.goal, dataKey: 'goal' },
          { header: this.planHead.endDate, dataKey: 'endDate' },
          { header: this.planHead.weeks+" Wochen", dataKey: 'weeks' },
        ],
        headStyles: { fillColor: [255, 255, 255], halign: 'center', textColor: [0, 0, 0], fontSize: 15 },
      })
      for (let entry of this.plan) {
        doc.autoTable({
          columns: [ { header: entry.weekNum+'.Woche', dataKey: 'head' } ],
          headStyles: { fillColor: [255, 255, 255], halign: 'center', textColor: [0, 0, 0], fontSize: 20 }
        })
        doc.autoTable({
          columns: [
            { header: '', dataKey: 'day' },
            { header: 'Übung', dataKey: 'unit' },
            { header: 'Strecke [Km]', dataKey: 'dist' },
            { header: 'Puls', dataKey: 'pulse' },
          ],
          body: [
            {
              day: entry.days[0].day+"\n"+entry.days[0].date,
              unit: this.returnUnit(entry.days[0].unit, entry.days[0].info, entry.days[0].extraInfo),
              dist: this.returnEmpty(entry.days[0].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[0].pulse))
            }, {
              day: entry.days[1].day+"\n"+entry.days[1].date,
              unit: this.returnUnit(entry.days[1].unit, entry.days[1].info, entry.days[1].extraInfo),
              dist: this.returnEmpty(entry.days[1].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[1].pulse))
            }, {
              day: entry.days[2].day+"\n"+entry.days[2].date,
              unit: this.returnUnit(entry.days[2].unit, entry.days[2].info, entry.days[2].extraInfo),
              dist: this.returnEmpty(entry.days[2].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[2].pulse))
            }, {
              day: entry.days[3].day+"\n"+entry.days[3].date,
              unit: this.returnUnit(entry.days[3].unit, entry.days[3].info, entry.days[3].extraInfo),
              dist: this.returnEmpty(entry.days[3].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[3].pulse))
            },
            {
              day: entry.days[4].day+"\n"+entry.days[4].date,
              unit: this.returnUnit(entry.days[4].unit, entry.days[4].info, entry.days[4].extraInfo),
              dist: this.returnEmpty(entry.days[4].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[4].pulse))
            },
            {
              day: entry.days[5].day+"\n"+entry.days[5].date,
              unit: this.returnUnit(entry.days[5].unit, entry.days[5].info, entry.days[5].extraInfo),
              dist: this.returnEmpty(entry.days[5].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[5].pulse))
            },
            {
              day: entry.days[6].day+"\n"+entry.days[6].date,
              unit: this.returnUnit(entry.days[6].unit, entry.days[6].info, entry.days[6].extraInfo),
              dist: this.returnEmpty(entry.days[6].distance),
              pulse: this.returnEmpty(this.returnPulseString(entry.days[6].pulse))
            },
          ],
          pageBreak:'avoid'
        })
      }
      let bodyData = []
      for(let i = 0; i < this.unitData.length; i++)
      {
        let rowData = [];
        rowData.push(this.unitData[i].name+": ");
        rowData.push(this.unitData[i].info);
        bodyData.push(rowData);
      }
      doc.autoTable({
        columns: [ { header: 'Übungs-Glossar', dataKey: 'head' } ],
        headStyles: { fillColor: [255, 255, 255], halign: 'center', textColor: [0, 0, 0], fontSize: 20 },
      })
      doc.autoTable({
        body: bodyData,
        bodyStyles: { fillColor: [255, 255, 255], halign: 'left', fontSize: 12 }
      })
      bodyData = []
      for(let i = 0; i < this.pulseData.length; i++)
      {
        let rowData = [];
        rowData.push(this.pulseData[i].name+": ");
        rowData.push(this.pulseData[i].min);
        rowData.push(this.pulseData[i].max);
        bodyData.push(rowData);
      }
      doc.autoTable({
        columns: [ { header: 'Deine Pulszonen', dataKey: 'head' } ],
        headStyles: { fillColor: [255, 255, 255], halign: 'center', textColor: [0, 0, 0], fontSize: 20 },
      })
      doc.autoTable({
        columns: [
          { header: '', dataKey: 'name' },
          { header: 'Untere Grenze', dataKey: 'min' },
          { header: 'Obere Grenze', dataKey: 'max' },
        ],
        body: bodyData,
        bodyStyles: { fillColor: [255, 255, 255], halign: 'left', fontSize: 12 }
      })
      doc.save("Trainingsplan.pdf");
    }

  },
}
</script>

<style scoped>
#pulseTable{
  font-size: 18px;
  background: #2c3e50;
  margin: 0 auto;
  width : 60%;
  border: 2px solid white;
  border-collapse:collapse;
}

#pulseBox{
  padding-bottom: 20px;
  padding-top: 5px;
}
.pulseTableRow{
  height: 30px;
  background: crimson;
  padding: 10px;
  border-bottom: 1px solid white;
}
#pulseHeadRow{
  border-bottom: 2px solid white;
  height: 40px;
}
@media screen and (max-width: 799px) {
  #tableBox{
    font-size: 13px;
  }
  .textArea{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
  }
}
@media screen and (min-width: 800px) {
  #tableBox{
    font-size: 18px;
  }
  .textArea {
    padding-left: 0;
    padding-right: 0;
  }
}
.buttonDownload{
  background: white;
  border: black;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px
}
.buttonDownload:hover{
  background: #dedede;
}
#tableBox{
  height: auto;
  align-items: center;
  padding-bottom: 10px;
}
.table{
  background: #2c3e50;
  margin: 0 auto;
  width : 90%;
  border: 2px solid white;
  border-collapse:collapse;
}
#headRow{
  border-bottom: 2px solid white;
  height: 40px;
}
.tableRow{
  background: crimson;
  padding: 10px;
  border-bottom: 1px solid white;
}
.tableRow:hover{
  background: #990000;
}
#dayCell {
  width: 15%;
  height: 30px;
}
.distanceCell{
  height: 30px;
}
.pulseCell{
  width: 30%;
  height: 30px;
}
.unitCell{
  height: 30px;
}
#creationButton {
  background: white;
  font-size: 20px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  border: black;
}
#creationButton:hover{
  background: #dedede;
}
</style>