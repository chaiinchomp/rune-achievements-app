import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

ResetModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default function ResetModal({ show, onClose }) {
    const [showModal, setShowModal] = useState(show);

    useEffect(() => {
        setShowModal(show);
    }, [show]);

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Reset Achievement Log</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to reset your log data? This action cannot
                be reversed.
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="dark"
                    onClick={() => {
                        localStorage.clear();
                        onClose(true);
                    }}
                >
                    Reset Data
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        onClose(false);
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
