import dailogBox from './src/index';
export default {
    install(Vue) {
        Vue.prototype.$dailog = dailogBox;
    },
};