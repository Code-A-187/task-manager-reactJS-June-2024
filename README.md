# task-manager-reactJS-June-2024
Project for SoftUNi React JS course june to august 2024

That is a project for my React JS course. Task is to design and implement a web application (Single Page Application) using React.js. 
For the front end is used React with Vite. For back end Soft Uni student server is used.

The project is simple task manager. 
Users can 
	- register with Full name, e-mail, and password,
  	- login with e-mail and password,
   
Guest User: If not signed in (GUEST) user can view last six tasks and their details and comments. Editing, Commenting and Deleting is not possible.

Signed User: 
- Can see their user data (Full Name and e-mail) on the side bar.
- Can see create task and can create a task.
- Can add comments to all the tasks. 
- Can Edit or Delete only the task that the authenticated user created.
- Can see other users coments

From side bar can sort Completed tasks, Important tasks and Do it Now tasks, Or All available tasks.

Can logout from the side Bar. 

Loged in user can't load to /login or /register page from the nav bar.

Guests cant't load all private pages that are available for Loged in users.

STRARTING PROJECT
Client and Server folders should be in same folder.
Should use two separate terminals one for client and one for server.

1. Starting client
	- First in terminal of the root folder example: ...\task-manager-reactJS-June-2024-main\> cd client
	- Second in terminal example: ...\task-manager-reactJS-June-2024-main\client> npm install
 	- Third in terminal example: ...\task-manager-reactJS-June-2024-main\client> npm run dev
	- Client is redy to be used on http://localhost:5173/
	
2. Starting server
	- First in terminal of the root folder example: ...\task-manager-reactJS-June-2024-main\>cd server
	- Second in terminal example: ...\task-manager-reactJS-June-2024-main\server>node server.js
	- Should recieve
	     	Server started on port 3030. You can make requests to http://localhost:3030/
		Admin panel located at http://localhost:3030/admin
	- Server is up and runing waiting for requests from Task Manager
   	
   	
 There is preseeded data in server and there are Users that can be Signed in righaway:
 	- peter@abv.bg: 123456,
	- george@abv.bg: 123456,
	- admin@abv.bg: admin,
 



