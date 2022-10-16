import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

const NoteInput = ({
  createNote,
  noteTitle,
  noteBody,
  noteTitleValue,
  noteBodyValue,
}) => {
  return (
    <form className="note-input" onSubmit={(e) => createNote(e)}>
      <h2>Buat Catatan</h2>
      <p className="note-input__title__char-limit">
        Sisa karakter: {50 - noteTitle.length}
      </p>
      <Input
        placeholder={"Ini adalah judul..."}
        value={noteTitle}
        changeValue={noteTitleValue}
      />
      <Textarea
        placeholder={"Tuliskan catatanmu disini..."}
        value={noteBody}
        changeValue={noteBodyValue}
      />
      <Button title={"Buat"} type={"submit"} />
    </form>
  );
};

export default NoteInput;
