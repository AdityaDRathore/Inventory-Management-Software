# Scalable Database Design for Inventory and Account Management System

---

## **Database Overview**
The database is designed to handle inventory management, sales, purchases, customers, and wholesalers for local shopkeepers. It focuses on scalability, ensuring support for web and mobile applications, and maintaining data integrity.

---

## **Tables and Relationships**

### **1. Users**
**Purpose**: Store shopkeeper and admin user details.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| user_id         | UUID             | Primary Key           |
| name            | VARCHAR(255)     | NOT NULL              |
| email           | VARCHAR(255)     | UNIQUE, NOT NULL      |
| password        | VARCHAR(255)     | NOT NULL              |
| role            | ENUM ('admin', 'shopkeeper') | Default: 'shopkeeper' |
| created_at      | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- One-to-Many with `Products`.
- One-to-Many with `Sales` and `Purchases`.

---

### **2. Products**
**Purpose**: Store details about inventory items.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| product_id      | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| name            | VARCHAR(255)     | NOT NULL              |
| category        | VARCHAR(255)     | NULLABLE              |
| stock_quantity  | INTEGER          | Default: 0            |
| price_per_unit  | DECIMAL(10, 2)   | NOT NULL              |
| wholesaler_id   | UUID             | Foreign Key (Wholesalers) |
| created_at      | TIMESTAMP        | Default: CURRENT_TIMESTAMP |
| updated_at      | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- Many-to-One with `Users`.
- Many-to-One with `Wholesalers`.
- One-to-Many with `Sales` and `Purchases`.

---

### **3. Customers**
**Purpose**: Store details about customers.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| customer_id     | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| name            | VARCHAR(255)     | NOT NULL              |
| phone_number    | VARCHAR(15)      | UNIQUE, NULLABLE      |
| email           | VARCHAR(255)     | NULLABLE              |
| address         | TEXT             | NULLABLE              |
| created_at      | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- Many-to-One with `Users`.
- One-to-Many with `Sales`.

---

### **4. Wholesalers**
**Purpose**: Store details about product suppliers.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| wholesaler_id   | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| name            | VARCHAR(255)     | NOT NULL              |
| phone_number    | VARCHAR(15)      | UNIQUE, NULLABLE      |
| email           | VARCHAR(255)     | NULLABLE              |
| address         | TEXT             | NULLABLE              |
| created_at      | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- Many-to-One with `Users`.
- One-to-Many with `Products` and `Purchases`.

---

### **5. Sales**
**Purpose**: Record sales transactions.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| sale_id         | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| customer_id     | UUID             | Foreign Key (Customers) |
| product_id      | UUID             | Foreign Key (Products) |
| quantity        | INTEGER          | NOT NULL              |
| total_price     | DECIMAL(10, 2)   | NOT NULL              |
| sale_date       | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- Many-to-One with `Users`.
- Many-to-One with `Customers`.
- Many-to-One with `Products`.

---

### **6. Purchases**
**Purpose**: Record purchases made by the shopkeeper.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| purchase_id     | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| wholesaler_id   | UUID             | Foreign Key (Wholesalers) |
| product_id      | UUID             | Foreign Key (Products) |
| quantity        | INTEGER          | NOT NULL              |
| total_price     | DECIMAL(10, 2)   | NOT NULL              |
| purchase_date   | TIMESTAMP        | Default: CURRENT_TIMESTAMP |

**Relationships**:
- Many-to-One with `Users`.
- Many-to-One with `Wholesalers`.
- Many-to-One with `Products`.

---

### **7. Reports**
**Purpose**: Generate and store sales/purchase reports.

| Column          | Data Type         | Constraints            |
|-----------------|------------------|-----------------------|
| report_id       | UUID             | Primary Key           |
| user_id         | UUID             | Foreign Key (Users)   |
| report_type     | ENUM ('sales', 'purchases') | NOT NULL |
| generated_at    | TIMESTAMP        | Default: CURRENT_TIMESTAMP |
| file_url        | TEXT             | NOT NULL              |

**Relationships**:
- Many-to-One with `Users`.

---

## **Relationships Diagram**
1. `Users` has a **One-to-Many** relationship with:
   - `Products`
   - `Sales`
   - `Purchases`
   - `Customers`
   - `Wholesalers`
   - `Reports`

2. `Products` has:
   - **Many-to-One** with `Users`.
   - **Many-to-One** with `Wholesalers`.
   - **One-to-Many** with `Sales` and `Purchases`.

3. `Customers` has:
   - **Many-to-One** with `Users`.
   - **One-to-Many** with `Sales`.

4. `Wholesalers` has:
   - **Many-to-One** with `Users`.
   - **One-to-Many** with `Products` and `Purchases`.

---

This database design ensures scalability, modularity, and maintainability for future feature additions or platform expansion.
