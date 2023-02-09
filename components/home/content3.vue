<template>
  <!-- <div class="relative bg-red.400 w-full"> -->
  <div class="container flex-auto mx-auto lg:mb-36">
    <div class="text-center text-4xl font-serif">nuestras soluciones</div>
  </div>
  <div class="relative pt-0 rounded-xl">
    <div
      class="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 text-black px-4 mt-8 md:text-gray-300 md:p-8 md:pt-8 lg:p-10 lg:pt-10 xl:p-20 xl:pt-4 gap-x-6 gap-y-4 customdivcontent3"
    >
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
    <video
      class="hidden md:flex absolute top-0 xl:-mt-20 lg:mt-0 w-full -z-50"
      autoplay
      loop
      muted
    >
      <source src="/img/walk.mp4" type="video/mp4" />
    </video>

    <!-- <video width="320" height="240" autoplay>
      <source src="/img/estronauta.mp4" type="video/mp4" />
    </video> -->
  </div>
</template>

<script setup></script>
<style>
@media (min-width: 769px) {
  .customdivcontent3 {
    box-shadow: rgb(38, 57, 77) 0px 32px 30px 5px;
  }
}

/* 
.video-bg {
  width: 100%;
  height: 100vh;
  pointer-events: none;
}
.video-bg video {

  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
