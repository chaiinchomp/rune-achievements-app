import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import Achievement from "../components/Achievement";
import {
    setAchievementComplete,
    setTaskComplete
} from "../util/LocalStorageClient";
import { filterAchievements } from "../util/AchievementFilter";

Achievement.propTypes = {
    achievementList: PropTypes.array.isRequired
};

export default function AchievementList({ achievementList }) {
    const [achievements, setAchievements] = useState(achievementList);

    useEffect(() => {
        setAchievements(filterAchievements(achievementList));
    }, [achievementList]);

    const saveChangesCallback = (newAchievementState, newTaskState) => {
        // Update in local storage
        for (let [key, value] of Object.entries(newAchievementState)) {
            setAchievementComplete(key, value);
        }
        for (let [key, value] of Object.entries(newTaskState)) {
            setTaskComplete(key, value);
        }

        // Reapply achievement filter in case any were completed
        setAchievements(filterAchievements(achievements));
    };

    return (
        <Accordion>
            {achievements.map(achievement => (
                <Achievement
                    key={achievement.uuid}
                    achievement={achievement}
                    onChange={saveChangesCallback}
                />
            ))}
        </Accordion>
    );
}
