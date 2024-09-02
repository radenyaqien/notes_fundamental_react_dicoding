import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data.js";
import { ThemeConsumer } from "../ThemeContext.js";

function NoteList({ notes, onDelete}) {
  return (
    <ThemeConsumer>
      {({ theme }) => {
        return notes.length > 0 ? (
          <div className={"card text-bg-" + theme}>
            <div className={"card-header text-bg-" + theme}>
              <h2>{"Notes"}</h2>
            </div>
            <div className={"card-body text-bg-" + theme}>
              {notes.map((note) => (
                <NoteItem
                  key={note.id}
                  date={showFormattedDate(Date(note.createdAt))}
                  onDelete={onDelete}
                  {...note}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="card-header">
              <h2>Notes</h2>
            </div>
            <div className="card-body">
              <p>Tidak ada catatan</p>
            </div>
          </div>
        );
      }}
    </ThemeConsumer>
  );
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default NoteList;
