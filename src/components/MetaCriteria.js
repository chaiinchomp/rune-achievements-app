import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtask from "./Subtask";
import CriteriaHeader from "./CriteriaHeader";
import { isAchievementComplete } from "../util/LocalStorageClient";

MetaCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function MetaCriteria({ achievementId, criteria }) {
    const [completionMap] = useState(getCompletionStatus(criteria.subtasks));
    const [completedCount] = useState(updateCompletedCount(completionMap));

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={criteria.subtasks.length}
                showEditButton={false}
            />
            {criteria.subtasks.map(subtask => (
                <Subtask
                    key={subtask.achievementId}
                    title={subtask.name}
                    description={subtask.description}
                    completed={completionMap[subtask.achievementId] || false}
                />
            ))}
        </React.Fragment>
    );
}

function getCompletionStatus(achievements) {
    const completionMap = {};
    achievements.forEach(achievement => {
        completionMap[achievement.achievementId] = isAchievementComplete(
            achievement.achievementId
        );
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
