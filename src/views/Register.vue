<template>
  <div class="register">
   <FormLogin formType="register"/>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'

export default {
  name: 'Register',
  components: {
    FormLogin: FormLogin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
