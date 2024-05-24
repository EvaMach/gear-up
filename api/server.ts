import { Application, send } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from './routes.ts';

const PORT = 8000;

console.log(Deno.cwd())

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  const root = '../';
  const filePath = context.request.url.pathname;
  const index = 'index.html';
  await send(context, filePath, {root, index});
});

app.addEventListener("listen", ({ port }) => console.log(`listening on port: ${port}`) )
await app.listen({ port: PORT });