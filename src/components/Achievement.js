import React from "react";
import { Accordion, Card, useAccordionToggle, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import SimpleCriteria from "./SimpleCriteria";
import SubtaskCriteria from "./SubtaskCriteria";
import NumericCriteria from "./NumericCriteria";
import MetaCriteria from "./MetaCriteria";
import AchievementWrapper from "./AchievementWrapper";
import downarrow from "../resources/downarrow.svg";

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
                <HideShow eventKey={achievement.uuid}>
                    <Card.Header className="text-center">
                        {achievement.name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>{achievement.description}</Card.Subtitle>
                    </Card.Body>
                </HideShow>
                <Card.Text className="m-2">
                    <Accordion.Collapse eventKey={achievement.uuid}>
                        {renderCriteria(achievement)}
                    </Accordion.Collapse>
                </Card.Text>
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
                    achievementId={achievement.uuid}
                    criteria={achievement.simpleCriteria}
                />
            )}
            {achievement.subtaskCriteria && (
                <SubtaskCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={achievement.subtaskCriteria}
                />
            )}
            {achievement.numericCriteria && (
                <NumericCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={achievement.numericCriteria}
                />
            )}
            {achievement.metaCriteria && (
                <MetaCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
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
                <Image src={downarrow} className="clickable" />
            </div>
        </div>
    );
}
