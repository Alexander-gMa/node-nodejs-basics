import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const remove = async () => {
  try {
    await fsp.access(path.join(__dirname, "files/fileToRemove.txt"));
    await fsp.unlink(path.join(__dirname, "files/fileToRemove.txt"));
  } catch (error) {
    console.log(`FS operation failed`);
  }
};

remove();
