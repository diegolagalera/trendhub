<template>
  <div>
    <Navbar></Navbar>
  </div>
  <!-- <div class="flex mt-20"> -->
  <NuxtPage></NuxtPage>
  <!-- </div> -->
  <a
    href="https://api.whatsapp.com/send?phone=34644404697&text=Carla la guarrilla"
    target="_blank"
    class="fixed bottom-5 right-5"
  >
    <icon name="logos:whatsapp-icon" class="text-4xl"> </icon>
  </a>
</template>
<script></script>
<style>
:root #social-button {
  --vsc-bg-header: orange;
  --vsc-bg-footer: #fafafa;
  --vsc-text-color-header: yellow;
  --vsc-text-color-footer: green;
  --vsc-bg-button: pink;
  --vsc-text-color-button: purple;
  --vsc-outline-color: #333;
  --vsc-border-color-bottom-header: teal;
  --vsc-border-color-top-footer: #f3f3f3;
}
</style>
