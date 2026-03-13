---
title: "Generic Resume"
robots: noindex, nofollow
---
<style>
@media print {
  html, body, .wrapper, section, article, main {
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }
  button { display: none; }
  .skills-btn { display: none !important; }
}
.skills-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  line-height: normal;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0891b2 0%, #14b8a6 100%);
  color: white !important;
  text-decoration: none !important;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 1px 4px rgba(8,145,178,0.25);
  transition: filter 0.15s;
}
.skills-btn:hover { filter: brightness(1.1); }
.skills-btn svg { flex-shrink: 0; }
</style>

<script>
// Auto-trigger email after 5 minutes
setTimeout(function() {
  var emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    window.location.href = emailLink.href;
  }
}, 5 * 60 * 1000); // 5 minutes in milliseconds
</script>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5em;">
  <div>
    <strong style="font-size: 1.5em;">Todd Peters</strong><br>
    <a href="https://linkedin.com/in/toddpetersmba">linkedin.com/in/toddpetersmba</a>
  </div>
  <div style="display: flex; gap: 8px; align-items: center;">
    <a href="https://tsimech.github.io/skills" class="skills-btn" target="_blank">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="7" cy="18" r="3"/><circle cx="17" cy="6" r="3"/><circle cx="17" cy="18" r="3"/>
        <line x1="7" y1="15" x2="17" y2="9"/><line x1="17" y1="15" x2="17" y2="9"/>
      </svg>
      Skills Map
    </a>
    <button onclick="window.print()" style="padding: 8px 16px; line-height: normal; box-sizing: border-box; background-color: #0366d6; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 13px;">Print</button>
  </div>
</div>

### SITE SEARCH & PRODUCT DISCOVERY LEADER

Product leader with 14+ years as sole PM for enterprise search platforms supporting $3B+ in digital revenue across two of the largest life sciences eCommerce platforms in the world. Led two full platform migrations. Ran two independent products simultaneously at Avantor. Built the industry reference implementation for life sciences eCommerce search. Technical MBA who codes.

---

### KEY ACHIEVEMENTS

- **Owned $3B+ digital revenue channel** as sole PM for thermofisher.com and fishersci.com, with 95% decision authority across 10M+ complex scientific products
- **CTR +7.5%, Top-5 clicks +15%, search usage +13%** (2023 full year) through ML-driven relevance optimization, synonym database tuning, and query understanding improvements at ThermoFisher
- **Validated search relevance improvements** using offline evaluation framework, NDCG/MRR/Precision@K, non-inferiority testing, and 3-week pre/post statistical significance testing at Avantor
- **Architected AvantorAI/Navigator** using OpenAI agentic framework with SOLR IR + LLM relevancy trimming; launched US/Canada with multilingual support; recognized by CEO in Q2 2025 earnings call
- **Secured multi-phase funding** (18-person team) through CIO-level business case demonstrating multi-year revenue impact; approved by CIO
- **Industry reference implementation** for life sciences eCommerce search (fishersci.com) cited by independent experts as the exemplary approach for the category

---

### PROFESSIONAL EXPERIENCE

**AVANTOR / INSIGHT GLOBAL** | Castle Pines, CO (Remote)
**Sr. Product Manager, Site Search and AI** | June 2024 - January 2026

Simultaneously owned two independent products for global life sciences eCommerce on SAP Commerce Cloud: (1) the enterprise Site Search platform and (2) AvantorAI/Navigator, a net-new conversational AI product. Reported to VP of Search. Served concurrently as BA, PO, and PM across both full product lifecycles.

*AvantorAI / Navigator (Conversational AI Product)*
- Architected AvantorAI/Navigator using OpenAI agentic framework (function calling) with agent functions for search, CMS, category pages, orders, and account; rescued failing initiative by conceiving architecture enabling virtual assistant to execute any site URL and read API responses
- Launched US/Canada with multilingual support (English/French); recognized by CEO Michael Stubblefield in Q2 2025 earnings call and company Town Hall

*Site Search Platform*
- Audited untuned SAP/SOLR platform identifying critical gaps in relevance, null-results handling, and query understanding; presented findings to CIO
- Secured multi-phase funding through CIO-level business case; pre-negotiated resource commitments across functional managers before approval
- Delivered $14M annual incremental revenue through SOLR field weight tuning; applied offline evaluation framework across 2,000 high-volume queries; evaluated NDCG, Precision@K, Recall@K, MRR at multiple depths; validated 2% CTR lift to statistical significance using non-inferiority testing
- Designed ML-based autocomplete using GA4 frequency signals, log boosting, decay factor, rolling window, and ghost term filtering

---

**THERMO FISHER SCIENTIFIC** | Carlsbad, CA (Remote)
**Sr. Product Manager, Search and Selection** | 2021 - June 2024

Sole PM for $3B+ digital revenue channel (thermofisher.com, fishersci.com) with 95% decision authority. Directed 30 team members across 6 functions; managed 5 on/offshore Agile SCRUM dev teams.

- Delivered 2023 full-year performance: CTR +7.5%, Top-5 clicks +15%, search usage +13%, complaints <10/month across millions of queries
- Deployed query understanding pipeline: synonym management (Lucidworks Fusion), spell correction, ML-based autocomplete, and language-specific analyzers for multilingual support
- Designed and maintained KPI definition framework with metric definitions, calculation methodology, and glossary published as org-level artifact across search and analytics teams
- Managed $1-2M annual budgets; secured executive approval for platform upgrades using ROI analysis; partnered with A/B testing team for data-driven iteration
- Hired and mentored 3 direct reports (PMs, BAs, SOs, POs); built and led 6 cross-functional teams throughout tenure
- Delivered 20,000+ SEO landing pages through taxonomy improvements and site search enhancements driving organic traffic growth

**Product Manager, Search and Selection** | 2014 - 2021

- Orchestrated Endeca-to-Lucidworks Fusion platform migration: led vendor evaluation, designed pre-production A/B testing to preserve $3B revenue, and established post-install performance specifications (query response time, uptime, indexing throughput)
- Deployed faceted navigation with auto-faceting, dynamic attribute filtering, and smart facet ordering (customer popularity ranking, sequential engagement linkages) across 10M+ complex scientific products
- Expanded platform from thermofisher.com to fishersci.com with multilingual support via URL-based localization; managed language-specific analyzers and cross-language synonym lists for recall improvement
- Led company transition from Agile SCRUM to SAFe; created Jira process flows adopted as SDLC foundation across multiple teams

**Web Content Specialist / Business Analyst, Site Search** | 2010 - 2014

- Built FAST interface emulator for quantitative relevancy tuning, reducing tuning time from weeks to 30 minutes
- Established Search Relevancy Quality Score System; created global synonym management process and tools
- Created monthly search metrics dashboards (Adobe Analytics/Omniture) distributed to Directors, VPs, and business unit leadership

---

### EARLIER CAREER

**Safe Life Corporation** - Associate Director, Product Management & Business Development (2007-2010): Closed >$1M in contracts; $1.2M+ BD pipeline. **Motorola Life Sciences** - Research Associate I/II (1999-2003): Designed award-winning division-wide database (VBA/SQL); Motorola Bravo Award; full corporate MBA sponsorship. **Roche Diagnostics** - Outside Sales, A Accounts (2005-2006).

---

### TECHNICAL SKILLS

**Search Platforms:** SOLR, Lucidworks Fusion, Endeca, FAST, Elasticsearch; SAP Commerce Cloud
**AI and Agentic:** OpenAI agentic framework; LLM-powered relevancy; AvantorAI (production)
**Analytics:** GA4, Adobe Analytics, Power BI; offline evaluation (NDCG, MRR, Precision/Recall@K); A/B testing; statistical significance
**Product:** Agile/SAFe; WSJF; business case development; executive communication (VP/CIO); Jira, Confluence

---

### EDUCATION AND CREDENTIALS

**M.B.A.** - Arizona State University, W.P. Carey School of Business
**B.S., Biochemistry/Chemistry** - Portland State University
Certified Agile SCRUM Master | Certified SAFe | Pragmatic Marketing Level III
