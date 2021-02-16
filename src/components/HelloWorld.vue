<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Hello!!!!</h1>
              <P>{{stateData}}</P>

                <router-link to="/update" class="btn btn-outline-secondary">
                Next
              </router-link>

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
import RandomColor from './RandomColor.vue'
import NewComponent from './NewComponent.vue'
import RandomCat from './RandomCat.vue'
import StarWars from './StarWars.vue'
import HappySad from './HappySad.vue'
import Counter from './Counter.vue'
import Hidden from './Hidden.vue'

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
