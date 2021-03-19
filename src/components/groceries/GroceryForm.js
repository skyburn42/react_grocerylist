import { Component } from 'react';

class GroceryForm extends Component { 
  state = { title: "", complete: false }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGrocery(this.state)
    this.setState({ title: "", complete: false })
  }
  render() {
    const { title } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          name="title"
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