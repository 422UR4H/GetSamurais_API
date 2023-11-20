# GetSamurais_API

Back-end API for the <strong>GetSamurais</strong> project. This application was made to <strong>match service providers with new customers</strong> in a quick and effective way, with a rating system (under development) to ensure greater security for customers and service providers to connect in a greater degree of tranquility! </br>
This server works through HTTP requests following the RESTful pattern.

# Demo

[Link API Deployed on Render](https://getsamurais-api-yfbn.onrender.com)

# How it works?

This project is a RESTful API to serve the GetSamurais application. It owns the entities: </br>
`auth`, `user`, `address`, `phone`, `service`, `category`, `feedback` and `comment`.

The characteristics of these entities are in `src/schemas`.

### Routers:

- GET `/address/:cep`: To get address (need authentication)

- GET `/services/user`: To get all services from the user (need authentication)

- POST `/sign-up`: To create account with body:

```json
{
  "user": {
    "name": "string",
    "nick": "string",
    "email": "string",
    "password": "string",
    "birthday": "date string"
  },
  "address": {
    "cep": "alphanumeric string",
    "city": "string",
    "street": "string",
    "lotNumber": number,
    "complement": "string",
    "neighborhood": "string",
    "federalUnit": "string"
  },
  "phone": {
    "phoneNumber": "alphanumeric string"
  }
}
```

- POST `/sign-in`: To login with body:

```json
{
  "email": "string",
  "password": "string"
}
```

- POST `/services`: To create a new service with body:

```json
{
  "service": {
    "name": "string",
    "serviceDescription": "string",
    "price": number
  },
  "categories": {
    "category": "string"
  }
}
```

If the structure is not respected, a 422 error is returned.</br></br>
Note: This webservice is still being implemented

# Technologies used

For this project, we used:

- Node (version 14.17.0);
- Express;
- JavaScript;
- PostgreSQL;
- JWT;
- Joi;

# How to run in development

To run this project under development, you need to follow the steps below:

- Download necessary dependencies with the command: `npm install`;
- Then create the `.env` file based on `.env.example`;
- This `.env` file is composed of the following properties:

```json
DATABASE_URL=postgres://postgres:postgres@urlexample/database
JWT_SECRET=textkey
PORT=4224
```

- The `DATABASE_URL` property is used to connect to the database.
- To run the project under development, run the command `npm run dev`;
- Manual tests can be done through the Thunder Client. At the root of the project there is a collection called `thunder-collection_get-samurais.json` that can be loaded into the tool.

# How to run in production (optional)

- Build the project with npm run build;
- Upload to your preferred platform
