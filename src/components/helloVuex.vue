<template>
  <div class="helloVuex">
    <h1>{{ msg }}</h1>
    <a href="https://blog.csdn.net/qq_56989560/article/details/124706021" target="blank">参考连接</a>
    <hr />
    <h2>State</h2>
    <h3>Vuex.Store 下是getters所以 引用 getters</h3>
    <p>$store.getters.variant ：{{ $store.getters.variant }}</p>

    <h3>注意：当前组件需要的全局数据，映射为当前组件computed属性</h3>
    <p>variant: {{ variant }}</p>
    <hr />
    <h2>Mutations</h2>
    <h3>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：</h3>
    <p>
      <button @click="mutationBtn1">增加store中count:{{ $store.getters.count }}</button>
      <button @click="mutationBtn2">减少store中count:{{ $store.getters.count }}</button>
    </p>
    <hr />
    <h2>Actions</h2>
    <h3>Action和Mutation相似，Mutation 不能进行异步操作，若要进行异步操作，就得使用Action:</h3>
    <p>
      <button @click="actionBtn1">增加store中count:{{ $store.getters.count }}</button>
      <button @click="actionBtn2">减少store中count:{{ $store.getters.count }}</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'helloVuex',
  props: {
    msg: String
  },
  created() {
    console.log('this.$store.getters.variant', this.$store.getters.variant)
  },
  computed: {
    ...mapState({
      variant: state => state.vuexTest.variant
    })
  },
  methods: {
    // ...mapMutations(['testMutation']),
    // ...mapActions(['addcount']),
    ...mapMutations({ addMutation: 'vuexTest/addMutation', reduceMutation: 'vuexTest/reduceMutation' }),
    ...mapActions({ addActions: 'vuexTest/addActions', reduceActions: 'vuexTest/reduceActions' }),
    actionBtn1() {
      // 都可使用！！！！！
      // 调用action上的异步函数
      // this.$store.dispatch('vuexTest/addcount', 10) //每次加十
      // 使用辅助函数
      this.addActions(10)
    },
    actionBtn2() {
      // 都可使用！！！！！！
      // 调用action上的异步函数
      // this.$store.dispatch('vuexTest/addcount', 10) //每次加十
      // 使用辅助函数
      this.reduceActions()
    },
    mutationBtn1() {
      // 都可使用！！！！！
      // 调用mutation上的同步函数
      // this.$store.commit('vuexTest/addMutation', 11)
      // 使用辅助函数
      this.addMutation(10)
    },
    mutationBtn2() {
      // 都可使用！！！！！！
      // 调用mutation上的同步函数
      // this.$store.commit('vuexTest/reduceMutation')
      // 使用辅助函数
      this.reduceMutation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
