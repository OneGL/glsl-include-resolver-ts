import { IncludeResolver } from "./include-resolver";

async function main() {
  const result = await IncludeResolver.resolve("shaders/main.glsl");
  console.log(result);
}

main();
