# webstrap

Set up the project (after `git clone`):
```bash
$ npm install
```

Compile the assets (run every time an asset source changes):
```bash
$ npx webpack
$ npx sass src/assets/sass/main.scss public/assets/main.css
```

Start the app server (also serves static assets):
```bash
$ npx ts-node --project src/server/tsconfig.json src/server/app.ts
```

## Database Access
The interaction with the database is done with [Sequelize](http://docs.sequelizejs.com/). It provides an ORM layer
letting you define Model objects that represent and manipulate the records in their respective tables.

Sequelize supports different database systems. Webstrap comes with the PostgreSQL driver installed (`pg` package). To
use other database systems, simply install the required driver and change the database configuration accordingly (see
below).

#### Installing and configuring PostgreSQL
Installation instructions for Linux Ubuntu/Mint at https://wiki.postgresql.org/wiki/Apt#Quickstart
Once PostgreSQL is installed and the daemon is running, connect to the instance with `psql` by using the default user:
```bash
$ sudo -u postgres psql
```
Then create a user for your application:
```sql
CREATE ROLE webstrap LOGIN CREATEDB PASSWORD 'webstrap';
```

Initialize the database (assumes the default username and password "webstrap")
```bash
$ npx sequelize db:create
$ npx sequelize db:migrate
```

#### Configuring access to the database
Database access configuration and credentials are defined in `config/database.json`. Options set here will be
passed directly to the Sequelize constructor.

#### Adding a database model
Create a module in `src/server/models` that exports a Sequelize model.  
Use `glue.connection` to get the Sequelize database connection which you will need to define the model.  
Import Sequelize directly to get access to the `DataTypes`.  
Check `src/server/models/dummy.ts` for an example.  
Check the [Sequelize documentation](http://docs.sequelizejs.com/manual/tutorial/models-definition.html) directly for
more details.
