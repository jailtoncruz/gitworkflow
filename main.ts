import { serve } from "https://deno.land/std@0.97.0/http/server.ts";

const PORT = 8080;

const s = serve({ port: PORT });

console.log("\n\x1b[32m%s\x1b[0m", `Servidor Deno iniciado!`);
console.log("\x1b[36m%s\x1b[0m", `Acesse: http://localhost:${PORT}/`);

for await (const req of s) {
  req.respond({ body: "<h1 style='text-align: center'>Hello World</h1>\n" });
}
