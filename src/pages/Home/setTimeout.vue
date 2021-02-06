<template>
    <div id="setTimeout">
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
    name:"setTimeout_use",
    //为防止与函数setTimeout重名
    data(){
        return{
            items:[
                {
                    title:"setTimeout函数在vue中应用",
                    href:"https://blog.csdn.net/qq_27295403/article/details/83375574",
                    paragraphs:["支持两种调用方式：1 字符 2 函数体(具体函数名不可带括号)当在vue中使用定时器在function里直接使用this，发现没有效果，这是由于setTimeout函数调用的代码运行在与所在函数完全分离的执行环境上，这会使得this指向的是window对象。拓展知识：解决vue在setTimeout内修改this失效的问题要想setTimeout指向正确的值，可以使用如下方法：","1)	使用箭头函数；2)	先定义一个_this暂存this，将this存在变量_this中，此时执行setTimeout函数时，setTimeout函数内的_this就会访问到这个变量，就会得到当前对象。let  _this=  this，setTimeout(function(){_this.characteristic=1}, 数字（毫秒为单位）)"],
                    exit_img:true,
                    img_list:[
                        {
                            href:require("@/assets/home/setTimeout/1.png"),
                            //↑链接，说明文字↓(可以是标题，和alt相同即可，反正一定居中)
                            explain:"关于setTimeout函数",
                            alt:"setTimeout函数在vue中应用",
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