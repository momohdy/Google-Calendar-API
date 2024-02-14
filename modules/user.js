class User {
  _name;
  _age;

  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get getData() {
    return {
      name: this._name,
      age: this._age,
    };
  }

  bookAppointment(calendar, event, auth, calendarId) {
    if (!this.isPastDate(event)) {
      return this.insertEvent(calendar, event, auth, calendarId);
    }
  }

  insertEvent = (calendar, event, auth, calendar_id) => {
    return new Promise((resolve, reject) => {
      calendar.events.insert(
        {
          auth: auth,
          calendarId: calendar_id,
          resource: event,
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.data);
          }
        }
      );
    });
  };

  isAlreadyBooked(event) {
    // Some Logic : Check Google Calender
    const is_already_booked = false;

    return is_already_booked;
  }

  isPastDate(date) {
    const dateString = date.start.dateTime;
    const dateObject = new Date(dateString);

    return dateObject < new Date();
  }

  dateAndTime() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours() - 1;
    let minute = date.getMinutes();

    let startDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }T${hour < 10 ? "0" + parseInt(hour + 1) : parseInt(hour) + 1}:${
      minute < 10 ? "0" + minute : minute
    }:00`;
    let endDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }T${hour < 10 ? "0" + parseInt(hour + 2) : parseInt(hour) + 2}:${
      minute < 10 ? "0" + minute : minute
    }:00`;

    return {
      startDate: startDate,
      endDate: endDate,
    };
  }

  getEvents = (eventTimeStart, eventTimeEnd, calendar, auth, calendar_id) => {
    return new Promise((resolve, reject) => {
      calendar.events.list(
        {
          auth: auth,
          calendarId: calendar_id,
          timeMin: eventTimeStart,
          timeMax: eventTimeEnd,
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            const items = res.data.items.map(
              (item) =>
                (item = {
                  id: item.id,
                  summary: item.summary,
                  description: item.description,
                  creator: item.creator,
                  organizer: item.organizer,
                  start: item.start,
                  end: item.end,
                })
            );
            resolve(items);
          }
        }
      );
    });
  };

  deleteEvent = (calendar, auth, calendar_id, event_id) => {
    return new Promise((resolve, reject) => {
      calendar.events.delete(
        {
          auth: auth,
          calendarId: calendar_id,
          eventId: event_id,
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.data);
          }
        }
      );
    });
  };

  updateEvent = (calendar, auth, calendar_id, event_id, data) => {
    return new Promise((resolve, reject) => {
      calendar.events.update(
        {
          auth: auth,
          calendarId: calendar_id,
          eventId: event_id,
          resource: {
            start: {
              dateTime: data.start.toISOString(),
            },
            end: {
              dateTime: data.end.toISOString(),
            },
            description: data.description,
            summary: data.summary,
          },
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.data);
          }
        }
      );
    });
  };
}

export default User;
