import React from "react";
import Modal from "react-modal";

class NewTripSheetModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  handleAddNewTrip() {}
  render() {
    return (
      <Modal
      className="new-trip-modal"
        isOpen={false}
        contentLabel="Modal for new trip sheet name"
      >
        <label htmlFor="new-trip">Name your trip:</label>
        <input type="text" id="new-trip" />
        <button>Add trip sheet</button>
      </Modal>
      
    );
  }
}

export default NewTripSheetModal;

// const state = {
//   expenseSheets: ["expenseSheet1", "expenseSheet2"]
// };
