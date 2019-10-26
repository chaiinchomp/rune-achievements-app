import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import Achievement from "../components/Achievement";
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
            <Accordion>{achievementList}</Accordion>
        </div>
    );
}
