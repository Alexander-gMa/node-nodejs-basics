export const parseArgs = () => {
  const args = process.argv.slice(2);
  args.map((_, i) => {
    if (i % 2) return;
    console.log(`${args[i].slice(2)} is ${args[i + 1]}`);
  });
};

parseArgs();
