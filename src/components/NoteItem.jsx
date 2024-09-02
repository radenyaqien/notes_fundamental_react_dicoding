import NoteContent from "./NoteContent";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";

function NoteItem({ title, body, date, id, onDelete }) {
  return (
    <div className="note-item mb-3">
      <NoteContent title={title} date={date} body={body} id={id} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
      <hr></hr>
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
