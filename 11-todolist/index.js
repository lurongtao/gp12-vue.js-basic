var vm = new Vue({
  el: '#root',
  data: {
    currentId: '',
    task: '',
    isblur: true,
    todolist: [{
      id: 'task-1',
      name: '写作业',
      finished: false
    }]
  },

  methods: {
    handleKeyup(e) {
      this.todolist.unshift({
        id: 'task-' + (this.genId() + 1),
        name: this.task,
        finished: false
      })
      this.task = ''
    },

    handleInputClick(id) {
      this.currentId = id
    },

    handleClick(id) {
      let task = this.todolist.find((value, index) => {
        return value.id === id
      })
      task.finished = !task.finished
      task.id = 'task-' + (this.genId() + 1)
      this.todolist.sort((a, b) => {
        return b.id.split('-')[1] - a.id.split('-')[1]
      })
    },

    handleAncherClick(id) {
      this.todolist = this.todolist.filter((value, index) => {
        return value.id != id
      })
    },

    genId() {
      return this.todolist[0] && ~~this.todolist[0].id.split('-')[1] || 0
    }
  },

  computed: {
    finishedCount() {
      return this.todolist.filter((value, index) => {
        return value.finished
      }).length
    }
  },
})