"use strict";

/*
|--------------------------------------------------------------------------
| CompanySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class CompanySeeder {
  async run() {
    const companies = [
      {
        companyName: "google",
        companyLocation: "United States",
        userId: 1,
        eventDate: "2021-07-19",
      },
      {
        companyName: "Microsoft",
        companyLocation: "United States",
        userId: 1,
        eventDate: "2021-07-19",
      },
    ];
    await Database.insert(companies).into("companies");
  }
}

module.exports = CompanySeeder;
