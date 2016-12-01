# Angular and CodeIgniter Multi-user type Setup
### Overview
I put together this project to test how compatible is Angular with CodeIgniter. This is very simple right now.  
Feel free to contribute.  
If you run into an issue raise an issue here, I'll look into it when I have the time.

### This project uses
	- Client Side
		- Angular
		- AngularUI Router - This provides complex client side routing
		- Angular Notify   - Used for simple notifications to the user
		- AdminLTE         - This is the theme used
		- Bootstrap
		- jQuery

	- Server Side
		- CodeIgniter      - CI provides the server side api
		- Ion Auth         - Used for user authentication and user management
		- MySql

### Installation
 - Clone or download this project into your `www` or `httpdocs` folder
 - Create a new mysql database using phpMyAdmin or other means with any name of your choice
 - Open the file `ci-ng-setup/api/application/config/database.php` in a text editor
 - Open this url `localhost/ci-ng-setup/api/migrate`, this sets up the database
 - Change this file's settings to your database configuration
 - Open this folder in a browser, eg url, `localhost/ci-ng-setup/`
 - Default admin username is `administrator` and the password is `password`
 - You can create new users once you login in as an admin


