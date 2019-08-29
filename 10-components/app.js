Vue.component('blog-button', {
  props: ['text'],

  template: `
    <button @click="handleClick">{{text}}</button>
  `,

  methods: {
    handleClick() {
      this.$emit('message')
    }
  },
})

Vue.component('blog-item', {
  props: ['data', 'index'],
  template: `
    <li>{{data}} <blog-button @message="handleMessage" text="进入"></blog-button></li>
  `,
  methods: {
    handleMessage() {
      console.log(this.index)
    }
  }
})

Vue.component('blog-list', {
  props: ['post'],
  data() {
    return {
      dataList: []
    }
  },
  template: `
    <ul>
      <blog-item 
        v-for="(value,index) in dataList" 
        :data="value" 
        :key="'key-'+index"
        :index="index"
      ></blog-item>
    </ul>
  `,
  watch: {
    post(value) {
      this.dataList.push(value)
    }
  }
})

Vue.component('blog-form', {
  data() {
    return {
      post: ''
    }
  },

  template: `
    <div>
      <textarea v-model="post" name="" id="" cols="30" rows="10"></textarea>
      <div>
        <blog-button @message="handleMessage" text="提交"></blog-button>
      </div>
    </div>
  `,

  methods: {
    handleMessage() {
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

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input 
      type="text"
      :value="value"
      @input="handleInput"
    />
  `,

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
})

var vm = new Vue({
  el: '#root',
  data: {
    text: 'test'
  },
})