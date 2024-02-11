// Builtin Modules
import dotenv from "dotenv";
import express from "express";
const app = express();

// Custom Modules
import User from "./modules/User.js";

// config dotenv
dotenv.config();

// Parsing request
app.use(express.json());

// Google Calendar
import { google } from "googleapis";
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const calendar = google.calendar({ version: "v3" });
//
// Timezone
const TIMEZONE = "+02:00";
//
const Credentials = JSON.parse(process.env.CREDENTIALS);
const calendar_id = process.env.CALENDAR_ID;
//
const auth = new google.auth.JWT(
  Credentials.client_email,
  null,
  Credentials.private_key,
  SCOPES
);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello From Root");
});

// Post New Meeting
app.post("/meetings", async (req, res) => {
  const date = req.body;
  try {
    const bookAnEvent = await user1.bookAppointment(
      calendar,
      date,
      auth,
      calendar_id
    );
    res.send(bookAnEvent);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Events
app.get("/meetings", async (req, res) => {
  try {
    const getAllEvents = await user1.getEvents(
      new Date(req.body.eventTimeStart),
      new Date(req.body.eventTimeEnd),
      calendar,
      auth,
      calendar_id
    );
    res.send(getAllEvents);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      // data: error.response.data,
    });
  }
});

// Delete specific Event
app.get("/meetings/:id", async (req, res) => {
  const event_id = req.params.id;
  try {
    await user1.deleteEvent(calendar, auth, calendar_id, event_id);
    res.status(204).send({
      success: true,
      message: `Event : ${event_id} Deleted Successfully`,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      // data: error.response.data,
    });
  }
});

// Update an Event
app.put("/meetings/:id", (req, res) => {
  try {
    const data = {
      end : new Date(req.body.end.dateTime),
      start : new Date(req.body.start.dateTime),
      description : req.body.description ,
      summary : req.body.summary
    }
    const event_id = req.params.id;
    user1.updateEvent(calendar, auth, calendar_id, event_id , data);
    res.send({
      success: true,
      message: `Event : ${event_id} Updated Successfully ---- Start : ${data.start} , End :  ${data.end} `,
    });
  } catch (error) {
    console.error("Error in Ubdate : ", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

const user1 = new User("Mostafa Mohdy", 20);
