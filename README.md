# 🚗 RideNet – Real-Time Ride Sharing Platform

RideNet is a **real-time ride-sharing web application** that dynamically matches riders and drivers. Designed to perform reliably even under high-demand conditions, RideNet leverages scalable microservices, real-time communication, and a rich frontend user experience.

---

## 🌐 Live Preview
<img width="1000" alt="Screenshot 2025-05-10 at 3 16 51 PM" src="https://github.com/user-attachments/assets/b12a4339-18be-44ec-ad62-5dac68736b59" />
<img width="1000" alt="Screenshot 2025-05-10 at 3 16 59 PM" src="https://github.com/user-attachments/assets/eb14cdf4-d3e1-4863-90e8-0063eb235d5f" />
<img width="1000" alt="Screenshot 2025-05-10 at 3 17 08 PM" src="https://github.com/user-attachments/assets/5b363f57-b8a5-4777-985c-a9f97c411182" />
<img width="1000" alt="Screenshot 2025-05-10 at 3 42 48 PM" src="https://github.com/user-attachments/assets/bb7f315f-be2e-4ebb-8edf-e5120c70bd40" />
<img width="353" alt="Screenshot 2025-05-10 at 3 50 05 PM" src="https://github.com/user-attachments/assets/9e211a21-b3f4-40ac-9cb5-720302bdb5de" />

https://github.com/user-attachments/assets/30654c14-ae21-42e1-9579-02163c8365ef



## 🧩 Tech Stack
### 🖥️ Frontend:
- **React.js** – Component-based architecture
- **Tailwind CSS** – Utility-first responsive styling
- **JavaScript (ES6+)**
- **Google Maps API** – Location search and real-time ride tracking

### ⚙️ Backend:
- **Node.js + Express.js** – RESTful APIs
- **MongoDB** – NoSQL database for user profiles, rides, and trip history
- **Socket.IO** – Real-time communication between riders and drivers
- **RabbitMQ** – Message queuing for peak load handling
- **JWT** – Secure user authentication

---

## 📦 Features

### 🔐 Authentication
- Secure sign-up and login using JWT tokens
- Role-based logic for Riders and Drivers

### 🚘 Ride Booking
- Location input via Google Maps API
- Ride search, matching, and confirmation
- Real-time ride status and updates via Socket.IO

### 🛰️ Live Tracking
- Drivers share real-time location using browser geolocation API
- Riders can view driver location and trip progress using **Google Maps**


### 🚀 High-Demand Handling
- **RabbitMQ** queues ride requests during peak hours
- Scalable and decoupled consumers handle asynchronous ride matching
  
## 🔧 Setup Instructions

### 1. Clone the Repo
git clone https://github.com/umanginigam/RideNet.git
cd RideNet

