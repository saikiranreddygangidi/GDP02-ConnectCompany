"use strict";
const Database = use("Database");
const Mail = use("Mail");
const Env = use("Env");
class CompanyUserController {
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
  async getCompanyDetails({ params, request, response, auth }) {
    let eventId = params.eventId;
    let company = await Database.table("events")
      .innerJoin("companies", "events.belongsTo", "companies.id")
      .where("events.id", eventId);

    return company;
  }
  async addCompany({ request, response, auth }) {
    try {
      let company = request.post();
      console.log(company);
      let companyMember = {
        username: company.CompanyMemberUserName,
        email: company.CompanyMemberEmail,
        role: "companyUser",
        code: "*****",
      };
      let companydetail = {
        companyLocation: company.companyLocation,
        companyName: company.companyName,
        userId: company.userId,
        eventDate: company.eventDate,
      };
      let companymemberid = 0;
      let companyid = 0;
      try {
        companymemberid = await Database.table("users").insert(companyMember);
      } catch (err) {
        console.log(err);
      }
      try {
        companyid = await Database.table("companies").insert(companydetail);
      } catch (err) {
        console.log(err);
      }

      let useremail = Env.get("MAIL_USERNAME");

      let cid =
        "https://connectcompanysketch.herokuapp.com/#/updatePassword/" +
        companymemberid;
      console.log(cid);
      console.log("here is the email", useremail);

      return response.json({
        message: "succefully uploaded with id " + companyid,
      });
    } catch (err) {
      console.log("err  in catch", err);
      response.status(400).json({
        err: err,
      });
    }
  }
}

module.exports = CompanyUserController;
