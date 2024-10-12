

# Node API Creation

This is a simple Node.js API built using Express, designed to handle basic operations like creating and retrieving users. It demonstrates basic routing, controllers, and the use of middleware in a Node.js application.

## Features

- **GET /api/users**: Retrieve all users.
- **POST /api/users**: Add a new user.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/dd7146/node-api-creation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node-api-creation
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

1. To start the server, run the following command:

    ```bash
    node index.js
    ```

2. By default, the server will start on `http://localhost:3000`. You can test the API using tools like [Postman](https://www.postman.com/) or the **REST Client** extension in VS Code.

### Example Requests

#### 1. Get all users

- **Method**: `GET`
- **URL**: `http://localhost:3000/api/users`

#### 2. Add a new user

- **Method**: `POST`
- **URL**: `http://localhost:3000/api/users`
- **Body** (JSON format):

    ```json
    {
      "name": "John Doe"
    }
    ```

## Folder Structure

```plaintext
node-api-creation/
├── controllers/
│   └── userController.js  # Contains user-related logic
├── routes/
│   └── users.js           # Routes for user-related API endpoints
├── index.js               # Entry point of the application
├── package.json           # Project metadata and dependencies
├── .gitignore             # Git ignored files (e.g., node_modules)
└── README.md              # Documentation
