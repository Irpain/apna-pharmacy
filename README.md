```markdown
# 📦 Apna-Pharmacy Website (Microservices Architecture)

This project is a **Pharmacy Website** built using **Spring Boot (Java) for backend microservices** and **Angular for frontend**. The system follows a **microservices architecture**, where each service is deployed separately and communicates via **RabbitMQ** for messaging. The project is **containerized using Docker** for easy deployment and scalability.

---

## 🚀 Tech Stack

### **Backend (Microservices)**
- **Spring Boot** (Java)
- **Spring Cloud Config** (For centralized configuration management)
- **Spring Data JPA** (For database interaction)
- **RabbitMQ** (For inter-service messaging)
- **Spring Security + JWT** (For authentication)
- **H2 / PostgreSQL / MySQL** (Database)

### **Frontend**
- **Angular** (Client-side application) *(Located inside `product-webapp/webapp`)*

### **DevOps & Deployment**
- **Docker** (Containerization)
- **Docker Compose** (To orchestrate microservices)
- **RabbitMQ** (Message Broker)

---

## 📂 Microservices Overview

The system is composed of the following microservices:

| **Service Name**         | **Description**                                      |
|--------------------------|------------------------------------------------------|
| **API Gateway**          | Entry point to the system, routes requests to the appropriate microservices. |
| **User Service**         | Manages user registration, authentication (JWT), and authorization. |
| **Order Service**        | Handles orders, payment processing, and order tracking. |
| **Cart Service**         | Manages the shopping cart for users. |
| **Product Service**      | Manages pharmacy products, inventory, and categories. |
| **Notification Service** | Sends email/SMS notifications using RabbitMQ. |
| **Config Server**        | Manages external configurations for all services. |

---

## 🛠️ Setting Up the Project

### **1️⃣ Prerequisites**
Ensure you have the following installed:
- **JDK 17+**
- **Maven**
- **Node.js + npm** (For Angular)
- **Docker & Docker Compose**
- **RabbitMQ** (Can be started using Docker)

---

### **2️⃣ Running Microservices Individually**
Each microservice is a standalone Spring Boot application. You can run them manually using:

```sh
cd <service-directory>
mvn spring-boot:run
```

For example, to start the **Order Service**:

```sh
cd order-service
mvn spring-boot:run
```

---

### **3️⃣ Running the Frontend (Angular)**
Navigate to the Angular project directory (`product-webapp/webapp`) and start the development server:

```sh
cd product-webapp/webapp
npm install
ng serve --open
```

The frontend will be available at **[http://localhost:4200](http://localhost:4200)**.

---

## 🐳 Running with Docker

To run the entire system using Docker, use:

```sh
docker-compose up --build
```

This will:
1. Build and start all **microservices**.
2. Launch **RabbitMQ** for inter-service communication.
3. Start the **API Gateway**.
4. Deploy the **Angular frontend** from `product-webapp/webapp`.

---

## 🔄 Inter-Service Communication

Microservices communicate through **RabbitMQ** for asynchronous messaging. Example flow:
- When an order is placed in **Order Service**, it sends a message to RabbitMQ.
- The **Notification Service** listens for order events and sends an email confirmation.

### **RabbitMQ Management Console** (for monitoring queues):
```
http://localhost:15672
```
(Default Username: **guest**, Password: **guest**)

---

## 🧪 API Endpoints

Each microservice exposes RESTful APIs:

### **User Service**
- `POST /api/users/register` → Register a new user
- `POST /api/users/login` → Authenticate user
- `GET /api/users/profile` → Fetch user profile

### **Order Service**
- `POST /api/orders/place` → Place a new order
- `GET /api/orders/{orderId}` → Get order details

### **Cart Service**
- `POST /api/cart/add` → Add item to cart
- `GET /api/cart` → Get cart items

More API endpoints are available in each microservice’s documentation.

---

## 🔐 Authentication & Security
- **JWT Authentication** is used to secure endpoints.
- Secure APIs require `Authorization: Bearer <token>` in headers.

---

## 📜 Environment Variables

Each service requires a `.env` file with the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
RABBITMQ_HOST=rabbitmq
RABBITMQ_PORT=5672
RABBITMQ_USER=guest
RABBITMQ_PASSWORD=guest
JWT_SECRET=your_secret_key
```

Update these values as needed.

---

## 🎯 Future Enhancements
- Add **Kubernetes** for orchestration.
- Implement **Redis caching** for improved performance.
- Add **monitoring using Prometheus & Grafana**.

---

## 📜 License

This project is licensed under **MIT License**.

---

## 🤝 Contributors
- **Irfan**
- **Shivansh**
- **Umang**

Feel free to contribute! 🚀
```