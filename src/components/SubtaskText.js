import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

SubtaskText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool
};

SubtaskText.defaultProps = {
    completed: false
};

export default function SubtaskText({ title, description, completed }) {
    return (
        <React.Fragment>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{description}</Tooltip>}
            >
                <div className={completed ? "small" : "small text-muted"}>
                    {title}
                </div>
            </OverlayTrigger>
        </React.Fragment>
    );
}
