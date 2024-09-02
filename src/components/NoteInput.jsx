import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.title, this.state.body);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  };

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            className="form-control"
            type="text"
            value={this.state.body}
            placeholder="Body"
            onChange={this.onBodyChangeEventHandler}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Tambah Catatan
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
