import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Category } from "../model/Category";

export default function CategoryList({ categoryChangeCallback }) {
    return (
        <Card
            style={{ width: "18rem", margin: "auto" }}
            className="bg-dark text-white"
        >
            <ListGroup>
                {Object.keys(Category).map(function(key, index) {
                    return (
                        <div
                            onClick={() => categoryChangeCallback(key)}
                            key={Category[key].key}
                        >
                            <ListGroup.Item className="bg-dark text-white">
                                {Category[key].name}
                            </ListGroup.Item>
                        </div>
                    );
                })}
            </ListGroup>
        </Card>
    );
}
