import { Router, send } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { getGear } from "./controllers.ts";

const router = new Router();

router
  .get("/api/gear", getGear)
  .get("/", async (ctx) => {
    await send(ctx, "/", {
      root: `${Deno.cwd()}/../`,
      index: "index.html",
    });
  });

export default router;