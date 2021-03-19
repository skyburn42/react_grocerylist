import { Component } from 'react';

class GroceryForm extends Component { 
  state = { itemName: "", complete: false }
  handleChange = (e) => {
    const { itemName, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ itemName: "", complete: false })
  }
  render() {
    const { itemName } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={itemName}
          name="itemName"
          onChange={this.handleChange}
          required
          placeholder="add an item"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default GroceryForm;