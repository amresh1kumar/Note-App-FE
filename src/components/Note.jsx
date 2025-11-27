import React from "react";

function Note(props) {
  // function handleClick() {
  //   props.onDelete(props.id);
  // }

  function handleClick() {
    fetch(`http://localhost:5000/api/notes/${props.id}`, {
      method: "DELETE"
    }).then(() => props.onDelete(props.id));
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
