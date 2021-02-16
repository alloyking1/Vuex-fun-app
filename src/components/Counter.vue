<template>
    <div>
        <p>{{ number }}</p>
        <button v-on:click="increment">Count Up</button>
        <button v-on:click="decrement">Count Down</button>
        <p>{{ saying }}</p>
        <button v-on:click="reverseMessage">Reverse Saying</button>
    </div>
</template>

<script>
export default {
  
    data() {
        return{
            number:0,
            saying:'Hello World'
        }
    },

    methods: {
        increment() {
            this.number++
        },
        decrement() {
            this.number--
        },
        reverseMessage() {
            this.saying = this.saying.split("").reverse().join("");
        }
    }
 
}
</script>

<style scoped>

</style>