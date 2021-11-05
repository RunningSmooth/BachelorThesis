<template>
  <div>
    <h1>Hilfe</h1>
    <div class="helpBox" @click="$router.push({name: 'FAQ'})">
      <h2>FAQ</h2>
      <p>Häufig gestellte Fragen und allgemeine Informationen über unsere Trainingspläne.</p>
    </div>
    <div class="helpBox" @click="$router.push({name: 'Contact'})">
      <h2>Kontakt</h2>
      <p>Für spezifische Fragen können sie uns per Mail oder auf unseren sozialen Kanälen kontaktieren.</p>
    </div>
    <div class="helpBox" @click="$router.push({name: 'Creation'})">
      <h2>Planerstellung</h2>
      <p>Erstelle hier deinen eigenen Trainingsplan und starte durch.</p>
    </div>


  </div>
</template>

<script>
export default {
name: "Help"
}
</script>

<style scoped>
.helpBox{
  background: black;

  border-radius: 20px;
  border: 2px solid white;
  margin-bottom: 30px;
}
.helpBox:hover{
  background: #565656;
}
p{
  font-size: 20px;
}
</style>