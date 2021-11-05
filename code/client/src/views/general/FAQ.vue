<template>
  <div id="faqBox">
    <h1>FAQ - Häufige Fragen</h1>
    <div v-for="entry in faq" :key="entry.id">
      <p class="Question textArea">{{ entry["question"] }}</p>
      <p class="Answer textArea">{{ entry["answer"] }}</p>
      <hr>
    </div>
    <p class="text">Deine Frage ist nicht dabei? <a class="textLink" @click="$router.push({name: 'Contact'})">Hier</a> kannst du uns kontaktieren und deine Frage stellen.</p>
  </div>

</template>

<script>
import faq_json from "../../jsons/faq.json"

export default {
  name: "FAQ",
  data () {
    return {
      reply: {},
      faq: faq_json,
    }
  },
  methods:{
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
.Question{
  text-align: left;
  font-size: 23px;
}
.Answer{
  text-align: left;
  margin-left: 25px;
  font-size: 18px;
}
#faqBox{

}
.text{
  font-size: 20px;
}
.textLink{
  color: blue;
}
.textLink:hover{
  color: #08a0e9;
}
</style>