// Builtin Modules
import express from "express";
const app = express();

// MEETINGS ROUTE
import { router } from "./routes/meetings.js";
app.use('/meetings' , router)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello From Root");
});





