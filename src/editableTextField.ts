import { Button, Component, Input, P, Observable } from 'wecu';

export default class EditableTextField extends Component {
  private input = new Input();
  private toggleEdit = new Button('Edit');
  private editing = false;

  public value = new Observable('')

  constructor() {
    super()

    this.input.element.addEventListener('input', (e: Event) => {
      this.value.value = (e.target as HTMLInputElement).value
    })

    this.toggleEdit.element.addEventListener('click', () => {
      this.editing = !this.editing
      this.toggleEdit.element.innerText = this.editing ? 'Save' : 'Edit'

      this.rerender()
    })
  }

  render() {
    return [
      this.toggleEdit,
      this.editing ? this.input : new P(this.value.value)
    ]
  }
}