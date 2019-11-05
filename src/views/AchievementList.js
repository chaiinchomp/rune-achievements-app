import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import AchievementCard from "./AchievementCard";
import { setComplete } from "../util/LocalStorageClient";
import { filterAchievements } from "../util/AchievementFilter";

AchievementList.propTypes = {
    achievementList: PropTypes.array.isRequired
};

export default function AchievementList({ achievementList }) {
    const [achievements, setAchievements] = useState(achievementList);
    const [filteredAchievements, setFilteredAchievements] = useState(
        achievementList
    );
    const [forceUpdate, setForceUpdate] = useState(false);

    useEffect(() => {
        setAchievements(achievementList);
        setFilteredAchievements(filterAchievements(achievementList));
    }, [achievementList]);

    const saveChangesCallback = (newAchievementState, newTaskState) => {
        // Update in local storage
        for (let [key, value] of Object.entries(newAchievementState)) {
            setComplete(key, value);
        }
        for (let [key, value] of Object.entries(newTaskState)) {
            setComplete(key, value);
        }

        // Reapply achievement filter in case any were completed
        setFilteredAchievements(filterAchievements(achievements));

        // Flip forceUpdate to let children know there were changes
        setForceUpdate(!forceUpdate);
    };

    return (
        <Accordion>
            {filteredAchievements.map(achievement => (
                <AchievementCard
                    key={achievement.uuid}
                    achievement={achievement}
                    onChange={saveChangesCallback}
                    checkForUpdates={forceUpdate}
                />
            ))}
        </Accordion>
    );
}
