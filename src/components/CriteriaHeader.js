import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

CriteriaHeader.propTypes = {
    enableEditModeCallback: PropTypes.func,
    saveChangesCallback: PropTypes.func,
    isEditMode: PropTypes.bool,
    showEditButton: PropTypes.bool,
    completedCount: PropTypes.number,
    requiredCount: PropTypes.number
};

export default function CriteriaHeader({
    enableEditModeCallback,
    saveChangesCallback,
    isEditMode,
    showEditButton,
    completedCount,
    requiredCount
}) {
    return (
        <Card.Subtitle>
            {showEditButton &&
                (isEditMode ? (
                    <SaveButton saveChangesCallback={saveChangesCallback} />
                ) : (
                    <EditButton
                        enableEditModeCallback={enableEditModeCallback}
                    />
                ))}
            <div className="mb-2 small float-right">
                {completedCount}/{requiredCount}
            </div>
            <div className="mb-2 small">Criteria:</div>
        </Card.Subtitle>
    );
}
