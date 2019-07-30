import React from "react";
import NewTripSheetModal from "./NewTripSheetModal";

class AddNewTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.handleNewTrip = this.handleNewTrip.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleNewTrip = () => {
    this.setState(() => ({ isModalOpen: true }));
  };
  handleCloseModal = e => {
    e.preventDefault();
    this.setState(() => ({ isModalOpen: false }));
  };
  render() {
    return (
      <div className="new-trip">
        <button onClick={this.handleNewTrip} className="new-trip-button">
          Add new trip!
        </button>
        <NewTripSheetModal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default AddNewTrip;
