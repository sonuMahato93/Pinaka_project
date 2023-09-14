# Pinaka_project

Functionality of Node.js Server
Node.js server appears to be designed to perform basic CRUD (Create, Read, Update, Delete) operations for a user data model. Here's a breakdown of the functionality:

GET Request - getMessage:

When a GET request is made to the root endpoint ("/"), it responds with a JSON message: { message: 'Hello, To All !!!' }.
This is a simple endpoint to greet users with a message.

POST Request - createData:

When a POST request is made to the "/api" endpoint, it expects JSON data in the request body.
It creates a new user data record in the database using the userModel.create method with the data received in the request body.
It logs the received data and responds with a success message and the created data as a JSON response.

PUT Request - updateData:

When a PUT request is made to the "/api/:_id" endpoint, it expects JSON data in the request body.
It updates an existing user data record in the database with the specified _id using the userModel.findByIdAndUpdate method.
It logs the received data and responds with a success message and the updated data as a JSON response.

DELETE Request - deleteData:

When a DELETE request is made to the "/api/:_id" endpoint, it expects an _id parameter in the URL.
It deletes an existing user data record in the database with the specified _id using the userModel.findByIdAndDelete method.
It checks if the document was not found (resulting in a 404 response) and responds with a success message if the deletion is successful.

How to Test Node.js Server

To test Node.js server and its functionality, follow these steps:

Start Node.js server. Mentioned that it's running on port 3000 or the PORT specified in environment variables.

Use an HTTP client like Postman to send HTTP requests to server's endpoints.

1. To test the "GET" endpoint, use a tool like Postman to send a GET request to http://localhost:3000/. You should see the greeting message.

2. To test the "POST" endpoint, use a tool like Postman to send a POST request to http://localhost:3000/api with JSON data in the request body.

3. To test the "PUT" endpoint, use a similar tool to send a PUT request to http://localhost:3000/api/:_id (replace :_id with a valid _id) with JSON data in the request body.

4. To test the "DELETE" endpoint, use a similar tool to send a DELETE request to http://localhost:3000/api/:_id (replace :_id with a valid _id).

Check the server logs for any error messages or success messages, as added logging in controller functions.

Verify that the server responds with the expected JSON responses, including success messages and data where applicable.

Ensure that MongoDB database is properly configured and running, as the routes involve database operations.
