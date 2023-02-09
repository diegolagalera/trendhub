<template>
  <div class="card1 rounded-2xl h-40 p-10">
    <h2>card 1</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  fugit qui distinctio?</p>
  </div>
</template>

<script>
export default {
    name: 'cardCustom1'
}
</script>

<style>

.card1{
    background: linear-gradient(
        135deg,
        rgba(255,255,255,0,1)
        rgba(255,255,255,0,1)
    );
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgb(0, 0,0, 0.36);
    border: 1px solid rgba(255,255,255,0.5);
    /* border-radius: 16px; */
    /* padding: 45px; */
    /* width: 400px; */
}

.card1 :where(h2, p){
    text-align: center;
    margin: 0;
}


</style>