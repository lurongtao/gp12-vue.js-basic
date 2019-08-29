var vm = new Vue({
  el: '#root',
  data: {
    username: 'admin',
    content: 'line \n line \n line',
    checked: 'yesyes',
    colleage: {
      address: '河南',
      name: '河南大学'
    },
    hobbies: ['movies'],
    gender: 'boy',
    city: '请选择',
    cities: [
      { text: '北京', value: '010' },
      { text: '上海', value: '020' },
      { text: '深圳', value: '030' }
    ]
  }
})