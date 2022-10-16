import React from "react";
import { showFormattedDate } from "../../utils";
import ActionButton from "../atoms/ActionButton";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  addToArchive,
  addToNotes,
  deleteNote,
}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">{title}</p>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <ActionButton
          buttonStyle={"note-item__delete-button"}
          title={"delete"}
          action={() => deleteNote(archived, id)}
        />
        {!archived ? (
          <ActionButton
            buttonStyle={"note-item__archive-button"}
            title={"Arsipkan"}
            action={() => addToArchive(id)}
          />
        ) : (
          <ActionButton
            buttonStyle={"note-item__archive-button"}
            title={"Pindahkan"}
            action={() => addToNotes(id)}
          />
        )}
      </div>
    </div>
  );
};

export default NoteItem;
