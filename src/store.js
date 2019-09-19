import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    pacakgeinfo:{},
    packagelist:[{id:1},{id:2}]
}
const mutations = {
    SAVE_PACAKGE_INFO(state,obj){
        state.pacakgeinfo = obj;
    },
    SAVE_PACKAGE_LIST(state,obj){
        state.packagelist = obj;
    }
}
const getters = {
    getPacakgeInfo(state){
        return state.pacakgeinfo
    }
}
const actions = {

}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
