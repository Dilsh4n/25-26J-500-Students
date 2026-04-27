<div align="center">
  <h1>🧠 Memora: Centralized Behavior-Aware AI Context Management</h1>
  <p><strong>A modular middleware framework providing LLMs with consistently accurate, current, credible, and privacy-protected behavioral context across sessions and platforms.</strong></p>
</div>

---

## 📌 About the Project

Current LLM-based applications face a fundamental tripartite problem: they are stateless, platform-fragmented, and privacy-blind. **Memora** is a research initiative aimed at solving these critical gaps in conversational AI personalization. 

This repository contains the academic portal and documentation website for the research project.

### 🔬 Core Architecture & Microservices

The framework comprises nine containerized microservices communicating via synchronous HTTP REST and asynchronous Redis Streams, following a CQRS pattern. The 5 core engines are:

1. **Prompt Filter Engine (PFE)**: Multi-stage privacy-preserving anonymization pipeline using SLMs for tiered PHI classification and PII redaction.
2. **Behaviour Extraction Engine (BEE)**: Real-time intelligent middleware extracting structured behavioral signals using the ACSSR algorithm.
3. **Core Behaviour ID Engine (CBIE)**: Offline batch processor stabilizing long-term user profiles via Zero-Shot classification and Adaptive DBSCAN clustering.
4. **Drift Detection Service (DDS)**: Background monitor autonomously flagging statistical behavioral changes over 30-day temporal windows.
5. **Prompt Enrichment Service (PES)**: Central orchestrator assembling the final enriched payload powered by the ATCE algorithm.

---

## 💻 Tech Stack

### Website (This Repository)
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + Vanilla CSS
- **Routing:** React Router DOM (HashRouter for GitHub Pages support)
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

### Backend Infrastructure (Documented)
- **Languages:** Python (3.10–3.11)
- **Frameworks:** FastAPI + Uvicorn
- **Databases:** PostgreSQL (pgvector), Supabase, MongoDB, Redis
- **AI/ML:** Azure OpenAI, Qwen2.5-0.5B, GLINER, facebook/bart-large-mnli

---

## 🚀 Running the Website Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/YourUsername/memora-research-website.git
   cd memora-research-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory if required (for API keys or configurations).

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`.

---

## 🌐 Deployment (GitHub Pages)

This project is configured to be seamlessly deployed to GitHub Pages.

To deploy the latest version of your code, simply run:
```bash
npm run deploy
```
*This command automatically builds the project and pushes the optimized static files to the `gh-pages` branch.*

---

<div align="center">
  <p>© 2026 Memora Research Group. All rights reserved.</p>
</div>
