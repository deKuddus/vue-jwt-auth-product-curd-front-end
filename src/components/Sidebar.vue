<template>
    <div>
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">

            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" @click.prevent="signout" class="nav-link">Logout</a>
            </li>
            </ul>

        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <a href="" class="brand-link">
            <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">Product Crud</span>
            </a>
            <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                <a href="#" class="d-block">{{user.name}}</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Product List
                            </p>
                        </router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="create" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Create Product
                            </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            </div>
        </aside>
    </div>
</template>


<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            authenticated:'auth/authenticated',
            user:'auth/user',
        })
    },
    methods:{
        ...mapActions({
            signOutAction:'auth/signOut'
        }),

        signout(){
            this.signOutAction().then(() => {
                this.$router.replace({
                    name:'login'
                })
            })
        }
    }
}
</script>