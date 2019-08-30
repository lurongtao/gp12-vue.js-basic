const Child = {
  template: `
    <div>
      <slot :user="user" :word="word">
        <div>
          {{user.lastname}}
        </div>
      </slot>
      <slot name="head" :message="message"></slot>
    </div>
  `,

  data() {
    return {
      user: {
        firstname: 'wen',
        lastname: 'junhao'
      },
      word: 'hello',
      message: 'yeap'
    }
  }
}

var vm = new Vue({
  el: '#root',
  data: {
    hello: 'hi',
    obj: {
      a: 0,
      b: 1,
      c: 2
    },
    othername: 'head'
  },
  components: {
    Child
  }
})