import { getSeriesCompletion } from "./LocalStorageClient";

export function filterAchievements(achievements) {
    return achievements.filter(function(achievement) {
        if (achievement.series) {
            return (
                getSeriesCompletion(achievement.series.seriesId) ===
                achievement.seriesOrdinal
            );
        } else {
            return true;
        }
    });
}
