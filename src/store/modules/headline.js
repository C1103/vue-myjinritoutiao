import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao';

const headline = {
  state: {
    List:[],
  },
  mutations:{
    HEADLINE(state,res){
      state.List=res;
    }
  },
  actions:{
    getHeadlineList({commit}){
      axios.get("/headline/list").then(data=>{
        // console.log(data)
        let res= data.data.data.data.list;
        commit("HEADLINE",res)
      })
    }
  },    
}
export default headline