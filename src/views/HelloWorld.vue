<template>
  <div class="wapper">
    {{ msg  }}
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      console.info('login');
      this.$store.commit('login', true);
      if (this.$store.state.isLogin) {
        this.$router.push({
          path: '/dashboard'
        }) 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
