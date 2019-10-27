import React from "react";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";
import CriteriaHeader from "./CriteriaHeader";

SimpleCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function SimpleCriteria({ criteria }) {
    return (
        <React.Fragment>
            <CriteriaHeader />
            <Subtask description={criteria.name} imgUrl={criteria.iconUrl} />
        </React.Fragment>
    );
}
