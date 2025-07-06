# Backend API Documentation

## Function: `registerUser`

Handles user registration requests.

---

### **Endpoint**
`POST /users/register`

---

### **Description**
Validates the incoming request, hashes the user's password, creates a new user in the database, generates an authentication token, and returns the user data along with the token.

---

### **Request Body**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Validation Rules**
- `fullname.firstname`: Required, minimum 3 characters.
- `fullname.lastname`: Optional, minimum 3 characters if provided.
- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

---

### **Responses**

#### **201 Created**
- **Description:** User registered successfully.
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    },
    "token": "jwt_token"
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed or missing required fields.
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

---

### **Process Flow**
1. Validates request body using `express-validator`.
2. Hashes the password using the user model's static method.
3. Creates a new user with the provided data.
4. Generates a JWT token for the user.
5. Returns the user object and token in the response.

---

### **Notes**
- The returned `token` can be used for authenticated requests.
- All fields are case-sensitive.

---

## Function: `loginUser`

Handles user login requests.

---

### **Endpoint**
`POST /users/login`

---

### **Description**
Validates the incoming request, checks user credentials, generates an authentication token if credentials are valid, and returns the user data along with the token.

---

### **Request Body**

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Validation Rules**
- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

---

### **Responses**

#### **200 OK**
- **Description:** User logged in successfully.
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    },
    "token": "jwt_token"
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed or missing required fields.
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### **401 Unauthorized**
- **Description:** Invalid email or password.
- **Body:**
  ```json
  {
    "message": "invalid email or password"
  }
  ```

---

### **Process Flow**
1. Validates request body using `express-validator`.
2. Finds the user by email and checks the password.
3. Generates a JWT token if credentials are valid.
4. Returns the user object and token in the response.

---

### **Notes**
- The returned `token` can be used for authenticated requests.
- All fields are case-sensitive.



## Function: `getUserProfile`

Handles fetching the authenticated user's profile.

---

### **Endpoint**
`GET /users/profile`

---

### **Description**
Returns the profile information of the currently authenticated user. Requires a valid authentication token (JWT) to be sent via cookies or the `Authorization` header.

---

### **Headers**
- `Cookie: token=jwt_token`  
  or  
- `Authorization: Bearer jwt_token`

---

### **Responses**

#### **200 OK**
- **Description:** Returns the authenticated user's profile.
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

#### **401 Unauthorized**
- **Description:** Missing or invalid authentication token.
- **Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

---

### **Notes**
- This endpoint is protected and requires authentication.

---

## Function: `logoutUser`

Handles logging out the authenticated user.

---

### **Endpoint**
`GET /users/logout`

---

### **Description**
Logs out the currently authenticated user by clearing the authentication token cookie and blacklisting the token. Requires a valid authentication token (JWT).

---

### **Headers**
- `Cookie: token=jwt_token`  
  or  
- `Authorization: Bearer jwt_token`

---

### **Responses**

#### **200 OK**
- **Description:** User logged out successfully.
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### **401 Unauthorized**
- **Description:** Missing or invalid authentication token.
- **Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

---

### **Notes**
- This endpoint is protected and requires authentication.
- The token is blacklisted after logout to prevent reuse.

---