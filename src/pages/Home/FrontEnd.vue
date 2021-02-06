<template>
    <div id="FrontEnd">
        <ul class="content_items">
            <li class="content_item" v-for="item in items" :key="item.index">
                <div class="item_title" style="cursor:pointer">
                    <a  :href="item.href" target="_blank">{{item.title}}</a>
                </div><!--标题必须有-->
                <hr align="left" /><!--下划线左对齐，右边未满-->

                <div class="item_words"><p v-for="word in item.paragraphs" :key="word.index">{{word}}</p></div>

                <div v-if="item.exit_img" class="flex_box">
                    <div v-for="img in item.img_list" :key="img.index" style="text-align:center;margin: 20px 0;">
                        <img class="imgInFlex" :alt="img.alt" :src="img.href" :title="img.alt" />
                        <!--注意，一个标签可以有多个v-bind!一个v-bind也可以绑定多个class值-->
                        <div class="wordInFlex">{{(img.explain=='')?img.alt:img.explain}}</div><!--没有说明文字的情况下直接赋予其值-->
                    </div>
                </div>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    name:"FrontEnd",
    data(){
        return{
            items:[
                {
                    title:"前端的介绍",
                    href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML",
                    paragraphs:[
                        "顾名思义，前端是网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。前端包括网站的表现层和结构层：Web页面的结构、Web的外观视觉表现以及Web层面的交互实现。前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现。",
                        "Web前端开发三件套：HTML+CSS+JavaScript",
                    ],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"前端的发展史",
                    href:'',
                    paragraphs:[
                        "1991年，WorldWideWeb 浏览器发布，这款由 Web 之父 Tim Berners-Lee 亲手设计的图形化浏览器还包含一个所见即所得 HTML 编辑器，为了避免同 WWW 混淆，这个浏览器后来改名为 Nexus。1993年，Mosaic 发布Internet 的流行应该归功于 Mosaic，这款浏览器将 Web 带向了大众。诸如 IE， Firefox 一类的当代浏览器仍然在延用 Mosaic 的图形化操作界面思想。1994年，Netscape 成立Marc Andreessen 带领 Mosaic 的程序员成立了 Netscape 公司，并发布了第一款商业浏览器 Netscape Navigator。1995年，IE 发布，浏览器之战即将爆发。微软针对 Netscape 发布了他们自己的浏览器，IE，第一场浏览器之战爆发。"
                    ],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"HTML，CSS与JAVASCRIPT",
                    href:'',
                    paragraphs:["浏览器页面由结构层、表示层、行为层三层构成。"+"作用：HTML、CSS、HTML实现页面结构，CSS完成页面的表现与风格，JavaScript实现一些客户端的功能与业务。"],
                    exit_img:false,
                    img_list:[],
                },
            ],
        }
    }    
}
</script>

<style scoped>

/*
#FrontEnd{
    font-size: 18px;
    line-height: 1.5;
}
hr{
    height: 1px;
    border:none;
    background-color: lightgray;
    width:54em;/*54个font-size为18px的字符长度
}
ul.content_items{
    list-style-type:none;
    margin: 0;
}
li.content_item{
    margin: 0 0 100px;
}
.item_title{
    font-size: 30px;
    font-weight: bold;
    height: 100px;
    line-height: 100px;
}
.item_words{
    text-indent: 2em;/*缩进两个相对单位 
}*/
</style>