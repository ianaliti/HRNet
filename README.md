# HRnet React Conversion Project

## 💼 Project Overview

**HRnet** is an internal web application used to manage employee records for **WealthHealth**, a major financial company. The current implementation relies on jQuery for the front-end, which has led to bugs and performance issues. The goal is to **convert HRnet from jQuery to React** to improve performance and stability.

In this project, we will focus on converting individual components of the HRnet application into React, starting with **DatePicker**, **Modal**, **Dropdown**, and **Table** components, which have been identified as problematic due to their reliance on slow jQuery plugins.

---

## 🔄 Project Conversion Goals

The objective of this project is to **convert the HRnet application to React**. This includes:
1. **Converting jQuery plugins to React components**
2. **Replacing old UI components with new React components**
3. **Improving performance and stability**

### Current HRnet Features:
- **Create Employee Page**
- **Employee List Page**
- **DatePicker**
- **Modal Windows**
- **Dropdown Menus**
- **Tables**

---

## 🧑‍💻 Task Breakdown

### 1. Convert HRnet to React
- Convert the existing HRnet pages into React components.
- Manage state using Redux (or useState).
- Update UI components to be fully React-based (no jQuery).

### 2. Convert jQuery Plugins to React Components
- **DatePicker**: Replaced with a custom React component using MUI (Material UI).
- **Modal**: Convert jQuery modal to a React modal component.
- **Dropdowns**: Replace with React-based dropdown components.
- **Table**: Convert jQuery DataTable plugin into a fully functional React Table.

### 3. Performance Testing
- **Use Lighthouse** to measure performance improvements before and after the conversion.
- Conduct performance audits comparing jQuery HRnet and the new React HRnet app.

---

## 🔧 Key Components

### 1. **DatePickerForm**
The `DatePickerForm` component handles the selection of **Date of Birth** and **Start Date** using MUI's DatePicker component.
### 2. **AddressForm**
The AddressForm component handles input fields for **Street, City, State,** and **Zip Code**. It validates the fields based on the requirements and stores them in the form's state.
### 3. **DepartmentSelect**
The DepartmentSelect component is a dropdown that allows users to select an employee's **Department**. It uses validation to ensure the selection is made.
### 4. **DepartmentSelect**
The **Modal** component is used to display a confirmation or success message after an employee has been successfully added.

## Conclusion
This project aims to convert an outdated jQuery-based HRnet application into a modern, React-based solution. By replacing slow jQuery plugins with custom React components, we aim to improve the application's speed, usability, and maintainability.

Feel free to contribute by forking the repo and submitting pull requests!



