import { createWebHistory,createRouter } from 'vue-router';
import Home from './pages/Home/Home.vue'
import Boutique from './pages/Boutique/Boutique.vue'
import Extension from './pages/Extension/Extension.vue'
import About from './pages/About/About.vue'
import FrontEnd from './pages/Home/FrontEnd.vue'
import Sass from './pages/Home/Sass.vue'
import Webpack from './pages/Home/Webpack.vue'
import setTimeout_use from '@/pages/Home/setTimeout.vue'
import passParameters from '@/pages/Home/passParameters.vue'
import guiAndBash from '@/pages/Home/guiAndBash.vue'
import childRoute from '@/pages/Home/childRoute.vue'

const history = createWebHistory();
const router=createRouter({
    history,
    routes:[ 
        {
            path:'/home',
            name:'home',
            component:Home,
            children:[
                {
                    path:'frontend',
                    name:"frontend",
                    component:FrontEnd,
                },
                {
                    path:'sass',
                    component:Sass,
                },
                {
                    path:'Webpack',
                    component:Webpack,
                },
                {
                    path:'settimeout_use',
                    component:setTimeout_use,
                },
                {
                    path:'passParameters',
                    component:passParameters,
                },
                {
                    path:'gui_and_bash',
                    component:guiAndBash,
                },
                {
                    path:"child_route",
                    component:childRoute,
                }
            ]
        },
        {
            path:'/',
            name:"base",
            redirect:{
                name:"frontend",
            }
        },//vue3中使用redirect进行路由重定向
        {
            path:'/boutique',
            name:"boutique",
            component:Boutique
        },
        {
            path:'/extension',
            name:"extension",
            component:Extension
        },
        {
            path:'/about',
            name:"about",
            component:About
        },
    ]
});


export default router;//缺省暴露