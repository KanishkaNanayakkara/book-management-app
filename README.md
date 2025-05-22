## 📘 Book Management Web Application

This is a **Book Management System** built as a full-stack web application using **Angular** for the frontend and **ASP.NET Core with C#** for the backend. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

---

## ⚙️ Technologies Used

### 🌐 Frontend:

* [Angular](https://angular.io/) (TypeScript)
* HTML & CSS

### 🖥 Backend:

* [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) (C#)
* [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
* [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### 🗄 Database:

* Microsoft SQL Server Express LocalDB

---

## ✅ Features

* Add new books
* View all books
* Update book information
* Delete books
* RESTful API communication between frontend and backend

---

## 🚀 Getting Started

### 🔁 Clone the repository

```bash
git clone https://github.com/your-username/book-management-app.git
cd book-management-app
```

---

### 💻 Backend Setup (`/backend` folder)

1. Open the `backend` folder in your terminal or IDE.

2. Ensure you have:

   * [.NET SDK 7 or above](https://dotnet.microsoft.com/en-us/download)
   * SQL Server Express installed and running (`SQLEXPRESS` instance)

3. Update the connection string if needed:
   Inside `appsettings.json`, make sure it points to your SQL Server instance:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=BookDb;Trusted_Connection=True;TrustServerCertificate=True;"
   }
   ```

4. Run database migrations:

   ```bash
   dotnet ef database update
   ```

5. Run the backend:

   ```bash
   dotnet run
   ```

   The API will be available at `https://localhost:port` (check the terminal for the port).

---

### 🌍 Frontend Setup (`/frontend` folder)

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Angular dev server:

   ```bash
   ng serve
   ```

4. Access the frontend at `http://localhost:4200`.

---

