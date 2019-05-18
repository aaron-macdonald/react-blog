Modules used in this project
============================

### devDependancies

**react:** A JavaScript library for building user interfaces.

**react-dom:** The glue between React and the Dom, used primarily for mounting with ReactDOM.render().

**react-router-dom:** Router for React.

**jsx-loader:** jsx loader for webpack.

**webpack:** Webpack is is a module builder for bundling JavaScript files for usage in a browser. As well as being capable of transforming, bundling or packaging.

**babel:** Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

**nodemon:** Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

### Dependancies

**express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**What is Middleware? :**  A function that is invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route. A few fine points of terminology around middleware:

* var foo = require('middleware') is called requiring or using a Node.js module. Then the statement var mw = foo() typically returns the middleware.

* app.use(mw) is called adding the middleware to the global processing stack.

* app.get('/foo', mw, function (req, res) { ... }) is called adding the middleware to the “GET /foo” processing stack.

**knex:** An SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle and Amazon Redshiftr.

**sqlite3:** SQLite is a C library that provides a lightweight disk-based database that doesn’t require a separate server process and allows accessing the database using a nonstandard variant of the SQL query language

**superagent:** SuperAgent is light-weight progressive ajax REQUEST API crafted for flexibility and readability with a low learning curve

**lodash:** Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.
