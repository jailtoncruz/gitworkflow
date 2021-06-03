import {
  serve,
  ServerRequest,
} from "https://deno.land/std@0.97.0/http/server.ts";
import Router from "./classes/Router.ts";

const PORT = 8080;

const s = serve({ port: PORT });
const router = new Router();
router.use(s);

const api = router.group("/api");

api.get("/users", (req: ServerRequest) => {
  req.respond({ body: JSON.stringify([{ id: 0, name: "Jailton Cruz", role: "Author" }]) });
});


console.log("\n\x1b[32m%s\x1b[0m", `Servidor Deno iniciado!`);
console.log("\x1b[36m%s\x1b[0m", `Acesse: http://localhost:${PORT}/`);
