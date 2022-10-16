import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, addToArchive, addToNotes, deleteNote }) => {
  return (
    <>
      {!notes.length ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              addToArchive={addToArchive}
              addToNotes={addToNotes}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NotesList;
