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

    const toggleItemCompletionCallback = isComplete => {
        setComplete(isComplete);
    };

    return (
        <React.Fragment>
            <CriteriaHeader
                enableEditModeCallback={enableEditModeCallback}
                disableEditModeCallback={disableEditModeCallback}
                isEditMode={editMode}
            />
            <Subtask
                description={criteria.name}
                imgUrl={criteria.iconUrl}
                showOutlines={editMode}
                isEditMode={editMode}
                completed={complete}
                toggleItemCompletionCallback={toggleItemCompletionCallback}
            />
        </React.Fragment>
    );
}
