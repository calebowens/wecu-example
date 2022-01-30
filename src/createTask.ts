import { Button, Component, Input, Observable } from 'wecu'
import Task from './task'

export default class CreateTask extends Component {
  private addTask = new Button('Create Task')
  private input = new Input()
  public task = new Observable<Task | undefined>(undefined)

  constructor() {
    super()

    this.addTask.element.addEventListener('click', () => {
      this.task.value = new Task(this.input.element.value)

      this.input.element.value = ''
    })
  }

  render() {
    return [
      this.input,
      this.addTask,
    ]
  }
}