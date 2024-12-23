# Backend API Development Details (Day 5 - Day 6)

This document outlines the requirements and specifications for implementing the **Authentication Module** and **Inventory Management APIs** in the backend of the project.

---

## **Project Context**
The project aims to create a web application for local shopkeepers to manage their inventory, customers, purchases, sales, and billing efficiently. The backend plays a critical role in securely managing data and providing reliable APIs for the frontend.

This phase focuses on implementing:
1. **Authentication Module**: Ensures that only authorized users can access the system.
2. **Inventory Management APIs**: Provides functionality for shopkeepers to manage their inventory.

---

## **Feature Specifications**

### **1. Authentication Module**
#### Overview
The authentication module ensures secure access to the application by implementing:
- **User Registration**: New users can sign up.
- **User Login**: Existing users can log in with their credentials.
- **JWT Authentication**: Protects routes by issuing JSON Web Tokens to authenticated users.

#### Details
- **Endpoints to Implement**:
  - `POST /auth/register`
    - Accepts user details (e.g., `name`, `email`, `password`).
    - Encrypts the password using `bcrypt`.
    - Saves the user in the database.
  - `POST /auth/login`
    - Verifies user credentials.
    - Issues a JWT token if credentials are valid.
  - **Middleware**: `authMiddleware`
    - Protects API routes by verifying the JWT token.

#### Key Requirements
- Use `bcrypt` for password hashing.
- Use `jsonwebtoken` to issue and verify JWT tokens.
- Include validation for all input fields (e.g., email format, password strength).
- Store only the hashed password in the database.
- JWT tokens should have an expiration time (e.g., 1 day).

#### Database Tables
- **Users Table**:
  - `id`: Primary key.
  - `name`: Full name of the user.
  - `email`: Unique email of the user.
  - `password`: Encrypted password.
  - `created_at`: Timestamp of user registration.

---

### **2. Inventory Management APIs**
#### Overview
The inventory management module allows shopkeepers to:
- Add new products to their inventory.
- Edit product details.
- Delete products.
- Retrieve a list of all products.

#### Details
- **Endpoints to Implement**:
  - `POST /products`
    - Adds a new product to the inventory.
    - Fields: `name`, `quantity`, `price`, `supplier`, `description` (optional).
  - `GET /products`
    - Retrieves all products in the inventory.
  - `PUT /products/:id`
    - Updates details of an existing product.
    - Fields: `name`, `quantity`, `price`, `supplier`, `description`.
  - `DELETE /products/:id`
    - Deletes a product from the inventory.

#### Key Requirements
- Use input validation to ensure correct data types and mandatory fields.
- Handle errors such as invalid product IDs or duplicate product names.
- Ensure secure operations by protecting endpoints with `authMiddleware`.

#### Database Tables
- **Products Table**:
  - `id`: Primary key.
  - `name`: Name of the product.
  - `quantity`: Quantity available.
  - `price`: Price per unit.
  - `supplier`: Supplier name or ID.
  - `description`: Optional field for product details.
  - `created_at`: Timestamp of product creation.
  - `updated_at`: Timestamp of the last update.

---

## **Development Steps**

### **Step 1: Set Up Middleware and Utilities**
- Create `authMiddleware` to verify JWT tokens for protected routes.
- Create utility functions for password hashing (`bcrypt.hash`) and token generation (`jsonwebtoken.sign`).

### **Step 2: Implement Authentication Endpoints**
- Develop the `POST /auth/register` and `POST /auth/login` endpoints.
- Test user registration and login flows using `Postman`.

### **Step 3: Implement Inventory APIs**
- Develop CRUD operations for the `/products` endpoint.
- Test each endpoint for different scenarios (e.g., successful addition, invalid data).

### **Step 4: Testing and Debugging**
- Test all API endpoints using `Postman` or `Swagger`.
- Add unit tests for key functions and integration tests for endpoints.

---

## **Deliverables**
1. Functional authentication module (register, login, JWT-based protection).
2. Functional inventory management APIs (add, edit, delete, retrieve products).
3. API documentation for all implemented endpoints (using Swagger/OpenAPI).
4. Unit and integration tests for critical features.

---

## **Notes**
- Ensure code readability and maintainability by adhering to best practices.
- Log errors and critical events for easier debugging.
- Update the `Product Feature Tracker.md` after completing each feature.
