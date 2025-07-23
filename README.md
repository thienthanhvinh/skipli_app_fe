🎯 React Frontend - User Management App
This is the **Frontend** of a user management app built with **React** and styled using TailwindCSS. It connects to a Node.js + Express backend and uses Firebase Firestore as the database.

## 🚀 Features

- ✅ Create new users
- ✅ View and manage user list
- ✅ Protected routes using JWT token
- ✅ Toast notifications for feedback

## 📦 Tech Stack

- ⚛️ React 19
- 💨 TailwindCSS
- 🍞 react-toastify
- 🔐 JWT stored in `localStorage`

## 🔧 Setup Instructions

1. Clone the project:
   ```bash
   git clone https://github.com/thienthanhvinh/skipli_app_fe.git
   cd user-management-app/frontend
   ```
2. Install dependencies:
   npm install

3. Create a .env file and configure:
   VITE_SERVER_URL=http://localhost:3000/api

4. Start the development server:
   npm run dev

🔐 Authentication

The JWT token is stored in localStorage and automatically sent with every request using the Authorization: Bearer <token> header.

📁 Folder Structure

📦 skiply_app_fe/
├── 📁 public/  
├── 📁 src/  
│ ├── 📁 assets/  
│ ├── 📁 components/  
│ ├── 📁 context/  
│ ├── 📁 hooks/  
│ ├── 📁 layouts/  
│ ├── 📁 pages/  
│ ├── 📁 routes/  
│ │ ├── adminRoutes.jsx  
│ │ ├── publicRoutes.jsx
│ │ └── index.jsx  
│ ├── 📁 services/  
│ ├── 📁 utils/  
│ ├── App.jsx  
│ ├── App.css  
│ ├── main.jsx  
│ └── index.css  
├── .env.development  
├── .gitignore  
├── .prettierrc  
├── eslint.config.js  
├── vite.config.js  
├── index.html  
├── package.json  
└── README.md

🔐 User Registration & Login
📝 Register
Endpoint: POST /api/auth/register

Required Fields:
phone: User's phone number
kmax: A value manually extracted from the DevTools (see below)

How to get kmax:

1. Open your browser's Developer Tools (F12)

2. Go to the Console tab

3. After submitting your phone number, you will see a response like this:
   {
   success: true,
   message: "Create code successfully",
   data: {
   phone: "0369999999",
   kmax: "726902",
   createdAt: "2025-07-22T11:30:36.163Z"
   }
   }

4. Copy the value of kmax from data.kmax, and use it in the next request.

🔑 Login
Endpoint: POST /api/auth/login
Required Fields:
phone: Same phone number as registered
kmax: The kmax value copied from the data.kmax field in the console

You will see a response like this:
{
"success": true,
"message": "Phone number is valid",
"kmax": "795364"
}

👑 Owner Account Setup

✅ Default Owner Account

- Phone number: 0369977153
- This account is pre-assigned with the "owner" role in Firestore.

🔐 Use this number to log in as an admin and access management features.

📂 Admin Routes Overview

| Route             | Description                                    |
| ----------------- | ---------------------------------------------- |
| `/admin`          | View and manage all users (`Manage` component) |
| `/admin/create`   | Create a new user (`Create` component)         |
| `/admin/edit/:id` | Edit an existing user (`Edit` component)       |

📸 Screenshot
[Login](./screenshots/signin.png)
[register](./screenshots/signup.png)
[unauthorized](./screenshots/unauthorized.png)
[manage](./screenshots/managepage.png)
[create]('./screenshots/createuser.png)
[edit]('./screenshots/edituser.png')
[verification]('./screenshots/verifycation.png)

📝 Author
Made with ❤️ by [Thanh Vinh] – [nguyenthienthanhvinh@email.com]
