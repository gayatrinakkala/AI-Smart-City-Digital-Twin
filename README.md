# AI Smart City Digital Twin – Intelligent Road Closure Simulation & Traffic Impact Analysis

> Production-style Smart City Digital Twin monorepo featuring Dijkstra-based dynamic traffic redistribution, What-If multi-duration scenario prediction, multilingual voice/text AI City Agent (English, Telugu, Hindi), and emergency vehicle priority analysis.

---

## 🌆 Digital Twin Overview

The system models **Nova City**, featuring:
- **20+ Roads**: Highways, Main Roads, Secondary Roads, Bridges, Roundabouts, Residential Lanes.
- **12 Node Intersections**: Integrated 4-way traffic signal timing controls.
- **54 Active Vehicles**: Cars, Buses, Trucks, Motorcycles, Ambulances, Fire Trucks, Police cruisers.
- **15 Key Infrastructure Buildings**: Nova City General Hospital, Central High School, Apex University, Fire Station #1, Police HQ, Financial Trade Center, City Hall, etc.

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, HTML5 Canvas 2D (Digital Twin Renderer), Web Speech API (Voice Synthesis & Recognition), Lucide Icons, Custom Command Center CSS.
- **Backend**: Node.js, Express REST API, Graph Engine (Dijkstra Shortest Path & BPR Congestion Weighting), Multilingual AI Engine.
- **Database**: MongoDB (Mongoose Schema) with graceful in-memory fallback for instant zero-config evaluation.

---

## ⚡ Quick Start Guide

### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment Variables

Create `.env` inside `backend/` or root based on `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/smart_city_db
```

*Note: If MongoDB is not running locally, the system automatically falls back to the built-in resilient in-memory digital twin seed without crashing.*

### 3. Start Backend Server

```bash
cd backend
npm start
```
*Backend runs on `http://localhost:5000`*

### 4. Start Frontend Dashboard

```bash
cd frontend
npm run dev
```
*Frontend runs on `http://localhost:5173`*

---

## ⏱ 2-Minute Hackathon Judge Demo Flow

1. **Open Dashboard**: Navigate to `http://localhost:5173` to view the Nova City Command Center.
2. **Explore Digital Twin Map**: Observe live animated vehicles (Cars, Ambulances, Police) traveling across green/yellow traffic density lanes. Click on any road (e.g. `Central Avenue`) or building (e.g. `Nova City General Hospital`).
3. **Simulate Road Closure**:
   - In the left panel, select **Central Avenue**.
   - Set Duration to **2 hours**, Reason to **Road construction**, Weather to **Clear**.
   - Click **`RUN SIMULATION`**.
4. **Observe Dynamic Rerouting**:
   - Central Avenue turns into a hatched black/yellow closed road on the canvas map.
   - Traffic volume redistributes onto alternative parallel routes (`Tech Corridor`, `North Ring Road`).
   - Bottlenecks appear with severe red density heatmaps.
5. **Inspect AI Impact Report & What-If Engine**:
   - Review Before vs After vehicle speed, travel time increase, bottleneck list, and emergency accessibility delays.
   - Compare What-If Scenarios A (0h), B (1h), C (2h), D (4h).
6. **Interact with Multilingual AI & Voice**:
   - Switch language selector in header to **తెలుగు (TE)** or **हिन्दी (HI)**.
   - Ask AI Agent: *"What happens if Central Avenue is closed?"* or click the Microphone icon to speak.
   - Hear audio playback in the selected language.
