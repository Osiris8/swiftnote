# SwiftNote 📝

**SwiftNote** is a lightweight, cross-platform desktop application built with **Neutralinojs**. It allows users to quickly jot down thoughts and save them directly to their local file system without the overhead of heavy frameworks.

This project was developed as a technical sample for **GSoC 2026** to demonstrate the integration between web technologies (HTML/CSS/JS) and native system capabilities.

## Features

- **Native File Persistence:** Uses the `filesystem` API to append notes to a local `.txt` file.
- **System Notifications:** Provides real-time feedback using native OS notifications.
- **OS Integration:** Quick access to the notes folder via native file explorer commands.
- **Lightweight:** Built with Vanilla JavaScript to ensure maximum performance and minimal binary size.

## Getting Started

### Prerequisites

Make sure you have the [Neutralinojs CLI](https://neutralino.js.org/docs/cli/neu-cli) installed:

```bash
npm install -g @neutralinojs/neu
```

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Osiris8/swiftnote
    cd swiftnote
    ```

2.  Download the Neutralinojs binaries:

    ```bash
    neu update
    ```

### Running the App

Start the application in development mode:

```bash
neu run
```

## Technical Details

This application explores several core Neutralinojs modules:

- `Neutralino.init()`: Initializes the bridge between the browser and the OS.
- `Neutralino.filesystem.appendFile()`: Used for persistent data storage.
- `Neutralino.os.showNotification()`: Used for native UI feedback.
- `Neutralino.os.execCommand()`: Used to trigger system-level actions (opening the file explorer).

## Project Structure

```text
├── resources/
│   ├── index.html    # Main UI
│   ├── style.css     # Custom styling
│   └── js/
│       ├── main.js   # Application logic & Native API calls
│       └── neutralino.js
├── neutralino.config.json # App configuration & Permissions
└── README.md
```
