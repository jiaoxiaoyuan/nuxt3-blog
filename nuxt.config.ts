import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

import { resolve } from "pathe";
import { loadEnv } from "vite";

const isDev = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
    // telemetry: false,
    // ssr: false,
    // target: 'static',
    // typescript: {
    //     shim: false,
    //     strict: true
    // },
    // experimental: {
    //     reactivityTransform: true,
    //     inlineSSRStyles: false,
    //     externalVue: true
    // },
    devServer: {
        port: 3001,
    },
    vueuse: {
        ssrHandlers: true,
    },
    app: {
        head: {
            charset: "UTF-8",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Mr.焦的个人博客 | 90后程序猿,爱研究瞎折腾,爱文学烂笔头",
            meta: [
                {
                    name: "description",
                    content: `此个人博客是一个专注于IT技术学习交流的个人技术博客网站,包括敏捷开发、自动化测试、网站开发、服务器运维等领域，创建该个人博客也是为了方便与志同道合的朋友一起互相学习交流，分享经验，感谢大家的支持。`,
                },
                {
                    name: "keywords",
                    content:
                        "个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客",
                },
                { name: "theme-color", content: "#424242" },
                { name: "author", content: "Mr.焦" },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "shortcut icon",
                    href: "/images/icon/apple-touch-icon.png",
                },
                {
                    rel: "apple-touch-icon",
                    href: "/images/icon/apple-touch-icon.png",
                },
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/loading/loading.min.css",
                },
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",
                },
            ],
            script: [
                {
                    src: "https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js",
                },
                {
                    src: "http://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js",
                },
                {
                    src: "http://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js",
                },
            ],
            bodyAttrs: {
                class: "loading",
            },
        },
        pageTransition: { name: "page", mode: "out-in" },
        layoutTransition: { name: "layout", mode: "out-in" },
    },
    content: {
        highlight: {
            theme: "dracula",
        },
    },

    css: ["@/assets/style/style.scss", "element-plus/dist/index.css"],

    modules: [
        // "@nuxt/content",
        "@pinia/nuxt",
        "nuxt-icon",
        "@nuxtjs/tailwindcss",
        "unplugin-icons/nuxt",
    ],

    imports: {
        dirs: [
            // 扫描顶层目录中模块
            "composables",
            // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
            "composables/*/index.{ts,js,mjs,mts}",
            // 扫描给定目录中所有模块
            "composables/**",
        ],
    },
    env: {},
    build: {
        //源代码去掉css
        extractCSS: { allChunks: true },
    },
    vite: {
        logLevel: "info",
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@use "@/assets/styles/global.scss" as *;'
                },
            },
        },
        build: {
            // target: "esnext",
            // terserOptions: {
            //     compress: {
            //         drop_console: true, // 生产环境去除console
            //         drop_debugger: true, // 生产环境去除debugger
            //     },
            // },
            esbuild: {
                pure: ["console.log", "console.info"],
                drop: ["console", "debugger"],
            },
        },
        plugins: [
            AutoImport({
                resolvers: [
                    // autoimport Feedback component like message and notification
                    ElementPlusResolver({
                        // ssr: true,
                        // importStyle: 'sass',
                        importStyle: false,
                    }),
                ],
            }),
            Components({
                dts: true,
                resolvers: [
                    // autoimport component and css
                    ElementPlusResolver({
                        // if turn ssr true will full Import when build project
                        // ssr: true,
                        // importStyle: 'sass',
                        importStyle: false,
                    }),
                    IconsResolver({
                        // prefix: 'i', // defalt prefix
                        customCollections: ["icons"],
                    }),
                ],
            }),
            // https://github.com/antfu/unplugin-icons
            Icons({
                autoInstall: true,
                customCollections: {
                    icons: FileSystemIconLoader("./assets/icons"),
                },
            }),
        ],
    },
    // 禁用预加载渲染，解决多项目加载不相干js问题
    render: {
        resourceHints: false,
    },
    hooks: {
        "vue-renderer:ssr:context"(context) {
            const routePath = JSON.stringify(context.nuxt.routePath);
            context.nuxt = { serverRendered: true, routePath };
        },
    },
    alias: {
        "@": resolve(__dirname, "./"),
    },
    runtimeConfig: {
        // 运行时常量
        public: {
            // 客户端-服务的都能访问
            baseUrl: loadEnv(process.argv[process.argv.length - 1], "./env")
                .VITE_API_URL,
        },
    },
});
