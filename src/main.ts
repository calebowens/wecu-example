import { Component, createElement, P, Button, Observable, Div } from 'wecu'
import CreateTask from './createTask'
import Task from './task'

export default class Root extends Component {
  private tasks: Task[] = []
  private taskCreator = new CreateTask()

  constructor() {
    super()

    this.taskCreator.task.onUpdate((task) => {
      if (!task) return

      this.tasks.push(task)

      this.taskCreator.task.value = undefined

      this.rerender()
    })
  }

  render() {
    return [
      this.taskCreator,
      ...this.tasks
    ]
  }
}

createElement(Root, 'x-app')