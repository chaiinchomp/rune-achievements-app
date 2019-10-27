import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import editIcon from "../resources/edit.svg";

export default function EditButton() {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Image
                src={editIcon}
                className="small float-right ml-2 clickable"
            />
        </OverlayTrigger>
    );
}
