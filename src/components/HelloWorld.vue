<template>
    <div class="hello">
        {{msg}}
        <button @click="insertData">点击看看</button>
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
            insertData(){
                this.$axios({type: "get", url: "/"}, null, (res)=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
