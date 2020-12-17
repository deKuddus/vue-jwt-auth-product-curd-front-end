import axios from 'axios'
export default {
    namespaced: true,

  state: {
      token:null,
      user:null
  },
  mutations: {
        SET_TOKEN(state,token){
                state.token = token
        },
        SET_USER(state,user){
            state.user = user
        }
    },
  getters:{
    authenticated(state){
        return state.token && state.user
    },
    user(state){
        return state.user
    }
  },
  actions: {
      async logIn({dispatch},credentials){
        let response = await axios.post('auth/login',credentials)
        return dispatch('attemptLogin',response.data.token)
      },
      async attemptLogin({commit,state},token){
          if(token){
              commit('SET_TOKEN',token)
          }

          if(state.token == 'null'){
              return
          }
        try{
            let response = await axios.get('auth/token_user')
            
            commit('SET_USER',response.data)
        }catch(e){
            commit('SET_TOKEN',null)
            commit('SET_USER',null)
        }
      },
      signOut({commit}){
          return axios.post('auth/logout').then(()=>{
              commit('SET_TOKEN',null)
              commit('SET_USER',null)
          })
      },

      async register(_,credentials){
         let response = await axios.post('auth/register',credentials);
         return response;
      },
  },

}
