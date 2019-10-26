import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function AchievementWrapper(props) {
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
