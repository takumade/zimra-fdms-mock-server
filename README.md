# ZIMRA FDMS Mock Server

This is a mock server designed to simulate requests and responses as specified in the ZIMRA FDMS API documentation: https://fdmsapitest.zimra.co.zw/swagger/index.html

This mock server is particularly useful for developers who do not have immediate access to a fiscalized ID. However, please note that it is recommended to test with the original server whenever possible, as the responses may differ from those provided by this mock implementation.

## Stack

- Node.js
- Express
- TypeScript
- Docker

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/takumade/zzimra-fdms-mock-server.git
   cd zimra-fdms-mock-server
   ```

2. Install dependencies:
   - Using npm/yarn/pnpm:
     ```
     package_manager install
     ```

3. Start the server:
   - Using npm/yarn/pnpm:
     ```
     package_manager start
     ```

NB: `package_manager` can be `npm`, `yarn`, or `pnpm`.

NB: The server will start running on `http://localhost:3000`.





### Docker 

```docker
# Build the Docker image
docker build -t zimra-mock-server .

# Run the container
docker run -p 3000:3000 zimra-mock-server
```

## Contribution
This project is open source and contributions are welcome. Please fork the repository and submit pull requests. 

### TODO 
- [x] Device endpoints
- [ ] User endpoints
- [ ] ProductsStock endpoints
- [ ] Public endpoints

### Directory Structure

```
src/
├── controllers/
│   ├── Device/
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

