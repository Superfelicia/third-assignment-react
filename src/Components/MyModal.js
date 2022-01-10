import {useState} from 'react';
import Modal from 'react-modal';

function MyModal() {
    const [modalOpen, setModalOpen] = useState(false);

    function setModalOpenTrue() {
        setModalOpen(true);
    }

    function setModalOpenFalse() {
        setModalOpen(false);
    }

    return (
        <div className="modal-state">
            <button onClick={setModalOpenTrue}>Open Modal</button>
            <div className="modal-window">
                <Modal isOpen={modalOpen}>
                    <button onClick={setModalOpenFalse}>x</button>
                </Modal>
            </div>
        </div>
    );
}

export default MyModal;
