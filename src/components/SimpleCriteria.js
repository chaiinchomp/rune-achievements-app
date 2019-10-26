import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import CriteriaHeader from "./CriteriaHeader";

SimpleAchievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function SimpleAchievement({ title, description, criteria }) {
    return (
        <React.Fragment>
            <CriteriaHeader />
            <Subtask description={criteria.name} imgUrl={criteria.iconUrl} />
        </React.Fragment>
    );
}
