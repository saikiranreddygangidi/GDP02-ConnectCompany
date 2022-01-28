# Connect Company

## Statement of Purpose :


-	In any business climate, creating associations and extending effort can enormously affect your organization's primary concern. This connect company may increases the market visibility, systems administration and connect job goal to the company, manages the time, provides more opportunities to the user by projecting all the available updates about all the companies in one platform. In this applications users can have the easy accessibility to view the events from different companies and they can fix the remainders and schedule the events.

## Overview :

-	This application is all about connecting the user to companies. So far there are only a few platforms where a user can connect to companies. So we have developed our idea based on this concept. This Connect company is used to connect the job aspirant to the company events. So in this platform where user login into the connect company website and he/she can view the events organized by the companies.
There are multiple side advantages through this connect company firstly The companies can minimize advertisement for hiring the people and from the user point of view instead of he/she searching for the job openings on the mega-platforms simply he/she can look in to connect company for the events.
The user should have a valid username and password to enter into the system and also get notifications about the updates on subscribed channels.
How the application will works
- Each organization will be registered in the portal and they can post events happening in their company like an interview, Tech talks, or any updates on the company.
-	Users can open and subscribe to the company events or companies listed in the portal.
-	User can submit their request to join in the upcoming events.
-	They can get updates and emails on the subscribed events.

**After subscribing to the event,**
-	The user should be able to see a list of events happening and subscribed by him to return to the starting location (show on a map?)
The website is cooperative, not complex to find the company and subscribe to the events happening.

## Benefits :
- The user will be informed about different company events.
- Companies can save money on advertising by using this application.
- This website serves as a link between the user and the company.
- This website acts as a perfect transparent medium between users and companies.


 
## Epics / User Stories / Tasks :
- As a **USER**, I want to regiter into the application by providing the all the required information.
   
- As a **USER**, I want to login into the application by providing valid credentials.
     - **Given,** User should be authenticated on providing valid credentials 

- As a **USER**, I should be shown with valid error message if I provide invalid credentials.
     - **Given,** Or else in another case User should be displayed with a proper message in case of invalid credentials

- As a **USER**, I want to view all the events happing in differnet companies and should be able to register for the events.
     - **Given,** User should be able to register for the events successfully and If the user searches for an event, all the relevant events in different companies should be displayed
 
- As a **USER**, I want to be notified before the event.
    - **Given,** Confirmation that the user will receive updated notifications for upcoming events and tasks
</br>

- As a **ADMIN**, I want to login into the application by providing valid credentials.
- As a **ADMIN**, I should be shown with valid error message if I provide invalid credentials.
- As a **ADMIN**, I want to check the user details and the events that users have registerd for.
- As a **ADMIN**, I want add new new company into the application.
</br>

- As a **COMPANY ADMIN**, I want to regiter into the application by providing the all the required information.
- As a **COMPANY ADMIN**, I want to login into the application by providing valid credentials.
- As a **COMPANY ADMIN**, I should be shown with valid error message if I provide invalid credentials.
- As a **COMPANY ADMIN**, I want to add, edit and delete different events occuring in a company.
- As a **COMPANY ADMIN**, I want to check all the registered users for an event.

 
## Acceptance criteria checklist :
-	User should be authenticated on providing valid credentials.
-	Or else in another case User should be displayed with a proper message in case of invalid credentials. 
-	User should be able to register for the events successfully.
-	If the user searches for an event, all the relevant events in different companies should be displayed.
-	Confirmation that the user will receive updated notifications for upcoming events and tasks.
-	The UI should be user friendly so that the user can register in an event easily with out any hesitation.



## Functional Requirement
functional requirements are classified based upon the role 
- Admin User can create a profile to the organization and Adds the committee members and other Admins
- Admin User Can add event users to different events and schedule different events in different locations and times.
- Admin User can delete event User at any time and also he/she can User can track the different user activities.
- Admin User can access any user details and Activities performed by an individual.
- Admin users can not only manage their own created events but can manage an event in the organization
- As a Committee User can manage Events in a particular organization at any time or location and can also reschedule it 
- As a Committee User delete event User at any time for any organization.
- As a Committee User can track the different user activities of his own created events and he/she should have access to all the User's details and Activities performed by the individual.
- As a Committee User can generate the report of his own created event in the organization after completion of the event.
- As an End User, he/she can need to create his/her profile
- As an End User He/she can also provide what is/her interests what need he/she what to do with the account For example, one wants to communicate with a business organization can choose a organization.
- As End-user, one can view the different organizations
- He/she can manage the different organizations that are he/she can be in multiple organizations at a time,
- As an End User, One can add into manage multiple events (At different times)
- As an End User, one can exits from any event before a specific time.

## Performance Requirements
- The system should have ability to handle large data because it process details of different users and events across differnt organizations .
- should be used efficient algorithms for encryption and decryption  different details like password and some other secure data
- the relationship among the table in database should be very vaild and efficient such that it decrease huge time for retriving uploading data
- we have find a method to efficient to upload media file to serve 
## other Requirements
- Application and database should be running or alive all the time should handle the runtime exceptions
- System should have secured database and use efficient algorithm for encryption and decryption .
- secret information should be stored after encryption.
- database size should be grown along with data size in the database .
- the project should manage the different user access according the role  



## User interface sketches
![](GDP%20Images/registerForm.png)
![](GDP%20Images/loginForm.png)
![](GDP%20Images/welcome.png)



## E-R diagram displayed :
![](https://github.com/Nikhilreddy012/connectCompany_Gdp_04/blob/main/GDP%20Images/ER%20Diagram.jpeg "ERDiagram")

## Consistent set of sample data in Excel, use one sheet for each entity
![](GDP%20Images/Capture1.PNG)
![](GDP%20Images/Capture3.PNG)
![](GDP%20Images/Capture5.PNG)
![](GDP%20Images/Capture4.PNG)
![](GDP%20Images/Capture2.PNG)



## Technology stack descriptions :

### Backend framework 
- The backend Framework we are using is adonisJs which is writtern in JavaSprint
- It is a fully optimized frame work which advanced methods and feature for relation struture data operation.

### Backend free app host 
- The Backend app host for our project would be *HEROKU*
### Data host 
- The data host we are planning to use is freesqldatabase which provides as three free database
### Front-end plan 
- For the frontend  we planning to use vue js framework which is an component based framework
### Front-end responsive design 
- The Front-end responsive design would be *Bootstrap*



## Risks and assumptions :


-	The user should be able to login into page using email id and password
-	Displaying the different dashboards for each of the accounts Admin, User, and Committe User.
-	Making sure the system is compatible with all web browsers (Firefox, Google Chrome,Internet Explorer, Safari, Edge, etc.)
-	MySQL database that holds all info on organizations, organization's events and user informaqtion.
-	Admin should be able to view a list of all organizations, organization's events and the user who registered for the particular events.

## Deliverable Artifacts

| S. No. | Deliverable Name                                                           | Description              | Owner | Status |
|------|--------------------------------------------------------------------|--------------------| ------------- | ---------- |
| 1    | Identify the Project Goals and Plan           |  Identifying the goals that project should achieve and Finding the respetive Technologies to achieve the Goals  | Saikiran  |  Completed |
| 2    | Design UI part                   |  Design the webpage of the website and navigation among them | Saikiran | In Progress |
| 3    | Back-end project creation and setup                  | Api and migrations parts code were done| Venkat | Completed |
| 4    | Frontend project creation and SetUp                  |  Setup the code for routing among webpages | Vivek | Completed |
| 5    | Register and Login Module UI                  |  Creating Login Page and Register Page using vue js | Nikhil  | Completed |
| 6    | Front end and backend integration                   | creating the code for api calling to backend from front end using axios  | Swetha | Completed |
| 7    | Admin can add and manage other committe members and events | Creating an UI functionality for Admin to add committe and companies into system | Venkat | Yet to Start |
| 8    | Committe memeber can add and manage events   | Creating an API to add event data to db | Vivek | Yet to Start|
| 9    | User can view different companies and events and subcribe to it | Creating a form where a committe member can add events to the system | Swetha | Yet to Start|
| 10    | API to see and events,members in events | Creating an API to add events to the system | Nikhil | Yet to Start|

## Scope:
- This application provides a platform where a user can connect to different companies and know what all events goings in the company such as job interviews, product launch events, any important meeting etc. The user can register for the events and get notified before the event. In a similar way, the company admin can post events occurring in the company and can also view the registered users.

## Milestones:
- Developing REST API's and get them tested using postman tool.
- Developing the User Interface 
- Database creation and connection with the backend
- End to End testing
- Deploying the application in heroku
 
## Schedule and Iteration Plan:
#### **Sprint-1**:  (Start Date: 11th October 2021 – 25th October 2021)
 -	 In the initial sprint we have built the plan 
 -	we have sorted the technologies and requirements we are dealing.
#### **Sprint-2**: (Start Date: 25th October 2021 – 08th October 2021)
 -	 Built the UI Page using Vue js and build backend using adonis js
 -	Connected the backend with the frontend using rest API we majorly using Axios for connection.
#### **Sprint-3**: (Start Date: 8th November 2021 – 22nd November 2021)
 -	Built the database in MYSQL and deployed the application in Heroku and using a remote free SQL database
### End Of Semester GDP-1

## GDP-2

####	**Sprint-4**: (Start Date: 12th January 2022 – 26th January 2022)
 - Create Database models and schema.
####	**Sprint-5**: (Start Date: 26th January 2022 – 9th February 2022)
 -	Developing the relations between different tables.( like one-to-one ,many-to -many)
####	**Sprint-6**: (Start Date:9th February 2022- 23rd February 2022)
 -	Design web APIs.
#### **Sprint-7**: (Start Date:23rd February 2022- 9th March 2022)
 -	Create APIs to communicated with backend database.
#### **Sprint-8**: (Start Date: 9th March 2022 – 23rd March 2022)
 -	Design all the User Interface pages based on backend requirements.
#### **Sprint-9**: (Start Date: 23rd March 2022 – 6th April 2022)
 -	Integration with both frontend and backend
#### **Sprint-10**: (Start Date: 6th April 2022- 20th April 2022)
 -	Testing and fixing issues, Deployment of the application


## Budget
| S. No. | Name                                                            | Role              | Hourly Pay                | Hours/ Week | Estimated Cost/ Week |
|------|--------------------------------------------------------------------|--------------------|------------------------| ------------- | ---------- |
| 1    | [Nikhil Reddy Pannala](https://github.com/NikhilReddy012)           |  Developer  | $45 |   9 - 12 |  $405 - $540 |
| 2    | [Venkat Sai Jarugula](https://github.com/jarugulavenkat7)                   |  Developer | $45 | 9 - 12 | $405 - $540 |
| 3    | [SaiKiran Gangidi](https://github.com/saikiranreddygangidi)                   |  Developer | $45 | 9 - 12 | $405 - $540 |
| 4    | [Vivek Drakshapally](https://github.com/vivekd31)                   |  Developer | $45 | 9 - 12 | $405 - $540 |
| 5    | [Gahana Swetha Sanagala](https://github.com/swetha34)                   |  Developer | $45 | 9 - 12 | $405 - $540 |
|    |               |   |  | Material Resources  | $1000 |
|    |               |   |  | Total  | $3025 - $3700 |


## Test plan with requirements
   - Analyze the product
   - Design the Test Strategy
   - Define the Test Objectives
   - Define Test Criteria
   - Resource Planning
   - Plan Test Environment
   - Schedule & Estimation
   - Determine Test Deliverables
 ## Testing Types
     - Functional Testing
     - Manual Testing
     - Interactive Testing
     - Regression Testing
