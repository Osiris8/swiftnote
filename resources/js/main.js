Neutralino.init();

async function saveNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  const filePath = "./my_notes.txt";

  if (!noteText) {
    await Neutralino.os.showNotification(
      "Empty Input",
      "Please write something before saving."
    );
    return;
  }

  const timestamp = new Date().toLocaleString();
  const entry = `\n--- Note from ${timestamp} ---\n${noteText}\n`;

  try {
    await Neutralino.filesystem.appendFile(filePath, entry);

    await Neutralino.os.showNotification(
      "Note Saved",
      "Your note has been added to " + filePath
    );

    document.getElementById("status").innerText =
      "Last saved: " + new Date().toLocaleTimeString();
    noteInput.value = "";
  } catch (err) {
    console.error("Save error:", err);
    if (err.code === "NE_RT_NATPRME") {
      alert("Permission denied. Check your neutralino.config.json.");
    } else {
      alert("An error occurred while accessing the disk.");
    }
  }
}

async function openFolder() {
  try {
    await Neutralino.os.execCommand("explorer .");
  } catch (err) {
    console.error("Failed to open folder:", err);
  }
}

Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});
