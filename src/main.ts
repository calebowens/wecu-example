import { Component, createElement, P, Button, Observable, Div } from 'wecu'
import CreateTask from './createTask'
import Task from './task'

export default class Root extends Component {
  private tasks: Task[] = []
  private taskCreator = new CreateTask()

  styles = `
    :host {
      display: block;
      background-color: rgb(45, 41, 51);
      height: 100%;
      width: 400px;
      margin: 0 auto;
    }
  `

  constructor() {
    super()

    this.taskCreator.task.onUpdate((task) => {
      // To stop recursive calling, check if task is undefined and if so, stop
      if (!task) return

      // Add the task to task list
      this.tasks.push(task)

      // Set taskCreator's task value to undefined
      this.taskCreator.task.value = undefined

      // Re render list
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