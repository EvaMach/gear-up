import { Application } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from './routes.ts';

const PORT = 8000;

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
console.log(`Listening on port ${PORT}`);