"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompaniesSchema extends Schema {
  up() {
    this.create("companies", (table) => {
      table.increments().primary().index("id");
      table.string("companyName", 100).notNullable();
      table.string("companyLocation").notNullable();
      table.integer("userId").unsigned().notNullable();
      table.foreign("userId").references("users.id").onDelete("cascade");
      table.date("eventDate").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompaniesSchema;
