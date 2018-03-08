import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao';

const home = {
  state: {
    List:[]
  },
  mutations:{
    GETCHANNELS(state,res){
      state.List=res;
    }
  },
  actions:{
    getChannels({commit}){
      axios.get("/home/list").then(data=>{
        console.log(data)
        let res= data.data.myList;
        commit("GETCHANNELS",res)
      })
    }
  },    
}
export default home