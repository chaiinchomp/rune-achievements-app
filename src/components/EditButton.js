import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import editIcon from "../resources/edit.svg";
import saveIcon from "../resources/save.svg";

export default function EditButton({
    isEditMode,
    editButtonOnClick,
    saveButtonOnClick
}) {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Image
                src={isEditMode ? saveIcon : editIcon}
                className="small float-right ml-2 clickable"
                onClick={isEditMode ? saveButtonOnClick : editButtonOnClick}
            />
        </OverlayTrigger>
    );
}
