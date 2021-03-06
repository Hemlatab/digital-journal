import React from "react";
import Button from "./Button";
import "./AddJournalForm.css";

const AddJournalForm = props => {
  const { handleChange, handleSubmit, title, body, isUpdate, id } = props;
  return (
    <>
      <div className="home-content">
        <main className="container">
          <div className="col-1">Save all your ideas in one place.</div>
          <div className="col-2"></div>
        </main>
      </div>
      <form onSubmit={event => handleSubmit(event, id)}>
        <h2 className="note-title">Create a Note</h2>
        <input
          type="text"
          className="journal-title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />
        <span className="summary">
          This should be a short summary of your note.
        </span>
        <br />

        <textarea
          rows="5"
          placeholder="Body"
          name="body"
          value={body}
          onChange={handleChange}
        ></textarea>

        <p className="body-para">
          Use the form above to create a post. Make sure you fill the required
          title and body field and then press submit.
        </p>
        <Button label={isUpdate ? "Update" : "Submit"} />
      </form>
    </>
  );
};
export default AddJournalForm;
