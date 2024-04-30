// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const Header = ({ todos, setTodos }) => {
//   let [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           let obj = {
//             id: uuidv4(),
//             todo: inputValue,
//           };
//           setTodos([...todos, obj]);
//           setInputValue("");
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// };

// export default Header;
