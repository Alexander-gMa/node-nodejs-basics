import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const list = async () => {
  try {
    await fsp
      .readdir(path.join(__dirname, "files"))
      .then((res) => console.log(res));
  } catch (error) {
    console.log(`FS operation failed`);
  }
};

list();
