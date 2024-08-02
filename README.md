# Task Management App

[Current hosted site](https://react-tasks-fam7.onrender.com/)

This project is a task management application built with React. It allows users to add, edit, and delete tasks, and organize them based on importance and urgency on a virtual board (Tasks are only saved locally). This project was created to gain exposure to React, following the learning resources from [React's official documentation](https://react.dev/learn) and [W3Schools React](https://www.w3schools.com/react/default.asp).

## Features

- Add tasks with title, notes, importance, and urgency
- Edit existing tasks
- Mark tasks as completed
- Delete completed tasks
- Organize tasks in quadrants based on importance and urgency
- Responsive design for mobile devices

## Installation

1. Navigate to the project directory:
   `cd task-management-app`

2. Install the dependencies:
   `npm install`

3. Start the development server:
   `npm start`

## Project Structure

```Tree-Structure
task-management-app/
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AddTask.js
│ │ ├── TaskBoard.js
│ │ ├── TaskCard.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Components

- `AddTask.js`: Component for adding new tasks.
- `TaskBoard.js`: Component for displaying tasks organized in quadrants.
- `TaskCard.js`: Component for displaying individual tasks with options to edit, complete, or delete.

## CSS Structure

The CSS file `styles.css` is organized for better readability and maintainability:

- General styles
- Header and footer styles
- Task and board styles
- Task card content styles
- Button styles
- Input styles
- Hover effects
- Mobile-friendly styles

## Possible Improvements

Here are some suggestions for possible improvements:

1. **Authentication**:

   - Implement user authentication to allow multiple users to manage their own tasks.
   - Use a service like Firebase Authentication or implement your own authentication system.

2. **Backend Integration**:

   - Connect the app to a backend to persist tasks across sessions and multiple devices.
   - Use a backend service like Firebase Firestore, MongoDB, or a custom REST API.

3. **Enhanced Styling**:

   - Improve the UI with a more modern design.
   - Use a CSS framework like Bootstrap, Tailwind CSS, or Material-UI.

4. **Task Categories**:

   - Allow users to create categories for tasks and filter tasks based on these categories.

5. **Notifications**:

   - Add notifications or reminders for tasks based on their urgency and due dates.

6. **Drag and Drop**:

   - Implement drag-and-drop functionality to move tasks between quadrants.

7. **Unit Testing**:

   - Add unit tests for the React components using a testing library like Jest and React Testing Library.

8. **Performance Optimization**:

   - Optimize the performance of the app, especially for large numbers of tasks.

9. **Internationalization**:

   - Add support for multiple languages to make the app accessible to a wider audience.

10. **Accessibility**:
    - Improve accessibility features to ensure the app is usable by people with disabilities.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes.

## Acknowledgements

This project was created to gain exposure to React. Special thanks to the various online resources and communities that provided guidance and support, particularly the [React official documentation](https://react.dev/learn) and [W3Shools React](https://www.w3schools.com/react/default.asp).

Last updated 4:17 PM MST 8/2/2024
