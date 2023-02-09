<template>
  <div class="typing">
    <div class="typing-effect">
      {{ text ? text : "Hello world" }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.typing {
  display: flex;
  /* align-items: center;
    justify-content: center; */
}

.typing-effect {
  width: 36ch;
  /* animation: typing 4s steps(30) 0s infinite alternate, */
  animation: typing 2s steps(32) 10s infinite, effect 0.5s step-end infinite;
  animation-delay: 3s;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3em;
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  /* 10% {
    border-color: black;
  }
  20% {
    border-color: transparent;
  }
  30% {
    border-color: black;
  }
  40% {
    border-color: transparent;
  } */
  50% {
    border-color: transparent;
  }

  /* 60% {
    border-color: black;
  }
  80% {
    border-color: transparent;
  } */
}
</style>
