# Calculator App

This is a simple calculator API project. It allows basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/muhammedaliuyanik/CALCULATOR_APP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CALCULATOR_APP
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application, run:

```bash
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

### Calculate

- **URL**: `https://calculator-app-9tjy.onrender.com/api/calculate`
- **Method**: `POST`
- **Body**:
  ```json
  {
      "operand1": 10,
      "operand2": 5,
      "operator": "+"
  }
  ```

- **Response**:
  ```json
  {
      "result": 15
  }
  ```

## Postman Testing

To test the API using Postman:

1. Open Postman.
2. Create a new `POST` request.
3. Set the URL to `https://calculator-app-9tjy.onrender.com/api/calculate`.
4. Go to the `Body` tab and select `raw`.
5. Choose `JSON` from the dropdown.
6. Enter the following JSON in the body:

   ```json
   {
       "operand1": 10,
       "operand2": 5,
       "operator": "+"
   }
   ```

7. Click `Send`.
