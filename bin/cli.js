#!/usr/bin/env node

const { spawn } = require("node:child_process");

const child = spawn(
  "bash",
  [
    "-lc",
    "curl -fsSL https://raw.githubusercontent.com/iamwjun/localcoder/main/install.sh | bash",
  ],
  {
    stdio: "inherit",
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error("Failed to run install command:", error.message);
  process.exit(1);
});
