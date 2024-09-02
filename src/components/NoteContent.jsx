import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function NoteContent({ title, date, body,id }) {
  return (
    <div className="note-item__content">
      <Link to={"note/"+id}> <h4 className="fw-bold">{title}</h4></Link>
      <p className="note-item__date">{date}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteContent.propTypes = {
  title : PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default NoteContent;
