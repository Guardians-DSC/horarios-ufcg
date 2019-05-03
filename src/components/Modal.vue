<template>
  <div class="modal-backdrop">
    <div class="modal">

      <header class="modal-header">
        <slot name="header">
          Detalhes da disciplina
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
          Nome: {{aula.disciplina}}
          <br> Sala: {{aula.sala}}
          <br> Turma: {{aula.turma}}
          <br> Professor: {{aula.professor}}
          <br>Categoria: {{aula.categoria}}
        </slot>
       </section>

       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close">
              Fechar!
          </button>
        </slot>
      </footer>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['aula'],
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
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: rgb(35, 78, 70);
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    color: #4AAE9B;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>