import React from "react";
import Modal from "react-modal";

class NewTripSheetModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleAddNewPerson = () => {

  }
  render() {
    return (
      <Modal
        className="new-trip-modal"
          isOpen={this.props.isModalOpen}
          contentLabel="Modal for new trip sheet name"
        >
          <form>
          <h3><label htmlFor="new-trip">Name your trip:</label></h3>
          <input type="text" id="new-trip" placeholder="Name your trip" required />
          <h3 className="add-new-person">Add Person</h3>
          <input type="text" id="new-trip" placeholder="Add your/frined's name" required />
          <p onClick={this.handleAddNewPerson}>Add new person</p>
          <button onSubmit={this.props.closeModal}>Add trip sheet</button>
          </form>
           </Modal>
    )
  }
  
}

export default NewTripSheetModal;
