import React from "react";
import Header from "./components/molecules/Header";
import NoteBody from "./components/organisms/NoteBody";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archives: [],
      keyword: "",
      isSearchActive: false,
      noteTitle: "",
      noteBody: "",
    };

    this.addToArchive = this.addToArchive.bind(this);
    this.addToNotes = this.addToNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
    this.createNote = this.createNote.bind(this);
    this.noteBodyValue = this.noteBodyValue.bind(this);
    this.noteTitleValue = this.noteTitleValue.bind(this);
  }

  addToArchive(id) {
    this.setState((prev) => {
      let addArchive = prev.notes.filter((note) => note.id === id)[0];
      addArchive.archived = true;
      return {
        notes: prev.notes.filter((note) => note.id !== id),
        archives: [...prev.archives, addArchive],
      };
    });
  }

  addToNotes(id) {
    this.setState((prev) => {
      let addNotes = prev.archives.filter((archive) => archive.id === id)[0];
      addNotes.archived = false;
      return {
        archives: prev.archives.filter((archive) => archive.id !== id),
        notes: [...prev.notes, addNotes],
      };
    });
  }

  deleteNote(archived, id) {
    if (archived) {
      this.setState((prev) => {
        return {
          archives: prev.archives.filter((archive) => archive.id !== id),
        };
      });
    }
    if (!archived) {
      this.setState((prev) => {
        return {
          notes: prev.notes.filter((note) => note.id !== id),
        };
      });
    }
  }

  searchNotes(value) {
    this.setState((prev) => {
      return {
        keyword: value,
        isSearchActive: value ? true : false,
      };
    });
  }

  noteTitleValue(value) {
    if (this.state.noteTitle.length < 50 || value.length <= 50) {
      this.setState({
        noteTitle: value,
      });
    }
  }

  noteBodyValue(value) {
    this.setState({
      noteBody: value,
    });
  }

  createNote(e) {
    e.preventDefault();
    if (this.state.noteTitle.length && this.state.noteBody.length) {
      const newNotes = {
        id: Date.now(),
        title: this.state.noteTitle,
        body: this.state.noteBody,
        createdAt: new Date(),
        archived: false,
      };

      this.setState((prev) => {
        return {
          notes: [...prev.notes, newNotes],
          noteTitle: "",
          noteBody: "",
        };
      });
      return;
    }

    alert("fill all the fields");
  }

  render() {
    return (
      <>
        <Header keyword={this.state.keyword} searchNotes={this.searchNotes} />
        <NoteBody
          isSearchActive={this.state.isSearchActive}
          notes={this.state.notes}
          archives={this.state.archives}
          addToArchive={this.addToArchive}
          addToNotes={this.addToNotes}
          deleteNote={this.deleteNote}
          keyword={this.state.keyword}
          noteTitle={this.state.noteTitle}
          noteBody={this.state.noteBody}
          createNote={this.createNote}
          noteTitleValue={this.noteTitleValue}
          noteBodyValue={this.noteBodyValue}
        />
      </>
    );
  }
}

export default App;
