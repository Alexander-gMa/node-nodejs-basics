import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args = [1, 2, 3]) => {
  if (process.argv[2]) args = process.argv.slice(2);

  const child = fork(path.join(__dirname, "files/script.js"), args, {
    silent: true,
  });

  child
    .on("spawn", () => console.log("Child args: " + args))
    .on("exit", (code) => console.log(`Child exit with code: ${code}`));

  child.stdout.pipe(process.stdout);
  child.stdout.on("data", (chunk) => console.log("Chunk in child: " + chunk));
  process.stdin.pipe(child.stdin);
};

spawnChildProcess();
