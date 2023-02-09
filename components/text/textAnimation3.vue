<template>
        <div class="word-waves">
            <span>HelloWorld</span>
            <span>HelloWorld</span>
        </div>
</template>

<script>
export default {
    name: 'textAnimation3'
}
</script>

<style>
.jejee{
    display: flex;
    position: relative;
    background: yellow;
}
.word-waves span{
    display: flex;
 /* background: red; */
 position: absolute;
 color: aliceblue;
 font-size: 3rem;
 transform: translate(0%, -50%);
}
.word-waves span:nth-child(1){
    color: transparent;
    -webkit-text-stroke: 0.3px #3bd9d9;
}
.word-waves span:nth-child(2){
 color: rgb(128,198,255);
 /* -webkit-text-stroke: 1px #3bd9d9; */
 animation: animationText 3s ease-in-out infinite;
}

@keyframes animationText {
    0%,100%{
        clip-path: polygon(0% 45%,15% 44%,32% 50%,54% 60%,70% 61%,84% 59%,100% 52%, 100% 100%, 0% 100%);
    }
    50%{
        clip-path: polygon(0% 60%, 16% 65%,34% 66%,51% 62%,67% 50%,84% 45%,100% 46%, 100% 100%, 0% 100%);
    }
}

</style>