<template>
  <div>
    <form action="">
      <input type="email" name="email" placeholder="Email" />
      <span v-html="inputRegister"></span>
      <input type="password" name="password" placeholder="Contraseña" />
      <input type="submit" v-bind:value="buttonValue" />
    </form>
    <router-link v-bind:to="toValue">
        {{linkValue}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    formType: String,
  },
  methods: {
    checkFormType() {
      if (this.formType == "register") {
        this.buttonValue = "Registrarse";
        this.inputRegister = `<input type="text" name="userName" placeholder="Nombre"/>`;
        this.linkValue = "¿Ya tienes cuenta? Inicia sesión"
        this.toValue = "/"
      }
    },
  },
  data() {
    return {
      buttonValue: "Iniciar sesión",
      inputRegister: "",
      linkValue:"¿Aún no tienes cuenta? Regístrate",
      toValue:"/register"
    };
  },
  created() {
    this.checkFormType();
  },
};
</script>

<style>
</style>