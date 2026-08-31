# 💡 IdeaVault — Modern Idea Management Platform

<p align="center">
  A modern, full-stack idea management platform built with Next.js, React, Node.js, Express.js, MongoDB, and Better Auth.
</p>

<p align="center">
  <a href="https://idea-vault-client-three.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="https://github.com/mdabdulawal2001/idea-vault-client" target="_blank">
    <img src="https://img.shields.io/badge/Frontend-GitHub-blue?style=for-the-badge&logo=github" alt="Frontend GitHub" />
  </a>
  <a href="https://github.com/mdabdulawal2001/idea-vault-server" target="_blank">
    <img src="https://img.shields.io/badge/Backend-GitHub-blue?style=for-the-badge&logo=github" alt="Backend GitHub" />
  </a>
  <a href="https://idea-vault-server-chi.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/API-Live-success?style=for-the-badge&logo=vercel" alt="Backend API" />
  </a>
</p>

---

## 📝 Project Overview

**IdeaVault** is a modern, full-stack and fully responsive idea management platform designed to allow users to discover, create, manage, and interact with ideas.

Users can browse public ideas, search and filter ideas by title, category, and date, create their own ideas, update their profiles, and securely authenticate using **Email/Password or Google Authentication**.

The platform also includes an interactive **comment system**, allowing authenticated users to comment on ideas while giving comment owners full control over their own comments through edit and delete functionality.

IdeaVault was built with a strong focus on:

* 🔐 Secure authentication and authorization
* 🛡️ Protected frontend routes
* 🔒 Protected backend APIs
* 📝 Complete CRUD operations
* 💬 Comment management
* 👤 Profile management
* 🔎 Search and filtering
* 📱 Responsive UI
* ♻️ Reusable components
* ⚠️ Error handling
* ✨ Smooth user experience
* 🚀 Production deployment

The project is divided into two separate applications:

* **Frontend:** Next.js App Router application
* **Backend:** Node.js + Express.js REST API connected to MongoDB

---

## 🔗 Project Links

<p align="center">

<a href="https://idea-vault-client-three.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/🚀%20Live%20Frontend-Visit%20Website-brightgreen?style=for-the-badge&logo=vercel" alt="Live Frontend" />
</a>

<a href="https://idea-vault-server-chi.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/⚙️%20Live%20Backend-API-success?style=for-the-badge&logo=vercel" alt="Live Backend API" />
</a>

<a href="https://github.com/mdabdulawal2001/idea-vault-client" target="_blank">
  <img src="https://img.shields.io/badge/💻%20Frontend-GitHub-black?style=for-the-badge&logo=github" alt="Frontend GitHub Repository" />
</a>

<a href="https://github.com/mdabdulawal2001/idea-vault-server" target="_blank">
  <img src="https://img.shields.io/badge/🛠️%20Backend-GitHub-black?style=for-the-badge&logo=github" alt="Backend GitHub Repository" />
</a>

</p>


---


# 📸 Screenshots

<p align="center">
  <img src="IMAGE_URL_1" alt="IdeaVault Home Page" width="900" />
</p>

<p align="center">
  <img src="IMAGE_URL_2" alt="IdeaVault Ideas Page" width="900" />
</p>

<p align="center">
  <img src="IMAGE_URL_3" alt="IdeaVault Profile and Idea Details" width="900" />
</p>


---

# 🚀 Key Features

## 💡 Idea Management

* 📚 **Public Ideas** — Browse ideas available to public users.
* ➕ **Create Ideas** — Authenticated users can create and publish their own ideas.
* ✏️ **Edit Ideas** — Idea owners can update their existing ideas.
* 🗑️ **Delete Ideas** — Idea owners can delete their own ideas with confirmation handling.
* 🃏 **Reusable Idea Cards** — Ideas are displayed through clean and reusable card components.
* 🔐 **Idea Ownership** — Idea operations are associated with the authenticated user.
* 🔒 **Protected Idea Operations** — Create, update, and delete operations require authentication.

---

# 💬 Comment Management

IdeaVault includes an interactive comment system that allows users to engage with ideas.

### Comment Features

* 💬 Authenticated users can comment on ideas.
* 👤 Each comment is associated with its author.
* ✏️ Comment owners can edit their own comments.
* 🗑️ Comment owners can delete their own comments.
* 🔐 Comment modification is protected by authentication and ownership validation.
* 🚫 Users cannot edit or delete comments created by other users.
* 🔄 Comments update dynamically after create, edit, or delete operations.
* ⚠️ Proper error handling is implemented for unauthorized comment operations.

### Comment Authorization Flow

```text
Authenticated User
        ↓
     Create Comment
        ↓
     MongoDB
        ↓
   Comment Linked
   With User ID
        ↓
   Display Comment
        ↓
 ┌───────────────┐
 │ Comment Owner │
 └───────────────┘
        ↓
 ┌─────────┬─────────┐
 ↓         ↓
Edit     Delete
 ↓         ↓
API       API
 ↓         ↓
Verify Authentication
        +
Verify Comment Ownership
        ↓
     MongoDB
        ↓
   Updated / Deleted
```

---

# 🔎 Search & Filtering

IdeaVault provides a flexible search and filtering system.

### Available Filters

* 🔍 **Search by Title**
* 🏷️ **Category Filter**
* 📅 **From Date**
* 📅 **To Date**
* ↩️ **Reset Filters**
* ⌨️ **Enter-to-Search**
* 🔘 **Search Button**
* ⚡ **Combined Filtering**

Users can combine multiple filters together:

```text
Search by Title
       +
Category
       +
From Date
       +
To Date
       ↓
   Search API
       ↓
Server-side Filtering
       ↓
Filtered Ideas
       ↓
   Idea Cards
```

Users can trigger filtering in two ways:

1. Click **Search Ideas**
2. Press **Enter** inside the search field

Both actions use the same filtering functionality.

---

# 🔐 Authentication & Authorization

IdeaVault implements a complete authentication system using **Better Auth**.

### Authentication Methods

* 🔑 Email/Password Registration
* 🔓 Email/Password Login
* 🌐 Google Authentication
* 🚪 Secure Logout
* 🍪 Authentication Cookie Handling
* 👤 Session-based User Handling
* 🛡️ Protected Frontend Routes
* 🔒 Protected Backend APIs

### Additional Authentication Features

* 🎯 Desired Route Redirect
* 🛡️ Safe Callback URL Handling
* 📝 Registration → Login Flow
* 🚫 Unauthenticated users cannot access protected operations
* 🔐 Backend independently validates authenticated requests

---

# 🧭 Authentication Flow

```text
                         ┌─────────────┐
                         │    User     │
                         └──────┬──────┘
                                │
                ┌───────────────┼───────────────┐
                ↓               ↓               ↓
            Register          Login           Logout
                ↓               ↓               ↓
          Better Auth       Better Auth     Session Removed
                ↓               ↓
         Account Created   Session Created
                ↓               ↓
          Redirect Login   Auth Cookie
                                ↓
                    ┌───────────┴───────────┐
                    ↓                       ↓
             Protected Pages        Protected APIs
```

---

# 🛡️ Protected Route Flow

Unauthenticated users trying to access protected pages are redirected to the login page.

```text
Unauthenticated User
        ↓
Protected Route
        ↓
Authentication Check
        ↓
      Failed
        ↓
 Redirect to Login
        ↓
Login / Registration
        ↓
Authentication Successful
        ↓
Validate Callback URL
        ↓
Return to Requested Route
```

This allows users to continue exactly where they originally wanted to go instead of being redirected to a generic page.

---

# 🎯 Safe Callback URL Handling

IdeaVault also handles callback URLs carefully to prevent unsafe redirects.

```text
User Requests Protected Page
        ↓
Save Requested Route
        ↓
Redirect to Login
        ↓
Authentication Successful
        ↓
Validate Callback URL
        ↓
Safe URL?
   ┌────┴────┐
   ↓         ↓
  Yes        No
   ↓         ↓
Redirect   Default Route
```

This prevents invalid or unsafe callback destinations from being used during authentication redirects.

---

# 👤 Profile Management

Authenticated users can manage their own profile information.

### Profile Features

* 👤 User Profile Page
* ✏️ Update Profile Information
* 🖼️ Update Profile Image
* 🔄 Dynamic Profile Data
* 🔐 Authentication-protected profile actions
* 🛡️ Users can modify only their own profile
* ⚠️ Error handling for failed profile updates
* 🔔 Success/error toast feedback

### Profile Authorization Flow

```text
Authenticated User
        ↓
Profile Page
        ↓
Edit Profile
        ↓
Submit Changes
        ↓
Authentication Check
        ↓
Verify User Identity
        ↓
Update Own Profile
        ↓
MongoDB
        ↓
Updated Profile Data
        ↓
UI Refresh
```

---

# 📝 Idea Ownership & Authorization

IdeaVault does not rely only on frontend restrictions.

The backend verifies ownership before allowing sensitive operations.

```text
User Request
     ↓
Authentication Middleware
     ↓
Authenticated?
 ┌────┴────┐
 ↓         ↓
 No        Yes
 ↓         ↓
Reject   Get User ID
             ↓
      Verify Resource Owner
             ↓
       ┌─────┴─────┐
       ↓           ↓
     Owner       Not Owner
       ↓           ↓
    Allow        Reject
```

This applies to operations such as:

* ✏️ Updating ideas
* 🗑️ Deleting ideas
* ✏️ Updating comments
* 🗑️ Deleting comments
* 👤 Updating protected profile information

---

# 🧩 Frontend Features

## 🔐 Authentication Pages

The login and registration forms include:

* Email validation
* Password validation
* Confirm password validation
* Password visibility toggle
* Profile image URL validation
* Google login
* Loading feedback
* Success feedback
* Error feedback
* Desired-route callback support
* Safe callback URL handling
* Registration → Login flow

---

## 💡 Ideas

Authenticated users can:

* Create ideas
* Edit their own ideas
* Delete their own ideas
* View their ideas
* Publish ideas
* View idea details
* Read available comments

Public users can:

* Browse public ideas
* Search ideas
* Filter ideas


---

## 💬 Comments

Authenticated users can:

* Add comments to ideas
* Edit their own comments
* Delete their own comments

Comment ownership is validated on the backend to prevent users from modifying other users' comments.

---

## 👤 Profile

Authenticated users can:

* View their profile
* Update profile information
* Update profile image
* Manage their own account information

---

# 🎨 UI / UX

IdeaVault focuses on providing a clean, responsive, and user-friendly experience.

### UI Features

* 📱 Fully Responsive Design
* 🖥️ Desktop Optimization
* 📱 Mobile Optimization
* 📟 Tablet Optimization
* 🌙 Dark Mode Support
* ✨ Smooth Animations
* 🎬 Motion / Framer Motion Animations
* 🔔 Toast Notifications
* ⏳ Loading States
* 🚫 Custom Not Found Page
* 🎯 Reusable UI Components
* 🧹 Clean Form Validation
* 👁️ Password Visibility Toggle
* 📨 User-Friendly Error Messages
* 🗑️ Confirmation handling for destructive actions

---

# 🛠️ Backend & API

IdeaVault uses a separate Express.js REST API connected to MongoDB.

### Backend Features

* ⚙️ Express.js REST API
* 🗄️ MongoDB Database
* 🔐 Better Auth Integration
* 🛡️ Authentication Middleware
* 👮 Protected API Routes
* 📡 Client ↔ Server API Communication
* 🔎 Server-side Idea Filtering
* 📊 Category Data API
* 💬 Comment API
* 👤 User/Profile API
* ❤️ Health / Server Status Endpoint
* 📅 Date Handling & Normalization
* 🔒 Ownership-based authorization
* ⚠️ API error handling

---

# 🏗️ Project Architecture

IdeaVault is divided into two independent applications.

```text
IdeaVault
│
├── idea-vault-client
│   │
│   ├── Next.js App Router
│   ├── Authentication UI
│   ├── Protected Routes
│   ├── Idea Management UI
│   ├── Idea Details
│   ├── Comment System
│   ├── Profile Management
│   ├── Search & Filters
│   ├── Form Validation
│   ├── Toast Notifications
│   └── API Integration
│
└── idea-vault-server
    │
    ├── Express.js
    ├── Better Auth
    ├── Authentication Middleware
    ├── Authorization
    ├── Idea API
    ├── Comment API
    ├── User/Profile API
    ├── Category API
    ├── Health API
    └── MongoDB
```

---

# 🔄 Complete Application Flow

```text
                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            │
                            ↓
                    Next.js Frontend
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
       Authentication     Ideas         Profile
             │              │              │
             ↓              ↓              ↓
         Better Auth     REST API       REST API
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
          Ideas         Comments        Users
             │              │              │
             └──────────────┼──────────────┘
                            ↓
                         MongoDB
```

---

# 🔄 Client ↔ Server Communication

```text
Next.js Client
      ↓
HTTP Request
      ↓
Express.js API
      ↓
Authentication Middleware
      ↓
Authorization / Ownership Check
      ↓
Controller / API Logic
      ↓
MongoDB
      ↓
API Response
      ↓
Next.js Client
      ↓
UI Update
```

---

# 🧠 Data & CRUD Flow

## Idea CRUD

```text
Create
User → Frontend → API → Auth → MongoDB → Response → UI

Read
User → Frontend → API → MongoDB → Ideas → UI

Update
User → Frontend → API → Auth → Ownership Check → MongoDB → UI

Delete
User → Frontend → API → Auth → Ownership Check → MongoDB → UI
```

## Comment CRUD

```text
Create
User → Idea → Comment API → Auth → MongoDB

Read
Idea → Comment API → MongoDB → Comments → UI

Update
User → Comment → Auth → Ownership Check → MongoDB

Delete
User → Comment → Auth → Ownership Check → MongoDB
```

---

# 🛡️ Backend Security

The backend independently validates authentication and authorization.

Frontend protection alone is not considered sufficient for sensitive operations.

Protected operations include:

* Creating ideas
* Updating ideas
* Deleting ideas
* Creating comments
* Updating comments
* Deleting comments
* Updating protected user information

The server verifies:

1. Authentication status
2. User identity
3. Resource ownership
4. Request validity

This prevents unauthorized users from directly calling protected API endpoints.

---

# 🛠️ Technologies Used

## 🎨 Frontend

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,tailwindcss,javascript" alt="Frontend Technologies" />
</p>

| Technology          | Purpose                               |
| ------------------- | ------------------------------------- |
| **Next.js 16**      | React framework using the App Router  |
| **React**           | Component-based UI development        |
| **Tailwind CSS**    | Utility-first responsive styling      |
| **HeroUI**          | Modern reusable UI components         |
| **Framer Motion**   | Smooth UI animations                  |
| **Motion**          | Animation and interaction support     |
| **Lucide React**    | Modern icon system                    |
| **React Icons**     | Additional icon library               |
| **React Hot Toast** | Toast notifications                   |
| **Better Auth**     | Authentication and session management |

---

## ⚙️ Backend

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,javascript" alt="Backend Technologies" />
</p>

| Technology      | Purpose                               |
| --------------- | ------------------------------------- |
| **Node.js**     | JavaScript runtime                    |
| **Express.js**  | REST API framework                    |
| **MongoDB**     | NoSQL database                        |
| **Better Auth** | Authentication and session management |
| **CORS**        | Cross-origin request handling         |
| **dotenv**      | Environment variable management       |

---

## 🧩 Additional Tools & Libraries

<p align="center">
  <img src="https://cdn.simpleicons.org/heroui" height="48" alt="HeroUI" />
  <img src="https://cdn.simpleicons.org/framer" height="48" alt="Framer Motion" />
  <img src="https://cdn.simpleicons.org/lucide" height="48" alt="Lucide React" />
  <img src="https://cdn.simpleicons.org/react" height="48" alt="React Icons" />
  <img src="https://cdn.simpleicons.org/react" height="48" alt="React Hot Toast" />
  <img src="https://cdn.simpleicons.org/betterauth" height="48" alt="Better Auth" />
</p>

<p align="center">
  <b>HeroUI</b>&nbsp;&nbsp;&nbsp;
  <b>Framer Motion</b>&nbsp;&nbsp;&nbsp;
  <b>Lucide React</b>&nbsp;&nbsp;&nbsp;
  <b>React Icons</b>&nbsp;&nbsp;&nbsp;
  <b>React Hot Toast</b>&nbsp;&nbsp;&nbsp;
  <b>Better Auth</b>
</p>


# 📦 Dependencies Used

## 🎨 Frontend Dependencies

```text
next
react
react-dom
better-auth
@heroui/react
tailwindcss
framer-motion
motion
lucide-react
react-icons
react-hot-toast
```

---

## ⚙️ Backend Dependencies

```text
express
mongodb
better-auth
cors
dotenv
```

> The exact dependency versions may change as the project evolves. Please check each repository's `package.json` for the latest installed versions.


# 🚀 Deployment

IdeaVault is deployed as two separate Vercel applications.

### Frontend

<p align="center">

<a href="https://idea-vault-client-three.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Frontend-Live-brightgreen?style=for-the-badge&logo=vercel" alt="Frontend Live" />
</a>

</p>

### Backend API

<p align="center">

<a href="https://idea-vault-server-chi.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Backend%20API-Live-success?style=for-the-badge&logo=vercel" alt="Backend API Live" />
</a>

</p>

Separating the frontend and backend keeps client and server responsibilities independent and allows the REST API to be consumed by the Next.js application.

---

# 📂 Repository Structure

## Frontend Repository

<p align="center">
  <a href="https://github.com/mdabdulawal2001/idea-vault-client">
    <img src="https://img.shields.io/badge/Frontend-GitHub-black?style=for-the-badge&logo=github" alt="Frontend Repository" />
  </a>
</p>

```text
idea-vault-client
│
├── app/
├── components/
├── lib/
├── public/
├── ...
├── package.json
└── README.md
```

## Backend Repository

<p align="center">
  <a href="https://github.com/mdabdulawal2001/idea-vault-server">
    <img src="https://img.shields.io/badge/Backend-GitHub-black?style=for-the-badge&logo=github" alt="Backend Repository" />
  </a>
</p>

```text
idea-vault-server
│
├── routes/
├── middleware/
├── controllers/
├── lib/
├── ...
├── package.json
└── README.md
```

> The exact folder structure may evolve as the project is improved.

---

# 📦 How to Run Locally

## 1️⃣ Clone the Frontend

```bash
git clone https://github.com/mdabdulawal2001/idea-vault-client.git
cd idea-vault-client
npm install
```

## 2️⃣ Clone the Backend

Open another terminal:

```bash
git clone https://github.com/mdabdulawal2001/idea-vault-server.git
cd idea-vault-server
npm install
```

---

# 🔐 Environment Variables

Create the required environment files according to your local configuration.

## Frontend

Create a `.env.local` file in the frontend project:

```env
NEXT_PUBLIC_SERVER_API_URL=http://localhost:YOUR_BACKEND_PORT
BETTER_AUTH_SECRET=your_secret_key
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:YOUR_BACKEND_PORT
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Backend

Create a `.env` file in the backend project:

```env
PORT=YOUR_BACKEND_PORT
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:YOUR_BACKEND_PORT
```

> ⚠️ **Security Notice:** Never commit real secrets, database credentials, OAuth credentials, API keys, authentication secrets, or production environment variables to GitHub. Use `.env.local` / `.env` files locally and configure production secrets securely through your deployment platform's environment variable settings.


# ▶️ Run Development Servers

## Frontend

```bash
npm run dev
```

## Backend

```bash
npm run dev
```

Then open the frontend in your browser.

---

# 🧠 What I Learned

Building IdeaVault helped me strengthen my understanding of modern full-stack web development.

### Authentication & Authorization

* Implementing Email/Password authentication
* Implementing Google authentication
* Working with Better Auth
* Managing authenticated sessions
* Working with authentication cookies
* Protecting frontend routes
* Protecting backend API endpoints
* Implementing ownership-based authorization
* Handling safe callback URLs
* Implementing desired-route redirects

### Backend Development

* Building REST APIs with Express.js
* Connecting Express.js with MongoDB
* Creating protected API routes
* Implementing authentication middleware
* Implementing authorization middleware
* Handling API errors
* Designing CRUD operations

### Database

* Working with MongoDB
* Managing ideas
* Managing users
* Managing comments
* Connecting resources with authenticated users
* Implementing ownership validation

### CRUD & Interaction

* Creating, reading, updating, and deleting ideas
* Creating, reading, updating, and deleting comments
* Implementing confirmation handling
* Managing user-owned resources

### Search & Filtering

* Title-based searching
* Category filtering
* Date range filtering
* Combining multiple filters
* Server-side filtering
* Date normalization

### Profile Management

* Creating user profile functionality
* Updating profile information
* Updating profile images
* Protecting profile operations

### Frontend Development

* Next.js App Router
* React component architecture
* Reusable components
* Form validation
* Responsive design
* Dark mode
* Loading states
* Toast notifications
* Error handling
* Motion-based animations

### Deployment

* Deploying frontend and backend separately
* Deploying with Vercel
* Managing environment variables
* Debugging production issues
* Handling API communication in production
* Configuring authentication URLs
* Connecting MongoDB in production
* Debugging Next.js rendering and deployment issues

---

# 🔮 Future Improvements

Possible future improvements include:

* 🔑 Forgot Password / Password Reset
* 📧 Email Verification
* 🔎 More advanced idea sorting
* 📄 Pagination / Infinite Scroll
* ✍️ Rich Text Idea Editor
* 🖼️ Direct Image Upload
* ❤️ Idea Likes
* 🔖 Idea Bookmarks
* 📊 User Dashboard Analytics
* 🛠️ Admin Dashboard
* 👮 Advanced Role-based Authorization
* 💬 Enhanced Comment Features
* 🔔 Notification System
* 💀 Improved Loading Skeletons
* ♿ Improved Accessibility
* 🧪 Automated Testing
* 📈 Advanced Search
* 📱 Progressive Web App Support

---

# 👨‍💻 Developer

<p align="center">
  Developed with ❤️ by
</p>

<h2 align="center">
  MD. ABDUL AWAL TOHA
</h2>

<p align="center">

<a href="https://github.com/mdabdulawal2001" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-MD._ABDUL_AWAL_TOHA-blue?style=for-the-badge&logo=github" alt="GitHub Profile" />
</a>

</p>

---

# ⭐ Support

If you like this project, consider giving the repositories a ⭐ **Star** on GitHub.

<p align="center">
  <b>Thanks for visiting IdeaVault! 🚀</b>
</p>
