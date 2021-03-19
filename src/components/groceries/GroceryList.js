import Grocery from './Grocery';
const GroceryList = ({ grocerys, updateComplete }) => {
  return (
    <>
      <h1>Groceries</h1>
      {
        <ul>
          { grocerys.map( g => (
            <Grocery key={g.id} {...g} updateComplete={updateComplete} />
          ))}
        </ul>
      }
    </>
  )
}
export default GroceryList;