# MLB-Teams

The following project uses an Angular/Spring Boot framework and runs on Java 8.

To run the project:
  1. Clone into IDE, once cloned let the files index.
  2. Once the files are done indexing, run 'cd FrontEnd' and then 'npm install' to install dependencies.
  3. Cd into the 'mlb-teams-service' folder and run the backend by using the command 'mvn spring-boot:run'. The backend is hosted on http://localhost:8081 and has these  mappings: "/teams/", "/teams/{{teamId}}/players", "/player/{{playerId}}". **NOTE** Maven needs to be installed to run the above command to run the backend. See below for an alternative way to run the backend.
  4. Now that the backend is running, run "ng serve -o" while in the FrontEnd folder to start up the frontend.
  5. The application is completely up and running!

**If Maven is not installed on your machine**
  1. In Intellij, click on "Add Configuration" at the top next to the play button
  2. Click the + on the top left and select "Spring boot"
  3. Name the configuration to whatever you'd like
  4. Make sure the SDK being used is Java 8
  5. In module, select mlb-teams-service
  6. In main class, enter the following "com.mlb.mlbteamsservice.MlbTeamsServiceApplication".
  7. If step 6 gives you an error, go to File -> Project Structure. On the far left, select modules. In modules select mlb-teams-service. Click on "Add Content Root" and select ./MLB-Teams/mlb-teams-service
  8. Hit Apply and OK
  9. Now you'll be able to run the backend by clicking the play button up at the top.
