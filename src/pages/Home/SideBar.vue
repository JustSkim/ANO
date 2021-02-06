<template>
    <div id="cebian" class="sidebar" v-bind:style="(nav_exit)?sidebar_low:sidebar_high">
        <ul class="sidebar_list">
            <li class="sidebar_selection" v-for="it in sidebar_list" :key="it.index"><router-link :to="it.href" style="color: black;">{{it.name}}</router-link></li>
        </ul>
    </div>

    <div id="home_content">
        <router-view class=""></router-view>
    </div>
</template>

<script>

export default{
    name:'SideBar',
    data(){
        return{
            nav_exit:this.$store.state.navShow,
            sidebar_low:{
                height:'595px',
            },
            sidebar_high:{
                height:'695px',
            },
            sidebar_list:[
                {
                    name:"什么是前端",
                    href:"/home/frontend",
                    /*vue3中子路由使用，注意斜杠不可省略 */
                },
                {
                    name:"setTimeout在vue中的正确使用",
                    href:"/home/setTimeout_use",
                },
                {
                    name:"Vue3.x 从零开始—— 更完善的组件传参",
                    href:"/home/passParameters",
                },
                {
                    name:"webpack",
                    href:"/home/webpack",
                },
                {
                    name:"构建vue项目时一个注意点",
                    href:"/home/#",
                },
                {
                    name:"SASS",
                    href:"/home/sass",
                },
                {
                    name:"Vue路由的history模式(vue-router4.0模式下)",
                    href:"/home/",
                },
                {
                    name:"我对多种编程语言的看法",
                    href:"/home/",
                },
                {
                    name:"web安全",
                    href:"/home/web_security",
                },
                {
                    name:"Vuex 状态管理，最简单——store",
                    href:"/home/xhtml",
                },
                {
                    name:"两种npm安装模块方式的区别 -s 与-d",
                    href:"/home/5k",
                },
                {
                    name:"Git GUI,Git Bash,Git CMD之间的区别",
                    href:"/home/gui_and_bash",
                },
                {
                    name:"VUE3中的子路由与路由重定向",
                    href:"/home/child_route",
                },
                {
                    name:"Go→",
                    href:"/home/go",
                },
                {
                    name:"web安全",
                    href:"/home/web_security",
                },
                {
                    name:"XHTML",
                    href:"/home/xhtml",
                },
                {
                    name:"N次方",
                    href:"homt/n",
                },
                {
                    name:"我对多种编程语言的看法",
                    href:"#",
                },
                {
                    name:"Python爬虫",
                    href:"#",
                },
                {
                    name:"计算机操作系统",
                    href:"/os"
                },
                {
                    name:"计算机网络",
                    href:"/net"
                },
                {
                    name:"计算机组成原理",
                    href:"/theory"
                },
                {
                    name:"数据结构与算法",
                    href:"/algorithm",
                },
                {
                    name:"Go→",
                    href:"#",
                },
            ],
        }
    },
    computed:{
        listen1(){
        return this.$store.state.navShow;
        }
    },
    watch:{
        listen1(){
        this.nav_exit=this.$store.state.navShow;
        }
    }
}
</script>

<style scoped>
div.sidebar{
    position: fixed;
    font-family: "幼圆";
    bottom: 0;
    float: left;
    width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 1;
    padding: 0;
}
div.sidebar::-webkit-scrollbar{
    width:5px;
    height:10px;
}
div.sidebar::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgb(224, 219, 219);
    background: rgb(121, 120, 120);
}
div.sidebar::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgb(224, 219, 219);
    border-radius: 10px;
    background: #EDEDED;
}
ul.sidebar_list{
    list-style-type: none;
    width: inherit;
    background-color: rgb(234, 250, 174);
    overflow: inherit;
    margin: 0!important;
}
li.sidebar_selection{
    margin:50px 0;
    width: 250px;
    font-size: 22px;
    line-height: 1.5;
}
li>a:hover{
    animation:changeLinkColor 2s;
    -moz-animation:changeLinkColor 2s; /* Firefox */
    -webkit-animation:changeLinkColor 2s; /* Safari and Chrome */
    -o-animation:changeLinkColor 2s; /* Opera */
}
/*添加CSS3动画 */
@keyframes changeLinkColor{
    from{color:black}
    to{color: mediumslateblue;}
}
@-moz-keyframes changeLinkColor{
    from{color:black}
    to{color: mediumslateblue;}
}
@-webkit-keyframes changeLinkColor{
    from{color:black}
    to{color: mediumslateblue;}
}
@-o-keyframes changeLinkColor{
    from{color:black}
    to{color: mediumslateblue;}
}
#home_content{
    margin: 0 0 0 300px;
    font-size: 18px;
    line-height: 1.5;
    padding: 0 50px 0 0;
}
</style>