<template>
  <div>
    <h1>Kontakt</h1>
    <p>Bei Fragen über Trainingspläne oder geschäftlichen Anfragen dürfen Sie uns gerne kontaktieren.</p>
    <table style="width: 100%; height: auto">
      <tr>
        <th style="width: 45%; text-align: right">
          <p>Email:</p>
        </th>
        <th style="width: 55%; text-align: left">
          <p>kontakt@trainingsplan.de</p>
        </th>
      </tr>
    </table>
    <h2>Social Media</h2>
    <p>Wir sind auch unter folgenden Kanälen erreichbar:</p>
    <div>
      <table id="table">
        <tr>
          <th class="tableCell">
            <div id="facebook" class="icon" onclick="location.href='https://facebook.com'"><i class="fab fa-facebook-square"></i></div>
          </th>
          <th class="tableCell">
            <div id="instagram" class="icon" onclick="location.href='https://instagram.com'"><i class="fab fa-instagram-square"></i></div>
          </th>
          <th class="tableCell">
            <div id="twitter" class="icon" onclick="location.href='https://twitter.com'"><i class="fab fa-twitter-square"></i></div>
          </th>
          <th class="tableCell">
            <div id="youtube" class="icon" onclick="location.href='https://youtube.com'"><i class="fab fa-youtube-square"></i></div>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>
@media screen and (max-width: 599px) {
  .icon{
    font-size: 40px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 10px;
    border: 1px solid white;
  }
}
@media screen and (max-width: 799px) and (min-width: 600px) {
 .icon{
   font-size: 70px;
   padding-left: 5px;
   padding-right: 5px;
   border-radius: 10px;
   border: 1px solid white;
 }
}
@media screen and (min-width: 800px) {
  .icon{
    width: 90px;
    font-size: 100px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    border: 1px solid white;
    margin: auto;
  }
}
.icon:hover{
  background: #565656;
}
#table{
  margin: auto;
  width: 50%;
}
.tableCell{
  padding-left: 15px;
  padding-right: 15px;
}
#facebook{
  background: #3b5998;
}
#twitter{
  background: #08a0e9;
}
#instagram{
 background: #dd2a7b;
}
#youtube{
 background: #ff0000;
}
p{
  font-size: 20px;
}
</style>