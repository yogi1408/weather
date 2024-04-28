# Weather Forecast Application

This application provides real-time weather forecasts based on geographical locations. It utilizes data from the OpenWeatherMap API and stores location information in a PostgreSQL database using Prisma ORM.

## How to Run

1. **Install Dependencies**: Run the following command to install project dependencies:

   ```bash
   npm install
   npx prisma generate
   npx prisma migrate dev --name init
   npm run start:dev
   The application will be accessible at http://localhost:3000

2. **Set Environment Variables**: Create a .env file in the root directory of the project and define the following variables:

 ```bash
   DATABASE_URL=postgresql://<username>:<password>@127.0.0.1:<port>/<database_name>
   APIKEY=<openweathermap api key>
   

