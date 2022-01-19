<template>
  <div>
    <form>
      <input type="email" v-model="email" placeholder="Email" />
      <span v-html="inputRegister"></span>
      <input type="password" v-model="password" placeholder="Contraseña" />
      <input
        type="submit"
        v-bind:value="buttonValue"
        v-on:click="submitMethod"
      />
    </form>
    <router-link v-bind:to="toValue">
      {{ linkValue }}
    </router-link>
  </div>
</template>

<script>
import { registerWithEmail, loginWithEmail } from "../../firebase";
export default {
  name: "FormLogin",
  props: {
    formType: String,
  },
  methods: {
    checkFormType() {
      if (this.formType == "register") {
        this.buttonValue = "Registrarse";
        this.inputRegister = `<input type="text" v-model="userName" placeholder="Nombre"/>`;
        this.linkValue = "¿Ya tienes cuenta? Inicia sesión";
        this.toValue = "/";
        this.submitMethod = this.register;
      }
    },
    login(event) {
      event.preventDefault()
      loginWithEmail(this.email, this.password)
    },
    register(event) {
      event.preventDefault()
      registerWithEmail(this.email, this.password, this.userName);
    },
  },
  data() {
    return {
      buttonValue: "Iniciar sesión",
      inputRegister: "",
      linkValue: "¿Aún no tienes cuenta? Regístrate",
      toValue: "/register",
      submitMethod: this.login,
      email: "",
      userName: "",
      password: "",
    };
  },
  created() {
    this.checkFormType();
  },
};
</script>

<style>
</style>