import React from "react";

export default function About() {
  return (
    <div className="min-h-screen mx-4 md:mx-28 mt-16">
      <h2 className="text-gray-800 font-bold text-3xl text-center mt-5">
        About Project
      </h2>
      <div className="mt-5">
        To create a book store website using Node.js, MongoDB, Express, Redux,
        Redux Persist, and Toolkit, I am implemented various features
        such as user authentication, admin dashboard, CRUD operations for books,
        private routing, and more. 
        <h3 className="text-gray-800 font-semibold mt-3">Setup and Installation:</h3>
        <p className="mt-1">
          Set up a Node.js project with Express for backend development.
          Configure MongoDB as the database for storing user information and
          book data. Install necessary packages such as express, mongoose for
          MongoDB connectivity, bcryptjs for password hashing, jsonwebtoken for
          authentication, express-validator for input validation, etc.
        </p>
        <h3 className="text-gray-800 font-semibold mt-3">User Authentication:</h3>
        <p className="mt-1">
          Implement user registration and login endpoints using Express routes.
          Hash user passwords before storing them in the database. Generate JWT
          tokens upon successful login for authentication. Create middleware to
          protect routes that require authentication.
        </p>
        <h3 className="text-gray-800 font-semibold mt-3">Redux Setup:</h3>
        <p className="mt-1">
          Install Redux and Redux Toolkit for managing application state. Define
          actions, reducers, and store for managing user authentication state.
          Implement actions for login, logout, and user registration.
        </p>
        <h3 className="text-gray-800 font-semibold mt-3">Admin Dashboard:</h3>
        <p className="mt-1">
          Create routes and views for the admin dashboard. Implement
          authentication middleware to restrict access to admin-only routes. Add
          functionality to view, add, update, and delete books from the admin
          dashboard.
        </p>
        <h3 className="text-gray-800 font-semibold mt-3">Book Management:</h3>
        <p className="mt-1">
          Set up MongoDB models for storing book information. Create CRUD
          endpoints for managing books (Create, Read, Update, Delete). Implement
          functionality to upload book images and store them in the server.
        </p>
        <h3 className="text-gray-800 font-semibold mt-3">Private Routing:</h3>
        <p className="mt-1">
          Define private routes for authenticated users and admin users using
          Express middleware. Redirect unauthenticated users to the login page
          when accessing private routes. Single Book View: Create a route to
          view a single book details. Fetch book details from the database based
          on the book ID. Display book information such as title, description,
          image, etc., on the single book view page.
        </p>
      </div>
    </div>
  );
}
