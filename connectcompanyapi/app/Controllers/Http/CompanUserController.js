"use strict";

class CompanUserController {
    async getAllEvents({ request, response, auth }) {
        const events = await Database.select("*").from("events");
    
        return events;
      }
}

module.exports = CompanUserController;
