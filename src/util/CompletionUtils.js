import { isComplete, setSeriesCompletion } from "../util/LocalStorageClient";

export function getCompletionStatus(tasks) {
    const completionMap = {};
    tasks.forEach(task => {
        completionMap[task.uuid] = isComplete(task.uuid);
    });
    return completionMap;
}

export function updateCompletedCount(completionMap) {
    let completedCount = 0;
    for (let [, value] of Object.entries(completionMap)) {
        if (value) {
            completedCount++;
        }
    }
    return completedCount;
}

export function checkForUpdates(completionMap) {
    let foundUpdates = false;
    let updatedCount = 0;
    for (let [key, value] of Object.entries(completionMap)) {
        const newValue = isComplete(key);
        if (value !== newValue) {
            foundUpdates = true;
            completionMap[key] = newValue;
        }
        updatedCount = updatedCount + (newValue ? 1 : 0);
    }
    return {
        foundUpdates: foundUpdates,
        updatedMap: completionMap,
        updatedCount: updatedCount
    };
}

export function setAchievementCompleted(
    uuid,
    isComplete,
    seriesId,
    seriesOrdinal
) {
    if (seriesId && seriesOrdinal) {
        setSeriesCompletion(
            seriesId,
            isComplete ? seriesOrdinal + 1 : seriesOrdinal
        );
    }

    const newAchievementState = {};
    newAchievementState[uuid] = isComplete;
    return newAchievementState;
}
