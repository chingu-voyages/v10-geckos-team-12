import React from "react";
import Modal from "react-modal";

function NewTripSheetModal(props) {
  return (
    <Modal
      className="new-trip-modal"
        isOpen={props.isModalOpen}
        contentLabel="Modal for new trip sheet name"
      >
        <label htmlFor="new-trip">Name your trip:</label>
        <p className="add-new-person">Add Person</p>
        <input type="text" id="new-trip" />
        <button onClick={props.closeModal}>Add trip sheet</button>
      </Modal>
  )
}

export default NewTripSheetModal;
