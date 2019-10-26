import React, { useState, useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import Achievement from "../components/Achievement";
import CategorySelector from "../components/CategorySelector";
import "../styles/index.css";

export default function() {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        fetch("https://rune-achievements.herokuapp.com/achievement", {
            method: "GET"
        })
            .then(result => result.json())
            .then(data => {
                setAchievements(data);
            })
            .catch(console.log);
    }, []);

    const achievementList = achievements.map(achievement => (
        <Achievement achievement={achievement} />
    ));

    return (
        <div className="content">
            <Table style={{ width: "80%", margin: "auto" }}>
                <tbody>
                    <tr>
                        <td style={{ border: "0px" }}>
                            <CategorySelector />
                        </td>
                        <td style={{ border: "0px" }}>
                            <Accordion>{achievementList}</Accordion>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
