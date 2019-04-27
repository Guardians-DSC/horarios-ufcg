<template>
  <span class="aula">{{aula.nome}}-{{aula.turma}}</span>
</template>

<script>
export default {
  name: 'aula',
  props: ['aula']
}
</script>

<style>
  .aula {
    padding: 5px 10px;
    background: greenyellow;
    border-radius: 10px;
    margin-right: 4px;
    margin-bottom: 6px;
    /* flex-grow: 1; */
  }
</style>
