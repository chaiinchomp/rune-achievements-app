import { isComplete } from "../util/LocalStorageClient";

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

export function filterUpdatedKeys(completionMap, updatedKeys) {
    return updatedKeys.filter(function(updatedKey) {
        return updatedKey in completionMap;
    });
}

export function updateCompletionMap(completionMap, updatedKeys) {
    updatedKeys.forEach(updatedKey => {
        if (updatedKey in completionMap) {
            completionMap[updatedKey] = isComplete(updatedKey);
        }
    });
    return completionMap;
}
