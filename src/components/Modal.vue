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
          <h4>Sigla</h4> <label>{{aula.disciplina}}</label>
          <h4>Sala</h4> <label>{{aula.sala}}</label>
          <h4>Turma</h4> <label>{{aula.turma}}</label>
          <h4>Professor</h4> <label>{{aula.professor}}</label>
          <h4>Categoria</h4> <label>{{aula.categoria}}</label>
        </slot>
       </section>

       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close">
              Fechar
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
    color: #FFFFFF;
    justify-content: center;
    font-size: 18px;
    background: #324b9a;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    font-size: 18px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-row-gap: 8px;
    grid-column-gap: 20px;
    position: relative;
    padding: 20px 50px;
    color: #445b89;
    text-align: left;
  }

  .modal-body h4{
    margin: 0;
    color: #293752;
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
    background: #324b9a;
    border: 1px solid #324b9a;
    border-radius: 2px;
    cursor: pointer;
  }
  .btn-green:hover{
    background-color: #324a9ae5;
  }


</style>