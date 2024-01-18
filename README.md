# Weather App

![alt text](https://i.imgur.com/6XwAFpi.png)

CheckWeatherApp is a student project developed as a part of the Multi-layer Systems Course. It is a web application that provides weather forecasts for the user's location. The frontend of the application is built using Angular and TypeScript, while the backend is developed with Java and the Spring framework. Additionally, the application utilizes a MySQL database to store historical weather data for users.

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

## Risk Register for the CheckWeatherApp project

**Risk Description: Inadequate Understanding of Weather API**
Likelihood: Moderate
Impact: High
Mitigation: Conduct thorough research on selected weather APIs.

**Risk Description: Technical Issues with Server Deployment**
Likelihood: Low
Impact: High
Mitigation: Perform regular system checks, conduct thorough testing before deployment, and have a backup plan for quick restoration in case of technical failures.

**Risk Description: Unavailability of Real-Time Weather Data**
Likelihood: High
Impact: High
Mitigation: Identify multiple reliable data sources and regularly monitor data sources in Lędziny for consistency.

**Risk Description: Team Member Availability Issues**
Likelihood: Low
Impact: Moderate
Mitigation: Develop a clear communication plan, maintain an updated project schedule, and encourage open communication among team members to address any potential availability issues.

**Risk Description: Incomplete Documentation**
Likelihood: Moderate
Impact: Low
Mitigation: Assign specific responsibilities for documentation, conduct regular reviews, emphasize the importance of thorough documentation throughout the project and not working on documentation 1 day before the deadline

**Risk Description: Limited Testing Resources**
Likelihood: High
Impact: Moderate
Mitigation: Allocate sufficient time and resources for testing, prioritize critical test cases.

**Risk Description: Server Downtime**
Likelihood: Low
Impact: High
Mitigation: Implement regular maintenance schedules.

**Risk Description: Paweł forgets the password**
Likelihood: Moderate/High
Impact: Low
Mitigation: other team members start using sticky notes and save passwords in case of emergency.

**Risk Description: Hard drive crash**
Likelihood: Low
Impact: Low
Mitigation: Perform regular updates into the git.

**Risk Description: Internet outage in Lędziny during the meeting**
Likelyhood: Low
Impact: Minor
Mitigation: The team members start using hotspot on their smartphones.

---
![image](https://hackmd.io/_uploads/SJhbRzvY6.png)

---
## Backend schema

![alt text](https://i.imgur.com/LV66xJL.png)


---

**WeatherDataRepository Interface**
**Description:**
The WeatherDataRepository interface provides CRUD operations for the WeatherData entity.
**findByLonAndLatAndDate**
**Description:** Custom query to find weather data by longitude, latitude, and date.
Parameters:
lon (double): Longitude coordinate.
lat (double): Latitude coordinate.
date (Date): Date of the weather data entry.
Returns: List of WeatherData matching the specified criteria.


---

**WeatherDataServiceImpl Class**
**Description:**
The WeatherDataServiceImpl class implements the WeatherDataService interface and provides the business logic for managing weather data.
Methods:
Constructor:

**Description:** Initializes the service with a WeatherDataRepository instance.
Parameters:
repository (WeatherDataRepository): Repository for weather data.
addTodaysWeather:

**Description:** Adds today's weather data if it doesn't already exist.
Parameters:
value (WeatherData): Weather data to be added.
getHistoricalWeatherData:

**Description:** Retrieves historical weather data for a specific location.
Parameters:
lon (double): Longitude coordinate.
lat (double): Latitude coordinate.
Returns: List of historical WeatherData entries.


---

**WeatherController Class**
**Description:**
The WeatherController class handles HTTP requests related to weather data.
Methods:
addWeather:

**Description:** Handles a POST request to add weather data.
Parameters:
value (WeatherData): Weather data to be added.
getHistoricalWeather:

**Description:** Handles a GET request to retrieve historical weather data.
Parameters:
lon (double): Longitude coordinate.
lat (double): Latitude coordinate.
Returns: List of historical WeatherData entries.
handle:

**Description:** Handles exceptions and returns a BAD_REQUEST response.
Parameters:
e (Exception): The exception.
Returns: ResponseEntity containing the exception message.

## Database schema

Database: weather_database
![alt text](https://i.imgur.com/ovBuM0s.png)

The weather_data describes the structure of a database table:

* id - Unique identifier of the record, automatically incremented.
* lon - Geographical longitude of the weather measurement location.
* lat - Geographical latitude of the weather measurement location.
* date - Date of the weather measurement.
* sunrise - Time of sunrise (in integer form).
* sunset - Time of sunset (in integer form).
* temp - Temperature at a specific location and time.
* humidity - Air humidity (in percentage).
* pressure - Atmospheric pressure.
* main - General category of weather conditions (e.g., rain, snow).
* description - Detailed description of weather conditions.


## Testing


---

**Functional Testing: Passed**
* Unit Testing: We cheched individual elements of the website, such as buttons or interactive features.

* Integration Testing: We ensure that different components of the website work together correctly, including databases and servers.

* Acceptance Testing: We evaluate whether the website meets the project requirements and is ready for acceptance.


---

**Usability Testing: Passed**
* Usability Testing: Evaluates how easily users can interact with the website, including navigational tests and readability analysis.

* Accessibility Testing: Checking if the website is accessible to users with various needs, such as those with disabilities using screen readers.


---

**Performance Testing: Passed**

* Load Testing: Checks how the website behaves under heavy load, such as a large number of users simultaneously.

* Page Load Speed Testing: Assesses how quickly the website loads to ensure positive user experiences.


---

**Compatibility Testing: Barely**

* Cross-browser Testing: Ensures the website functions correctly on various web browsers like Chrome, Firefox and Edge.

* Cross-device Testing: Test whether the website is responsive and functions well on different devices like smartphones and computers. We used team members smartphones and PC's.


---

**Database Testing: Passed**
* Data Integrity Testing: We checked if data is correctly stored and processed in the database.

* Data Migration Testing: Check correctness of moving data between different database versions.

---

**Emergency Testing: Passed**
* Recovery Testing: We tested how quickly and effectively the website can be restored to its state before a failure.

---

**Interoperability Testing: Passed**

* Integration Testing with External Systems: We checked if the website properly cooperates with other systems(linux/mac), services, or applications.


---


## Authors

- Paweł Gwóźdź (The Team Leader)
- Mikołaj Jasiński (Front-end, Back-end)
- Jakub Jaworski (Tester, Front-end, Back-end)
- Bartosz Grygierczyk (Database, Back-end)
