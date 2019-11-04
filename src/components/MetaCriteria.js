import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Subtask from "./Subtask";
import CriteriaHeader from "./CriteriaHeader";
import {
    getCompletionStatus,
    updateCompletedCount,
    filterUpdatedKeys,
    updateCompletionMap
} from "../util/CompletionUtils";

MetaCriteria.propTypes = {
    uuid: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    completionUpdates: PropTypes.array.isRequired
};

export default function MetaCriteria({
    uuid,
    criteria,
    onChange,
    completionUpdates
}) {
    const [completionMap, setCompletionMap] = useState(
        getCompletionStatus(criteria.subtasks)
    );
    const [completedCount, setCompletedCount] = useState(
        updateCompletedCount(completionMap)
    );
    const [updatedKeys, setUpdatedKeys] = useState(completionUpdates);

    useEffect(() => {
        setUpdatedKeys(completionUpdates);
    }, [completionUpdates]);

    if (filterUpdatedKeys(completionMap, updatedKeys).length > 0) {
        setUpdatedKeys([]);
        setCompletionMap(updateCompletionMap(completionMap, updatedKeys));
        setCompletedCount(updateCompletedCount(completionMap));

        const newAchievementState = {};
        newAchievementState[uuid] = completedCount >= criteria.requiredCount;
        onChange(newAchievementState, {});
    }

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
