import {Component } from 'react';
import GroceryForm from './GroceryForm';

class Grocery extends Component {
  state = { editing: false }
  thisThingHere = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }
  render() {
    const { editing } =this.state
    const { itemName, id, removeItem, updateItem } = this.props 
    return(
      <div>
        <h1>{itemName}</h1>
        <button onClick={() => removeItem(id)}>Delete</button>
        {
        editing ?
        <groceryForm {...this.props} thisThingHere={this.thisThingHere} />
        :
        <button onClick={() => this.thisThingHere()}>Edit</button>
       }
      </div>
    )
  }
}

export default Grocery;