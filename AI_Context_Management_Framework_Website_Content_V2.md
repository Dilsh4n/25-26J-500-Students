# Centralized Behavior-Aware AI Context Management Framework

## Project Abstract
Large Language Models (LLMs) are stateless by design, causing conversations to restart without prior context, user preferences to be lost at context-window overflow, and cross-platform personalization to be entirely absent. This project presents a centralized, behavior-aware AI context management framework built on a microservices architecture inspired by the Model Context Protocol (MCP). 

The system acts as an intelligent middleware layer that directly addresses these limitations through real-time behavior extraction, statistical drift detection, offline profile consolidation, and adaptive context assembly. By leveraging a multi-stage privacy-preserving filter, an intent-differentiated credibility decay algorithm (ACSSR), and a three-tier memory hierarchy (ATCE), the framework enables cross-platform LLM personalization that autonomously evolves with user behavior while strictly preserving data privacy.

---

## 1. Literature Survey
Current research highlights the pressing need for dynamic personalization in conversational AI. 
* **Dynamic Profiling:** Liu et al. emphasize that static profiles fundamentally fail to represent evolving user needs, making dynamic profiling critical for large-scale personalization. Zhang et al. further demonstrate the necessity of balancing short-term behavioral signals with long-term patterns.
* **Concept Drift & Memory:** Concept drift research (originating from Widmer and Kubat) documents how undetected behavioral changes degrade model accuracy. Furthermore, Wang et al. show that LLM memory systems must implement "forgetting" strategies to remain effective, as unfiltered accumulation reduces retrieval precision. 
* **Privacy & Anonymization:** Staab et al. highlight LLMs' dual role as anonymizers and inadvertent de-anonymizers, and Ngong et al. document the risks of sensitive disclosures in conversational agents, motivating the need for sensitivity-aware input sanitization.

## 2. Research Gap
Despite advances in conversational AI, a systematic analysis reveals four unaddressed gaps:
1.  **Absence of cross-platform behavioral persistence:** No existing system provides unified user profiles that persist simultaneously across multiple LLM platforms (e.g., GPT, Claude, Gemini).
2.  **Lack of autonomous behavioral drift detection:** Systems cannot distinguish whether a change in user behavior represents a genuine preference shift or transient noise.
3.  **Absence of credibility-based temporal decay:** Existing approaches record behaviors without evaluating their continued validity, allowing outdated preferences to persist indefinitely.
4.  **Insufficient privacy-preserving mechanisms:** Current anonymization approaches apply uniform redaction without sensitivity-aware tiering, causing either over-redaction or the exposure of critical health information.

## 3. Problem Statement
Current LLM-based applications face a fundamental tripartite problem: they are **stateless** (forgetting user context between sessions), **platform-fragmented** (requiring users to re-establish identity across different AI providers), and **privacy-blind** (potentially storing sensitive personal and health information without protection). The core challenge is creating a modular middleware layer that provides LLMs with consistently accurate, current, credible, and privacy-protected behavioral context across sessions and platforms.

## 4. Research Objectives
1.  Design a multi-stage **Prompt Filter Engine** using Small Language Models (SLMs) for tiered Protected Health Information (PHI) classification and Personally Identifiable Information (PII) redaction.
2.  Implement a real-time **Behaviour Extraction Engine** to extract structured signals using the Adaptive Credibility Scoring with Semantic Reinforcement (ACSSR) algorithm.
3.  Develop an offline **Core Behaviour Identification Engine** to distill high-fidelity profiles via Zero-Shot classification and Adaptive DBSCAN clustering.
4.  Implement a **Drift Detection Service** to autonomously monitor five categories of behavioral change over 30-day temporal windows.
5.  Design a **Prompt Enrichment Service** powered by the Adaptive Tiered Context Enrichment (ATCE) algorithm for budget-aware, cross-platform context assembly.

---

## 5. Methodology & System Architecture
The framework comprises nine containerized microservices communicating via synchronous HTTP REST and asynchronous Redis Streams. It follows a Command Query Responsibility Segregation (CQRS) pattern with strict database isolation to prevent analytical batch writes from contending with real-time operations. The system supports two modes: an "MCP Mode" (where external LLMs call the server as a tool) and a "Web Client Mode" (direct Product UI integration). 

### Core Microservices Breakdown

#### I. Prompt Enrichment Service (PES) & The ATCE Algorithm
Acting as the internal orchestrator, the PES is the first service to receive every prompt. 
* **Role:** It concurrently fetches behavioral intelligence, session memory, and profile data via `asyncio` parallel stages to minimize latency. 
* **ATCE Algorithm:** Manages a three-tier memory hierarchy (Active Verbatim Buffer, Chunk Summaries, and Ultra-Compact Core Memory) grounded in LLM "attention sink" research. 
* **Cross-Platform Continuity:** It detects when a user switches LLM clients (e.g., from ChatGPT to Claude) and injects the full session history into the prompt, enabling seamless context transfer.

#### II. Prompt Filter Engine (PFE)
A multi-stage anonymization service responsible for sanitizing input before it reaches the orchestrator.
* **Detection Pipeline:** Uses GLINER for broad PII detection alongside a Qwen2.5-0.5B Small Language Model (with dynamically swapped LoRA adapters) for deep semantic classification.
* **Tiered Health Protection:** Classifies medical entities into sensitivity tiers. For example, "Tier 1 (Critical)" items like HIV medications are replaced with generic labels, while "Tier 3 (Standard OTC)" items remain unchanged.
* **Cultural Awareness:** Features a unique `NameContextClassifier` built with Sri Lankan dictionaries (Sinhala, Tamil, Muslim) to generate culturally plausible, fake replacement names.

#### III. Behaviour Extraction Engine (BEE)
An intelligent middleware layer that extracts and manages a dynamic behavioral taxonomy (Intent, Target, Context, Polarity) from natural language.
* **ACSSR Algorithm:** Manages the lifecycle of a behavior through Credibility Initialization, Intent-Differentiated Exponential Decay (e.g., "Constraints" decay over 12.7 years, while "Habits" decay in 17 days), and Semantic Reinforcement.
* **Conflict Resolution:** Uses a hybrid search pipeline (pgvector dense embeddings + PostgreSQL sparse text search) to detect and autonomously resolve contradictions in user preferences.

#### IV. Core Behaviour Identification Engine (CBIE)
An offline, batch-processing analytical microservice that resolves the tension between real-time event capture and stable profile construction.
* **Pipeline:** 1. *Topic Discovery:* Isolates absolute facts via Zero-Shot NLP and clusters behaviors using Adaptive DBSCAN.
    2. *Temporal Analysis:* Uses the Gini Coefficient to measure consistency and the Mann-Kendall Trend Test to detect momentum.
    3. *Confirmation Model:* Synthesizes signals using an Analytic Hierarchy Process (AHP)-weighted formula to output a definitive "Identity Anchor Prompt" for LLM injection.

#### V. Drift Detection Service (DDS)
Monitors user data over 30-day sliding windows (Reference vs. Current) to flag statistical deviations in habits.
* **Five Detectors:** It actively monitors for Topic Emergence, Topic Abandonment, Preference Reversals, Intensity Shifts, and Context Expansions. 
* **Event Publishing:** When moderate or strong drift is detected, it asynchronously publishes structured `DriftEvents` via Redis Streams to trigger profile updates.

### Comprehensive Microservices Directory
The complete architecture features nine fully containerized microservices:
1.  **MCP Server (Port 3001):** The system's API Gateway. It serves as the sole external entry point, receiving prompts directly from popular external LLMs or the Product UI.
2.  **Prompt Filter Engine (Port 3003):** Anonymization microservice that intercepts UI prompts to aggressively sanitize PII and PHI via a tiered pipeline before data reaches the core systems.
3.  **Prompt Enrichment Service (Port 3004):** The central orchestrator. It receives safe prompts, executes concurrent calls to gather behavioral data, and assembles the final enriched payload.
4.  **Behaviour Extraction Engine (Port 8001):** A real-time engine dedicated to extracting, scoring, and storing dynamic behavioral signals (habits, constraints, etc.) from incoming prompts.
5.  **Core Behaviour Identification Engine (Port 6009):** An offline analytical engine that batch-processes historic logs to discover and stabilize long-term user behavior profiles.
6.  **Drift Detection Service (Port 8000):** A background monitoring service that compares 30-day temporal windows to statistically flag changes or reversals in user interests.
7.  **User Manager (Port 8080):** An essential utility service handling session resolution and retrieving the user's base predefined profile ID.
8.  **Predefined Profile Service (Port 8002):** Provides the static behavioral profile context based on the ID retrieved by the User Manager, updating when drift events occur.
9.  **Chat Logger Backend (Port 3005):** Manages the MongoDB chat logs and performs synchronization to detect cross-platform client switches, ensuring multi-turn context continuity.

---

## 6. Technologies Used
* **Languages & Frameworks:** Python (3.10-3.11), FastAPI + Uvicorn, Next.js + Recharts (Admin UI).
* **Databases & Storage:** PostgreSQL + pgvector (Primary datastore, vector similarity), Supabase, MongoDB (Chat logs), Redis (Session memory & Streams).
* **AI / Machine Learning:** * *LLMs:* Azure OpenAI (GPT-4.1-mini, gpt-4o-mini).
    * *SLMs & NLP:* Qwen2.5-0.5B-Instruct + LoRA, GLINER (NER), facebook/bart-large-mnli (Zero-Shot).
    * *Embeddings:* sentence-transformers (all-MiniLM-L6-v2).
    * *Clustering:* scikit-learn DBSCAN.
* **Infrastructure:** Docker & Docker Compose, Celery + APScheduler (Task queues and cron scheduling).
