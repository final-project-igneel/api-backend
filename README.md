# Gadget Fraqs Backend with Node.js, Express, Sequelize, Heroku

The backend is live on <https://gadget-fraqs.herokuapp.com>.
<hr>

## Setup

Run the `yarn install sequelize` script first, and run `seqeulize init` to initialize sequelize.


```sh
$ npm install --save sequelize
$ sequelize init
```


Then install the packages. <br>
These are our package
```
$ npm install mysql2 express body-parser dotenv cors jsonwebtoken bcrypt express-validator nodemon
```

After installation complete, you can insert new file `.env` then fill the env variables.

```txt
# change these
DB_HOST=127.0.0.1
DB_NAME=gadget-fraqs
SECRET=this_is_your_secret
```
<hr>

## Development

```sh
npm run start
```

Then open `http://localhost:4000`.

<hr>

## Deploying

You can use Heroku or Google Cloud Platform to deploy. Remember to change the environment variables as well.

```txt
DB_HOST=
DB_NAME=
SECRET=
```
<hr>

## Project Development Steps

```sh
mkdir projectname-backend
cd projectname-backend

npm init -y

sequelize init
```

First we need to create database using this script
```
$ sequelize db:create
```
sequelize will automatically create database name use `DB_NAME`.
<br>
after database created, we need to make tables or models .
```
$ sequelize model:generate --name create-user --attributes firstName:string,lastName:string,email:string,password:string
```
after adding new migration for adding user table. use this code for migrating user table to database
```
$ sequelize db:migrate
```
use same code to create `threads` with a different attributes and `comments` table.
<br>
then use `db:migrate` to migrate new table to database.
<hr>

## License

MIT License