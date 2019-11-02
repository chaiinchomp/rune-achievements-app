import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import CriteriaHeader from "./CriteriaHeader";
import { isTaskComplete } from "../util/LocalStorageClient";

SimpleCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default function SimpleCriteria({ achievementId, criteria, onChange }) {
    const [editMode, setEditMode] = useState(false);
    const [complete, setComplete] = useState(isTaskComplete(criteria.taskId));

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const saveChangesCallback = () => {
        setEditMode(false);

        const newAchievementState = {};
        newAchievementState[achievementId] = complete;
        const newTaskState = {};
        newTaskState[criteria.taskId] = complete;
        onChange(newAchievementState, newTaskState);
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
                saveChangesCallback={saveChangesCallback}
                isEditMode={editMode}
                showEditButton
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
