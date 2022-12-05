import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdout } from "node:process";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(
    path.join(__dirname, "files/fileToRead.txt")
  );
  stream.pipe(stdout);
};
