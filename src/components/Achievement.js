import React from "react";
import PropTypes from "prop-types";
import SimpleAchievement from "../components/SimpleAchievement";
import SubtaskAchievement from "../components/SubtaskAchievement";
import NumericAchievement from "../components/NumericAchievement";
import MetaAchievement from "../components/MetaAchievement";

Achievement.propTypes = {
    achievement: PropTypes.object.isRequired
};

export default function Achievement({ achievement }) {
    return (
        <React.Fragment>
            {achievement.simpleCriteria && (
                <SimpleAchievement
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.simpleCriteria}
                />
            )}
            {achievement.subtaskCriteria && (
                <SubtaskAchievement
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.subtaskCriteria}
                />
            )}
            {achievement.numericCriteria && (
                <NumericAchievement
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.numericCriteria}
                />
            )}
            {achievement.metaCriteria && (
                <MetaAchievement
                    key={achievement.uuid}
                    title={achievement.name}
                    description={achievement.description}
                    criteria={achievement.metaCriteria}
                />
            )}
        </React.Fragment>
    );
}
