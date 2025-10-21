## Version Control & Deployment Assessment

**Name:** Manobendra Mandal  
**Summary:** Version control is the practice of tracking and managing changes to code, enabling collaboration, rollback, and clear development history.  
**GitHub Username:** manovHacksaw 
**Vercel Username:** manov-weeb

**Public Vercel URL:** [https://vc-deploy-assessment.vercel.app/](https://vc-deploy-assessment.vercel.app/)

---

## Environment Management & Deployment Safety

### Deployment Environments

* **Preview Environment:**
  Every Pull Request or feature branch triggers a deployment to the Preview environment. This allows developers and reviewers to test new features or bug fixes in a live setting without affecting the production application. Preview deployments are ideal for QA, demoing features, and ensuring that code works as expected before it is merged.
* **Production Environment:**
  The Production environment is deployed from the `main` branch. This environment represents the stable, publicly accessible version of the application. Only code that has been fully reviewed, tested, and approved should reach this stage to minimize the risk of introducing bugs or downtime.

### Environment Variables

* Environment variables allow configuration to change dynamically across environments without modifying the code.
* **Example Configuration:**

  * **Preview:** `TODO_APP_MODE=development` — The app can enable debug logs, use test APIs, or show experimental features.
  * **Production:** `TODO_APP_MODE=production` — The app connects to production APIs, disables verbose logging, and enforces stable functionality.
* This separation ensures that sensitive or environment-specific information, such as API keys or endpoints, is not exposed or misused in the wrong environment.

### Deployment Safety

* **Production Branch (`main`):**
  Only the `main` branch should trigger production deployments because it contains reviewed and stable code. This branch acts as the single source of truth for live applications.
* **Protected Branches and Required Approvals:**
  Implementing protected branches and requiring approvals for merges adds an extra layer of safety. It prevents accidental direct commits to `main` and ensures that code must pass review or meet CI/CD checks before deployment. This reduces human error, improves code quality, and guarantees that production always remains stable.
* **Additional Safety Measures:**

  * Preview deployments allow early testing of features, catching potential bugs before production.
  * Environment-specific variables prevent accidentally exposing sensitive data or misconfiguring the app in production.

---

