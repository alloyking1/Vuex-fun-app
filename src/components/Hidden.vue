<template>
    <div>
        <h1 v-if="visible">Visible?</h1>
        <button v-on:click="changeVisibility">Change Visible</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            visible:false
        }
    },

    methods: {
        changeVisibility() {
           this.visible = true
        }
    }
}
</script>