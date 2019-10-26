import React from "react";
import {
    Accordion,
    Card,
    ListGroup,
    ListGroupItem,
    useAccordionToggle,
    Image
} from "react-bootstrap";
import PropTypes from "prop-types";
import SimpleCriteria from "./SimpleCriteria";
import SubtaskCriteria from "./SubtaskCriteria";
import NumericCriteria from "./NumericCriteria";
import MetaCriteria from "./MetaCriteria";
import AchievementWrapper from "./AchievementWrapper";
import downarrow from "../resources/downarrow.svg";
import uparrow from "../resources/uparrow.svg";

Achievement.propTypes = {
    achievement: PropTypes.object.isRequired
};

export default function Achievement({ achievement }) {
    return (
        <AchievementWrapper achievement={achievement}>
            <Card
                className="bg-dark text-white achievement-card"
                key={achievement.uuid}
            >
                <Card.Header className="text-center">
                    {achievement.name}
                </Card.Header>
                <Card.Body>
                    <HideShow eventKey={achievement.uuid}>
                        <Card.Subtitle className="mb-3">
                            {achievement.description}
                        </Card.Subtitle>
                    </HideShow>
                    <Accordion.Collapse eventKey={achievement.uuid}>
                        {renderCriteria(achievement)}
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        </AchievementWrapper>
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

function HideShow({ children, eventKey }) {
    return (
        <div onClick={useAccordionToggle(eventKey)}>
            {children}
            <div className="hide-show-button">
                <Image src={downarrow} />
            </div>
        </div>
    );
}
