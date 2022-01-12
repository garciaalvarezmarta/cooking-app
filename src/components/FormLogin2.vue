<template>
  <div>
    <form action="">
      <input type="email" name="email" placeholder="Correo electrónico" />
      <span v-html="nameInput"></span>
      <input type="password" name="password" placeholder="Contraseña" />
      <input type="submit" v-bin:value="buttonValue" />
    </form>
  </div>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    formType: {
      type: String,
      default: "login",
    },
  },
  methods: {
    checkFormType() {
      if (this.formType == "register") {
        this.buttonValue = "Registrarse";
        this.nameInput = `<input type='text' placeholder='Nombre de usuario' />`;
      }
    },
  },
  data() {
    return {
      buttonValue: "Iniciar sesión",
      nameInput: "",
    };
  },
  created() {
      this.checkFormType()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
