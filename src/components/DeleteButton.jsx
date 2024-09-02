import PropTypes from "prop-types"


function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn btn-danger me-2"  onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}
DeleteButton.propTypes ={
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default DeleteButton;
