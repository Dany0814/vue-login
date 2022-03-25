<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/guaranito-dark.png" width="402" height="66" />
  <div class="wrapper">
      <HelloWorld msg="Agricultura de Precisión" />
   </div>
  </header>
  <div cclass="card-container">
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1580px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.test {
    width: 300px;
    height: 400px;

}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
