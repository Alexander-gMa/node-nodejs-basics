import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const decompress = async () => {
  const unzip = createGunzip();
  const source = createReadStream(path.join(__dirname, "files/archive.gz"));
  const destination = createWriteStream(
    path.join(__dirname, "files/fileToCompress.txt")
  );

  source.pipe(unzip).pipe(destination);
};

decompress();
