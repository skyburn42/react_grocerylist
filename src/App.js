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
      grocerys: grocerys.map( g => {
        if (g.id === id) {
          return {
            ...g, 
            complete: !g.complete
          }
        }
      
    removeItem = (id) => {
       const grocerys = this.state.grocerys.filter( c => {
        if (c.id !== id) {
          return c
        }
      })
      this.setState({ grocerys: [...grocerys] })
        } 

        return 
      })
    })
  }
    render() {
      const { grocerys } = this.state
      return (
        <>
          <GroceryList  
           grocerys={grocerys} 
           updateComplete={this.updateComplete} 
           removeItem={this.removeItem} />
          <GroceryForm addGrocery={this.addGrocery} />
          
          
        </>
        
      )
  }

}



export default App;
