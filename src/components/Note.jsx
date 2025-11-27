// import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

// function Note(props) {
//   // function handleClick() {
//   //   props.onDelete(props.id);
//   // }

//   function handleClick() {
//     fetch(`http://localhost:5000/api/notes/${props.id}`, {
//       method: "DELETE"
//     }).then(() => props.onDelete(props.id));
//   }


//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button onClick={handleClick}><DeleteIcon/></button>
//     </div>
//   );
// }

// export default Note;

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    fetch(`http://10.104.127.116:5000/api/notes/${props.id}`, {
      method: "DELETE"
    })
      .then(() => props.onDelete(props.id))
      .catch(err => console.log(err));
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
