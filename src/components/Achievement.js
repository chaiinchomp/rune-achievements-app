import React from 'react';
import { Card } from 'react-bootstrap';

export default function() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Achievement Title</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">This part is the achievement description.</Card.Subtitle>
                    <Card.Text>
                        Here's the criteria
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
