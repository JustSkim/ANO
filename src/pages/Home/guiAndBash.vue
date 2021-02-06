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
    name:"guiAndBash",
    data(){
        return{
            items:[
                {
                    title:"Git GUI,Git Bash,Git CMD之间的区别",
                    href:"https://www.cnblogs.com/doggod/p/13354430.html ",
                    paragraphs:["转载链接https://www.cnblogs.com/doggod/p/13354430.html ，先谢谢作者。","在安装了git后，会出现一下三个软件，那么这三个软件有什么区别呢？"],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"git Bash",
                    href:"",
                    paragraphs:["Bash，Unix shell 的一种，Linux 与 Mac OS X v10.4 都将它作为默认 shell。Git Bash 就是一个 shell，是 Windows 下的命令行工具，可以执行 Linux 命令。Git Bash 是基于 CMD 的，在 CMD 的基础上增添一些新的命令与功能。所以建议在使用的时候，用 Bash 更加方便。"],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"git CMD",
                    href:"",
                    paragraphs:["（命令行提示符）是 Windows 操作系统上的命令行解释程序。当你在 Windows 上安装 git 并且习惯使用命令行时，可以使用 cmd 来运行 git 命令。"],
                    exit_img:false,
                    img_list:[],
                },
                {
                    title:"git GUI",
                    href:"",
                    paragraphs:["基本上针对那些不喜欢黑屏（即命令行）编码的人。它提供了一个图形用户界面来运行您喜欢的 git 命令。"],
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