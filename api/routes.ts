import { Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { getGear } from "./controllers.ts";

const router = new Router();

router
  .get("/api/gear", getGear)

export default router;