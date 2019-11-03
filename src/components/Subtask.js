import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

Subtask.propTypes = {
    taskId: PropTypes.string,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    imgUrl: PropTypes.string,
    toggleItemCompletionCallback: PropTypes.func,
    title: PropTypes.string,
    isEditMode: PropTypes.bool
};

Subtask.defaultProps = {
    completed: false,
    isEditMode: false
};

export default function Subtask({
    taskId,
    title,
    description,
    imgUrl,
    toggleItemCompletionCallback,
    isEditMode,
    completed
}) {
    const style = getStyling(imgUrl, completed, isEditMode);
    return (
        <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{description}</Tooltip>}
        >
            {imgUrl ? (
                isEditMode ? (
                    <Image
                        src={imgUrl}
                        className={style.concat(" clickable")}
                        onClick={() => {
                            toggleItemCompletionCallback(taskId, !completed);
                        }}
                    />
                ) : (
                    <Image src={imgUrl} className={style} />
                )
            ) : (
                <div className={completed ? "small" : "small text-muted"}>
                    {title}
                </div>
            )}
        </OverlayTrigger>
    );
}

function getStyling(imgUrl, completed, isEditMode) {
    if (imgUrl) {
        const iconStylePrefix = "m-2";
        if (completed && isEditMode) {
            return iconStylePrefix.concat(" completed-outline");
        } else if (!completed && isEditMode) {
            return iconStylePrefix.concat(" not-completed-outline");
        } else if (!completed) {
            return iconStylePrefix.concat(" incomplete-img");
        }
        return iconStylePrefix;
    } else {
        return completed ? "small" : "small text-muted";
    }
}
