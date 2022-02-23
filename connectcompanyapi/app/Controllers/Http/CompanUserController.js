"use strict";

class CompanUserController {
  async getAllEvents({ request, response, auth }) {
    const events = await Database.select("*").from("events");

    return events;
  }

  async getAllEventsByUID({ params, request, response, auth }) {
    let uid = params.uid;
    const events = await Database.table("events")
      .innerJoin("companies", "events.belongsTo", "companies.id")
      .where("companies.userId", uid);

    return events;
  }
}

module.exports = CompanUserController;
