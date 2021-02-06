<template>
    <div>
        <div id="navbar">
            <ul class="navbar_list">
                <li class="navbar_simple" v-for="simple in nav_bar.simples" :key="simple.index">
                    <router-link :to="simple.href" style="color:ivory">
                        {{simple.name}}
                    </router-link>
                </li>
            </ul>

            <div class="search">
                <input class="navbar_input" name="navbar_input_text" type="text" size="15" maxlength="15" placeholder="你想找什么呢？"/>
                <button class="navbar_search">搜索<i class="fa fa-search" style="margin: 0 5px"></i></button>
            </div>
            
            <div class="pack_up_div"><!--收起按钮-->
                <div class="pack_up_icon" v-on:click="packUp()">
                    <i v-if="nav_show" class="fa fa-angle-up" ></i>
                    <i v-else class="fa fa-angle-down"></i>
                </div>
            </div>
        </div>

        <div v-if="nav_show" id="slide_down_button" v-on:click="slideDown()">
        <!--当导航栏收起时显示一个可下拉的按钮-->
            <i class="fa fa-angle-down"></i>
        </div>
    </div>

    <div id="routerView" style="margin-top:120px">
        <!--导航栏的高度为120px-->
        <router-view></router-view>
    </div>

</template>

<script>
import $  from 'jquery';

export default{
    name:'NavBar',
    data(){
        return{
            nav_show: true,
            nav_bar:{
                simples:[
                    {
                        name:'首页',
                        href:'/home',
                    },
                    {
                        name:'精品',
                        href:'/boutique',
                    },
                    {
                        name:'扩展功能',
                        href:'/extension',
                    },
                    {
                        name:'关于..',
                        href:'/about',
                    },
                ]
            },
        }
    },
    methods:{
        changeNavInThese:function(){
            this.$store.commit('changeNav');
        },
        packUp:function(){
            $("#navbar").slideUp(2000);
            setTimeout(this.changeNavInThese,800);
           // let _this=this;
            //;若加上括号会导致直接执行内部的函数，不再延时
        },
        slideDown:function(){
            $("#navbar").slideDown(2000);
            setTimeout(this.changeNavInThese,1000);
            //控制的时间可以更长点;
        },
    },
}
</script>

<style scoped>
#navbar{
    position: fixed;
    top:0;
    /*固定在顶部不随滚动条滚动*/

    display: flex;
    display: -webkit-flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    /*弹性布局*/

    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    z-index: 2;
    width:100%;
    background-color: cadetblue;
}
.navbar_list{
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100px;
    font-size: 22px;
    font-weight: bold;
    width: 600px;
    display: inherit;
    justify-content: space-between;
    line-height: 100px;
}
.navbar_simple{
    display: inline-block;
    padding: 0 20px;
    max-width:200px; 
    letter-spacing: 5px;
}
.search{
    display: flex;
    display: -webkit-flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;/*两端对齐，间隔相等*/
    align-items: center;
}
.navbar_search{
    height:44px;
    font-size: 20px;
    border:none;
    padding-left: 10px;
    background-color: lightcoral;
    color: ivory;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius:0 10px 10px 0;
}
.navbar_input{
    padding:2px 10px 2px 5px;
    height:40px;
    border:none;
    font-size: 18px;;
    border-radius: 10px 0 0 10px ;
}
.pack_up_div{
    width:100px;
    overflow: hidden;
}
.pack_up_icon{
    position: relative;
    left: 60%;
    top:60%;
    font-size: 36px;
    color: lavender;
    cursor: pointer;
}
#slide_down_button{
    width: 2rem;
    height: 2rem;
    font-size: 26px;
    position: fixed;
    top: 0;
    right: 5rem;
    cursor: pointer;
    background-color: brown;
    text-align: center;
}
#slide_down_button>i{
    margin: auto auto;
    color: honeydew;
    line-height: 2rem;
}
</style>