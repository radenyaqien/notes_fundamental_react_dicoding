import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn btn-secondary" onClick={() => onArchive(id)}>
      Archive / UnArchive
    </button>
  );
}
ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};
export default ArchiveButton;
