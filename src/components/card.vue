<template>
<div class="card">
    <header>
        <img class="avatar" width="40" height="40" :alt="this.user.name" :src="this.user.img">
        <p class="name">{{this.user.name}}</p>
    </header>
    <footer>
        <input class="search" type="text" placeholder="search user..." @keyup="onKeyup">
    </footer>
</div>
</template>

<script>

export default {
    computed:{
        user () {
            return this.$store.getters.user;
        }
    },
    methods: {
        onKeyup (e) {    //| debounce 150
            this.$store.dispatch('search', e.target.value);
        }
    }
};
</script>

<style scoped lang="less">
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;

    footer {
        margin-top: 10px;
    }

    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
}
</style>