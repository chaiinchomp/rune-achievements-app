import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { saveLocalStorageToDisk } from "../util/IoUtils";

ExportModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default function ExportModal({ show, onClose }) {
    const [showModal, setShowModal] = useState(show);

    useEffect(() => {
        setShowModal(show);
    }, [show]);

    return (
        <Modal show={showModal} onHide={onClose} variant="dark">
            <Modal.Header closeButton>
                <Modal.Title>Backup Achievement Log</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button onClick={saveLocalStorageToDisk}>Save backup</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
