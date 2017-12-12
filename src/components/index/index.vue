<template>
    <div class="container">
        <span @click="goIndex">{{msg}}</span>
        <router-view />
        <button class="btn" @click="insertData">点击看看</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created(){
            this.$store.commit("increment")
            console.log(this.$store.getters.getCount)
        },
        methods: {
            goIndex(){
                this.$router.push({name: 'index', query: { userId: 123 }})
            },
            insertData(){
                this.$router.push({name: 'login', query: { userId: 123 }})
                this.$ajax({type: "get", url: "/"}, null, (res)=>{
                    console.log(res) 
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        .btn{
            background: #09a0dc;
            border: none;
            outline: none;
            border-radius: 3px;
            padding: 5px 8px;
            color: white;
            cursor: pointer;
            &:hover{
                background: #2bc2fe;
            }
            &:active{
                background: #0a93ca;
            }
        }
    }
</style>
