import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

SubtaskImage.propTypes = {
    taskId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    toggleItemCompletionCallback: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool,
    completed: PropTypes.bool
};

SubtaskImage.defaultProps = {
    isEditMode: false,
    completed: false
};

export default function SubtaskImage({
    taskId,
    description,
    imgUrl,
    toggleItemCompletionCallback,
    isEditMode,
    completed
}) {
    let iconStyle = "m-2";
    if (completed && isEditMode) {
        iconStyle = iconStyle.concat(" completed-outline");
    } else if (!completed && isEditMode) {
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
                            toggleItemCompletionCallback(taskId, !completed);
                        }}
                    />
                ) : (
                    <Image src={imgUrl} className={iconStyle} />
                )}
            </OverlayTrigger>
        </React.Fragment>
    );
}
