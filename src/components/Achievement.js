import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import SimpleCriteria from "../components/SimpleCriteria";
import SubtaskCriteria from "../components/SubtaskCriteria";
import NumericCriteria from "../components/NumericCriteria";
import MetaCriteria from "../components/MetaCriteria";

Achievement.propTypes = {
    achievement: PropTypes.object.isRequired
};

export default function Achievement({ achievement }) {
    return (
        <Card
            className="bg-dark text-white achievement-card"
            key={achievement.uuid}
        >
            <Card.Header className="text-center">
                {achievement.name}
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-3">
                    {achievement.description}
                </Card.Subtitle>
                {renderCriteria(achievement)}
            </Card.Body>
        </Card>
    );
}

function renderCriteria(achievement) {
    return (
        <React.Fragment>
            {achievement.simpleCriteria && (
                <SimpleCriteria
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.simpleCriteria}
                />
            )}
            {achievement.subtaskCriteria && (
                <SubtaskCriteria
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.subtaskCriteria}
                />
            )}
            {achievement.numericCriteria && (
                <NumericCriteria
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.numericCriteria}
                />
            )}
            {achievement.metaCriteria && (
                <MetaCriteria
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.metaCriteria}
                />
            )}
        </React.Fragment>
    );
}
