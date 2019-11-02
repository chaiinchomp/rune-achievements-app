import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import saveIcon from "../resources/save.svg";

export default function SaveButton({ saveChangesCallback }) {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Save</Tooltip>}>
            <Image
                src={saveIcon}
                className="small float-right ml-2 clickable"
                onClick={saveChangesCallback}
            />
        </OverlayTrigger>
    );
}
