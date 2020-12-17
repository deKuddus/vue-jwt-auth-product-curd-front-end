import axios from 'axios'
export default{
    namespaced: true,
  state: {
    products:null
  },
  mutations: {
    SET_PRODUCT(state,products){
        state.products = products
    },
    DELETE_PRODUCT(state, id){
      let index = state.products.findIndex(product => product.id == id)
      state.products.splice(index, 1)
     },
     SET_SINGLE_PRODUCT(state, product){
        state.singleItem = product
    }
  },
  getters:{
    productlist(state){
        return state.products
    }
  },
  actions: {
    async storeProduct(_,product){
        let response = await axios.post('product/store',product);
        return response.data;
     },

     async readProduct({commit}){
        let response =  await axios.get('product/list');
        commit('SET_PRODUCT',response.data)
     },


     async deleteProductAction({commit},product_id){
       return await axios.get('product/delete/'+product_id).then((res)=>{
          commit('DELETE_PRODUCT',product_id)
          return res.data;
       }).catch((e)=>{
         console.log(e)
       })
     },

     async updateProduct(_,product){
      let response = await axios.post('product/update',product);
      return response.data;
   },
  }
}