<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal" ref="modal" @keyup.esc="close" tabindex="0">
      <header class="modal-header">
          <h4>DETALHES</h4>
          <span class="cross-icon" @click="close">&#10005;</span>
      </header>
      <hr>
      <section class="modal-body">
          <p>Disciplina: {{aula.disciplina}}</p>
          <p>Professor: {{aula.professor}}</p>
          <p>Tipo: {{aula.categoria}}</p>
          <p>Turma: {{aula.turma}}</p>
          <p>Sala: {{aula.sala}}</p>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['aula'],
    mounted: function () {
      this.$nextTick(function () {
        this.$refs.modal.focus();
      })
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding-bottom: 20px;
    font-family: 'Roboto-mono';
  }
  .modal-header {
    position: relative;
    padding-top: 15px;
    display: flex;
    color: #47525E;
    justify-content: center;
    font-size: 22px;
  }

  .modal-body {
    min-width: 240px;
    font-size: 18px;
    position: relative;
    padding: 10px 40px;
    color: #47525E;
    text-align: left;
  }

  hr{
    width: 90%;
    border-color: rgba(185, 185, 185, 0.349);
  }

  .modal-backdrop h4, p{
    font-weight: lighter;
    margin: 0;
  }

  .cross-icon{
    color: rgba(151, 148, 148, 0.74);
    position: absolute;
    cursor: pointer;
    top: 3px;
    right: 12px;
    font-size: 22px;
  }

    @font-face {
      font-family: Roboto-mono;
      src: url('../assets/RobotoMono-Regular.ttf');
    }

</style>