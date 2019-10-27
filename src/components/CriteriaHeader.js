import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import EditButton from "./EditButton";

AchievementDescription.propTypes = {
    completedCount: PropTypes.number,
    requiredCount: PropTypes.number
};

export default function AchievementDescription({
    completedCount,
    requiredCount
}) {
    return (
        <React.Fragment>
            <Card.Subtitle>
                <EditButton />
                {completedCount && requiredCount && (
                    <div className="mb-2 small float-right">
                        {completedCount}/{requiredCount}
                    </div>
                )}
                <div className="mb-2 small">Criteria:</div>
            </Card.Subtitle>
        </React.Fragment>
    );
}
