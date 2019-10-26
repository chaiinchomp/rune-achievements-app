import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskText";
import CriteriaHeader from "./CriteriaHeader";

Achievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function Achievement({ title, description, criteria }) {
    // TODO placeholder, use state
    const completedCount = 1;

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={criteria.subtasks.length}
            />
            {criteria.subtasks.map(subtask => (
                <Subtask
                    key={subtask.achievementId}
                    title={subtask.name}
                    description={subtask.description}
                />
            ))}
        </React.Fragment>
    );
}
