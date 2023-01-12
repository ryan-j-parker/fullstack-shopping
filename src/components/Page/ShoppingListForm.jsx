// export default function ShoppingListForm() {
//   const [item, setItem] = useState('');
//   const [list, setList] = useState([]);

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     setList([...list, item]);
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         onFormSubmit(e);
//       }}
//     >
//       <textarea
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button type="submit">add item</button>
//     </form>
//   );
// }

export default function ShoppingListForm({
  body,
  onBodyChanged,
  onSubmit,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(body);
      }}
    >
      <textarea
        value={body}
        onChange={(e) => {
          onBodyChanged(e.target.value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
}
