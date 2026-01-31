# online.ase.ro PDF Fix

I built this extension because I was tired of `online.ase.ro` opening PDFs in the current tab. It fixes the annoyance of losing your spot on the page and helps keep your browser tabs organized while studying.

### Features

* **Automatic:** Detects PDF links, `pluginfile.php`, and `mod/resource` links.
* **Non-Intrusive:** Only runs on `online.ase.ro`.

## Installation

### Firefox / Zen Browser

*This packages the extension so you don't have to reload it every time you restart your browser.*

1. Select both `manifest.json` and `content.js` and **Zip** them together.
2. Rename the new file from `.zip` to **`.xpi`**.
3. Open a new tab, go to `about:config`, search for `xpinstall.signatures.required`, and set it to **false**.
4. Go to `about:addons`, click the **Gear Icon**, and select **Install Add-on From File...**
5. Select your `.xpi` file.

### Chrome / Edge

> **⚠️ Important:** Before you start, move your extension folder to a permanent safe place (like your `Documents` folder). If you delete or move this folder later, the extension will stop working.

1. Go to `chrome://extensions`.
2. Toggle **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the folder where you saved your files.
