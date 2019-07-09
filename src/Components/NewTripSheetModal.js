import React from 'react';
import Modal from 'react-modal';

const NewTripSheetModal = () => (
    <Modal
    isOpen={false}
    contentLabel="Modal for new trip sheet name"
    >
        <p>Add new trip sheet name here</p>
    </Modal>
)

export default NewTripSheetModal;