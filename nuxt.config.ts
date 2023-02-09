// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // srcDir: 'src',
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        ['nuxt-mail', {
            message: {
                to: 'diegolagalera12@gmail.com',
            },
            smtp: {
                host: "smtp.example.com",
                port: 587,
            },
        }],
    ],
    appConfig: {
        nuxtIcon: {
            size: '1.5em'
        }
    },
    app: {
        head: {
            script: [
                { src: '/js/flowbite.js', body: true },
            ],
        }
    },

    i18n: {
        locales: [
            { code: 'en', name: 'english', file: 'en-US.json' },
            { code: 'es', name: 'español', file: 'es-ES.json' }
        ], // used in URL path prefix
        defaultLocale: 'es',   // default locale of your project for Nuxt pages and routings
        // seo: false, // Incrementa el rendiment, ja que no insereix metadades de SEO,
        lazy: true,
        langDir: 'lang',
        detectBrowserLanguage: { // Detectara l'idioma del navegador i guardara la cookie amb aquestes dades
            useCookie: true,
            cookieKey: 'i18n_redirected',
            // onlyOnRoot: true // recommended
        },
        // vueI18n: {
        //     fallbackLocale: 'en' // Si l'idioma del navegador no existeix dins dels locales, es carregara 'es' per defecte
        // }
    }
})
// app: {
//     head: {
//         script: [
//             { src: '/js/flowbite.js', body: true },
//         ],
//     }  
// },