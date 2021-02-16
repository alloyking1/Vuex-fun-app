<template>
    <div>
        <p>You are {{ feelingThisWay }}!</p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            feelingThisWay:'Happy'
        }
    },

    created() {
         this.feelingThisWay = (((Math.ceil(Math.random() * 10) % 2) === 0)) ? 'Sad' : 'Happy'
    }
}
</script>