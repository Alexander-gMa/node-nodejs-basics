import { readFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const content = await readFile(
      path.join(__dirname, "files/fileToRead.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(content);
  } catch (err) {
    console.log(`FS operation failed`);
  }
};

await read();
