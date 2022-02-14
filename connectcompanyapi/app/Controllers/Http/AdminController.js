"use strict";
const Database = use("Database");
class AdminController {
  async getAllCompanies({ request, response, auth }) {
    const tempcompanies = await Database.select("*").from("companies");
    return tempcompanies;
    
  }
}

module.exports = AdminController;