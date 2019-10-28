import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import CriteriaHeader from "./CriteriaHeader";

SimpleCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function SimpleCriteria({ criteria }) {
    const [editMode, setEditMode] = useState(false);
    const [complete, setComplete] = useState(false);

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const disableEditModeCallback = () => {
        setEditMode(false);
    };

    const toggleItemCompletionCallback = (itemId, isComplete) => {
        setComplete(isComplete);
    };

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={complete ? 1 : 0}
                requiredCount={1}
                enableEditModeCallback={enableEditModeCallback}
                disableEditModeCallback={disableEditModeCallback}
                isEditMode={editMode}
            />
            <Subtask
                taskId={criteria.taskId}
                description={criteria.name}
                imgUrl={criteria.iconUrl}
                isEditMode={editMode}
                completed={complete}
                toggleItemCompletionCallback={toggleItemCompletionCallback}
            />
        </React.Fragment>
    );
}
