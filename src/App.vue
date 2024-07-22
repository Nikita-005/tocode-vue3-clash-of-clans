<template>
  <div class="wrapper">
    <HeaderThe></HeaderThe>
      <div class="wrapper-content">
        <div class="container">
          <router-view />
          <!-- <p>{{test}}</p> -->
        </div>
      </div>
    <TheFooter />
    
  </div>
</template>

<script>
  // import {site} from "@/_config"
  import HeaderThe from '@/components/HeaderThe'
  import TheFooter from '@/components/TheFooter'
  export default {
    components: {HeaderThe, TheFooter},
    data() {
      return {
      
      }
    }
  }
 
//  @import "../assets/scss/main.scss"
</script>

<style lang="scss">

</style>
