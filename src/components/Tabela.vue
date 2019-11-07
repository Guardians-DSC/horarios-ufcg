<template>
    <div class="table">
        <div class="header-dias">
            <span id="seg">SEG</span>
            <span id="ter">TER</span>
            <span id="qua">QUA</span>
            <span id="qui">QUI</span>
            <span id="sex" style='border-right: 0px;'>SEX</span>
        </div>
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

.table {
    display: inline-block;
    min-width: 900px;
}

@media screen and (min-width: 900px) {
      .table {
        width: 100%;
      }
  }

.horario {
    width: 100%;
}

div.horario:nth-child(even) {
    background: #EEEEEE;
}
div.horario:nth-child(odd) {
    background: white; 
}

.header-dias {
    display: grid;
    grid-template-columns: 65px 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;

    text-align: center;
    color: #626161;
}

.header-dias span {
    padding: 10px;
    border-right: 2px solid #D9D9D9;
}

#seg {
    grid-column: 2/3;
}

</style>
