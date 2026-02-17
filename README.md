<div align="center">
  
  # 🔐 GateHub - Authentication System

![GateHub Banner](/images/readme/banner.png)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22.0-CA4245?logo=reactrouter)](https://reactrouter.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.51.0-EC5990?logo=reacthookform)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3.22.4-3E67B1?logo=zod)](https://zod.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-2.39.0-3ECF8E?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-Competition%20Use%20Only-red)](LICENSE)

### 🚪 A modern, secure authentication system built with React + TypeScript and Supabase

[Live Demo](https://amirrezash0n.github.io/gatehub) • [Report Bug](https://github.com/amirrezash0n/gatehub/issues) • [Request Feature](https://github.com/amirrezash0n/gatehub/issues)

</div>

---

## 📋 **Table of Contents**

- [About The Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 **About The Project**

**GateHub** is a robust authentication system designed to demonstrate secure user management practices. This project serves as a foundation for implementing authentication in modern web applications with a focus on security and user experience. It is developed as part of the ByteRivals competition between two participants.

### ✨ **Why GateHub?**

- 🔒 **Security First** - Passwords are never stored in plain text
- 🚀 **Modern Stack** - Built with the latest technologies
- 📱 **Responsive** - Works perfectly on all devices
- 🧪 **Tested Patterns** - Follows industry best practices

---

## 🛠️ **Tech Stack**

| Category          | Technology            | Purpose                          |
| ----------------- | --------------------- | -------------------------------- |
| **Framework**     | React 18 + TypeScript | Core UI library with type safety |
| **Styling**       | TailwindCSS           | Utility-first CSS framework      |
| **Routing**       | React Router v6       | Protected routes & navigation    |
| **Forms**         | React Hook Form       | Performant form handling         |
| **Validation**    | Zod                   | TypeScript-first validation      |
| **Backend**       | Supabase              | Database & authentication        |
| **Notifications** | SweetAlert2           | Beautiful user alerts            |

---

## ⭐ **Features**

### **Core Features**

- ✅ **User Registration** - Create new accounts with validation
- ✅ **User Login** - Secure sign-in process
- ✅ **Password Encryption** - Automatic hashing via Supabase
- ✅ **Form Validation** - Real-time client-side validation with Zod
- ✅ **Protected Routes** - Access control for authenticated users

### **Security Features**

- 🔐 **No Plain-text Passwords** - Automatically hashed in database
- 🛡️ **Input Sanitization** - Protection against XSS attacks
- 🔑 **Session Management** - Secure token-based authentication

---

## 📸 **Screenshots**

<div align="center">
  
  ### 🖼️ **Project Preview**

|                                              |                                                    |
| :------------------------------------------: | :------------------------------------------------: |
|                **Login Page**                |               **Registration Page**                |
| ![Login Page](/images/readme/login-page.png) | ![Register Page](/images/readme/register-page.png) |
|    _Clean and intuitive login interface_     |    _User-friendly registration with validation_    |

<!-- ### **User Dashboard**

![Dashboard](/images/readme/dashboard.png)
_Personalized dashboard for authenticated users_ -->

<!-- ### **Real-time Validation**

![Validation](/images/readme/validation.gif)
_Live form validation with React Hook Form and Zod_ -->

</div>

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier)

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/amirrezash0n/gatehub.git
   cd gatehub

   ```

2. **Install dependencies**

   ```npm install

   ```

3. **Set up environment variables**

   ```cp .env.example .env

   ```

# Edit .env with your Supabase credentials

````

4. **Start development server**

```npm run dev
````

5. **Build for production**

   ```npm run build

   ```
