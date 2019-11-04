import LocalStorage from "local-storage";

export function isComplete(uuid) {
    return LocalStorage.get(uuid) || false;
}

export function setComplete(uuid, isComplete) {
    return LocalStorage.set(uuid, isComplete);
}

export function getNumericTaskCount(uuid) {
    return LocalStorage.get(uuid) || 0;
}

export function setNumericTaskCount(uuid, newCount) {
    return LocalStorage.set(uuid, newCount);
}

export function getSeriesCompletion(uuid) {
    return LocalStorage.get(uuid) || 1;
}

export function setSeriesCompletion(uuid, seriesOrdinal) {
    return LocalStorage.set(uuid, seriesOrdinal);
}
