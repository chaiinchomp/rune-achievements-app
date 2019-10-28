import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

SubtaskImage.propTypes = {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    toggleItemCompletionCallback: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool,
    showOutlines: PropTypes.bool,
    completed: PropTypes.bool
};

SubtaskImage.defaultProps = {
    isEditMode: false,
    showOutlines: false,
    completed: true
};

export default function SubtaskImage({
    description,
    imgUrl,
    toggleItemCompletionCallback,
    isEditMode,
    showOutlines,
    completed
}) {
    let iconStyle = "m-2";
    if (completed && showOutlines) {
        iconStyle = iconStyle.concat(" completed-outline");
    } else if (!completed && showOutlines) {
        iconStyle = iconStyle.concat(" not-completed-outline");
    } else if (!completed) {
        iconStyle = iconStyle.concat(" incomplete-img");
    }

    return (
        <React.Fragment>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{description}</Tooltip>}
            >
                {isEditMode ? (
                    <Image
                        src={imgUrl}
                        className={iconStyle.concat(" clickable")}
                        onClick={() => {
                            toggleItemCompletionCallback(!completed);
                        }}
                    />
                ) : (
                    <Image src={imgUrl} className={iconStyle} />
                )}
            </OverlayTrigger>
        </React.Fragment>
    );
}
