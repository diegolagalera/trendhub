<template>
  <HomeBannerHome></HomeBannerHome>
  <div class="">
    <!-- <div class="top-0 bg-gray-100 w-screens"> -->
    <HomeContent2 class="pt-44 -mt-10"></HomeContent2>
    <div class="bg-white pb-20">
      <HomeContent1></HomeContent1>
    </div>
    <HomeContent3></HomeContent3>
    <div class="bg-white h-[50rem]">
      <HomeNewsLatter></HomeNewsLatter>
    </div>
    <FooterPage id="home3"></FooterPage>

    <!-- <a href="https://api.whatsapp.com/send?phone=31644404697&text='heloooooo'" target="_blank">
      <icon name="logos:whatsapp-icon" class="text-4xl">
      </icon>
    </a> -->

    <!-- <HomeContent2 class="mb-20"></HomeContent2> -->

    <!-- </div> -->
    <!-- <social-chat id="social-button" icon :attendants="attendants">
      <p slot="header">Click on one of our attendants below to chat on WhatsApp.</p>
      <template #button>
        <icon name="logos:whatsapp-icon"></icon>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        />
      </template>
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </social-chat> -->
  </div>
</template>

<script>
import { SocialChat } from "vue-social-chat";
export default {
  // ...
  components: {
    SocialChat,
  },
  // ...
  setup() {
    const attendants = [
      {
        app: "whatsapp",
        label: "Technical support",
        name: "Alan Ktquez",
        number: "5581983383532",
        avatar: {
          src:
            "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
          alt: "Alan Ktquez avatar",
        },
      },
      // ...
    ];

    return { attendants };
  },
};
// const store = MenuStore();

// const { locale, locales } = useI18n();
// const switchLocalePath = useSwitchLocalePath();
// const availableLocales = computed(() => {
//   return locales.value.filter((i) => i.code !== locale.value);
// });
</script>

<style>
:root #social-button {
  --vsc-bg-header: orange;
  --vsc-bg-footer: #fafafa;
  --vsc-text-color-header: yellow;
  --vsc-text-color-footer: green;
  --vsc-bg-button: pink !important;
  --vsc-text-color-button: purple;
  --vsc-outline-color: #333;
  --vsc-border-color-bottom-header: teal;
  --vsc-border-color-top-footer: #f3f3f3;
}
.portada {
  background-color: red;
}

.customdiv {
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  /* box-shadow: 
    0px 2px 4px rgba(0, 255, 255, 0.5), 0px 8px 20px rgba(0, 255, 255, 0.5),
    0px 8px 16px rgba(0, 255, 255, 0.5); */
}
.custom {
  -webkit-box-reflect: below 0px
    linear-gradient(
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      rgb(244, 255, 244, 0.8)
    );
  /* -webkit-box-reflect: below 10px ; */
  /* -webkit-gradient:(linear, left top, left bottom, from(transparent), to(rgba(255, 255, 255, 0.1))); */
}
</style>
