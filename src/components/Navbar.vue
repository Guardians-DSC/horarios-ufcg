<template>
    <div class="navbar">
        <h1>
            <div id="curso">
                {{curso}}
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
    }
    h1 {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;

        background-color: #521782;
        color: #E8E8E8; 

        margin-top: 0px;
        margin-bottom: 0px;

        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }

    #curso {
        background-color: #421268;
        font-size: 20px;
        padding: 13px;
        justify-self: start;
        margin-bottom: 0px;
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

