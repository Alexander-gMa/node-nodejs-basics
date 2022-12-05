import os from "os";
import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const threads = os.cpus().length;

const calculate = async (initial) => {
  return new Promise((resolve, reject) => {
    let result;
    console.log(`Add worker to start from ${initial}`);
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: initial,
    });

    worker.on("error", reject);
    worker.on("exit", () => resolve(result));
    worker.on("message", (msg) => {
      result = msg;
    });
  });
};

export const performCalculations = async (initial = 10) => {
  const workers = [];

  if (process.argv[2]) initial = Number(process.argv[2]);

  for (let i = 0; i < threads; i++) {
    workers.push(calculate(initial));
    initial++;
  }

  const results = await Promise.all(workers);
  console.log(results);
  return results;
};

performCalculations();
