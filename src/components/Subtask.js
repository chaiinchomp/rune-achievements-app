import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

Subtask.propTypes = {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default function Subtask({ description, imgUrl, completed }) {
    return (
        <React.Fragment>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{description}</Tooltip>}
            >
                <Image src={imgUrl} className={completed ? "" : "incomplete"} />
            </OverlayTrigger>
        </React.Fragment>
    );
}
