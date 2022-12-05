import * as fsp from "fs/promises";
import { existsSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const rename = async () => {
  try {
    if (
      !existsSync(path.join(__dirname, "files/wrongFilename.txt")) ||
      existsSync(path.join(__dirname, "files/properFilename.md"))
    ) {
      throw new Error();
    }
    await fsp.rename(
      path.join(__dirname, "files/wrongFilename.txt"),
      path.join(__dirname, "files/properFilename.md")
    );
  } catch (error) {
    console.log(`FS operation failed`);
  }
};

rename();
