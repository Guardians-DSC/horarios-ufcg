<template>
  <div>
    <h1>Horarios</h1>
    <div class='dias'>
      <Dia dia='Segunda' :aulas='aulas'/>
      <Dia dia='Terça' :aulas='aulas'/>
      <Dia dia='Quarta' :aulas='aulas'/>
      <Dia dia='Quinta' :aulas='aulas'/>
      <Dia dia='Sexta' :aulas='aulas'/>
    </div>
  </div>
</template>

<script>
import Dia from '@/components/Dia.vue';
export default {
  name: 'tabela',
  components: {
    Dia
  },
  data() {
    return {
      aulas: {
        aulas8: [
          { nome: 'OAC', turma: 't1'},
          { nome: 'LOAC', turma: 't2'},
          { nome: 'TC', turma: 't4'},
          { nome: 'P1', turma: 't1'},
        ],
        aulas10: [
          { nome: 'PSOFT', turma: 't3'},
          { nome: 'P2', turma: 't2'},
        ]
      }
    }
  }
}
</script>

<style>
  div.dias {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
  }
</style>
