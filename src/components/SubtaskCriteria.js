import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import AchievementDescription from "./CriteriaHeader";
import {
    isTaskComplete,
    setTaskComplete,
    setAchievementComplete
} from "../storage/LocalStorageClient";

SubtaskCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function SubtaskCriteria({ achievementId, criteria }) {
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

    const disableEditModeCallback = () => {
        setEditMode(false);
    };

    const toggleItemCompletionCallback = (itemId, isComplete) => {
        var curMap = completionMap;
        curMap[itemId] = isComplete;
        setCompletionMap(curMap);
        setTaskComplete(itemId);
        setCompletedCount(completedCount + (isComplete ? 1 : -1));
        setAchievementComplete(
            achievementId,
            completedCount >= criteria.requiredCount
        );
    };

    return (
        <React.Fragment>
            <AchievementDescription
                completedCount={completedCount}
                requiredCount={criteria.requiredCount}
                enableEditModeCallback={enableEditModeCallback}
                disableEditModeCallback={disableEditModeCallback}
                isEditMode={editMode}
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
