"use strict";

class AdminController {
  async getAllCompanies({ request, response, auth }) {
    const companies = [
      {
        id: 1,
        companyName: "google",
        companyLocation: "United States",
        companyUserName: "saikiran",
        email: "s@nwmissouri.edu",
      },
      {
        id: 2,
        companyName: "microsoft",
        companyLocation: "India",
        companyUserName: "saikiran",
        email: "s@nwmissouri.edu",
      },
    ];
    return companies;
  }
}

module.exports = AdminController;
