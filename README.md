# College Cooking

**College Cooking** is a blog application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create and manage their own blog posts about cooking on a budget.

## Deployed
- Check out the deployed application at https://the-mern-blog-frontend.onrender.com/login

## Features

- User Authentication: Users can sign up, log in, and log out. Authentication is maintained using JSON Web Tokens (JWTs). 
- Create and Manage Blog Posts: Authenticated users can create new blog posts, view their own posts, and delete their posts.
- Mobile-Friendly Design: The application is responsive and optimized for mobile devices.
- Material UI Integration: The user interface is built using Material UI components for a modern and visually appealing design.

## Installation

To run the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/college-cooking.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory of the project.
   - Define the following variables in the `.env` file:
     - `MONGO_URI`: MongoDB connection URI
     - `SECRET_KEY`: Secret key for JWT authentication
4. Start the server: `npm run dev`
5. Open the app in your browser at `http://localhost:3000`

## API Routes

The app includes the following API routes:

- `POST /api/user/signup`: Sign up a new user.
- `POST /api/user/login`: Log in an existing user.
- `POST /api/user/logout`: Log out the current user.
- `GET /api/blogs`: Get all blog posts.
- `GET /api/blogs/:id`: Get a specific blog post.
- `POST /api/blogs`: Create a new blog post.
- `DELETE /api/blogs/:id`: Delete a specific blog post.

## Technologies

- MongoDB: NoSQL database for data storage.
- Express: Web application framework for Node.js.
- React: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime for server-side development.
- Material UI: React UI library for responsive and visually appealing designs.

## Contributing

Contributions are welcome! If you have any ideas or suggestions for improving this project, please feel free to open an issue or submit a pull request.

## Questions

Deployed Application: https://the-mern-blog-frontend.onrender.com/login

GitHub Repository: https://github.com/humesandrew/The-MERN-Blog-

GitHub Profile: https://github.com/humesandrew

Email: humes.andrew@gmail.com
