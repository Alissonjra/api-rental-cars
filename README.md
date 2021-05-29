<img src="/.github/logo.png" width="200" />

# API Rental cars 
> Manage rental cars

## Database Diagram

<img src="/.github/diagram.png"  />

# :rocket: Features
* Create car, categories, images of car and specifications.
* List available cars with filters(category,brand and name of car)
* Rent a car
* Return a car 
* List rentals for a user
* Recover Password
* Refresh token


# :construction_worker: Installation

Clone this repo:

```https://github.com/Alissonjra/api-rental-cars ```

Run the following script in order to execute the application in development mode:

``` yarn ```



# :runner: Getting Started


If you use docker, initialize your service and run the command :

``` docker-compose up -d ```


Run the transactions in order to configure the database:

```yarn typeorm migration:run```


:runner: The application is running in the docker container.

or

Initialize your database 

``` ( POSTGRESQL )```

Start the application:

```yarn dev```


Run the transactions in order to configure the database:

```yarn typeorm migration:run```



# :runner: Run tests
```yarn test```

# :memo: Swagger documentation
Available in route ``` /api-docs ```


# :hammer: Technologies

In this project i used this technologies:

- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Dayjs](https://www.npmjs.com/package/dayjs)
- [Jsonwebtoken](https://jwt.io/)
- [Mime](https://www.npmjs.com/package/mime)
- [Multer](https://www.npmjs.com/package/multer)
- [Nodemailer](https://nodemailer.com/about/)
- [Rate-limiter](https://www.npmjs.com/package/express-rate-limit)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Jest](https://jestjs.io/)
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [Tsyringe](https://www.npmjs.com/package/tsyringe)
- [Handlebars](https://handlebarsjs.com/)
- [Csv-parse](https://www.npmjs.com/package/csv-parse)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Aws-sdk](https://aws.amazon.com/pt/sdk-for-javascript/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
