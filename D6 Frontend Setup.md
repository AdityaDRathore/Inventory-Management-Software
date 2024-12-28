# Frontend Development Context

## Project Context
The web app is a production-level application targeted at local shopkeepers with minimal technical knowledge. The UI must be **intuitive**, **lightweight**, and **responsive**, resembling the simplicity and functionality of **Zoho Books**. The focus is on efficient inventory, sales, and purchase management with a clean and user-friendly interface.

### Client Emphasis
1. A **simple, fast-loading UI** due to the database-heavy nature of the project. 
2. Compatibility with desktop, mobile, and tablet devices.
3. Reusability of components to ensure scalability for future features.

---

## Frontend Tech Stack Recommendation
To keep the UI simple, maintainable, and lightweight:
- **React**: Core library for building the user interface.
- **Chakra UI** or **Material-UI (MUI)**: Component libraries for pre-designed, accessible, and customizable UI elements. These are lightweight and suitable for database-heavy projects.
- **React Router**: For managing navigation between pages.
- **Axios**: For API calls to communicate with the backend.
- **React Query** (optional): To efficiently handle API data fetching, caching, and state management for smoother user experience.
- **CSS Modules or Tailwind CSS**: For custom styling without adding unnecessary bulk.

---

## Tasks for Day #6

### 1. Set Up React Project
- Create a **React app** using `Create React App` or `Vite` (faster build times).
- Structure the project directories for scalability:
  ```
  src/
  ├── components/   // Reusable UI components
  ├── pages/        // Page-level components
  ├── services/     // API integration logic
  ├── hooks/        // Custom React hooks (e.g., for data fetching)
  ├── styles/       // CSS files or Tailwind styles
  ├── utils/        // Utility functions
  └── App.js        // Main application file
  ```
- Install dependencies:  
  ```
  npm install react-router-dom axios chakra-ui
  ```

### 2. Develop Reusable UI Components
Create the following **reusable components**:
1. **Navbar**:
   - Contains navigation links (e.g., Dashboard, Inventory, Sales, Purchases).
   - Responsive for mobile and desktop views.
2. **Sidebar (optional)**:
   - For quick access to main features on desktop.
3. **Table Component**:
   - Used for displaying lists of products, sales, and purchase data.
   - Features: Pagination, sorting, and search.
4. **Form Components**:
   - Reusable input fields for forms (e.g., Add New Product, Add Sales).
   - Validation logic integrated.
5. **Modal Component**:
   - For actions like editing products or adding new sales.
6. **Card Components**:
   - Used in the dashboard for showing key metrics (e.g., Total Sales, Total Purchases).

---

## Page Requirements

### 1. **Login/Registration Page**
- Design a clean login/registration form that connects to the backend authentication API.
- Add appropriate error handling (e.g., incorrect credentials).
- Use Chakra UI's `FormControl` or equivalent for better accessibility.
   
### 2. **Dashboard Page**
- Design a dashboard to show **high-level metrics**:
  - Total inventory value.
  - Total sales.
  - Total purchases.
- Include cards for each metric and a quick link to respective pages (e.g., Inventory Management).

### 3. **Inventory Management Page**
- **Product List Table**: Display all products with options to edit/delete.
- **Add Product Form**: Form for adding new products.
- **Search and Filter**: Allow users to filter products by category or search by name.

### 4. **Sales and Purchases Management Pages**
- **Transaction List Table**: Similar to the inventory page but for sales and purchases.
- **Add New Transaction Form**: Reuse the form component for adding sales/purchases.

---

## Styling Guidelines
- **Lightweight Styling**: Use Chakra UI/MUI for predefined themes with minimal overrides.
- **Colors**: Use a simple palette (preferably green and white, as per previous notes).
- **Responsiveness**: Ensure all pages adapt seamlessly to mobile, tablet, and desktop using `Flex` and `Grid` layouts.
- **Accessibility**: Add appropriate ARIA labels and focus indicators for forms and navigation.

---

## Deliverables for Day 6
1. **Project Setup**:
   - Fully structured React app with installed dependencies and routing configured.
2. **Reusable Components**:
   - Navbar, Table, Form, Modal, and Card components designed with Chakra UI/MUI.
3. **Login/Registration Page**:
   - Functional form connected to the backend authentication API.
4. **Dashboard Page**:
   - Simple layout with dummy data (to be replaced with backend API integration later).

---

## Key Considerations
1. Keep forms **simple and clear**—local shopkeepers with minimal tech knowledge will use this app.
2. Test each component for responsiveness on mobile and tablet views.
3. Use dummy data for now and integrate APIs as part of the next steps.
4. Ensure consistent design elements to enhance the user experience.
