// Google Calendar
import { google } from "googleapis";
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const calendar = google.calendar({ version: "v3" });


// config dotenv
import dotenv from "dotenv";
dotenv.config();
// 
const Credentials = JSON.parse(process.env.CREDENTIALS);
const calendar_id = process.env.CALENDAR_ID;


// Auth
const auth = new google.auth.JWT(
    Credentials.client_email,
    null,
    Credentials.private_key,
    SCOPES
  );


export { calendar , calendar_id ,  auth }