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
    achievement: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default function Achievement({ achievement, onChange }) {
    console.log("Rendering achievement: " + JSON.stringify(achievement));
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
                        {renderCriteria(achievement, onChange)}
                    </Accordion.Collapse>
                </Card.Text>
            </Card>
        </AchievementWrapper>
    );
}

function renderCriteria(achievement, onChange) {
    return (
        <React.Fragment>
            {achievement.simpleCriteria && (
                <SimpleCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={achievement.simpleCriteria}
                    onChange={onChange}
                />
            )}
            {achievement.subtaskCriteria && (
                <SubtaskCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={achievement.subtaskCriteria}
                    onChange={onChange}
                />
            )}
            {achievement.numericCriteria && (
                <NumericCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={achievement.numericCriteria}
                    onChange={onChange}
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
