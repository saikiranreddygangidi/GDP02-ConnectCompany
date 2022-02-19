"use strict";
const Database = use("Database");
class UserController {
  async getAllEnrolledEvents({ params, request, response, auth }) {
    let uid = params.uid;
    let events = await Database.raw(
      "select * from events where id in (select eventId from subscriptions where userId =" +
        uid +
        ")"
    );

    return events[0];
  }

  async getAllnotEnrolledEvents({ request, response, auth, params }) {
    let uid = params.uid;
    let events = await Database.raw(
      "select * from events where id not in (select eventId from subscriptions where userId =" +
        uid +
        ")"
    );

    return events[0];
  }
  async addSubscribe({ request, response, auth, params }) {
    let subdetails = request.post();
    let subid = await Database.table("subscriptions").insert(subdetails);

    return response.json({ message: "succefully uploaded with id " + subid });
  }
}

module.exports = UserController;
