/*

## For a node project with an express server, mysql db, sequelize orm, user authentication, 
and heroku production environment - here is a good base project map.

* It could make sense to create a starter node package with a base scaffold *

## Step 1: Scaffold Application
    * Setup git repo and clone to local machine
        * include .gitignore and README.md
    * Setup server and required npm modules
        * run: npm init --y
        * run: npm install express
        * run: npm install --save-dev nodemon jest
        * update package.json file:
            * use/start server.js 
            * use jest for testing
            * use nodemon for dev
        * create __tests__, config, controllers, db, models, public, seeds, utils, views folders
        * create server.js file
            * require express, routes, and sequelize
            * setup neccessary middleware
            * setup app/sequelize init

## Step 2: Setup MySQL Database
    * Install dependencies:
        * run: npm install mysql2 sequelize dotenv
    * Create '.env' file with vars: DB_NAME, DB_USER, DB_PW
    * Create dev mysql instance
        * run: mysql -u root -p
        * source db/schema.sql
    * Setup mysql/sequelize connection
        * create 'connection.js' inside config folder and setup sequelize db connection 
        * create 'schema.sql' inside db folder and define db name

## Step 3: Create Sequelize Models
    * Pseudo-code neccessary objects and routes
    * Install dependencies:
        * run: npm install bcrypt
    * Create 'models' folder and insert files and sequelize initialization
        * Users: id, username, email, password
        * Posts: id, title, url, user_id
        * Comments: id, text, user_id, post_id
        * Create index.js file and define all associations
    * Create and seed db for development and testing
        * run: npm run seed

## Step 4: Create Controllers
    * Create dashboard-routes.js, home-routes.js, index.js
    * Create an 'api' folder inside controllers containing each model:
        * files: index.js, user-routes.js, post-routes.js, comment-routes.js

## Step 4: Create User Sessions
    * Install dependencies:
        * run: npm install express-session connect-session-sequelize
    * Update server.js
        * require express-session and connect-session-sequelize
        * create and use session object
        * update '.env' with session secret
    * Create authentication utility
    * Add routes to controllers
        * User: login, logout

## Step 5: Setup Template Engine And Views
    * Install dependencies:
        * run: npm install express-handlebars
    * Update server.js
        * require express-handlebars
        * setup handlebars
    * create views
        * home, dashboard, single-post, edit-post, login
        * layout: main
        * partials: comments, info-post

## Step 6: Create and connect front-end assets
    * views:
        * public
           * homepage: all posts w/ user w/ comments
           * post: post w/ user w/  comments
        * authenticated
           * dashboard: all posts by user w/ comments
           * edit: post w/ comments


## Step X: Push to Heroku
    * Create Heroku Application
        * run: heroku create
    * Setup JawsDB Add-On
    * Add heroku environment vars: SESS_SECRET
    * Deploy to Heroku
        * run: git push heroku develop:main (OR branch:main)
        * run: heroku run node seeds/index.js




## User Story
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions

## REQS
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    * WHEN I click on the homepage option
    * THEN I am taken to the homepage
    * WHEN I click on any other links in the navigation
    * THEN I am prompted to either sign up or sign in
    * WHEN I choose to sign up
    * THEN I am prompted to create a username and password
    * WHEN I click on the sign-up button
    * THEN my user credentials are saved and I am logged into the site
    * WHEN I revisit the site at a later time and choose to sign in
    * THEN I am prompted to enter my username and password
    * WHEN I am signed in to the site
    * THEN I see navigation links for the homepage, the dashboard, and the option to log out
    
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard

    * WHEN I click on the logout option in the navigation
    * THEN I am signed out of the site
    
    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Modules
    express
    mysql2
    sequelize
    dotenv
    bcrypt
    express-handlebars
    express-session
    connect-session-sequelize

## Models
    * Users
        * id
        * username
        * email
        * password
    * Posts
        * id
        * title
        * url
        * user_id
        * created_at
        * updated_at
    * Comments
        * id
        * text
        * user_id
        * post_id
        * created_at
        * updated_at

## Associations
    * users have many posts
    * users have many comments
    * posts belong to users
    * posts have many comments
    * comments belong to users
    * comments belong to posts

## Controllers
    * Dashboard
        * root, edit 
    * Home
        * root, post, login
    * API
        * User
            * all, single, create, login, logout, update, destroy
        * Post
            * all, single, create, update, destroy
        * Comment
            * all, create, destroy

## Views
    Homepage
    Dashboard
    Login

*/
