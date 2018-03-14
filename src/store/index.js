import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import video from './modules/video'
import headline from './modules/headline'
import article from './modules/article'
// import video from './modules/video'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {   
        home,
        video,
        headline,
        article
    },
    getters
})

export default store