<template>
    <div class="home">
        <h2 @click="showmsg">点我点我</h2>
        <!--<router-link to="/home/news">新闻</router-link>-->
        <!--|-->
        <!--<router-link to="/home/message">消息</router-link>-->
        <button @click="newsclick">news</button>
        <button @click="messageclick">message</button>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {
            // HelloWorld
        },
        methods: {
            showmsg() {
                console.log(this);
            },
            newsclick() {
                this.$router.push('/home/news')
            },
            messageclick() {
                this.$router.push('/home/message')
            }
        },
        setup() {
            console.log("创建");
        },
        unmounted() {
            console.log("销毁");
        }
    }
</script>
