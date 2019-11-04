import { getSeriesCompletion } from "./LocalStorageClient";

export function filterAchievements(achievements) {
    return achievements.filter(function(achievement) {
        if (achievement.series) {
            return (
                getSeriesCompletion(achievement.series.uuid) ===
                achievement.seriesOrdinal
            );
        } else {
            return true;
        }
    });
}
