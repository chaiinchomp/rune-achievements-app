import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Subtask from "./SubtaskImage";

SimpleAchievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function SimpleAchievement({ title, description, criteria }) {
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
                        description={criteria.name}
                        imgUrl={criteria.iconUrl}
                    />
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
