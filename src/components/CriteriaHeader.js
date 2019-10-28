import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

CriteriaHeader.propTypes = {
    enableEditModeCallback: PropTypes.func,
    disableEditModeCallback: PropTypes.func,
    isEditMode: PropTypes.bool,
    completedCount: PropTypes.number,
    requiredCount: PropTypes.number
};

export default function CriteriaHeader({
    enableEditModeCallback,
    disableEditModeCallback,
    isEditMode,
    completedCount,
    requiredCount
}) {
    return (
        <Card.Subtitle>
            {isEditMode ? (
                <SaveButton disableEditModeCallback={disableEditModeCallback} />
            ) : (
                <EditButton enableEditModeCallback={enableEditModeCallback} />
            )}
            <div className="mb-2 small float-right">
                {completedCount}/{requiredCount}
            </div>
            <div className="mb-2 small">Criteria:</div>
        </Card.Subtitle>
    );
}
