<template>
  <div class="login">
   <FormLogin formType="login"/>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
export default {
  name: 'Login',
  components: {
    FormLogin: FormLogin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
