import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao';

const video = {
  state: {
    List:[],
  },
  mutations:{
    VIDEOLIST(state,res){
      state.List=res;
    }
  },
  actions:{
    getVideoList({commit}){
      axios.get("/video/list").then(data=>{
        console.log(data)
        let res= data.data.data;
        commit("VIDEOLIST",res)
      })
    }
  },    
}
export default video