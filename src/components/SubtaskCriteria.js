import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import AchievementDescription from "./CriteriaHeader";

SubtaskAchievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function SubtaskAchievement({ title, description, criteria }) {
    // TODO placeholder, use state
    const completedCount = 1;

    return (
        <React.Fragment>
            <AchievementDescription
                completedCount={completedCount}
                requiredCount={criteria.requiredCount}
            />
            {criteria.subtasks.map(subtask => (
                <Subtask
                    key={subtask.taskId}
                    description={subtask.name}
                    imgUrl={subtask.iconUrl}
                />
            ))}
        </React.Fragment>
    );
}
