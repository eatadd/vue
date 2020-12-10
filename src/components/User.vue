<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户界面的内容</p>
        {{userid}}
        {{username}}
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
        created(){
            this.showuser();
        },
        methods: {
            showuser() {
                this.userid = this.$route.params.userid;
                this.username = this.$route.params.username;
            }
        }
    }
</script>

<style scoped>

</style>