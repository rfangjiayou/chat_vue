/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: 'rfang',
            // img: 'dist/images/1.jpg'
            img: 'src/assets/1.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: '示例介绍',
                    // img: 'dist/images/2.png'
                    img: 'src/assets/2.png'
                },
                messages: [
                    {
                        content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的wechat示例，聊天记录保存在localStorge，并支持过滤联系人',
                        date: now
                    }, {
                        content: '项目地址: https://github.com/rfangjiayou/chat_vue',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'so丶O',
                    // img: 'dist/images/3.jpg'
                    img: 'src/assets/3.jpg'
                },
                messages: []
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    getters : {
        user: ({ user }) => user,
        filterKey: ({ filterKey }) => filterKey,
        session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId),
        // 过滤后的会话列表
        filterSessions: ({ sessions, filterKey }) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        },
        // 当前会话index
        currentSessionId: ({ currentSessionId }) => currentSessionId
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        // 搜索
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
    },
    actions : {
        initData ({ commit }) { commit('INIT_DATA') },
        sendMessage ({ commit }, content) { commit('SEND_MESSAGE', content) },
        selectSession ({ commit }, id) { commit('SELECT_SESSION', id) },
        search ({ commit }, value) { commit('SET_FILTER_KEY', value) }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;