# 🛍️ Skinns - Cloud-Based Clothing E-Commerce Platform

**Skinns** is a **cloud-native full-stack web application** developed as a prototype for an online clothing store.  
The project highlights how **frontend technologies** (HTML, CSS, JavaScript) integrate with a **Flask backend**, and leverages **AWS Cloud Services** (DynamoDB, Lambda, S3) for deployment and storage.  
The application is deployed using **Zappa** on **AWS Lambda**, making it **serverless, scalable, and cost-efficient** — reflecting modern architectures used in real-world e-commerce systems.  

---

## 🎯 Project Objectives
- To simulate a realistic **e-commerce workflow**: browsing products, adding to cart, and checkout.  
- To showcase integration between **frontend UI** and **backend APIs** in a cloud ecosystem.  
- To leverage **AWS cloud services** for scalability, persistence, and serverless deployment.  
- To build a foundation for **enterprise-ready, cloud-hosted retail platforms**.  

---

## 🏗️ System Architecture
This project adopts a **multi-layered, cloud-driven architecture**:

- **Frontend Layer** (HTML, CSS, JavaScript)  
  - `index.html` → Displays products dynamically.  
  - `cart.html` → Manages the user’s shopping cart.  
  - `payment.html` → Simulates the payment workflow.  
  - `main.js` → Client-side logic and API calls to the backend.  
  - `styles.css` → Styling for a responsive user experience.  

- **Backend Layer** (Flask + AWS Lambda)  
  - RESTful APIs for fetching products, adding to cart, retrieving cart items, and checkout.  
  - Wrapped with **serverless-wsgi** to run natively on AWS Lambda.  
  - Dynamically scalable thanks to AWS serverless compute.  

- **Database Layer** (AWS DynamoDB)  
  - `Items` table → Stores product metadata (title, price, category, etc.).  
  - `Carts` table → Manages user-specific shopping cart details.  
  - **NoSQL schema flexibility** supports dynamic growth and varied data models.  

- **Deployment Layer** (AWS Zappa + S3)  
  - **Zappa** packages and deploys the Flask app to AWS Lambda.  
  - **S3** bucket handles deployment artifacts and asset hosting.  
  - **Serverless design** ensures cost-effectiveness and automatic scaling.  

---

## ⚙️ Key Features
- **Cloud-Hosted Product Catalog** – Items retrieved directly from DynamoDB.  
- **Persistent Cart Management** – Cart data stored in DynamoDB per user.  
- **Checkout Simulation** – Simulates order processing flow.  
- **AWS-Backed Backend** – Powered by Lambda + DynamoDB for reliability.  
- **Fully Serverless Deployment** – Leveraging Zappa on AWS Lambda.  

