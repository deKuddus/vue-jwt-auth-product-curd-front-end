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
                                                    <img :src="'http://127.0.0.1:8000/'+product.image" alt="" style="height:120px;width:120px">
                                                </td>
                                                <td>{{product.title}}</td>
                                                <td>{{product.price}}</td>
                                                <td>{{product.description}}</td>
                                                <td>
                                                    <button class="btn btn-danger" @click.prevent=""><i class="fa fa-trash"></i></button>
                                                    <button class="btn btn-success" @click.prevent=""><i class="fa fa-edit"></i></button>
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
import {mapGetters} from 'vuex'
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
}
</script>