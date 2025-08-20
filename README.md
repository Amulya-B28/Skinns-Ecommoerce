# 🛍️ Skinns - Clothing E-Commerce Platform

Skinns is a **full-stack web application** developed as a prototype for an online clothing store.  
The project demonstrates how **frontend technologies** (HTML, CSS, JavaScript) can be seamlessly integrated with a **backend service** (Flask) and a **cloud-hosted NoSQL database** (AWS DynamoDB).  
It also leverages **serverless deployment** using AWS Lambda via Zappa, reflecting a modern, scalable architecture often adopted in industry.

---

## 🎯 Project Objectives
- To simulate a real-world **e-commerce workflow** including browsing products, adding to cart, and checkout.  
- To demonstrate integration of **frontend UI** with **backend APIs** and **cloud databases**.  
- To explore **serverless deployment** for cost-effective, scalable web applications.  

---

## 🏗️ System Architecture
The application is structured as follows:

- **Frontend Layer**  
  Designed using **HTML, CSS, and JavaScript**, providing a responsive interface.  
  - `index.html` displays product listings dynamically.  
  - `cart.html` manages the user’s shopping cart.  
  - `payment.html` simulates the payment workflow.  
  - `main.js` handles client-side logic and API calls.  
  - `styles.css` provides consistent styling across pages.  

- **Backend Layer**  
  Implemented using **Flask**, offering RESTful endpoints that interact with the database.  
  - Provides APIs for fetching products, adding to cart, retrieving cart items, and handling checkout.  
  - Includes DynamoDB integration through the **boto3** SDK.  

- **Database Layer**  
  Utilizes **AWS DynamoDB** to manage two primary datasets:  
  - `Items` → product information (title, price, category, etc.)  
  - `Carts` → user-specific cart details.  

- **Deployment Layer**  
  Uses **Zappa** to package and deploy the Flask app onto **AWS Lambda** in a serverless manner.  
  This ensures scalability, high availability, and reduced operational costs.  

---

## ⚙️ Key Features
- **Product Catalog** – Browse a collection of items with details such as price, category, and gender.  
- **Cart Management** – Add items to the cart and view or update cart contents.  
- **Checkout Simulation** – Proceed to a payment page with simulated confirmation.  
- **Cloud-Native Backend** – Persistent data storage using DynamoDB.  
- **Serverless Hosting** – Deployment on AWS Lambda with Zappa.  

---

## 📂 Project Structure
