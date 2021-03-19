import { Component } from 'react' ;
import GroceryList from './components/groceries/GroceryList';
import GroceryForm from './components/groceries/GroceryForm';

class App extends Component {
  state = { grocerys : [
{ id:1, title: "apples", complete: false },
{ id:2, title: "oranges", complete: false },
{ id:3, title: "meat", complete: false },
   ]
  }

   getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
   addGrocery = (incommingGrocery) => {
     const { grocerys } =this.state
     const { title, complete } = incommingGrocery
     const newGrocery = { id: this.getUniqId(), title, complete }
     this.setState({ grocerys :[newGrocery, ...grocerys] })
   }

   updateComplete = (id) => {
    const { grocerys } = this.state
    this.setState({
      grocerys: grocerys.map( t => {
        if (t.id === id) {
          return {
            ...t, 
            complete: !t.complete
          }
        }


        return t
      })
    })
  }
    render() {
      const { grocerys } = this.state
      return (
        <>
          <GroceryList grocerys={grocerys} updateComplete={this.updateComplete} />
          <GroceryForm addGrocery={this.addGrocery} />
        </>
      )
  }

}



export default App;
