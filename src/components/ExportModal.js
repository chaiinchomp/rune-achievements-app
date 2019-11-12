import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ButtonToolbar } from "react-bootstrap";
import { FilePicker } from "react-file-picker";
import {
    saveLocalStorageToFile,
    loadLocalStorageFromFile
} from "../util/IoUtils";

ExportModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default function ExportModal({ show, onClose }) {
    const [showModal, setShowModal] = useState(show);
    const [errorText, setErrorText] = useState("");
    const [successText, setSuccessText] = useState("");

    useEffect(() => {
        setShowModal(show);
    }, [show]);

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Import/Export Achievement Log</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Backup your achievement log data, or load a previously exported
                log:
                <ButtonToolbar className="d-flex justify-content-center">
                    <Button
                        className="m-2"
                        variant="dark"
                        onClick={saveLocalStorageToFile}
                    >
                        Export
                    </Button>
                    <FilePicker
                        onChange={FileObject => {
                            setErrorText("");
                            loadLocalStorageFromFile(FileObject);
                            setSuccessText(
                                "Successfully imported achievement log."
                            );
                        }}
                        onError={errMsg => {
                            setSuccessText("");
                            setErrorText(errMsg);
                        }}
                    >
                        <Button variant="dark" className="m-2">
                            Import
                        </Button>
                    </FilePicker>
                </ButtonToolbar>
                {errorText !== "" && <p className="text-danger">{errorText}</p>}
                {successText !== "" && (
                    <p className="text-success">{successText}</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setErrorText("");
                        setSuccessText("");
                        onClose();
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
