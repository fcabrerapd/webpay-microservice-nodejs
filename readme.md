# Webpay Payment Microservice
![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=nodesdotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A Node.js microservice to handle `Transbank Webpay Plus` integrations using Clean Architecture.


## Features
* **Integration**: Full support for Webpay Plus SDK.
* **API**: RESTful endpoints for transaction creation and confirmation.
* **Config**: Dynamic environment-based configuration (Production/Integration).
* **Reliability**: Centralized error handling and detailed logging.

## Stack
* **Runtime**: `Node.js (Express)`
* **Official SDK**:  `transbank-sdk`
* **Security**: `dotenv` for environment variable management
* **Dev Tools**: `nodemon` for hot-reloading

## Getting Started
### Clone the repository

```bash
git clone https://github.com/fcabrerapd/webpay-microservice-nodejs

cd webpay-microservice-nodejs

npm install
 ```
### Setup Environment Variables

Create a .env file in the root directory and add your Transbank credentials (or use integration ones):

```env
PORT=3000
TBK_CC=597055555532
TBK_API_KEY=579B53274E205F995E582E5637598E3530FA1D02974F384E3F4600B2374B3568
```
### Run in development mode

```bash
npm run dev
```
### API endpoints



|Method | Endpoint | Description |
|---:|:---:|---:|
| `POST` | `/api/webpay/create` | Initializes a new transaction and returns the token and redirect URL. |
| `GET` | `/api/webpay/commit` | Validates and confirms the transaction status after the payment flow. |

## Project structure
```
/webpay-microservice-nodejs
|
|-- /node_modules
|-- /src
|   |-- /config      --> SDK Config
|   |-- /controllers --> Req/Res Handling
|   |-- /routes      --> Route definitions
|   |-- /services    --> Business Logic & SDK Wrapper
|   |-- app.js       --> Express Setup
|
|-- index.js         --> Entry Point
|-- .env             --> Secrets (Hidden)
|-- .gitignore       --> Git Ignore Rules (node_modules, .env)
|-- test_webpay.html --> Client-side Integration Test (Used only for local testing purposes)
|-- package.json     --> Project Dependencies & Scripts
```
## License
This project is under the MIT License.
