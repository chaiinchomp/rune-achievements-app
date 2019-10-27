import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskText";
import CriteriaHeader from "./CriteriaHeader";

MetaCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function MetaCriteria({ criteria }) {
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
