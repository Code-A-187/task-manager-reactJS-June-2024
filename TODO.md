# Task-Manager-System-2024
SoftUni React Course Project

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add softuni practice server
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project resources
- [x] Convert html to jsx
- [x] Separate html into components
## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in the navigation
## 3. Create Service Layer
- [x] Service layer architecture
- [x] Abstract requester
- [x] Add tasks api
- [x] Preseed practice server
## 4. Page Implementations
- [x] Task list
- [x] Details
  - [x] Details link
  - [x] Details route
  - [x] Api function - getOne
  - [ ] Edit task modal
    - [x] Wrapp modals
    - [x] Modal close functionality
    - [x] Close when click outside of modal
    - [ ] Submit form
    - [ ] Refresh state of page under modal
  - [ ] Delete task modal
    - [x] Wrapp modals
    - [x] Modal close functionality
    - [x] Close when click outside of modal
    - [x] Delete on server
    - [x] Refresh state of page under modal
- [ ] Home - Last six tasks
## 5. Modal Implementations
  - [x] Modal manager
  - [x] Main modal
  - [x] Modal context implementation
## 6. Comments (Advanced)
- [x] Create service for nested resource `comments`
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form
## 7. API Hooks
- [x] Form Hook
- [x] TaskAPI Hooks
- [x] Comment Hooks
- [x] Modal hooks
## 8. Authentication
- [x] Auth API
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth state & context
- [x] Token management
- [x] Login
- [x] Register
  - [x] Add form validation
- [x] Logout
- [x] Authorized Requests
## 9. UI Implementation 
- [ ] Dynamic navigation
- [x] Create task
  - [x] API function
  - [x] Hook
- [x] Guard routes
  - public route guard
  - private route guard
- [x] 404 - Not found
- [ ] My tasks 
    - [ ] Latest tasks
    - [ ] Important tasks
    - [ ] Do it now tasks
    ???
## Notes
  1. Latest Games
     2. URL `http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=6`
     3. USE URLSearchParams
  2. seedData - line 1341 in server.js