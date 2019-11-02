import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import CriteriaHeader from "./CriteriaHeader";
import { isTaskComplete } from "../util/LocalStorageClient";

SubtaskCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default function SubtaskCriteria({ achievementId, criteria, onChange }) {
    const [editMode, setEditMode] = useState(false);
    const [completionMap, setCompletionMap] = useState(
        getCompletionStatus(criteria.subtasks)
    );
    const [completedCount, setCompletedCount] = useState(
        updateCompletedCount(completionMap)
    );

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const saveChangesCallback = () => {
        setEditMode(false);

        const newAchievementState = {};
        newAchievementState[achievementId] =
            completedCount >= criteria.requiredCount;
        onChange(newAchievementState, completionMap);
    };

    const toggleItemCompletionCallback = (itemId, isComplete) => {
        var curMap = completionMap;
        curMap[itemId] = isComplete;
        setCompletionMap(curMap);
        setCompletedCount(completedCount + (isComplete ? 1 : -1));
    };

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={criteria.requiredCount}
                enableEditModeCallback={enableEditModeCallback}
                saveChangesCallback={saveChangesCallback}
                isEditMode={editMode}
                showEditButton
            />
            {criteria.subtasks.map(subtask => (
                <Subtask
                    key={subtask.taskId}
                    taskId={subtask.taskId}
                    description={subtask.name}
                    imgUrl={subtask.iconUrl}
                    isEditMode={editMode}
                    toggleItemCompletionCallback={toggleItemCompletionCallback}
                    completed={completionMap[subtask.taskId] || false}
                />
            ))}
        </React.Fragment>
    );
}

function getCompletionStatus(tasks) {
    const completionMap = {};
    tasks.forEach(task => {
        completionMap[task.taskId] = isTaskComplete(task.taskId);
    });
    return completionMap;
}

function updateCompletedCount(completionMap) {
    let completedCount = 0;
    for (let [, value] of Object.entries(completionMap)) {
        if (value) {
            completedCount++;
        }
    }
    return completedCount;
}
