import Vue from 'vue';
import axios from 'axios'
import router from '../router'
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        getRouter: null,
        isLogin: false
    },
    mutations: { //添加mutations
        login(state, payload) {
            axios.get('https://www.easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example/antrouter').then(res => {
                // getRouter = res.data.data.router //后台拿到路由
                state.getRouter = JSON.stringify(res.data.data.router);
                state.isLogin = payload;
            })
        },
        outlogin(state, payload) {
            state.isLogin = payload;
            state.getRouter = null;
            localStorage.clear();
            // router.push({
            //     name: 'login'
            // })
        }
    },
    plugins: [vuexLocal.plugin]
});

export default store;