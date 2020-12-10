<template>
    <div id="app">
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <button @click="homeclick">首页</button>
        <button @click="aboutclick">关于</button>
        <button @click="userclick">用户</button>
    </div>
    <router-view/>
</template>
<script>
    export default {
        name: 'app',
        methods: {
            homeclick() {
                // this.$router.push({path: '/',query:{name: 'home'}})
                this.$router.replace('/')
            },
            aboutclick() {
                // this.$router.push({path: '/about',query:{name: 'about'}})
                this.$router.replace('/about')
            },
            userclick() {
                this.$router.push({name: 'User', params: {userid: 1, username: 'zq'}})
                // this.$router.replace('/user')
            }
        }
    }
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

