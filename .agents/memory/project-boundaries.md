---
name: Project boundaries
description: Separation between Safia Portfolio and Majlis AI — never confuse deployment instructions between the two.
---

# Project Boundaries

**This workspace = Safia Portfolio only**
- Live URL: safia-portfolio.f-raghoui.workers.dev (Cloudflare Workers)
- Custom domain target: safiaraghoui.com
- GitHub repo: safiaraghoui21/safia-portfolio

**Majlis AI is a completely separate project**
- Live URL: majlis-ai.replit.app
- Deployed and maintained independently in its own Replit project
- Never merge, redirect, update, or reference Majlis AI deployments from this workspace

**Why:** User explicitly requested strict separation. Any instruction to "deploy" or "update this project" while working in this repo means the Safia Portfolio site only.
