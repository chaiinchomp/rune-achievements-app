import React from "react";
import { Card } from "react-bootstrap";

export default function() {
    return (
        <React.Fragment>
            <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white achievement-card"
            >
                <Card.Header className="text-center">
                    Achievement Title
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2">
                        This part is the achievement description.
                    </Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">
                        Here's the criteria
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
