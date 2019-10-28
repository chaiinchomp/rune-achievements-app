import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import AchievementDescription from "./CriteriaHeader";

SubtaskCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function SubtaskCriteria({ criteria }) {
    const [editMode, setEditMode] = useState(false);
    const [completionMap, setCompletionMap] = useState({});

    // HACK: for some reason updating the completion map state
    // doesn't trigger a re-render so doing it manually
    const [forceUpdate, setForceUpdate] = useState(true);

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
        setForceUpdate(!forceUpdate);
    };

    return (
        <React.Fragment>
            <AchievementDescription
                completedCount={updateCompletedCount(completionMap)}
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

function updateCompletedCount(completionMap) {
    let completedCount = 0;
    for (let [, value] of Object.entries(completionMap)) {
        if (value) {
            completedCount++;
        }
    }
    return completedCount;
}
