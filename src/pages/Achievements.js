import React, { useState, useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import Achievement from "../components/Achievement";
import CategorySelector from "../components/CategorySelector";
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

    const achievementList = achievements.map(achievement => (
        <Achievement key={achievement.uuid} achievement={achievement} />
    ));

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
                            <Accordion>{achievementList}</Accordion>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
