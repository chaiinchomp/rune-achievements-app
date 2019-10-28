import LocalStorage from "local-storage";

export function isTaskComplete(taskId) {
    return LocalStorage.get(taskId) || false;
}

export function setTaskComplete(taskId, isComplete) {
    return LocalStorage.set(taskId, isComplete);
}

export function getNumericTaskCount(taskId) {
    return LocalStorage.get(taskId) || 0;
}

export function setNumericTaskCount(taskId, newCount) {
    return LocalStorage.set(taskId, newCount);
}

export function isAchievementComplete(achievementId) {
    return LocalStorage.get(achievementId) || false;
}

export function setAchievementComplete(achievementId, isComplete) {
    return LocalStorage.set(achievementId, isComplete);
}
