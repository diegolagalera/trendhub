<template>
  <div class="light" :data-text="text? text :'Hello world'">
    {{text? text:'Hello world'}}
  </div>
</template>

<script>
export default {
 name: 'TextAnimation2',
 props:{ 
        text: {
            type: String,
            required: false
        }
    }
}
</script>

<style>
body{
    --var-color: rgb(0,238,255)
}

.light{
    font-size: 2.4rem;
    color: var(--var-color);
    position: relative;
    font-weight: bold;
}
@media only screen and (max-width: 768px) {
    .light{
        font-size: 1.8rem;
        color: var(--var-color);
        position: relative;
        font-weight: bold;
    }
}

.light::before{
    position: absolute;
    content: attr(data-text);
    text-shadow: 0px 0px 20px var(--var-color);
    filter:blur(10px) brightness(0.5);
    animation: flicker 5s linear infinite;
    animation-delay: 0s;
}

@keyframes flicker {
    0%{
        filter: blur(5px) brightness(0.1);
    }
    3%{
        filter: blur(5px) brightness(1.8);
    }
    6%{
        filter: blur(5px) brightness(0.5);
    }
    7%{
        filter: blur(5px) brightness(1);
    }
    8%{
        filter: blur(5px) brightness(0.5);
    }
    9%{
        filter: blur(5px) brightness(1.7);
    }
    10%{
        filter: blur(5px) brightness(0.1);
    }
    20%{
        filter: blur(5px) brightness(0.5);
    }
    50%{
        filter: blur(5px) brightness(1.7);
    }
    70%{
        filter: blur(5px) brightness(0.5);
    }
    72%{
        filter: blur(5px) brightness(1);
    }
    99%{
        filter: blur(5px) brightness(0.5);
    }
    100%{
        filter: blur(5px) brightness(1);
    }
}
</style>