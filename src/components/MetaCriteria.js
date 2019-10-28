import React, { useState } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Subtask from "./SubtaskText";
import {
    isAchievementComplete,
    setAchievementComplete
} from "../storage/LocalStorageClient";

MetaCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function MetaCriteria({ achievementId, criteria }) {
    const [completionMap, setCompletionMap] = useState(
        getCompletionStatus(criteria.subtasks)
    );
    const [completedCount, setCompletedCount] = useState(
        updateCompletedCount(completionMap)
    );

    return (
        <React.Fragment>
            <Card.Subtitle>
                <div className="mb-2 small float-right">
                    {completedCount}/{criteria.subtasks.length}
                </div>
                <div className="mb-2 small">Criteria:</div>
            </Card.Subtitle>
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
