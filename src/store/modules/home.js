import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao';

const home = {
  state: {
    List:[],
  },
  mutations:{
    HOMELIST(state,res){
      state.List=res;
    }
  },
  actions:{
    getHomeList({commit}){
      axios.get("/home/list").then(data=>{
        console.log(data)
        let res= data.data.data;
        commit("HOMELIST",res)
      })
    }
  },    
}
export default home