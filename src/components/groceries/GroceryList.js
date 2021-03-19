import Grocery from './Grocery';
const GroceryList = ({ Groceries, updateComplete }) => {
  return (
    <>
      <h1>Groceries</h1>
      {
        <ul>
          { groceries.map( g => (
            <Grocery key={g.id} {...g} updateComplete={updateComplete} />
          ))}
        </ul>
      }
    </>
  )
}
export default GroceryList;