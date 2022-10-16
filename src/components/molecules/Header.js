import React from "react";
import Input from "../atoms/Input";

const Header = ({ keyword, searchNotes }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Input
        value={keyword}
        placeholder={"cari catatan..."}
        changeValue={searchNotes}
      />
    </div>
  );
};

export default Header;
