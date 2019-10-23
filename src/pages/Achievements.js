import React, { useState, useEffect } from "react";
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
        <Achievement
            key={achievement.uuid}
            title={achievement.name}
            description={achievement.description}
            imgUrl={achievement.iconUrl}
            completed={achievement.completed}
        />
    ));

    return <div className="content">{achievementList}</div>;
}
