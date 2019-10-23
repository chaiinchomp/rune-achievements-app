import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

Achievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function Achievement({ title, description }) {
    return (
        <React.Fragment>
            <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white achievement-card"
            >
                <Card.Header className="text-center">{title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2">
                        {description}
                    </Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">
                        Here's the criteria
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
