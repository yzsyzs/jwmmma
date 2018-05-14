import Vue from 'vue';
import dailogVue from './dailog.vue';
const defaults = {
    show:false,
    text:'',
    duration:'3000',
    type:''
};
const dailogVueConstructor = Vue.extend(dailogVue);
dailogVueConstructor.prototype.close = function() {
    var vm=this;
    this.$on('after-leave', _ => {
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
        }
        this.$destroy();
    });
    vm.show = false;

};
const dailogBox = (options = {}) => {
    options = Object.assign({}, defaults, options);
    let parent = document.body ;
    let instance = new dailogVueConstructor({
        el: document.createElement('div'),
        data: options
    });
    console.log(instance)
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.show = true;
        setTimeout(function(){
            instance.close();
        },options.duration)
    });
    return instance;
};

export default dailogBox;