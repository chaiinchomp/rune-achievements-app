import { saveAs } from "file-saver";
import {
    setComplete,
    setNumericTaskCount,
    setSeriesCompletion
} from "../util/LocalStorageClient";

export function saveLocalStorageToFile() {
    var blob = new Blob([
        JSON.stringify(localStorage),
        {
            type: "text/plain;charset=utf-8"
        }
    ]);
    saveAs(blob, "runeAchievements_" + Date.now() + ".txt");
}

export async function loadLocalStorageFromFile(fileObject) {
    localStorage.clear();

    const loadedText = await fileObject.text();
    const storageJson = JSON.parse(
        loadedText.substring(0, loadedText.length - 15)
    );

    for (let [key, value] of Object.entries(storageJson)) {
        if (/^A/.test(key)) {
            setComplete(key, value);
        } else if (/^S/.test(key)) {
            setSeriesCompletion(key, value);
        } else if (/^T/.test(key) && /[0-9]+/.test(value)) {
            setNumericTaskCount(key, parseInt(value.match(/[0-9]+/)[0]));
        } else if (/^T/.test(key)) {
            setComplete(key, value);
        }
    }
}
