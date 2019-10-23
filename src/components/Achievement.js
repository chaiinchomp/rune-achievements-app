import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Subtask from "./Subtask";

Achievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function Achievement({ title, description, imgUrl, completed }) {
    return (
        <React.Fragment>
            <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white achievement-card"
            >
                <Card.Header className="text-center">{title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {description}
                    </Card.Subtitle>
                    <Subtask
                        description=""
                        imgUrl={imgUrl}
                        completed={completed}
                    />
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
