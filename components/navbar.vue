<template>
  <div class="fixed top-0 w-full z-40">
    <nav
      class="navv flex h-20 items-center py-8 justify-between shadow-2xl bg-black md:px-0"
      aria-label="Global"
    >
      <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
        <!-- <img src="img/logo.jpeg" class="h-[5rem] mx-4"/> -->
        <a href="#" class="-m-1.5 p-1.5">
          <TextAnimation2
            class="flex justify-center mx-10"
            :text="'TRENDS HUB'"
          ></TextAnimation2>
        </a>
      </div>
      <!-- menu vericon pc -->
      <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="flex font-semibold text-white hover:text-gray-900"
        >
          <Icon class="mr-2" :name="item.icon"></Icon>
          {{ item.name }}
        </a>
      </div>
      <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Dark
        </button>
      </div>
      <!-- Boton menu Mobile -->
      <div class="flex lg:hidden text-white">
        <NavbarMobile></NavbarMobile>
      </div>
    </nav>
  </div>
</template>

<script setup>
const store = CerberusStore();
const navigation = [
  { name: "Inicio", href: "#home1", icon: "mdi:home" },
  { name: "Servicios", href: "#home2", icon: "fluent:people-team-28-filled" },
  {
    name: "Noticias",
    href: "#home3",
    icon: "ic:baseline-notifications-active",
  },
];
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
