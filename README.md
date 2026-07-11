# Contact Manager

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A modern contact management application built with React and Vite that consumes a REST API to perform full CRUD operations.

This project focuses on component-based architecture, global state management, REST API integration, and building a clean, responsive user interface using modern React practices.

![Contact Manager preview](src/assets/img/contactlist.jpg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Author](#author)
- [License](#license)

## Features

- Create, edit, view, and delete contacts (full CRUD)
- REST API integration for contact management
- Reusable, isolated UI components
- Client-side routing with React Router

## Tech Stack

**Frontend**
- React (Hooks, functional components)
- Vite
- JavaScript (ES6+)
- React Router
- Bootstrap 5 / CSS3

**Data**
- REST API
- Fetch API

## Project Structure

```text
src/
├── assets/        # Images and static resources
├── components/    # Reusable UI components
├── hooks/         # Global state hook
├── pages/         # Route-level views
├── routes.jsx      # App routing configuration
├── store.js        # Global state management
└── main.jsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/meylin103/contact-manager.git

# Move into the project directory
cd contact-manager

# Install dependencies
npm install

# Start the development server
npm run start
```


## Roadmap

- [ ] Search and filter contacts
- [ ] Mark contacts as favorites
- [ ] Upload profile pictures
- [ ] Contact categories/tags
- [ ] Local storage / offline support
- [ ] Dark mode
- [ ] User authentication

## Author

**Meilyn Fuentes**

AWS Certified Cloud Practitioner
Full Stack Developer
Cloud & Backend Enthusiast

- GitHub: [@meylin103](https://github.com/meylin103)
- LinkedIn: [linkedin.com/in/meilynfuentes](https://www.linkedin.com/in/meilynfuentes)

## License

This project is licensed under the MIT License.
