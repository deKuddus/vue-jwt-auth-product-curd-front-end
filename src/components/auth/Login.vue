<template>
    <div class="hold-transition login-page">
      <div class="login-box">
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <div class="text-danger" v-if="error">
                <p v-for="err in error" :key="err">{{err.error}}</p>
            </div>
            <form  method="post" @submit.prevent='submit'>
              <div class="input-group mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="form.email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="form.password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
             <div class="col-4 float-right">
              <button type="submit" class="btn btn-primary btn-block">Sign In</button>
            </div>
            
              <router-link to="register" >Register</router-link>

            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'login',
  components:{},
  data(){
    return{
      form:{
        email:'',
        password:'' 
      },
      error:null
    }
  },
  methods:{
    ...mapActions({
      logIn:'auth/logIn',
    }),
     submit(){
       this.logIn(this.form).then(() => {
         this.$router.replace({
           name:'create'
         })
       }).catch((e)=>{
         this.error = e.response
       })
    }
  }
}
</script> 