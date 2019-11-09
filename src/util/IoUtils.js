import { saveAs } from "file-saver";

export function saveLocalStorageToDisk() {
    var blob = new Blob([
        JSON.stringify(localStorage),
        {
            type: "text/plain;charset=utf-8"
        }
    ]);
    saveAs(blob, "runeAchievements_" + Date.now() + ".txt");
}
