import {
  notFoundHandler,
} from "./middleware/error.middleware.js";
import voucherRoutes from "./modules/vouchers/voucher.routes.js";
import calculationRoutes from "./modules/calculations/calculation.routes.js";

const app = express();

@@ -31,6 +32,8 @@ app.use("/api/members-fees", memberRoutes);

app.use("/api/vouchers", voucherRoutes);

app.use("/api/calculations", calculationRoutes);

app.use(notFoundHandler);
app.use(errorHandler);