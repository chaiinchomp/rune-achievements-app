import React, { useEffect, useState } from "react";
import {
    Accordion,
    Card,
    OverlayTrigger,
    Tooltip,
    useAccordionToggle,
    Image,
    Container,
    Row,
    Col
} from "react-bootstrap";
import PropTypes from "prop-types";
import SubtaskCriteria from "../components/SubtaskCriteria";
import NumericCriteria from "../components/NumericCriteria";
import MetaCriteria from "../components/MetaCriteria";
import downarrow from "../resources/downarrow.svg";
import checkmark from "../resources/checkmark.svg";
import { isComplete } from "../util/LocalStorageClient";

AchievementCard.propTypes = {
    achievement: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    checkForUpdates: PropTypes.bool.isRequired
};

export default function AchievementCard({
    achievement,
    onChange,
    checkForUpdates
}) {
    const [forceUpdate, setForceUpdate] = useState(checkForUpdates);

    useEffect(() => {
        setForceUpdate(checkForUpdates);
    }, [checkForUpdates]);

    return (
        <SeriesTooltipWrapper achievement={achievement}>
            <Card
                className="bg-dark text-white achievement-card"
                key={achievement.uuid}
            >
                <HideShow eventKey={achievement.uuid}>
                    <Card.Header
                        className={
                            isComplete(achievement.uuid)
                                ? "text-center border border-success"
                                : "text-center"
                        }
                    >
                        <Container>
                            <Row className="justify-content-between">
                                <Col xs lg="2">
                                    {isComplete(achievement.uuid) && (
                                        <Image
                                            src={checkmark}
                                            className="m-1 float-left"
                                        />
                                    )}
                                </Col>
                                <Col md="auto">{achievement.name}</Col>
                                <Col xs lg="2" />
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>{achievement.description}</Card.Subtitle>
                    </Card.Body>
                </HideShow>
                <Card.Text className="m-2">
                    <Accordion.Collapse eventKey={achievement.uuid}>
                        {renderCriteria(achievement, onChange, forceUpdate)}
                    </Accordion.Collapse>
                </Card.Text>
            </Card>
        </SeriesTooltipWrapper>
    );
}

function renderCriteria(achievement, onChange, forceUpdate) {
    return (
        <React.Fragment>
            {achievement.subtaskCriteria && (
                <SubtaskCriteria
                    key={achievement.uuid}
                    uuid={achievement.uuid}
                    criteria={achievement.subtaskCriteria}
                    onChange={onChange}
                    forceUpdate={forceUpdate}
                    seriesId={achievement.series && achievement.series.uuid}
                    seriesOrdinal={achievement.seriesOrdinal}
                />
            )}
            {achievement.numericCriteria && (
                <NumericCriteria
                    key={achievement.uuid}
                    uuid={achievement.uuid}
                    criteria={achievement.numericCriteria}
                    onChange={onChange}
                    seriesId={achievement.series && achievement.series.uuid}
                    seriesOrdinal={achievement.seriesOrdinal}
                />
            )}
            {achievement.metaCriteria && (
                <MetaCriteria
                    key={achievement.uuid}
                    uuid={achievement.uuid}
                    criteria={achievement.metaCriteria}
                    onChange={onChange}
                    forceUpdate={forceUpdate}
                    seriesId={achievement.series && achievement.series.uuid}
                    seriesOrdinal={achievement.seriesOrdinal}
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
