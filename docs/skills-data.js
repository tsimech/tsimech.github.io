// ── Skills Map data ──────────────────────────────────────────────────────────
// Edit this file to update skill scores, descriptions, and taxonomy.
// value   = expertise score 1–100 (drives circle size in Expertise mode)
// Recency scores are in skillsRecencyScores at the bottom of this file.

const skillsData = {
  name: "Todd Peters",
  children: [

    // ── 1. AI & Generative Search ─────────────────────────────────────────
    {
      name: "AI & Generative Search",
      children: [
        { name: "Conversational AI", value: 85,
          desc: "Prompt engineering, function calling, agent state management, multi-turn conversation design, LLM orchestration for enterprise search use cases",
          roles: "Avantor 2024–2026" },
        { name: "RAG", value: 70,
          desc: "Retrieval-Augmented Generation pipeline design, hybrid keyword/vector retrieval, source grounding, citation injection, hallucination mitigation strategies",
          roles: "Avantor 2024–2026" },
        { name: "AEO", value: 50,
          desc: "Answer Engine Optimization: structuring content for AI Overviews, featured snippet capture, People Also Ask optimization, FAQ schema, passage indexing",
          roles: "Avantor 2024–2026" },
        { name: "GEO", value: 50,
          desc: "Generative Engine Optimization: citation strategy for ChatGPT, Perplexity, Gemini; Otterly.ai monitoring; generative engine content and authority building",
          roles: "Avantor 2024–2026" },
        { name: "ML Re-ranking", value: 100,
          desc: "ML-driven re-ranking frameworks, behavioral signal boosting, signal-to-feature pipelines, online/offline evaluation loop design",
          roles: "TF 2014–2024 · Avantor 2024–2026" },
        { name: "Vector Search & Embeddings", value: 40,
          desc: "Dense vector embeddings using HuggingFace sentence-transformers; kNN vector search in Elasticsearch; hybrid keyword/vector retrieval for semantic search use cases",
          roles: "Self-directed · Avantor 2024–2026" }
      ]
    },

    // ── 2. Search Platforms ───────────────────────────────────────────────
    {
      name: "Search Platforms",
      children: [
        { name: "Lucidworks Fusion", value: 80,
          desc: "(Actually 80) ML-based re-ranking pipelines, behavioral signals integration, Fusion Studio query workflows, connector management, signal aggregation jobs",
          roles: "TF 2014–2024 · Avantor 2024–2026" },
        { name: "SOLR", value: 70,
          desc: "(Actually 70) Apache Solr configuration, schema design, field type optimization, query parser selection, relevance debugging, facet queries",
          roles: "TF 2014–2024 · Avantor 2024–2026" },
        { name: "Endeca", value: 80,
          desc: "(Actually 80) Oracle Endeca Experience Manager, record adapter configuration, dimension attribute management; led migration to Lucidworks protecting $3B eComm revenue",
          roles: "TF 2010–2021" },
        { name: "FAST", value: 80,
          desc: "(Actually 80) Microsoft FAST ESP pipeline stages, document processing, keyword extraction; led migration away from FAST platform protecting $3B revenue channel",
          roles: "TF 2010–2021" },
        { name: "Platform Migrations", value: 95,
          desc: "(Actually 10) FAST→Endeca, Endeca→Lucidworks Fusion; designed pre-production A/B testing; established SLA and post-install performance specs (query response, uptime, indexing)",
          roles: "TF 2010–2024" },
        { name: "Elasticsearch", value: 25,
          desc: "(Actually 25) Elasticsearch query DSL, index configuration, dense vector field mappings for semantic search; built demo using HuggingFace sentence-transformers with kNN vector search",
          roles: "Self-directed" },
        { name: "Doesn't Matter", value: 100,
          desc: "FAST → Endeca → Lucidworks Fusion → SOLR → Elasticsearch → whatever is next. Every generation of enterprise search has a different API and the same core problems: relevance, recall, latency, and customer-specific data in results. I have navigated every platform transition since 2010, and I am actively working with vector search and agentic retrieval now. The platform is a tool. The problems are permanent.",
          roles: "TF 2010–2024 · Avantor 2024–2026 · Self-directed" }
      ]
    },

    // ── 3. Search UX & Quality ────────────────────────────────────────────
    {
      name: "Search UX & Quality",
      children: [
        { name: "SRP Design", value: 100,
          desc: "Search results page layout architecture, result card metadata hierarchy, sorting controls, result count display, pagination patterns, zero-state design",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Faceted Navigation", value: 100,
          desc: "Auto-faceting, dynamic attribute filtering, smart facet ordering via customer popularity ranking and sequential engagement linkages; governed across 10M+ product catalog",
          roles: "TF 2014–2024" },
        { name: "Autocomplete", value: 100,
          desc: "Ghost text implementation, keyword + category suggestions, ML frequency boosting, log-based decay factor tuning, negative keyword filtering, visual hierarchy design",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Multilingual Search", value: 95,
          desc: "Language-specific analyzers, cross-language synonym lists for recall improvement, URL-based localization; 15 global domains across Europe, Asia-Pacific, Americas",
          roles: "TF 2014–2024" },
        { name: "Query Understanding", value: 70,
          desc: "Synonym management (Lucidworks Fusion generator), spell correction pipelines, ML-based autocomplete (frequency boosting, log-based decay, ghost term filtering)",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Relevance Tuning", value: 90,
          desc: "Business rule definition, field weight rationale documentation, boosting strategy governance, relevance committee facilitation, stakeholder alignment frameworks",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Behavioral Signals", value: 100,
          desc: "Behavioral signal pipeline design, clickstream instrumentation, implicit feedback collection, signal quality filtering, ML training data curation for ranking models",
          roles: "TF 2014–2024 · Avantor 2024–2026" },
        { name: "No Results Recovery", value: 95,
          desc: "Zero-results strategy and UX, fallback messaging, query broadening suggestions, related category recommendations, partial match recovery, null prevention logic",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Spell Check / DYM", value: 85,
          desc: "Spell correction configuration, Did You Mean confidence thresholds, transparent correction UX patterns, query amendment design, auto-correct vs. suggested correction decisions",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Browse Navigation", value: 100,
          desc: "Category hierarchy design, breadcrumb patterns, left-rail navigation, attribute-driven browsing flows, mega-menu architecture for large scientific catalogs",
          roles: "TF 2010–2024" },
        { name: "Category Page Design", value: 100,
          desc: "Category landing page templates, hero content, product grid layout, attribute filter integration, SEO metadata, CMS-driven content zones",
          roles: "TF 2010–2024" },
        { name: "Click Analysis", value: 100,
          desc: "CTR measurement by position, click distribution modeling, position bias correction, behavioral pattern analysis, human-only signal filtering",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Search UX Testing", value: 85,
          desc: "Usability studies, task-based search scenario design, think-aloud protocols, SRP variant testing, A/B test hypothesis design for search interactions",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "UI Design", value: 85,
          desc: "End-to-end interface design for search and eCommerce experiences: wireframing, component specification, visual hierarchy, responsive layout, accessibility; built production UIs across thermofisher.com, fishersci.com, and the VWR AI Assistant",
          roles: "TF 2010–2024 · Avantor 2024–2026 · Current" },
        { name: "Personalization", value: 25,
          desc: "Customer history signals, purchase affinity-based re-ranking, personalized search results frameworks — exposure and design work; not deep production implementation",
          roles: "TF 2021–2024" }
      ]
    },

    // ── 4. Analytics & Measurement ────────────────────────────────────────
    {
      name: "Analytics & Measurement",
      children: [
        { name: "KPI Framework Design", value: 100,
          desc: "Formal metric definitions, calculation methodology, glossary, and reference table; published as org-level artifact used across search and analytics teams",
          roles: "TF 2021–2024" },
        { name: "Adobe Analytics", value: 95,
          desc: "Omniture/SiteCatalyst implementation, eVar/prop configuration, report suite management, dashboard distribution across global search and merchandising teams",
          roles: "TF 2010–2024" },
        { name: "GA4", value: 85,
          desc: "Implementation from scratch; custom event taxonomy; human-only signal collection (search box vs. SRP loads); $/click revenue attribution; funnel analysis",
          roles: "Avantor 2024–2026" },
        { name: "Looker", value: 85,
          desc: "LookML dimensional modeling, explore-level field definitions, join logic, dashboard distribution for exec and operational audiences",
          roles: "Avantor 2024–2026" },
        { name: "Power BI", value: 60,
          desc: "ETL via Power Query, DAX measures (calculate, conditionals, time intelligence), calendar tables, GA4 connector, exec-facing dashboards",
          roles: "Avantor 2024–2026" },
        { name: "A/B Testing", value: 60,
          desc: "Pre/post statistical significance testing, click distribution analysis, pre-production A/B testing frameworks, confidence intervals, sample size planning",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Offline Eval (NDCG)", value: 55,
          desc: "NDCG, Precision@K, Recall@K, MRR at multiple depths (top-5, top-10); non-inferiority testing; tradeoff decision modeling across 2,000 high-volume queries",
          roles: "Avantor 2024–2026" },
        { name: "SEMrush", value: 50,
          desc: "Keyword gap analysis, competitor research, backlink auditing, content opportunity identification, technical SEO issue monitoring",
          roles: "Avantor 2024–2026" },
        { name: "Google Search Console", value: 25,
          desc: "Coverage reports, crawl error analysis, Core Web Vitals monitoring, indexing status, URL inspection tool, search performance query analysis",
          roles: "Avantor 2024–2026" }
      ]
    },

    // ── 5. Product & Leadership ───────────────────────────────────────────
    {
      name: "Product & Leadership",
      children: [
        { name: "$3B Revenue Channel", value: 100,
          desc: "Sole PM for thermofisher.com + fishersci.com; 10M+ complex scientific products across 15 global domains; 95% decision authority for 11+ years",
          roles: "TF 2010–2024" },
        { name: "$14M Revenue Delivery", value: 100,
          desc: "SOLR field weight tuning in 90-day cycle; CIO audit identifying platform gaps; 2% CTR lift validated to statistical significance; presented to VP and Operations",
          roles: "Avantor 2024–2026" },
        { name: "0-to-1 AI Product", value: 100,
          desc: "AvantorAI/Navigator: rescued failing initiative with paradigm-shifting architecture; launched multilingual US/Canada; recognized by CEO Michael Stubblefield in Q2 2025 earnings call",
          roles: "Avantor 2024–2026" },
        { name: "Agile / Scrum", value: 95,
          desc: "Sprint planning, backlog refinement, velocity tracking, retrospectives; led 5+ SCRUM teams simultaneously across on/offshore resources",
          roles: "TF 2010–2024" },
        { name: "SAFe", value: 90,
          desc: "PI planning, ART coordination; led TF transition from Agile SCRUM to SAFe; created Jira process flows and sprint structures adopted as SDLC standard across multiple teams",
          roles: "TF 2010–2024" },
        { name: "WSJF / Prioritization", value: 100,
          desc: "Weighted Shortest Job First, Business Value frameworks, OKRs; secured CIO approval for $170M 3-year revenue roadmap using project gates",
          roles: "TF 2021–2024 · Avantor 2024–2026" },
        { name: "Cross-functional Teams", value: 93,
          desc: "30 members across 6 functions; 5 on/offshore Agile SCRUM dev teams; 3 direct reports; mentored PMs, BAs, SOs, POs; built 6 cross-functional teams over tenure",
          roles: "TF 2021–2024" },
        { name: "Executive Communication", value: 90,
          desc: "CIO-level funding presentations; VP roadmap reviews; translated complex technical capabilities into executive language; secured phased funding with pre-negotiated resources",
          roles: "TF 2021–2024 · Avantor 2024–2026" },
        { name: "Vendor Management", value: 85,
          desc: "Managed search platform vendors (Lucidworks), chemical structure search, and A/B testing partners; solo MSA negotiation through 3-month procurement approval chain",
          roles: "TF 2014–2024 · Avantor 2024–2026" }
      ]
    },

    // ── 6. Technical Skills ───────────────────────────────────────────────
    {
      name: "Technical Skills",
      children: [
        { name: "VBA", value: 100,
          desc: "Expert-level Excel automation (30+ custom applications), Outlook MAPI integration (email triggers + parsing), Access GUI + reports — 31 years of self-teaching",
          roles: "All roles" },
        { name: "Excel", value: 100,
          desc: "25+ years of intensive use across every role; custom programming far beyond typical business use — 30+ purpose-built applications, advanced formula engineering, dynamic array functions, pivot automation, and a fully functional viewer for the entire human genome built entirely in Excel",
          roles: "All roles" },
        { name: "GitHub Copilot", value: 90,
          desc: "Power user of agentic coding workflows, inline completion, multi-file context edits, prompt engineering for code generation; built this career site entirely with Copilot",
          roles: "Current" },
        { name: "GitHub / Git / VS Code", value: 95,
          desc: "Version control workflows, branching strategies, GitHub Pages deployment, VS Code extensions; full development environment for this career site",
          roles: "Current" },
        { name: "HTML", value: 75,
          desc: "Hobbyist class. Semantic markup, custom layouts, GitHub Pages templating, inline styles, accessibility basics; used extensively building this career site",
          roles: "Multiple roles · Current" },
        { name: "CSS", value: 75,
          desc: "Hobbyist class. Flexbox, grid, responsive design, custom animations, print stylesheets, sticky positioning; used extensively building this career site",
          roles: "Multiple roles · Current" },
        { name: "JavaScript", value: 25,
          desc: "Hobbyist class. Custom D3.js visualizations (this page), event handling, DOM manipulation, setTimeout/async patterns, dashboard integration",
          roles: "Multiple roles · Current" },
        { name: "Django", value: 20,
          desc: "Hobbyist class. MVC framework fundamentals, URL routing, templates, models; self-directed coursework",
          roles: "Self-directed" },
        { name: "Ruby", value: 85,
          desc: "Hobbyist class. Core language features, object-oriented patterns, scripting; strong foundational proficiency from self-directed study",
          roles: "Self-directed" },
        { name: "C", value: 35,
          desc: "Hobbyist class. Pointers, memory management, structs, compilation; foundational systems programming coursework",
          roles: "Self-directed" },
        { name: "Python", value: 25,
          desc: "Web scraping (BeautifulSoup/requests), data processing (pandas), automation scripts, job search tooling — self-taught, growing actively",
          roles: "Current" },
        { name: "Postman / APIs", value: 70,
          desc: "REST API testing and exploration, request chaining, environment variables, authentication flows (API key, Bearer); used extensively for search platform integrations and AI assistant development",
          roles: "TF 2014–2024 · Avantor 2024–2026" },
        { name: "SQL", value: 55,
          desc: "Oracle production schema queries (Motorola), ODBC to TF enterprise data warehouse, MySQL, complex JOINs, subqueries, stored procedures",
          roles: "Motorola 1999–2003 · TF 2010–2024" },
        { name: "Database Design", value: 65,
          desc: "Oracle production tablespace/schema at Motorola; ODBC integration to TF enterprise data warehouse; MS Access normalized relational custom apps",
          roles: "Motorola 1999–2003 · TF 2010–2024" }
      ]
    },

    // ── 7. Domain Expertise ───────────────────────────────────────────────
    {
      name: "Domain Expertise",
      children: [
        { name: "Life Sciences eComm", value: 100,
          desc: "14+ yrs across TF + Avantor; 10M+ complex scientific products; B2B purchasing workflows at enterprise scale; global multi-domain platforms for researchers and procurement teams",
          roles: "TF 2010–2024 · Avantor 2024–2026" },
        { name: "Scientific Taxonomy", value: 70,
          desc: "Chemical structure search; CAS ID landing pages; attribute structures for 10M+ products; application and marketing pages; CMS workflows and content governance",
          roles: "TF 2010–2024" },
        { name: "SEO / Organic Discovery", value: 70,
          desc: "20,000+ SEO landing pages generated via taxonomy improvements and chemical structure search modernization; structured data; organic traffic growth strategies",
          roles: "TF 2014–2024" },
        { name: "B2B Sales & BD", value: 60,
          desc: ">$1M contracts closed (exclusive/non-exclusive licensing, OEM supply); $1.2M+ BD pipeline; CEO-level outreach to Fortune 500 targets; OEM negotiations",
          roles: "Safe Life 2007–2010" },
        { name: "Biochemistry / Chemistry", value: 45,
          desc: "B.S. Portland State University; 3 peer-reviewed publications (Clinical Chemistry, ASHG); Motorola microarray research; P450 genotyping product development",
          roles: "Education + Motorola 1999–2003" }
      ]
    }

  ]
};

// ── Domain colors ─────────────────────────────────────────────────────────────
const skillsDomainColors = {
  "AI & Generative Search":  "#0891b2",
  "Search Platforms":        "#6d28d9",
  "Search UX & Quality":     "#0d9488",
  "Analytics & Measurement": "#059669",
  "Product & Leadership":    "#b45309",
  "Technical Skills":        "#16a34a",
  "Domain Expertise":        "#9333ea"
};

// ── Recency scores ────────────────────────────────────────────────────────────
// 100=active daily · 95=Avantor-only · 90=TF+Avantor · 80=all roles
// 65=TF-ended-2024 · 35=TF-ended-2021 · 10/5=pre-2010
const skillsRecencyScores = {
  // AI & Generative Search
  "Conversational AI": 95, "RAG": 95, "AEO": 95, "GEO": 95,
  "ML Re-ranking": 90, "Vector Search & Embeddings": 80,
  // Search Platforms
  "Lucidworks Fusion": 90, "SOLR": 90, "Endeca": 35,
  "FAST": 35, "Platform Migrations": 65, "Elasticsearch": 80,
  // Search UX & Quality
  "SRP Design": 90, "Faceted Navigation": 65, "Autocomplete": 90,
  "Multilingual Search": 65, "Query Understanding": 90, "Relevance Tuning": 90,
  "Behavioral Signals": 90, "No Results Recovery": 90, "Spell Check / DYM": 90,
  "Browse Navigation": 65, "Category Page Design": 65, "Click Analysis": 90,
  "Search UX Testing": 90, "UI Design": 90, "Personalization": 65,
  // Analytics & Measurement
  "KPI Framework Design": 65, "Adobe Analytics": 65, "GA4": 95,
  "Looker": 95, "Power BI": 95, "A/B Testing": 90, "Offline Eval (NDCG)": 95,
  "SEMrush": 95, "Google Search Console": 95,
  // Product & Leadership
  "$3B Revenue Channel": 65, "$14M Revenue Delivery": 95, "0-to-1 AI Product": 95,
  "Agile / Scrum": 65, "SAFe": 65, "WSJF / Prioritization": 90,
  "Cross-functional Teams": 65, "Executive Communication": 90, "Vendor Management": 90,
  // Technical Skills
  "VBA": 80, "Excel": 80, "GitHub Copilot": 100, "GitHub / Git / VS Code": 100,
  "HTML": 80, "CSS": 80, "JavaScript": 80, "Django": 80, "Ruby": 80, "C": 10,
  "Python": 100, "Postman / APIs": 90, "SQL": 65, "Database Design": 65,
  // Domain Expertise
  "Life Sciences eComm": 90, "Scientific Taxonomy": 65, "SEO / Organic Discovery": 65,
  "B2B Sales & BD": 10, "Biochemistry / Chemistry": 5
};
