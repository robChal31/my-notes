import React from "react";
import NoteInput from "../molecules/NoteInput";
import NotesList from "../molecules/NotesList";

const NoteBody = ({
  notes,
  archives,
  addToArchive,
  addToNotes,
  deleteNote,
  isSearchActive,
  keyword,
  noteBody,
  noteTitle,
  createNote,
  noteTitleValue,
  noteBodyValue,
}) => {
  notes = !isSearchActive
    ? notes
    : notes.filter((note) => {
        const re = new RegExp(keyword, "i");
        return note.title.match(re);
      });
  archives = !isSearchActive
    ? archives
    : archives.filter((archive) => {
        const re = new RegExp(keyword, "i");
        return archive.title.match(re);
      });
  return (
    <div className="note-app__body">
      <NoteInput
        createNote={createNote}
        noteBody={noteBody}
        noteTitle={noteTitle}
        noteBodyValue={noteBodyValue}
        noteTitleValue={noteTitleValue}
      />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes}
        addToArchive={addToArchive}
        addToNotes={addToNotes}
        deleteNote={deleteNote}
      />
      <h2>Arsip</h2>
      <NotesList
        notes={archives}
        addToArchive={addToArchive}
        addToNotes={addToNotes}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default NoteBody;
