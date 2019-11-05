import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Subtask from "./Subtask";
import CriteriaHeader from "./CriteriaHeader";
import {
    getCompletionStatus,
    updateCompletedCount,
    checkForUpdates,
    setAchievementCompleted
} from "../util/CompletionUtils";

MetaCriteria.propTypes = {
    uuid: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    forceUpdate: PropTypes.bool.isRequired,
    seriesId: PropTypes.string,
    seriesOrdinal: PropTypes.number
};

export default function MetaCriteria({
    uuid,
    criteria,
    onChange,
    forceUpdate,
    seriesId,
    seriesOrdinal
}) {
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

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={criteria.subtasks.length}
                showEditButton={false}
            />
            {criteria.subtasks.map(subtask => (
                <Subtask
                    key={subtask.uuid}
                    title={subtask.name}
                    description={subtask.description}
                    completed={completionMap[subtask.uuid] || false}
                />
            ))}
        </React.Fragment>
    );
}
