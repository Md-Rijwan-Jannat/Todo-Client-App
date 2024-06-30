# Todo Task Management

![Homepage](homepage9)

## Overview

**Todo Task Management** is a modern, responsive web application designed for task management. Built with React, TypeScript, Node.js, Express, and MongoDB, this application offers a robust platform for users to manage their tasks efficiently. It features user authentication, task creation, editing, deletion, and filtering capabilities, all wrapped in a sleek, user-friendly interface.

## Features

- **User Authentication**: Secure sign-up and login functionality using Firebase.
- **Task Management**: Create, edit, and delete tasks with detailed information.
- **Task Filtering**: Filter tasks based on priority (High, Medium, Low) or view all tasks.
- **Task Completion**: Mark tasks as completed or pending.
- **Pagination**: Navigate through multiple pages of tasks with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Task Data Handling**: Fetch, create, and delete task data using a RESTful API.

## Screenshots

![Homepage](homepage9)

## Technology Stack

- **Frontend**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Shadcn UI](https://www.shadcn.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
- **Deployment**:
  - [Vercel](https://vercel.com/) (Frontend)
  - [Heroku](https://www.heroku.com/) or [Render](https://render.com/) (Backend)

## Live Demo

- [Frontend Application](https://todo-task-management-jet.vercel.app/)
- [Backend API](https://github.com/Md-Rijwan-Jannat/Todo-Task-Server)

## GitHub Repositories

- [Frontend Client App](https://github.com/Md-Rijwan-Jannat/Todo-Client-App)
- [Backend Server](https://github.com/Md-Rijwan-Jannat/Todo-Task-Server)

## Installation

To run the application locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Set up a MongoDB Atlas cluster or local MongoDB server)
- [Firebase](https://firebase.google.com/) (For authentication setup)

### Frontend Setup

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/Md-Rijwan-Jannat/Todo-Client-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Todo-Client-App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

### Backend Setup

1. Clone the backend repository:

   ```bash
   git clone https://github.com/Md-Rijwan-Jannat/Todo-Task-Server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Todo-Task-Server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   DATABASE_URL=mongodb+srv://todo-task-management:wkkmA366tgUj0AJC@cluster0.gejjs5n.mongodb.net/todo-task-management?retryWrites=true&w=majority
   ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage

After completing the setup, visit the [frontend application](https://todo-task-management-jet.vercel.app/) in your browser. You can sign up or log in to manage your tasks, filter them based on priority, and navigate through the task list.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any questions or feedback, please reach out to [Md-Rijwan-Jannat](https://github.com/Md-Rijwan-Jannat).

Happy task managing! 🎉
