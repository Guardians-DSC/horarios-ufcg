<template>
  <span class="aula">{{aula.disciplina}}-{{aula.turma}}</span>
</template>

<script>
export default {
  name: 'aula',
  props: ['aula']
}
</script>

<style>
  .aula {
    padding: 3px 7px;
    background: greenyellow;
    border-radius: 10px;
    margin-right: 4px;
    margin-bottom: 6px;
    flex-grow: 1; 
  }
</style>
