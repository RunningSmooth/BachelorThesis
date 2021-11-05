<template style="padding-top: 50px">
  <div class="container">
    <p>{{ planData }}</p>
    <button @click="testFunc()">test</button>


    <br>
    <br>
    <br>

    <button @click="testFunc()">Test</button>


  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import 'jspdf-autotable';


export default {
  name: "Home",
  data() {
    return {
      message: "",
      number: "1",
      min_length: 15,
      mid_num: 25,
      max_num: 35,
      min_num: 0,
      test_bool: false,
      planData: "",
    }
  },
  components: {
  },


  methods:{
    getPlan: async function(){
      let response = await fetch("http://localhost:3000/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: this.inputData,
      });
      response = await response.json();
      this.showStepper += 1;
      this.planData = response["planData"]
      console.log(response)
    },

    testFunc(){
      const doc = new jsPDF()
      doc.setProperties({
        title: 'Trainingsplan',
        subject: 'This is the subject',
        author: 'author',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'author'
      });
      this.planData.forEach(function(table, i ){
        doc.text("WeekNum: " + table.weekNum + "Date: " + table.date, 20, 10 + (i * 10));
      });
      doc.save("Trainingsplan.pdf");
    }
  },
/*  beforeRouteLeave (to, from , next) {
    const answer = window.confirm('Beim Verlassen dieser Seite geht der Trainingsplan verloren. Stelle sicher das du ihn runtergeladen hast!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },*/
  created() {
    this.getPlan()
    console.log("Create: ", this.requestData)
  }
}

</script>

<style scoped>
.slider{
  width: 500px
}
input[type='range']::-webkit-slider-runnable-track{
  background: white;
  border: 1px solid black;
}
.container{
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background: white;
  width:80%;
}
#minBox{
  border: 2px solid black;
}
</style>