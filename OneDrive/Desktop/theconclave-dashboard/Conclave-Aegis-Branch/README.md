<p align="center">

# 🛡️ CONCLAVE AEGIS
### Autonomous Infrastructure for the Conclave Ecosystem

Discord Automation • ARK Cluster Intelligence • Community Operations Platform

</p>

---

<p align="center">

![Node](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)
![Discord](https://img.shields.io/badge/Discord.js-v14-indigo)
![Express](https://img.shields.io/badge/Express-Backend-black)
![Nitrado](https://img.shields.io/badge/Nitrado-API-orange)
![Beacon](https://img.shields.io/badge/Beacon-Sentinel-purple)

</p>

---

## 🧠 What is Conclave Aegis?

**Conclave Aegis** is the central infrastructure powering the **Conclave ecosystem**.

It combines a Discord bot, API backend, and dashboard architecture into a unified platform capable of managing:

• Discord automation  
• ARK cluster infrastructure  
• community economies  
• administrative dashboards  
• event orchestration  
• automation systems  

The goal is to evolve beyond a simple bot into a **community operating system**.

---

# ⚔️ Core Systems

| System | Purpose |
|------|------|
| 🤖 Discord Bot | Command system, automation, moderation |
| ⚙️ API Backend | Infrastructure integrations and logic |
| 🛰️ Server Intelligence | Nitrado + Beacon ARK cluster management |
| 📊 Dashboards | Administrative control interfaces |
| 💰 Economy Systems | ConCoin + ClaveShard framework |

---

# 🏗️ System Architecture

```
                ┌──────────────────┐
                │   Discord Users  │
                └────────┬─────────┘
                         │
                         ▼
                 ┌───────────────┐
                 │  Conclave Bot │
                 └───────┬───────┘
                         │
                         ▼
                ┌──────────────────┐
                │ Express Backend  │
                │  API Layer       │
                └───────┬──────────┘
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   Discord API      Nitrado API      Beacon API
        │               │                │
        ▼               ▼                ▼
  Community Systems   ARK Servers    Cluster Data
```

---

# 📂 Repository Structure

```
The-Conclave
│
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── bot.ts
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   └── services
│
├── frontend
│   └── src
│       ├── components
│       ├── views
│       ├── store
│       └── types
│
└── README.md
```

---

# 🚀 Technology Stack

| Layer | Technology |
|------|------|
| Bot Framework | Discord.js |
| Backend API | Express + Node.js |
| Language | TypeScript |
| Dashboard | Vue + Vite |
| Hosting | Render |
| Game Server | Nitrado |
| Cluster Config | Beacon |

---

# 📜 Conclave Aegis – Development Branch (Sloth Copy)

## Overview

This repository is a development branch copy of the Conclave infrastructure used to power the Discord bot **Conclave Aegis** and its associated backend services.

This branch exists so development can continue **without affecting the production system**.

Sensitive credentials are not included in the repository. Developers should configure their environment using:

```
.env.example
```

---

# 🔐 Environment Configuration

Environment variables are stored in:

```
.env
```

Never commit this file.

Create it using:

```
copy .env.example .env
```

---

# ▶️ Running the Backend

```
cd backend
npm install
npm run dev
```

---

# 🎨 Running the Frontend

```
cd frontend
npm install
npm run dev
```

---

# ⚠️ Security Notice

Never commit:

```
.env
node_modules
dist
```

---

# 🏛️ Final Notes

This repository forms the foundation of the **Conclave ecosystem infrastructure**.

Developers are encouraged to experiment, expand functionality, and evolve the platform.
