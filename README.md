# Eat This Burger!

## Overview
This is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

## Getting Started
To install this app, a database called "burgers_db" would need to be created in the mysql database.

Once "burgers_db" is created, you would need to run the schema.sql and seeds.sql file in the db folder of this app.

Mysql database password may also need to be edited accordingly in config/connection.js file.

## Usage
Using this app, users can:

###1) Submits a new burger
By entering the burger name and click the "add burger" button, user can add a new burger to the database.

The new burger will be available for devour.

###2) Devour a burger
All the burgers that haven't been eaten will be listed in the "List of Burgers Available" section.

Users can click "devour" button to eat a burger. This burger will then move to the "List of Burgers Eaten" section.

###3) Restore a burger
All the burgers that have previously been eaten will be listed in the "List of Burgers Eaten" section.

Users can click "restore" button to restore a burger. This burger will then move to the "List of Burgers Available" section.