import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import AchievementDescription from "./CriteriaHeader";

Achievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function Achievement({ title, description, criteria }) {
    const requiredCount = criteria.count;
    // TODO placeholder, use state
    const completedCount = requiredCount / 2;

    return (
        <React.Fragment>
            <AchievementDescription
                completedCount={completedCount}
                requiredCount={requiredCount}
            />
            <ProgressBar
                striped
                variant="info"
                now={(completedCount / requiredCount) * 100}
            />
        </React.Fragment>
    );
}
