import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

SubtaskImage.propTypes = {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    completed: PropTypes.bool
};

SubtaskImage.defaultProps = {
    completed: true
};

export default function SubtaskImage({ description, imgUrl, completed }) {
    return (
        <React.Fragment>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{description}</Tooltip>}
            >
                <Image
                    src={imgUrl}
                    className={completed ? "m-2" : "incomplete m-2"}
                />
            </OverlayTrigger>
        </React.Fragment>
    );
}
