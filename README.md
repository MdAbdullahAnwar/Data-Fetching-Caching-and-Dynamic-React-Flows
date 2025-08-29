# Data Fetching, Caching, and Dynamic React Flows

## Overview

This repository is a collection of **4 React tasks** designed to help you gain **hands-on experience** with:

- API data fetching  
- Caching strategies  
- Searching & filtering cached data  
- Creating dynamic flow diagrams with **React Flow**

Each task is implemented in its own folder, so you can run and test them independently.

---

## Repository Structure

```
Data Fetching, Caching, and Dynamic React Flows/
│
├── Task 1 - API Data Fetching and Display
├── Task 2 - Implement Caching for API Requests
├── Task 3 - Search & Filter with Cached Data
└── Task 4 - Dynamic React Flow Node Creation
```

---

## Tasks Breakdown

### Task 1 - API Data Fetching and Display

- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)  
- Displays results in a list/table  
- Shows **loading spinner** while fetching  
- Handles and displays **error messages** on failure  
- *Bonus:* Added pagination support  

**Run Commands**
```bash
cd "Task 1 - API Data Fetching and Display"
npm install
npm start

**Libraries Used**

React (Hooks: useEffect, useState)

### **Task 2 - Implement Caching for API Requests**
- Implements caching using @tanstack/react-query
- Uses cache to prevent unnecessary network requests.
- Includes a "Refresh Data" button to invalidate cache & refetch.
*Bonus:* Stores data in localStorage for persistence.

**Run Commands**
```bash
cd "Task 2 - Implement Caching for API Requests"
npm install
npm install @tanstack/react-query
npm start


**Libraries Used**

React
@tanstack/react-query

### **Task 3 - Search & Filter with Cached Data**
- Extends Task 2 by adding a search bar.
- Filters cached API data instantly without refetching.
- Uses debouncing to optimize search performance.

**Run Commands**
```bash
cd "Task 3 - Search & Filter with Cached Data"
npm install
npm start


**Libraries Used**

React
@tanstack/react-query (inherited caching from Task 2)

### **Task 4 - Dynamic React Flow Node Creation**
- Uses React Flow to create an interactive flow diagram.
- Starts with an empty canvas.
- Allows adding nodes dynamically with unique IDs.
- Nodes are draggable and connectable via edges.
*Bonus:* Node labels populated using API data from Task 1.

**Run Commands**
```bash
cd "Task 4 - Dynamic React Flow Node Creation"
npm install
npm install reactflow
npm start


**Libraries Used**

React
reactflow

# Project Learning Outcomes & Setup Guide

## Learning Outcomes

By completing this project, you will learn:

- Fetching and caching API data in React  
- Debouncing and filtering data efficiently  
- Using React Flow for dynamic UIs  
- Managing complex component state  
- Integrating API data with interactive components  

---

## Running Any Task

### 1. Navigate to the task folder

```bash
cd "Task X - Folder Name"
npm install
npm install @tanstack/react-query
npm install reactflow
npm start
