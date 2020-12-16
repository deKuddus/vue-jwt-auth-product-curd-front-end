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
                            <form role="form">
                                <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
    components:{
        Sidebar,
        Footer
    }
}
</script>

<style>

</style>