# Multi-Theme Switcher App

This project is a React-based web application featuring a dynamic theme switcher. It allows users to select from three distinct themes, each altering not only colors but also the overall structure, fonts, spacing, and layout of the application. The application demonstrates responsive design and uses Redux for state management, with theme persistence across page reloads using `localStorage`.

## Objective

Build a React-based web application with a theme switcher. The switcher should allow users to select from three distinct themes (Theme 1, Theme 2, Theme 3) using a dropdown in the header. Each theme should not only change colors, but also alter structure, fonts, spacing, and layout.

## Requirements

1.  **Header**
    *   Fixed top header with:
        *   App name/logo (dummy)
        *   Dropdown to switch between themes (Theme 1 as default)

2.  **Themes**
    Implement three complete themes with noticeable differences:
    *   **Theme 1 (Default):** Minimalist layout with light background, simple sans-serif font
    *   **Theme 2:** Dark mode with sidebar layout, bold serif font
    *   **Theme 3:** Colorful theme with card-based grid layout, playful Google Font (e.g., "Pacifico")
    *   Layout, font size, margins, components' structure and overall look should be clearly different across themes.

3.  **Main Content**
    *   Sample content area with:
        *   Title
        *   Dummy paragraph
        *   Button
        *   List or Card component
        *   Responsive layout for desktop and mobile

4.  **Functionality**
    *   Theme should persist across page reload (use `localStorage`)
    *   Use Context API or Redux for theme management (Redux is implemented in the provided code)
    *   Use an API to call data (https://fakestoreapi.com/products is used for product display)
    *   Responsive design using CSS Modules, Tailwind, or Styled-components (Tailwind CSS is used)
    *   Avoid using large UI libraries like Material UI or Ant Design
    *   Add subtle animation while switching themes
    *   Use React Router and demonstrate the theme across multiple pages (Home, About, Contact)
    *   Use TypeScript
    *   Ensure app is secured (basic security practices applied)
    *   Compatible with all devices

## Setup Steps

To get this project up and running on your local machine, follow these steps:

### 1. Clone the Repository

First, clone the project repository to your local machine using Git:

\`\`\`bash
git clone (https://github.com/GitYashRepo/HipsterProject)
cd project-one
\`\`\`

### 2. Install Dependencies

Navigate into the project directory and install the necessary Node.js packages using npm

\`\`\`bash
npm install
\`\`\`

### 3. Run the Application

Once the dependencies are installed, you can start the development server:

\`\`\`bash
npm run dev
\`\`\`

This will typically start the application on `http://localhost:5173`. Open your browser and navigate to this address to see the app in action.

### 4. Project Structure

The project is organized as follows:

\`\`\`
.
├── public/
│   └── icon/
│       └── favicon-32x32.png
├── src/
│   ├── assets/ (for images, etc.)
│   ├── components/ (reusable UI components)
│   │   ├── ui/ (shadcn/ui components)
│   │   └── ...
│   ├── hooks/ (custom React hooks)
│   ├── lib/ (utility functions, data)
│   ├── pages/ (main application pages)
│   │   ├── About/
│   │   │   └── About.tsx
│   │   ├── Contact/
│   │   │   └── Contact.tsx
│   │   └── Home/
│   │       └── Home.tsx
│   ├── store/ (Redux store setup)
│   │   ├── index.ts
│   │   ├── productSlice.ts
│   │   └── themeSlice.ts
│   ├── styles/ (global CSS, theme-specific styles)
│   ├── webcomponants/ (specific web components like Navbar, Footer, ProductCard)
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   └── ProductCard/
│   │       └── ProductCard.tsx
│   ├── App.tsx (main application component)
│   ├── main.tsx (React entry point)
│   └── index.css (global styles)
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md
\`\`\`

## Code Documentation/Comments

The codebase is designed with readability and maintainability in mind. Key aspects of documentation include:

*   **Inline Comments:** Important logic blocks, complex functions, and non-obvious code sections are explained using inline comments.
*   **JSDoc/TypeScript Types:** TypeScript interfaces and types are used extensively to define data structures and component props, enhancing code clarity and enabling better IDE support.
*   **Component Props:** Each React component's props are clearly defined, often with comments explaining their purpose.
*   **Redux Slices:** Redux slices (`themeSlice.ts`, `productSlice.ts`) are well-structured, with clear definitions of state, reducers, and async thunks.
*   **File Organization:** Files are logically grouped into directories (e.g., `pages`, `components`, `store`, `lib`) to make it easy to locate relevant code.


This documentation strategy ensures that both the high-level architecture and the granular details of the code are understandable to anyone working with the project.
