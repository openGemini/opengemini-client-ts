import { exec } from "child_process";

exec("husky install");

if (process.platform === "linux") {
  exec("npm install @rollup/rollup-linux-x64-gnu@4.5.2 --no-save");
} else if (process.platform === "darwin") {
  exec("npm install @rollup/rollup-darwin-arm64@4.5.2 --no-save");
}
