// 全局组件，局部组件
// 组件/元素组成部分：
// 1、组件/元素名称
// 2、组件/元素属性
// 3、组件/元素的子元素(组件)

Vue.component('blog-button', {
  props: ['text'],
  template: `
    <button @click="handleClick">{{text2}}</button>
  `,

  computed: {
    text2() {
      return '点击' + this.text
    }
  },

  methods: {
    handleClick() {
      this.$emit('message')
    }
  }
})

Vue.component('blogItem', { //camel-case
  props: ['data', 'index'],
  template: `
    <li>
      {{data}}
      <blog-button @message="handleMessage" text="进入"></blog-button>
    </li>
  `,
  methods: {
    handleMessage() {
      console.log(index)
    }
  }
})

Vue.component('blog-list', { //kebab-case
  props: ['post'],
  data() {
    return {
      dataList: []
    }
  },
  template: `
    <ul>
      <blog-item 
        v-for="value,index in dataList" 
        :data="value" 
        :key="'key-' + index"
        :index="index"
      ></blog-item>
    </ul>
  `,
  watch: {
    post(newValue) {
      this.dataList.push(newValue)
    }
  }
})

Vue.component('BlogForm', { //parscel-case
  data() {
    return {
      post: ''
    }
  },

  template: `
    <div>
      <textarea name="" v-model="post" id="" cols="30" rows="10"></textarea>
      <div>
        <blog-button @message="handleMessage" text="提交"></blog-button>
      </div>
    </div>
  `,

  methods: {
    handleMessage(msg) {
      this.$emit('post', this.post)
      this.post = ''
    }
  }
})

Vue.component('blog', {
  data() {
    return {
      post: ''
    }
  },

  template: `
    <div>
      <h1>blog</h1>
      <hr/>
      <blog-list :post="post"></blog-list>
      <hr/>
      <blog-form @post="handlePost"></blog-form>
    </div>
  `,

  methods: {
    handlePost(post) {
      this.post = post
    }
  }
})

var vm = new Vue({
  el: '#root',
  data: {
    
  }
})