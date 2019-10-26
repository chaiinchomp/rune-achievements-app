import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function CategoryList() {
    return (
        <Card
            style={{ width: "18rem", margin: "auto" }}
            className="bg-dark text-white"
        >
            <ListGroup>
                <ListGroup.Item className="bg-dark text-white">
                    Character
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Quests
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Achievement Diaries
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Skilling
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Combat
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Bosses & Raids
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Clue Scrolls
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Minigames
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Pets
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Events
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                    Other
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
