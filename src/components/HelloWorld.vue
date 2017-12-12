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
                this.$axios.get('http://localhost:8888/')
                .then(function (response) {

                    console.log(response);

                }).catch(function (error) {

                    console.log(error);

                });
            }
        }
    }
</script>

<style scoped>

</style>
