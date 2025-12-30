# 📚 Express Bookcase API

A robust and modular RESTful API designed to manage a book collection. I built this project to demonstrate **backend architecture best practices**, focusing on scalability and clean code principles.

## 🌟 Technical Highlights

This isn't just a simple server; it follows a professional **Modular Architecture**:

- **Separation of Concerns:** Business logic, data models, and routing are strictly separated (`api/`, `books/`).
- **RESTful Standards:** Full implementation of CRUD (Create, Read, Update, Delete) operations.
- **Middleware Integration:** Custom logging middleware to track request traffic.
- **Security Best Practices:** Sensitive configuration managed via Environment Variables (`.env`).
- **Scalable Structure:** Designed to be easily expanded with a real database connection.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Architecture:** Modular Routing
- **Tools:** Postman, Dotenv, Git

## ⚙️ Installation & Usage

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/hasanangis/express-bookcase.git](https://github.com/hasanangis/express-bookcase.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env` file in the root directory and add your port:
    ```text
    PORT=7000
    ```

4.  **Start the server:**
    ```bash
    node index.js
    ```

5.  **Test the Endpoints:**
    You can test the API using Postman or your browser at:
    `http://localhost:7000/api/books`

---
*Built with ❤️ by Hasan Angiş*