//  IMPORT
// Builtin Modules
import express from "express";
import morgan from "morgan";
// Custom Modules
import { router } from "./routes/meetings.js";
//

const app = express();
const api = "/api/v1";

// MORGAN MIDDLEWARE => LOGGER MIDDLEWARE
app.use(morgan("dev"));

// ROUTE HANDLING
app.use(`${api}/meetings`, router);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.redirect(api);
});

app.get(api, (req, res) => {
  res.send("Hello From Root");
});

