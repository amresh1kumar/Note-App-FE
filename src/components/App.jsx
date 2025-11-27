import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
  }

  useEffect(() => {
  fetch("http://localhost:5000/api/notes")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched Notes:", data);
      setNotes(data);
    })
    .catch(err => console.log(err));
}, []);


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })} */}

      {notes.map((noteItem) => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
