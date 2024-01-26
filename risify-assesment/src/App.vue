<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue';
</script>

<template>
  <div class="container">
    <div class="button-wrapper">
      <ButtonComponent size="large" tag="a" href="https://github.com/Dudziej/Risify" target="_blank" variant="filled">
        Link do repo </ButtonComponent>
      <ButtonComponent variant="filled" color="green"> Text </ButtonComponent>
      <ButtonComponent size="small" variant="filled" color="dgreen"> Text </ButtonComponent>
    </div>
    <div class="button-wrapper">
      <ButtonComponent size="large" variant="filled" tag="router-link" to="/Home" color="red"> router-link
      </ButtonComponent>
      <ButtonComponent variant="filled" color="yellow"> Text </ButtonComponent>
      <ButtonComponent size="small" variant="filled"> Text </ButtonComponent>
    </div>
    <div class="button-wrapper">
      <ButtonComponent size="large" variant="outlined"> Text </ButtonComponent>
      <ButtonComponent variant="filled"> Text </ButtonComponent>
      <ButtonComponent size="small" variant="filled" color="green"> Text </ButtonComponent>
    </div>
    <div class="button-wrapper">
      <ButtonComponent size="large" variant="outlined" block> Text </ButtonComponent>
      <ButtonComponent size="small" variant="outlined" block disabled> Text </ButtonComponent>
    </div>
    <div class="button-wrapper">
      <ButtonComponent variant="filled" tag="a"
        href="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover_1_1/83/pokoj-mlodziezowy-dla-chlopca.jpeg"
        color="yellow" block>Wejdź do pokoju</ButtonComponent>
    </div>
  </div>

</template>

<style scoped>
.container {
  margin: 20px;
}

.small-container {
  max-width: 50px;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}</style>