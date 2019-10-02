<template>
    <div class="navbar">
        <h1>
            <div id="curso">
                <span>{{curso}}</span>
            </div>
            <span id="titulo"><b>Horários</b> UFCG </span>
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

    .navbar{
        -webkit-box-shadow: 1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        -moz-box-shadow:    1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        box-shadow:         1px 3px 6px 0px rgba(56, 50, 50, 0.42); 
        position: fixed;
        top: 0;
        width: 100%;
    }
    h1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;

        background-color: #AD3DB3;
        color: #E8E8E8; 

        margin-top: 0px;
        margin-bottom: 0px;

        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }

    #curso {
        background-color: #8A308E;
        font-size: 20px;
        padding: 8px;
        justify-self: start;
    }

    #icon-search{
        justify-self: end;
        align-content: center;
        margin-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
    }

    #titulo{
        font-weight: lighter;
    }

</style>

