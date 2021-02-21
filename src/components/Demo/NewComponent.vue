<template>
    <div>
        <h1>My New Component</h1>
        <p>Today is {{ dayOfWeek }} there have been {{ numMilliseconds }} milliseconds since Jan 1, 1970!</p>
    </div>
</template>

<script>
export default {
    computed: {
        dayOfWeek: () => {
            
            var d = new Date();
            var weekday = new Array(7);

            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            var dayOfWeek = weekday[d.getDay()];

            return dayOfWeek;
        },

        numMilliseconds: () => {
            
            var d = new Date();
            var numMilliseconds = d.getTime();
        
            return numMilliseconds;
        
        }
                    
    }
}
</script>

<style scoped>

</style>