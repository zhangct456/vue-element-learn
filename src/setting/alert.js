import alertVue from '@/components/Alert.vue';
import Vue from 'vue'
//参数配置
const defaults = {
    alertFlag:false,
    text:'',
    title:'温馨提示',
    callback: function(){}
};

let alertVueLoading; // 当前弹框，判断是否有弹框存在
const alertVueConstructor = Vue.extend(alertVue);
//这里关闭的时候返回promise
alertVueConstructor.prototype.close = function() {
    var vm=this;
    alertVueLoading=null;
    var promise=new Promise(function(resolve,reject){
            if (vm.$el && vm.$el.parentNode) {
                vm.$el.parentNode.removeChild(vm.$el);
            }
            resolve();
            vm.$destroy();
            vm.alertFlag = false;
    })
    return promise
};
const alertBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    console.log(options);
    options = Object.assign({}, defaults, options);

    let parent = document.body ;
   //没有关闭不允许新开
    if(alertVueLoading){
      return alertVueLoading
    }
    let instance = new alertVueConstructor({
      el: document.createElement('div'),
      data: options
    });
  
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.alertFlag = true;
    });
    alertVueLoading=instance
    return instance;
  };
  
  export default alertBox;