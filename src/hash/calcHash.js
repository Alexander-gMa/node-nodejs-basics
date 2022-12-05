import fs from "fs/promises";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
  const file = await fs.readFile(
    path.join(__dirname, "files/fileToCalculateHashFor.txt")
  );
  const hashSum = crypto.createHash("sha256");
  hashSum.update(file);
  const hex = hashSum.digest("hex");
  console.log(hex);
  return hex;
};

calculateHash();
