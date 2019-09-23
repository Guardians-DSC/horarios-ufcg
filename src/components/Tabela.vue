<template>
    <div>
       <horario hora='08'></horario>
        <horario hora='10'></horario>
        <horario hora='14'></horario>
        <horario hora='16'></horario>
    </div>
</template>

<script>
import horario from './Horario.vue';
export default {
  name: "tabela",
  components: {
    horario
  }
}
</script>

<style>

div.horario:nth-child(even) {
        background: white;
    }
div.horario:nth-child(odd) {
        background: #EEEEEE; 
    }

</style>
