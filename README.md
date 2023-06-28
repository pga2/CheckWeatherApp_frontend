# CheckWeatherApp

![alt text](https://i.imgur.com/6XwAFpi.png)

CheckWeatherApp is a student project developed as a part of the Network Systems course. It is a web application that provides weather forecasts for the user's location. The frontend of the application is built using Angular and TypeScript, while the backend is developed with Java and the Spring framework. Additionally, the application utilizes a MySQL database to store historical weather data for users.

## Features
- Weather Forecast: The app provides users with accurate and up-to-date weather forecasts for their current location. It retrieves weather data from a reliable weather API and displays it in a user-friendly manner.
- Historical Weather Data: CheckWeatherApp stores historical weather data for each user in a MySQL database. This feature enables users to access their past weather information and review weather trends over time.
- Responsive Design: The frontend of the application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.

## Technologies used
- Frontend:
    - Angular
    - TypeScript
- Backend:
    - Java
    - Spring Framework
- Database:
    MySQL


## Run Locally
To run the CheckWeatherApp locally, follow these steps:


1. Clone the project

```bash
  git clone https://github.com/pga2/CheckWeatherApp_frontend
```

2. Set up the backend:
- Make sure you have Java and Maven installed on your system.
- Clone the backend project:
```bash
  git clone https://github.com/pga2/CheckWeatherApp_backend
```
- Navigate to the backend directory:
```bash
  cd weather
```
- Install the required dependencies and build the application.
```bash
  cd mvn clean install
```
- Configure the MySQL database connection in the application configuration file.
```bash
  cd Weather\src\sql
```
- Navigate to the build directory.
```bash
  cd C:\Users\{YOUR_USERNAME}\m2\repository\com\pawelmikolaj\weather\Weather\0.0.1-SNAPSHOT\Weather-0.0.1-SNAPSHOT.jar
  
```
- Run the backend application.
```bash
  -java -jar Weather-0.0.1-SNAPSHOT.jar
```
3. Set up the frontend:
- Make sure you have Node.js and Angular CLI installed on your system.
- Navigate to the frontend directory:

```bash
  cd check-weather-app
```
- Install the required dependencies.

```bash
  npm install --force
```

- Start the frontend server.

```bash
  ng serve
```

4. Access the application:
Open your web browser and visit http://localhost:4200 to access CheckWeatherApp.


## Authors

- [@pga2](https://www.github.com/pga2)
- [@miksjas](https://www.github.com/miksjas)

