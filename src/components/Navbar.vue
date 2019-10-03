<template>
    <div class="navbar">
        <h1>
            <div id="curso">
                {{curso}}
            </div>
            <span id="titulo"><b>Horários</b> UFCG </span>
            <span id="icon-search"><i class="fas fa-search"></i></span>
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
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;

        background-color: #521782;
        color: #E8E8E8; 

        margin-top: 0px;
        margin-bottom: 0px;

        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    #curso {
        background-color: #421268;
        font-size: 20px;
        padding: 13px;
        justify-self: start;
        font-weight: lighter;
    }

    #icon-search{
        justify-self: end;
        font-size: 24px;
        margin-right:16px;
    }

    #titulo{
        font-weight: lighter;
    }

    @font-face {
        font-family: Montserrat;
        src: url('../assets/Montserrat-SemiBold.ttf');
    }


</style>

