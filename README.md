# Stock Span Analyzer

![Java](https://img.shields.io/badge/Java-21-blue)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.5.6-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Recharts](https://img.shields.io/badge/Recharts-2.8.0-orange)

A full-stack web application to calculate and visualize the **Stock Span Problem**, showcasing **DSA skills**, **Java Spring Boot backend**, and **React frontend**.

---

## 📌 Project Overview

The **Stock Span Analyzer** allows users to input a series of stock prices and calculates the **span** of each price — the number of consecutive days before today where the stock price was less than or equal to today’s price.  

This project demonstrates:

- Efficient **stack-based DSA solution** for the Stock Span problem.  
- Full-stack development with **Spring Boot REST APIs** and **React.js frontend**.  
- Data visualization using **Recharts**.  
- Input validation, error handling, and responsive UI design.  

---

## ⚙️ Features

- Input stock prices as **comma-separated values**.  
- Display a **table** of Days, Prices, and Spans.  
- Interactive **line chart** showing **span trend** over days.  
- Clean, responsive UI for both table and chart.  

---

## 🛠 Tech Stack

- **Backend:** Java, Spring Boot, Embedded Tomcat, Maven  
- **Frontend:** React.js, Recharts, Vite  
- **DSA Concepts:** Stack for Stock Span calculation  
- **Communication:** REST API (JSON)  

---

## 📊 How It Works

1. User enters stock prices (e.g., `100, 80, 60, 70, 60, 75, 85`).  
2. React sends the prices to Spring Boot API:  
POST /api/stocks/analyze

3. Backend calculates the span for each price using a **stack**.  
4. API responds with the span array.  
5. Frontend displays:
- **Table**: Days, Prices, and Spans  
- **Line Chart**: Span trend over days  

---

## 📝 Example

**Input Prices:**  
100, 80, 60, 70, 60, 75, 85



**Output Spans:**  
[1, 1, 1, 2, 1, 4, 6]



**Table Example:**

<img width="951" height="497" alt="image" src="https://github.com/user-attachments/assets/f31bb749-11c4-4dfc-a8d0-4be200bd1ca5" />

**Span Line Chart:**  

<img width="1214" height="485" alt="image" src="https://github.com/user-attachments/assets/aa8c0cf2-615e-4d72-9084-f86e25eaee67" />
