import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao';
const article = {
    state: {
        articleInfo: {},
        pageLoading: false
    },
    actions: {
        getArticle ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.get('article/info', params)
                    .then( res => {
                        console.log(res)
                        commit('GETARTICLE', res.data.data)
                        resolve(res.data)
                    }).catch( err => {
                        reject(err)
                    })
            })
        }
    },
    mutations: {
        GETARTICLE (state, info) {
            state.articleInfo = info
        }
    }
}
export default article
