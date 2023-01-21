import ShoppingItem from './ShoppingItem';

// import { useState } from 'react';

// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           value={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         {checked ? 'done!' : 'mark as done'}
//       </label>
//     </>
//   );
// }

export default function ShoppingList({
  shoppingList,
  onItemDoneChanged,
}) {
  return (
    <ol>
      {shoppingList.map((item) => {
        return (
          <li key={item.id}>
            <ShoppingItem
              item={item}
              onDoneChanged={(done) =>
                onItemDoneChanged(item.id, done)
              }
            />
            {/* <Checkbox 
              onChange={(e) => isDone(e.target.value)}
            /> */}
          </li>
        );
      })}
    </ol>
  );
}
