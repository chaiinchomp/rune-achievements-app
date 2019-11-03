import React from "react";
import {
    Accordion,
    Card,
    OverlayTrigger,
    Tooltip,
    useAccordionToggle,
    Image
} from "react-bootstrap";
import PropTypes from "prop-types";
import SubtaskCriteria from "../components/SubtaskCriteria";
import NumericCriteria from "../components/NumericCriteria";
import MetaCriteria from "../components/MetaCriteria";
import downarrow from "../resources/downarrow.svg";

Achievement.propTypes = {
    achievement: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default function Achievement({ achievement, onChange }) {
    return (
        <SeriesTooltipWrapper achievement={achievement}>
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
        </SeriesTooltipWrapper>
    );
}

function renderCriteria(achievement, onChange) {
    return (
        <React.Fragment>
            {(achievement.subtaskCriteria || achievement.simpleCriteria) && (
                <SubtaskCriteria
                    key={achievement.uuid}
                    achievementId={achievement.uuid}
                    criteria={
                        achievement.subtaskCriteria ||
                        achievement.simpleCriteria
                    }
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

function SeriesTooltipWrapper(props) {
    if (props.achievement.series) {
        return (
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip>{renderSeries(props.achievement)}</Tooltip>}
            >
                {props.children}
            </OverlayTrigger>
        );
    } else {
        return props.children;
    }
}

function renderSeries(achievement) {
    return (
        <React.Fragment>
            Series:
            <br />
            <div className="text-muted">
                {achievement.series.name}
                <br />
                {achievement.seriesOrdinal}/{achievement.series.length}
            </div>
        </React.Fragment>
    );
}
