<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Hello</h1>
              <P>{{stateData}}</P>

                <router-link to="/update" class="btn btn-outline-secondary">
                Next
              </router-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      stateData:''
    }
  },

  mounted(){
    this.stateData = this.$store.state.message
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
