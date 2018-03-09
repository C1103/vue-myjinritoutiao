import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import video from './modules/video'
// import video from './modules/video'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {   
        home,
        video,
    },
    getters
})

export default store