<template>
        <!-- <div class="row"> -->
            <div class="card-container">
              <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card"
              />
              <form @submit.prevent="iniciarSesion">
                <div class="form-group" >
                  <!-- <div class="col m3"> -->
                    <label>Usuario</label>
                    <input type="text" v-model="username" class="form-control">
                  <!-- </div> -->
                </div>
                <div class="form-group">
                  <!-- <div class="col m3"> -->
                    <label>Contraseña</label>
                    <input type="contraseña" v-model="password" class="form-control">
                  <!-- </div> -->
                </div>
                <div class="form-group">
                  <button class="btn btn-primary mb-2" :disabled="loading">
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  <span>Ingresar</span>
                  </button>
                </div>
              </form>
            </div>
        <!-- </div> -->
    
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
  methods: {
          async iniciarSesion()
          {
            var payload = {
              username: this.username,
              password: this.password
            };
            this.loading = true;
            await this.axios.post('/login/', payload)
            .then(response => {
              this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
              localStorage.setItem('token', response.data);
              localStorage.setItem('id', response.data.userData.id);
              localStorage.setItem('username', response.data.userData.username);
              this.$router.push('/');
            })
            .catch(error => {
              var data = error.response.data;
              M.toast({html: data.message});
            });

            this.loading = false;
          }
        }
  
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 150px !important;
  padding: 10px 10px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 80px;
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
