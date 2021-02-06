<template>
    <div id="Sass">
        <ul class="content_items">
            <li class="content_item" v-for="item in items" :key="item.index">
                <div class="item_title" style="cursor:pointer">
                    <a :href="item.href" target="_blank">{{item.title}}</a>
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
    name:"Sass",    
    data(){
        return{
            items:[
                {
                    title:"SASS",
                    href:"http://www.ruanyifeng.com/blog/2012/06/sass.html",
                    paragraphs:[
                    "转载来源http://www.ruanyifeng.com/blog/2012/06/sass.html，感谢Mr.阮一峰",
                    " SASS允许使用变量，所有变量以$开头。例如定义颜色变量，要修改颜色值，修改这里就可以了  $primary_1: #a2b9bc;",
                    "SASS允许在代码中使用算式，属性也可以嵌套，例如div {hi {color:red;}}注意，border后面必须加上冒号。在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成：a {&:hover { color: #ffb3ff; }}",
                    "SASS共有两种注释风格。标准的CSS注释 /* comment */ ，会保留到编译后的文件。单行注释 // comment，只保留在SASS源文件中，编译后被省略。在/*后面加一个!，表示这是'重要注释'。即使是压缩模式编译",
                    "sass允许一个选择器继承另一个选择器，如class2要继承class1，就要使用@extend命令：　　.class2 {@extend .class1;font-size:120%;}",
                    ],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"没别的意思，这是一个重复的SASS",
                    href:"http://www.ruanyifeng.com/blog/2012/06/sass.html",
                    paragraphs:[
                    "转载来源http://www.ruanyifeng.com/blog/2012/06/sass.html，感谢Mr.阮一峰",
                    " SASS允许使用变量，所有变量以$开头。例如定义颜色变量，要修改颜色值，修改这里就可以了  $primary_1: #a2b9bc;",
                    "SASS允许在代码中使用算式，属性也可以嵌套，例如div {hi {color:red;}}注意，border后面必须加上冒号。在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成：a {&:hover { color: #ffb3ff; }}",
                    "SASS共有两种注释风格。标准的CSS注释 /* comment */ ，会保留到编译后的文件。单行注释 // comment，只保留在SASS源文件中，编译后被省略。在/*后面加一个!，表示这是'重要注释'。即使是压缩模式编译",
                    "sass允许一个选择器继承另一个选择器，如class2要继承class1，就要使用@extend命令：　　.class2 {@extend .class1;font-size:120%;}",
                    ],
                    exit_img:false,
                    img_list:[],
                },
            ]
        }
    },
}
</script>

<style scoped>

</style>