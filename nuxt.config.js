export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Iman Shafiei Alavijeh',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A self-organized and creative technical person with more than four years of experience, able to create a product with all complexity in technical and management sections.'
            },
            {
                property: 'og:image',
                content: 'https://imanshafiei540.github.io/img/imanshafiei.jpeg'
            },
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/style.css',
        '@/assets/css/resume.css',
        '@/assets/css/navbar.css',
        '@/assets/css/dark.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxt/content'
    ],
    bootstrapVue: {
        bootstrapCSS: true,
        bootstrapVueCSS: true,
        icons: false,
        componentPlugins: [
            'LayoutPlugin',
            'ToastPlugin',
        ],
        components: ['BContainer', 'BRow', 'BCol', 'BImgLazy', 'BNavbar', 'BNavbarNav', 'BNavbarBrand',
            'BNavItem', 'BNavbarToggle', 'BNav', 'BNavText', 'BCollapse', 'BLink'
        ],
        directives: ['VBToggle'],
    },

    content: {
        liveEdit: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
