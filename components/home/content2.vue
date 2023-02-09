<template>
  <div class="container flex-auto mx-auto pt-8">
    <div
      class="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-4 justify-center md:mt-14 mx-6 md:mx-8"
    >
      <div>
        <div class="text-center md:text-4xl text-xl font-serif font-bold">
          ¿Qué hace una agencia de marketing digital?
        </div>
        <div id="accordion-collapse" data-accordion="collapse">
          <div v-for="(item, index) in content" :key="index">
            <h2 :id="'accordion-collapse-heading-' + index">
              <button
                type="button"
                class="flex items-center justify-between w-full p-4 my-4 font-medium text-left text-gray-500 focus:bg-gray-300 bg-white rounded-2xl border-2 border-gray-400 btncustom"
                :data-accordion-target="'#accordion-collapse-body-' + index"
                aria-expanded="false"
                :aria-controls="'accordion-collapse-body-' + index"
              >
                <span>{{ item.title }}</span>
                <svg
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              :id="'accordion-collapse-body-' + index"
              class="hidden border-t-1 border-b-1 shadow-2xl rounded-2xl border-black p-2"
              :aria-labelledby="'accordion-collapse-heading-' + index"
            >
              <div
                class="p-5 font-light border-gray-600 dark:border-gray-700 rounded-2xl"
              >
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex relative text-xl font-serif">
        <!-- <div class="absolute top-0">
          Un consultor tecnológico es una persona con visión estratégica, que
          ayuda a las empresas a encontrar las soluciones tecnológicas óptimas
          para su desarrollo empresarial y mejora competitiva.
        </div> -->
        <HomeTwitterCard class="absolute xl:scale-90 lg:scale-75 xl:ml-0 lg:-ml-10 scale-[0.6] md:-ml-14"></HomeTwitterCard>
        <HomeTwitterCard class="absolute xl:scale-90 lg:scale-75 xl:ml-0 lg:-ml-10 scale-[0.6] z-10 translate-x-[5rem] xl:translate-x-[8rem] translate-y-[6rem] md:translate-x-[0rem] lg:translate-x-[11rem]"></HomeTwitterCard>
        <HomeTwitterCard class="absolute xl:scale-90 lg:scale-75 xl:ml-0 lg:-ml-10 scale-[0.6] translate-x-[16rem] xl:translate-x-[16rem] xl:translate-y-[10rem] translate-y-[5rem] md:translate-x-[5rem] md:translate-y-[13rem] lg:translate-y-[13rem]"></HomeTwitterCard>
        <!-- <img src="img/content2-foto.jpg" class="rounded-2xl" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const content = ref([
  {
    title: "Estrategia Digital",
    text: "Definimos, implementamos y optimizamos tu estrategia de marketing digital. Somos un partner digital ideal para el desarrollo de estrategias integrales.",
  },
  {
    title: "Servicio SEO",
    text: "Análisis de necesidades: pueden realizar un análisis de las necesidades de la empresa en cuanto a tecnología y desarrollo se refiere, y sugerir soluciones que se ajusten a dichas necesidades.",
  },
  {
    title: "Servicio SEM",
    text: "Diseño de sistemas: pueden ayudar a diseñar sistemas personalizados para la empresa, tanto en el ámbito tecnológico como de desarrollo de software.",
  },
  {
    title: "Redacción de Contenidos",
    text: "Implementación de soluciones: una vez diseñado el sistema, pueden ayudar a implementarlo en la empresa, asegurándose de que todo funcione correctamente.",
  },
  {
    title: "Capacitación y asesoramiento",
    text: "Capacitación y asesoramiento: pueden brindar capacitación al personal de la empresa para que sepan cómo utilizar las nuevas soluciones tecnológicas y de software implementadas. También pueden brindar asesoramiento para asegurarse de que la empresa esté utilizando la tecnología de manera eficiente y efectiva.",
  },
  {
    title: "Mantenimiento y soporte",
    text: "Mantenimiento y soporte: pueden brindar soporte y mantenimiento a las soluciones tecnológicas y de software implementadas, para asegurarse de que siempre estén funcionando de manera óptima.",
  },
]);
</script>

<style>
.btncustom {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>
