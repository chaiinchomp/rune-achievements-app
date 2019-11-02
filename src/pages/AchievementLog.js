import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import CategorySelector from "../views/CategorySelector";
import AchievementList from "../views/AchievementList";
import "../styles/index.css";

export default function() {
    const [category, setCategory] = useState("CHARACTER");
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        fetch(
            `https://rune-achievements.herokuapp.com/achievement/category?category=${category}`,
            {
                method: "GET"
            }
        )
            .then(result => result.json())
            .then(data => {
                setAchievements(data);
            })
            .catch(console.log);
    }, [category]);

    const categoryChangeCallback = newCategory => {
        setCategory(newCategory);
    };

    return (
        <div className="content">
            <Table style={{ width: "80%", margin: "auto" }}>
                <tbody>
                    <tr>
                        <td style={{ width: "30%", border: "0px" }}>
                            <CategorySelector
                                categoryChangeCallback={categoryChangeCallback}
                            />
                        </td>
                        <td style={{ width: "50%", border: "0px" }}>
                            <AchievementList achievementList={achievements} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
