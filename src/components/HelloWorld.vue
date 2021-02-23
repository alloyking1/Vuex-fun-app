<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Hello!!!! Changed!</h1>
              
              <!-- Our New Components -->
              <RandomColor />
              <RandomColor />
              <NewComponent />
              <Counter />
              <Counter />
              <Counter />
              <Counter />
              <Hidden />
              <Counter />
              <HappySad />
              <StarWars character="5" />
              <StarWars character="6" />
              <StarWars character="1" />
              <RandomCat />
              <RandomCat />
              <RandomCat />


            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RandomColor from './Demo/RandomColor.vue'
import NewComponent from './Demo/NewComponent.vue'
import RandomCat from './Demo/RandomCat.vue'
import StarWars from './Demo/StarWars.vue'
import HappySad from './Demo/HappySad.vue'
import Counter from './Demo/Counter.vue'
import Hidden from './Demo/Hidden.vue'

export default {
  data(){
    return{
      stateData:''
    }
  },

  mounted(){
    this.stateData = this.$store.getters.getMessage
  },

  components: {
    RandomColor,
    NewComponent,
    RandomCat,
    StarWars,
    HappySad,
    Counter,
    Hidden
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
