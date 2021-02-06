<template>
    <div id="guiAndBash">
        <ul class="content_items">
            <li class="content_item" v-for="item in items" :key="item.index">
                <div class="item_title">
                    <a :href="item.href" target="_blank">{{item.title}}</a>
                </div>

                <hr align="left" />
                <div class="item_words"><p v-for="word in item.paragraphs" :key="word.index">{{word}}</p></div>

                <div v-if="item.exit_img" class="flex_box">
                    <div v-for="img in item.img_list" :key="img.index" style="text-align:center;margin: 20px 0;">
                        <img class="imgInFlex" :alt="img.alt" :src="img.href" :title="img.alt" />
                        
                        <div class="wordInFlex">{{(img.explain=='')?img.alt:img.explain}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"childRoute",
    data(){
        return{
            items:[
                {
                    title:" 加精！ VUE3中的子路由与路由重定向",
                    href:"https://www.cnblogs.com/rockyjs/p/14019881.html ",
                    paragraphs:["先谢谢作者大大^-^，转载链接https://www.cnblogs.com/rockyjs/p/14019881.html，以及另外一个https://www.cnblogs.com/rockyjs/p/14019905.html。"],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"VUE CLI3路由重定向",
                    href:"https://www.cnblogs.com/rockyjs/p/14019905.html",
                    paragraphs:["vue cli3 的重定向无非就是使用redirect来实现const routes = [    {path:'/'', name:'base'，redirect:{name:'ResourceHome'}},    {path:'/new', component:ResourceNew，　　children:[　　　　{path:'',component:ResourceName},{path:'other'component:RespourceOther}　　]},]const router = createRouter({history:createWebHistory(),routes/*第一个router是参数，第二个routes是配置路由中的routes,可以只写一个routes*/});其他的方式引入是不变的，该引入的还是需要进行一次引入"],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"vue cli3 的子路由",
                    href:"https://www.cnblogs.com/rockyjs/p/14019881.html",
                    paragraphs:["vue cli3 的子路由 无非就是在父级路由下创建一个子级路由children来包括起来const routes = [{path:'/', component:ResourceHome},    {path:'/new', component:ResourceNew，children:[{path:'',component:ResourceName},{path:'other'component:RespourceOther}]},]const router = createRouter({history:createWebHistory(),routes});值得注意的是，在需要用到子路由的按钮中，写法为<router-link to=”/home/selection”></router-link>注意第一个”/”不可省略！其他的方式引入是不变的，该引入的还是需要进行一次引入"],
                    exit_img:false,
                    img_list:[],
                },
            ],
        }
    },
}
</script>

<style scoped>

</style>