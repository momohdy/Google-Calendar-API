import express from "express";
const router = express();

// Custom Modules
import User from "../modules/User.js";

// GOOGLE - APIS
import { calendar, calendar_id, auth } from "../config/google-apis.js";

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

    !bookAnEvent
      ? res.status(400).json({
          status: "fail",
          message: "You insert Date in the Past!",
        })
      : res.status(201).json({
          status: "success",
          data: {
            id: bookAnEvent.id,
            summary: bookAnEvent.summary,
            description: bookAnEvent.description,
            creator: bookAnEvent.creator,
            organizer: bookAnEvent.organizer,
            start: bookAnEvent.start,
            end: bookAnEvent.end,
          },
        });

  } catch (error) {
    console.error("Error in server :", error.message);
    res.status(500).json({
      status: "fail",
      error: "Internal Server Error",
      message : error.message
    });
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

    getAllEvents.length === 0  ? res.status(404).json({
      success : "fail" ,
      message : "No Events Found!"
    }) :
    res.status(200).json({
      status : "success" ,
      data : getAllEvents
    });

  } catch (error) {
    console.error("Error in server :", error.message);
    res.status(500).json({
      status: "fail",
      error: "Internal Server Error",
      message : error.message
    });
  }
});

// Update an Event
router.put("/:id", (req, res) => {
  try {
    const data = {
      start: new Date(req.body.start.dateTime),
      end: new Date(req.body.end.dateTime),
      description: req.body.description,
      summary: req.body.summary,
    };
    const event_id = req.params.id;
    user1.updateEvent(calendar, auth, calendar_id, event_id, data);
    res.status(200).send({
      status : "success",
      data : data,
    });
  } catch (error) {
    console.error("Error in Ubdate : ", error.message);
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
    res.status(204).end()
  } catch (error) {
    console.error("Error in delete :", error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

export { router };
