# dl-course-app
## Tech Stack
Frontend: ReactJs
Backend: Java-SpringBoot
DataBase: MySQL

## Deployment Process
### Database setup
- take MySQL Database with latest version
  - username: **root**
  - password: **your-password**
  - port: **3306**
  - Database Address: **localhost/pub-ip**
 ### Backend setup
- Update your database details in this file
  - CRUD/src/main/resources/**application.properties**
- Install **java-17**
- build tool is **maven**
- Output folder **target**
  - you will find **JAR** file inside it , just run that one
- Browser pub-ip:8080/api
  - you will get message: **Successfully connected to Backend!**
- 
### frontend
- course_store/src/Services/FormService.jsx
  - insted of **localhost** give backend **pub-ip**
- course_store/src/Components/CourseDetails/CourseDetails.jsx
  - insted of **localhost** give backend **pub-ip**
