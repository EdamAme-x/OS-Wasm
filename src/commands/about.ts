import { blue } from "../deps.ts";

function about() {
  console.log(
    `OS-Wasm ${blue("v0.0.1β")}\nBaseSystem: ${blue(Deno.build.os)}\nDeno: ${
      blue(Deno.version.deno)
    }\nV8: ${blue(Deno.version.v8)}\nTypeScript: ${
      blue(Deno.version.typescript)
    }\n`,
  );
}

export { about };
