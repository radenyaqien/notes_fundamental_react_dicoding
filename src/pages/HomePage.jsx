import NoteList from "../components/NoteList";

import React from "react";
import AddNoteForm from "../components/AddNotesForm";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }
  async componentDidMount() {
    this.getActiveNotesAndUpdateState();
  }
  render() {
    return (
      <div className="container d-flex flex-column">
        <div className="d-flex bd-highlight">
          <div className="col-md-4 p-2">
            <AddNoteForm onSuccess={this.getActiveNotesAndUpdateState} />
          </div>
          <div className="col-md-8 p-2">
            <NoteList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveNoteHandler}
            />
            
          </div>
        </div>
      </div>
    );
  }

  getActiveNotesAndUpdateState = async () => {
    const { error, data } = await getActiveNotes();

    if (!error) {
      this.setState(() => {
        return {
          notes: data,
        };
      });
    }
  };

  onArchiveNoteHandler = async (id) => {
    const { error } = await archiveNote(id);

    if (!error) {
      this.getActiveNotesAndUpdateState();
    }
  };
  onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      this.getActiveNotesAndUpdateState();
    }
  };
}

export default HomePage;
