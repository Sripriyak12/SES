# 💸 Smart Expense Splitter

Smart Expense Splitter is a full-stack web application designed to help groups of people share and track expenses in a simple and transparent way. Whether you're splitting bills with roommates, planning a trip with friends, or managing team expenses, this app makes it easy to track who owes whom and settle up quickly.

---

## 📌 Features

- ➕ Add shared expenses with description, payer, and participants
- 📊 Automatic calculation of who owes how much
- 👥 Support for multiple users and custom splitting logic
- 🧾 Detailed transaction and balance history
- 🛡️ Secure user authentication and session management
- 🎯 Clean and intuitive UI for easy interaction

---

## ⚙️ Tech Stack

| Layer         | Technology          |
|---------------|---------------------|
| **Frontend**  | React.js, JavaScript, HTML, CSS |
| **Backend**   | Spring Boot (Java 17), Spring Data JPA |
| **Database**  | PostgreSQL |
| **Build Tools** | Maven (Backend), npm (Frontend) |
| **API Style** | RESTful APIs |

---

## 🗂️ Project Structure
```bash
SES/
├── src/
│ ├── main/
│ │ ├── java/com/smartsplitter/
│ │ │ ├── controller/ # REST controllers
│ │ │ ├── model/ # Entity classes
│ │ │ ├── repository/ # JPA repositories
│ │ │ └── SmartSplitterApp # Main application
│ └── resources/
│ ├── application.properties
│ └── static/templates/ # (Optional frontend)
├── pom.xml # Maven configuration
└── README.md
```
---

## ⚙️ How It Works

1. **Create a Group** – Users are grouped for shared expense tracking.
2. **Add Expenses** – Users can log expenses they paid on behalf of the group.
3. **Auto Calculation** – The system calculates how much each member owes based on the total expenses.
4. **Balance View** – The final result shows each user’s balance with respect to the group.

---

## 📄 Sample API Endpoints

| Method | Endpoint                 | Description                     |
|--------|--------------------------|---------------------------------|
| GET    | `/api/expenses`          | Fetch all expenses              |
| POST   | `/api/expenses`          | Add a new expense               |
| GET    | `/api/users`             | Get all users                   |
| POST   | `/api/users`             | Create a new user               |
| GET    | `/api/groups/{id}`       | Fetch group details             |

---

## 🧪 Testing the Project Locally

1. Ensure you have:
   - Java 17+
   - Maven
   - PostgreSQL running locally

2. **Clone the repository**:
   ```bash
       git clone https://github.com/Sripriyak12/SES.git
       cd SES
   ```

3.Update your application.properties:
   ```bash
       spring.datasource.url=jdbc:postgresql://localhost:5432/smartsplitdb
       spring.datasource.username=your_username
       spring.datasource.password=your_password
       spring.jpa.hibernate.ddl-auto=update
   ```

4.Build and run the project:
   ```bash
        mvn clean install
        mvn spring-boot:run
   ```


## 📌 To-Do / Future Enhancements
- Frontend (React)
- JWT-based auth
- Email notifications
- PDF export
- Mobile app

## 🤝 Contributing
- Contributions are welcome! Please fork the repository and open a pull request.

## 🧑‍💻 Author
-K Lakshmi Sripriya

-📍 Palakollu, West Godavari

## 📃 License
- This project is licensed under the MIT License.

