<template>
  <div>
    <p>
      Die Trainingspläne sind computergeneriert und stellen eine Empfehlung dar. Sie richten sich an gesunde, erwachsene
      Menschen. Die Nutzung erfolgt auf eigenes Risiko.
    </p>
    <p>
      Die Plangenerierung erfolgt mit den Eingaben des Nutzers. Dieser Plan ist dementsprechend nur für diesen Nutzer
      geeignet. Anpassungen an Leistungsfähigkeit, Gesundheitszustand, Kondition und Alter sind durch den Nutzer selbst
      vorzunehmen.
    </p>
    <p>
      Bevor man das Training mit den zur Verfügung gestellten Trainingsplänen startet, wird eine ärztliche Untersuchung
      empfohlen. Das Training ist bei Problemen, wie Schmerzen, zu hohe Pulswerte oder Unwohlsein sofort abzubrechen.
    </p>
    <button @click="changeView()">Zurück</button>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ["changeView"],
}
</script>

<style scoped>
@media screen and (max-width: 799px) {
  p{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 800px) {
  p {
    padding-left: 0;
    padding-right: 0;
  }
}
p{
  font-size: 20px;
}
button{
  background: white;
  border: black;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px
}
button:hover{
  background: #dedede;
}
</style>