// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.devtools = true;

// 发送消息后滚动到底部
Vue.directive('scroll-bottom', function(el, bind, vNode){
    el.scrollTop = el.scrollHeight - el.clientHeight;
});

new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
});
