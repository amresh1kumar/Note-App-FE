import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then(res => res.json())
      .then(data => setNote(data));
  }, []);


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // function submitNote(event) {
  //   props.onAdd(note);
  //   setNote({
  //     title: "",
  //     content: ""
  //   });
  //   event.preventDefault();
  // }

  // function submitNote(event) {
  //   event.preventDefault();

  //   fetch("http://localhost:5000/api/notes", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(note),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       props.onAdd(data);
  //       setNote({ title: "", content: "" });
  //     });
  // }

  function submitNote(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(savedNote => {
        props.onAdd(savedNote);  // server response me ID hoti hai
        setNote({ title: "", content: "" });
      });
  }



  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
