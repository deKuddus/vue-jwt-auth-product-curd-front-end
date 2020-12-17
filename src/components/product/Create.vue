<template>
   <div>
       <div class="wrapper">
            
            <Sidebar/>
            <div class="content-wrapper">
                <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Create Product</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">product create</li>
                        </ol>
                    </div>
                    </div>
                </div>
                </section>

                <section class="content">
                <div class="container-fluid">
                
                    <div class="row">
                        <div class="offset-md-3 col-md-6">
                            <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Prodcut Create Form</h3>
                            </div>

                            <form role="form" @submit.prevent="submitProduct" >
                                <div class="card-body">
                                    <div v-if="error">
                                        <p v-for="(err, index) in error" :key="index" class="text-danger">{{err.errors}}</p>                                       
                                    </div>
                                    <div class="form-group">
                                        <label for="title">Product Title</label>
                                        <input type="text" class="form-control" id="title" placeholder="Enter Product title" v-model="product.title">
                                        <!-- @{{error.title}} -->
                                    </div>
                                    <div class="form-group">
                                        <label for="price">Product Price</label>
                                        <input type="number" class="form-control" id="price" placeholder="Enter product price"  v-model="product.price">
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Product Description</label>
                                        <textarea class="form-control" errorid="description"  v-model="product.description"></textarea>
                                    </div>

                                    <div class="row">
                                         <div class="col-md-6">
                                             <div class="form-group">
                                                <img :src ="previewImage" class="uploading-image img-thumbnail" style="width:150px;height:150px"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                             <div class="form-group">
                                                <label for="image">Product Image</label>
                                                <input type="file" @change="OnFileChange" name="files"  class="form-control" id="image" placeholder="Enter product price" >
                                            </div>
                                        </div>
                                    </div>
                                   

                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>

                </div>
                </section>
            </div>

        </div>
        <Footer/>
    </div>
</template>

<script>

import {mapActions} from 'vuex'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
    name:'create',
    components:{
        Sidebar,
        Footer
    },
    data(){
        return{
             product:{
                    title:'',
                    description:'',
                    price:'',
                    image:null
                },
            previewImage:'https://p7.hiclipart.com/preview/115/523/650/product-design-brand-logo-font-demo-thumbnail.jpg',
            error:null
        }
    },
    methods:{
        ...mapActions({
            storeProduct:'product/storeProduct'
        }),

        submitProduct(){
            if(!this.product.title){
                this.$swal('Error','product title is required','error');
                return
            }
            if(!this.product.price){
                this.$swal('Error','product price is required','error');
                return
            }
            if(!this.product.description){
                this.$swal('Error','product description is required','error');
                return
            }
            if(!this.product.image){
                this.$swal('Error','product image is required','error');
                return
            }
            var data = new FormData();
            data.append('title', this.product.title)
            data.append('price', this.product.price)
            data.append('description', this.product.description)
            data.append('image', this.product.image)
            this.storeProduct(data).then((res) => {
                this.product.title = null
                this.product.description = null
                this.product.price = null
                this.product.image = null
                this.previewImage  = 'https://p7.hiclipart.com/preview/115/523/650/product-design-brand-logo-font-demo-thumbnail.jpg'
                this.$swal(res.message);
            }).catch((e)=>{
                this.error = e.response
            })
        },
        OnFileChange(event){
            this.product.image = event.target.files[0];
            const image1 = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image1);
            reader.onload = e =>{
                this.previewImage = e.target.result;
            };
        },
    }
}
</script>

<style>

</style>