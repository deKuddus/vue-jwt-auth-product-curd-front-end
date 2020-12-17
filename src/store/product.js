import axios from 'axios'
export default{
    namespaced: true,
  state: {
    products:null
  },
  mutations: {
    SET_PRODUCT(state,products){
        state.products = products
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
  }
}