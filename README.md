# ZIMRA FDMS Mock Server  🧾

This is a mock server designed to simulate requests and responses as specified in the ZIMRA FDMS API documentation: https://fdmsapitest.zimra.co.zw/swagger/index.html


> [!NOTE]
> This mock server is particularly useful for developers who do not have immediate access to a fiscalized ID. However, please note that it is recommended to test with the original server whenever possible, as the responses may differ from those provided by this mock implementation.

## Stack

- Node.js
- Express
- TypeScript
- Docker

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/takumade/zimra-fdms-mock-server.git
   cd zimra-fdms-mock-server
   ```

2. Install dependencies:
   - Using npm/yarn/pnpm:
     ```sh
     npm install
     ```

3. Start the server:
   - Using npm/yarn/pnpm:
     ```sh
     npm start
     ```

NB: In place of `npm` you can use `yarn`, or `pnpm`.

NB: The server will start running on `http://localhost:3000`.


## Deploying

### Docker 

To deploy the ZIMRA FDMS Mock Server using Docker, follow these steps:

1. Ensure Docker is installed on your system.
2. Navigate to the project root directory.
3. Build and run the Docker container:

```sh
# Build the Docker image
docker build -t zimra-mock-server .

# Run the container
docker run -p 3000:3000 zimra-mock-server
```

The server will be accessible at `http://localhost:3000`.



### Live Endpoint

You can access the live endpoint at: 

[https://zimra-fdms-mock-server.onrender.com](https://zimra-fdms-mock-server.onrender.com)


Dont abuse it!!!

## Contribution
This project is open source and contributions are welcome. Please fork the repository and submit pull requests. 

> [!WARNING]
> Given that it's a mock server, contributions are most welcome in the form of bug fixes and realism enhancements.

### Todo
✅ Device endpoints  <br>
✅ Public endpoints  <br>
✅ User endpoints  <br>
✅ ProductsStock endpoints  <br>
⏳ Make mock server as realistic as possible  <br>


> [!NOTE]
> Most of the endpoints are mocked but I want it to be as realistic as possible. An average user shouldnt tell the difference between the mock server and the original server. 😊 For more info see [TODO.md](TODO.md) 



### Directory Structure

```
src/
├── controllers/
│   ├── Device/
│   ├── Public/
│   ├── Public/
│   ├── User/
│   └── ProductsStock/
├── routes/
│   ├── Device/
│   ├── Public/
│   ├── User/
│   └── ProductsStock/
└── server/
    ├── app.ts
    └── index.ts
```