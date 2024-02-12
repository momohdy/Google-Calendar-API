import express from "express";
const router = express();

// Custom Modules
import User from "../modules/User.js";


// GOOGLE - APIS 
import { calendar , calendar_id ,  auth } from "../config/google-apis.js"


// Parsing request
router.use(express.json());

const user1 = new User("Mostafa Mohdy", 20);


// Post New Meeting
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
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

// Update an Event
router.put("/:id", (req, res) => {
  try {
    const data = {
      end: new Date(req.body.end.dateTime),
      start: new Date(req.body.start.dateTime),
      description: req.body.description,
      summary: req.body.summary,
    };
    const event_id = req.params.id;
    user1.updateEvent(calendar, auth, calendar_id, event_id, data);
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

// Delete specific Event
router.delete("/:id", async (req, res) => {
  const event_id = req.params.id;
  try {
    await user1.deleteEvent(calendar, auth, calendar_id, event_id);
    res.status(204);
    res.send({
      success: true,
      message: `Event : ${event_id} Deleted Successfully`,
    })
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      // data: error.response.data,
    });
  }
});

export { router }
