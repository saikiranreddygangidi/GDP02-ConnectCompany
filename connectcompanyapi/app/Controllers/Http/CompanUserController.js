"use strict";
const Database = use("Database");
class UserController {
  async getAllCompanies({ request, response, auth, params }) {
    const tempcompanies = await Database.select("*").from("companies");

    const userName = params.userName;
    const companies = [
      {
        id: 1,
        companyName: "google",
        companyLocation: "United States",
        noofevents: 1,
      },
      {
        id: 2,
        companyName: "microsoft",
        companyLocation: "India",
        noofevents: 2,
      },
    ];
    return companies;
  }

  async addSubscribe({ request, response, auth, params }) {
    let subdetails = request.post();
    let subid = await Database.table("subscriptions").insert(subdetails);

    return response.json({ message: "succefully uploaded with id " + subid });
  }

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
}

module.exports = UserController;
