import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import AchievementDescription from "./CriteriaHeader";

SubtaskCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function SubtaskCriteria({ criteria }) {
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
