<template>
    <div  class="hold-transition register-page">
        <div class="register-box">
            <div class="card">
                <div class="card-body register-card-body">
                <p class="login-box-msg">Register Page</p>
                
                    <div class="text-danger" v-if="error">
                    <p v-for="err in error" :key="err">{{err}}</p>
                </div>
                <form  method="post" @submit.prevent="submitRetisterForm">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Full name" v-model="form.name">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-user"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" v-model="form.email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div class="col-4 float-right">
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                    </div>
                    <router-link to="login" >Login</router-link>
                </form>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'register',
  components:{},
  data(){
    return{
      form:{
        email:'',
        password:'' ,
        name:''
      },
      error:null
    }
  },
  methods:{
    ...mapActions({
      register:'auth/register',
    }),
     submitRetisterForm(){
       this.register(this.form).then(() => {
         this.$router.replace({
             name:'login'
         })
       }).catch((e)=>{
         this.error = e.response.data.errors
       })
    }
  }
}
</script> 