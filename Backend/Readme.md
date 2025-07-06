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
- All fields are case-