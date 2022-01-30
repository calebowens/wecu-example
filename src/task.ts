import { Component, H2 } from 'wecu'
import EditableTextField from './editableTextField'

export default class Task extends Component {
  private description = new EditableTextField()
  private title: H2

  constructor (title: string) {
    super()

    this.title = new H2(title)
  }

  render () {
    return [
      this.title,
      this.description,
    ]
  }
}