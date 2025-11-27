// import React, { useState, useEffect } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Fab } from "@mui/material";
// import { Zoom } from "@mui/material";

// function CreateArea(props) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   useEffect(() => {
//     fetch("http://localhost:5000/api/notes")
//       .then(res => res.json())
//       .then(data => setNote(data));
//   }, []);


//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   // function submitNote(event) {
//   //   props.onAdd(note);
//   //   setNote({
//   //     title: "",
//   //     content: ""
//   //   });
//   //   event.preventDefault();
//   // }

//   // function submitNote(event) {
//   //   event.preventDefault();

//   //   fetch("http://localhost:5000/api/notes", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(note),
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       props.onAdd(data);
//   //       setNote({ title: "", content: "" });
//   //     });
//   // }

//   function submitNote(e) {
//     e.preventDefault();

//     fetch("http://localhost:5000/api/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(note)
//     })
//       .then(res => res.json())
//       .then(savedNote => {
//         props.onAdd(savedNote);  // server response me ID hoti hai
//         setNote({ title: "", content: "" });
//       });
//   }


//   const expend = (() => {
//     setExpanded(true)
//   })


//   return (
//     <div>
//       <form className="create-note">
//         {isExpanded && (
//           <input
//             name="title"
//             onChange={handleChange}
//             value={note.title}
//             placeholder="Title"
//           />
//         )
//         }

//         <textarea
//           onClick={expend}
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows={isExpanded ? 3 : 1}
//         />
//         <Zoom in={isExpanded}>
//           <Fab onClick={submitNote}>
//             <AddIcon />
//           </Fab>
//         </Zoom>

//       </form>
//     </div>
//   );
// }

// export default CreateArea;


import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(savedNote => {
        props.onAdd(savedNote);
        setNote({ title: "", content: "" });
        setExpanded(false); // Reset after submit
      })
      .catch(err => console.log(err));
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}

      <textarea
        onClick={expand}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      />

      <Zoom in={isExpanded}>
        <Fab onClick={submitNote} size="small" color="primary">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;