import { Button, Component, Input, P } from 'wecu';

export default class EditableTextField extends Component {
  private input = new Input();
  private toggleEdit = new Button('Edit');
  private editing = true;

  constructor() {
    super()

    this.input.styles = `
      box-sizing: border-box;
      width: 100%;
    `

    this.toggleEdit.element.addEventListener('click', () => {
      this.editing = !this.editing
      this.toggleEdit.children = this.editing ? 'Save' : 'Edit'

      this.rerender()
    })
  }

  render() {
    return [
      this.editing ? this.input : new P(this.input.element.value),
      this.toggleEdit
    ]
  }
}