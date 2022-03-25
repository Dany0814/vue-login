<template>
    <Login>
        <div class="row">
            <div class="col m12 card-panel">
              <form @submit.prevent="iniciarSesion">
                <div class="row">
                  <div class="col m3">
                    <label>Usuario</label>
                    <input type="text" v-model="usuario">
                  </div>
                </div>
                <div class="row">
                  <div class="col m3">
                    <label>Contraseña</label>
                    <input type="password" v-model="clave">
                  </div>
                </div>
                <div class="row">
                  <div class="col m3">
                    <button v-show="!loading" type="submit" class="btn">INICIAR SESION<i class="material-icons right">security</i></button>
                    <div v-show="loading" class="progress">
                      <div class="indeterminate"></div>
                  </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </Login>
</template>

<script>
// import { Form, Field, ErrorMessage } from "vee-validate";
// import * as yup from "yup";

export default {
  name: "Login",
  data() {
    // const schema = yup.object().shape({
    //   username: yup.string().required("Username is required!"),
    //   password: yup.string().required("Password is required!"),
    // });

    return {
      username: '',
      password: '',
      loading: false
    }
  },
//   methods: {
//           async iniciarSesion()
//           {
//             var payload = {
//               username: this.username,
//               password: this.password
//             };
//             this.loading = true;
//             await this.axios.post('/login/', payload)
//             .then(response => {
//               this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
//               localStorage.setItem('token', response.data);
//               localStorage.setItem('id', response.data.userData.id);
//               localStorage.setItem('username', response.data.userData.username);
//               this.$router.push('/');
//             })
//             .catch(error => {
//               var data = error.response.data;
//               M.toast({html: data.message});
//             });

//             this.loading = false;
//           }
//         }
  
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  width: 228px;
  height: 450px;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  /* padding: 20px 25px 30px; */
  /* margin: 0 auto 25px; */
  margin-top: 10px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>
