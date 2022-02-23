"use strict";

/*
|--------------------------------------------------------------------------
| EventSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");
class EventSeeder {
  async run() {
    let events = [
      {
        eventName: "mobile launch",
        eventType: "external",
        eventLocation: "Maryville",
        belongsTo: 1,
        createdBy: 1,
        eventDate: "2021-07-19",
      },
      {
        eventName: "mobile launch",
        eventType: "external",
        eventLocation: "Maryville",
        belongsTo: 1,
        createdBy: 1,
        eventDate: "2021-07-19",
      },
    ];
    await Database.insert(events).into("events");
  }
}

module.exports = EventSeeder;
