import { parentPort, workerData } from "worker_threads";
// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  let fibonacci;
  try {
    fibonacci = nthFibonacci(workerData);
  } catch (error) {
    parentPort.postMessage({ status: "error", data: null });
    return;
  }
  parentPort.postMessage({ status: "resolved", data: fibonacci });
};

sendResult();
