<template>
    <div id="passParameters">
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
    name:"passParameters",
    data(){
        return{
            items:[
                {
                    title:"Vue3.x 从零开始—— 更完善的组件传参",
                    href:"https://www.cnblogs.com/wisewrong/p/13813985.html",
                    paragraphs:["转载链接https://www.cnblogs.com/wisewrong/p/13813985.html，先谢谢作者。","这里介绍几种常用的vue中组件传参方式。","首先，是父组件传参到子组件。"],
                    exit_img:true,
                    img_list:[
                        {
                            href:require("@/assets/home/passParameters/1.png"),
                            explain:"子组件定义props",
                            alt:"子组件定义props",
                        },
                        {
                            href:require("@/assets/home/passParameters/2.png"),
                            explain:"",
                            alt:"",
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style scoped>

</style>