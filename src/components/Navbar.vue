<template>
    <div>
        <h1>
            <span id="curso">{{curso}}</span>
            <span id="titulo"> Horários UFCG </span>
            <span id="icon-search"><img src="@/assets/magnifying-glass.png" alt=""></span>
        </h1>
    </div>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            curso: "Ciência da Computação"
        }
    }
}
</script>

<style>
    template{
        margin: 0px;
        padding: 0px;  
    }
    div{
        -webkit-box-shadow: 1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        -moz-box-shadow:    1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        box-shadow:         1px 3px 6px 0px rgba(56, 50, 50, 0.42); 
    }
    h1 {
        display: grid;
        grid-template-columns: 1fr 4fr min-content;

        background-color: #AD3DB3;
        color: #E8E8E8; 

        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }

    #curso {
        background-color: #8A308E;
        font-size: 25px;
        padding-top: 5px;
    }

    #icon-search{
        align-content: center;
        padding: 2%;
        margin-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
    }

</style>

