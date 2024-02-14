// Builtin Modules
import express from "express";
const app = express();
const api = "/api/v1"

// MEETINGS ROUTE
import { router } from "./routes/meetings.js";
app.use(`${api}/meetings` , router)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.redirect(api)
});

app.get(api, (req, res) => {
  res.send("Hello From Root");
});







