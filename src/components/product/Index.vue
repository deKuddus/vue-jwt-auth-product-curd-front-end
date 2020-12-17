<template>
   <div>
       <div class="wrapper">
            <Sidebar/>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Product List</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">product list</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Product List</h3>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="productlist">
                                            <tr v-for="product in productlist" :key="product.id">
                                                <td>
                                                    <img :src="image_url+product.image" alt="" style="height:120px;width:120px">
                                                </td>
                                                <td>{{product.title}}</td>
                                                <td>{{product.price}}</td>
                                                <td>{{product.description}}</td>
                                                <td>
                                                    <button class="btn btn-danger" @click.prevent="deleteProduct(product.id)"><i class="fa fa-trash"></i></button>
                                                    <router-link :to="{path:'/edit/'+product.id}" class="btn btn-success" ><i class="fa fa-edit"></i></router-link>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
    
    components:{
        Sidebar,Footer
    },
    computed:{
       ...mapGetters({
           productlist:'product/productlist'
       }),
    },
    created() {
        this.$store.dispatch('product/readProduct');
    },
    data(){
        return{
            image_url:'http://127.0.0.1:8000/'
        }
    },

    methods:{
        ...mapActions({
           deleteProductAction:'product/deleteProductAction',
           editProductAction:'product/editProductAction',

       }),
        editProduct(id){
            this.editProductAction(id).then((res)=>{
                console.log(res.data)
            })
        },

        deleteProduct(id){
            this.$swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this daata!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
                }).then((e) => {
                    if (e.isConfirmed == true) {
                         this.deleteProductAction(id).then((res)=>{
                            this.$swal(res.message)
                        })
                    } else{
                        this.$swal.fire(
                        'Cancelled',
                        'Your data is safe :)',
                        'error'
                        )
                    }
                })
        }
    }
}
</script>