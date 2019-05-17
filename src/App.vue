<script>
// import { actions } from './store';

import card from 'components/card';
import list from 'components/list';
import writeText from 'components/text';
import message from 'components/message';

export default {
    components: { card, list, writeText, message },
    /* vuex: {
        actions: actions
    }, */
    created () {
        // this.initData();
        this.$store.dispatch('initData');
    }
}
</script>

<template>
<div id="mainContainer">
    <div class="sidebar">
        <card></card>
        <list></list>
    </div>
    <div class="main">
        <message></message>
        <writeText></writeText>
    </div>
</div>
</template>

<style lang="less" scoped>
#mainContainer {
    margin: 100px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
