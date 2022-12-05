import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const copy = async () => {
  try {
    await fsp.access(path.join(__dirname, "files"));
    await fsp.mkdir(path.join(__dirname, "files_copy"));
    await fsp.cp(
      path.join(__dirname, "files"),
      path.join(__dirname, "files_copy"),
      { recursive: true }
    );
  } catch (error) {
    console.log(`FS operation failed`);
  }
};

copy();
