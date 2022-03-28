"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "hello world, backend is setted up" };
});
Route.group(() => {
  Route.post("/register", "AuthController.register");
  Route.post("/login", "AuthController.login");
  Route.get("/getAllCompanies", "AdminController.getAllCompanies");
  Route.get("/getAllEvents", "CompanyUserController.getAllEvents");
  //for comapanies
  Route.get("/getAllEventsByUID/:uid", "CompanyUserController.getAllEventsByUID");


  Route.get("/getCompanyDetails/:eventId", "CompanyUserController.getCompanyDetails");
  Route.get("/getCompanyDetailsByUID/:uid", "CompanyUserController.getCompanyDetailsByUID");

  Route.post("addCompany","CompanyUserController.addCompany");
  Route.post("updatePassword","CompanyUserController.updatePassword");
  Route.post("addEvent","CompanyUserController.addEvent");
  Route.post("addSubscribe","UserController.addSubscribe");
  Route.get("/getAllCompanies/:userName","UserController.getAllCompanies");
  Route.get("/getAllEnrolledEvents/:uid","UserController.getAllEnrolledEvents");
  Route.get("/getAllnotEnrolledEvents/:uid","UserController.getAllnotEnrolledEvents");
  //comment

}).prefix("/connectcompany/api/v1");