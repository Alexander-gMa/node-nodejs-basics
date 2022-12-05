import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    path.join(__dirname, "files/fileToCompress.txt")
  );
  const destination = createWriteStream(
    path.join(__dirname, "files/archive.gz")
  );

  source.pipe(gzip).pipe(destination);
};

compress();
