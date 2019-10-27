import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Category } from "../model/Category";

export default function CategoryList({ categoryChangeCallback }) {
    const [category, setCategory] = useState("CHARACTER");

    return (
        <Card
            style={{ width: "18rem", margin: "auto" }}
            className="bg-dark text-white"
        >
            <ListGroup>
                {Object.keys(Category).map(function(key, index) {
                    let listItemStyle;
                    if (key === category) {
                        listItemStyle = "bg-secondary text-white";
                    } else {
                        listItemStyle = "bg-dark text-white";
                    }

                    return (
                        <div
                            onClick={() => {
                                setCategory(key);
                                categoryChangeCallback(key);
                            }}
                            key={Category[key].key}
                        >
                            <ListGroup.Item className={listItemStyle}>
                                {Category[key].name}
                            </ListGroup.Item>
                        </div>
                    );
                })}
            </ListGroup>
        </Card>
    );
}
