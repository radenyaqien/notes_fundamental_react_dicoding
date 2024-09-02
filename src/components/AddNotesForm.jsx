import NoteInput from "./NoteInput";
import { addNote } from "../utils/network-data";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../ThemeContext";

function AddNoteForm({ onSuccess }) {
  const onAddNoteHandler = async (title, body) => {
    const { error } = await addNote({ title, body });

    if (!error) {
      onSuccess();
    }
  };
  return (
    <ThemeConsumer>
      {({ theme }) => {
        return (
          <div className={"card text-bg-" + theme}>
            <div className={"card-header text-bg-" + theme}>
              <h2>Create New Note</h2>
            </div>
            <div className="card-body">
              <NoteInput addNote={onAddNoteHandler} />
            </div>
          </div>
        );
      }}
    </ThemeConsumer>
  );
}

AddNoteForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default AddNoteForm;
