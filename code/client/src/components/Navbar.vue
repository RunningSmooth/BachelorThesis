<template>
  <div>
    <div class="buttonBox Icon" @click="changeBool()"><i class="fas fa-bars"></i></div>
    <div class="buttonBox Link" @click="$router.push({name: 'Home'})">Home</div>
    <div class="buttonBox Link" @click="$router.push({name: 'Creation'})">Trainingsplan erstellen</div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["changeBool"]
}
</script>

<style scoped>
@media screen and (max-width: 799px) {
  .buttonBox {
    min-width: 100px;
    font-size: 20px;
    background: white;
    text-align: center;
    font-weight: bold;
    float: left;
    height: 50px;
    width: calc(100% / 7);
    vertical-align: middle;
    line-height: 50px;
  }
  .Link {
    display: none !important;
  }
}
@media screen and (min-width: 800px) {
  .buttonBox {
    font-weight: bold;
    font-size: 20px;
    float: left;
    height: 50px;
    width: calc(100% / 7);
    min-width: 240px;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
  }
  .Icon {
    display: none !important;
  }
}
.buttonBox:hover{
  background: #dedede;
}

</style>