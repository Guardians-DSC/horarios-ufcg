<script>
export default {
  name: 'details',
  props: ['aula'],
  mounted (){
    let detailsAlert = ('Disciplina: '+ this.aula.disciplina+ '\nTurma: '+ this.aula.turma
                        + '\nCategoria: '+ this.aula.categoria + '\nProfessor: ' + this.aula.professor
                        + '\nSala: '+ this.aula.sala + '\n')
    alert(detailsAlert)
  }

}
</script>

<style>

</style>
