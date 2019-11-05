import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Subtask from "./Subtask";
import CriteriaHeader from "./CriteriaHeader";
import {
    getCompletionStatus,
    updateCompletedCount,
    setAchievementCompleted,
    checkForUpdates
} from "../util/CompletionUtils";

SubtaskCriteria.propTypes = {
    uuid: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    forceUpdate: PropTypes.bool.isRequired,
    seriesId: PropTypes.string,
    seriesOrdinal: PropTypes.number
};

export default function SubtaskCriteria({
    uuid,
    criteria,
    onChange,
    forceUpdate,
    seriesId,
    seriesOrdinal
}) {
    const [editMode, setEditMode] = useState(false);
    const [completionMap, setCompletionMap] = useState(
        getCompletionStatus(criteria.subtasks)
    );
    const [completedCount, setCompletedCount] = useState(
        updateCompletedCount(completionMap)
    );

    useEffect(() => {
        const { foundUpdates, updatedMap, updatedCount } = checkForUpdates(
            completionMap
        );
        if (foundUpdates) {
            setCompletionMap(updatedMap);
            setCompletedCount(updatedCount);

            const newAchievementState = setAchievementCompleted(
                uuid,
                completedCount >= criteria.requiredCount,
                seriesId,
                seriesOrdinal
            );
            onChange(newAchievementState, {});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceUpdate]);

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const saveChangesCallback = () => {
        setEditMode(false);

        const newAchievementState = setAchievementCompleted(
            uuid,
            completedCount >= criteria.requiredCount,
            seriesId,
            seriesOrdinal
        );
        onChange(newAchievementState, completionMap);
    };

    const toggleItemCompletionCallback = (uuid, isComplete) => {
        var curMap = completionMap;
        curMap[uuid] = isComplete;
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
                    key={subtask.uuid}
                    uuid={subtask.uuid}
                    description={subtask.name}
                    imgUrl={subtask.iconUrl}
                    isEditMode={editMode}
                    toggleItemCompletionCallback={toggleItemCompletionCallback}
                    completed={completionMap[subtask.uuid] || false}
                />
            ))}
        </React.Fragment>
    );
}
