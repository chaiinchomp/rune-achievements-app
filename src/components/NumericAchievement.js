import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

Achievement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function Achievement({ title, description, criteria }) {
    const requiredCount = criteria.count;
    // TODO placeholder, use state
    const completedCount = requiredCount / 2;

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
                    <ProgressBar
                        striped
                        variant="info"
                        label={`${completedCount}/${requiredCount}`}
                        now={(completedCount / requiredCount) * 100}
                    />
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
