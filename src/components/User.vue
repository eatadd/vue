<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户界面的内容</p>
        <p>this.$route.params.id {{$route.params.id}}</p>
        <p>$route.params.username: {{$route.params.username}}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                id: 0,
                username: 0
            }
        },
        created() {
            this.showuser();
        },
        methods: {
            showuser() {
                this.id = this.$route.params.id;
                // this.userid = this.$route.query.id;
                // this.username = this.$route.query.username;
            }
        },
        setup() {
            console.log("user创建");
        },
        unmounted() {
            console.log("user销毁");
        }
    }
</script>

<style scoped>

</style>