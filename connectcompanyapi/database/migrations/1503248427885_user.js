"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments().primary().index("id");
      table.string("username", 80).notNullable().unique();
      table.string("email", 254).notNullable().unique();
      table.string("code", 60).notNullable();
      table.string("role", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
