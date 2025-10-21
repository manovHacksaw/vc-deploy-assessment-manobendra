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

Perfect! Let’s tackle these **conceptual questions** with detailed, assessment-ready answers you can put directly into your README.md. I’ll make them clear, professional, and slightly expanded so they reflect understanding beyond just one-line answers.

---

## III. Conceptual Questions

### 1. What is a branch, and why is the use of feature branches recommended?

A **branch** in Git is a parallel version of the codebase that allows developers to work on features, bug fixes, or experiments without affecting the `main` branch. Each branch can evolve independently, making it easier to manage multiple lines of development simultaneously.

**Why use feature branches:**

* Isolates new features or changes from the main codebase, reducing the risk of breaking stable code.
* Makes code review and testing easier because each branch contains only the changes for a specific feature.
* Supports collaboration: multiple developers can work on different features simultaneously without conflicts.
* Helps maintain a clean and organized commit history.

---

### 2. What is the primary role of a Pull Request in a modern deployment workflow?

A **Pull Request (PR)** is a formal request to merge code changes from one branch into another, typically from a feature branch to `main`.

**Roles in deployment workflow:**

* Enables **code review** before merging, ensuring quality and consistency.
* Acts as a checkpoint for testing and continuous integration, so automated checks or deployments can run safely.
* Provides a **record of changes**, discussion, and context for why changes were made.
* Helps prevent unstable or unreviewed code from reaching production.

---

### 3. How can you automate deploys to Vercel directly from GitHub (outline the basic steps)?

1. **Connect GitHub Repo:** Link your GitHub repository to Vercel via the Vercel dashboard.
2. **Select Project & Branches:** Choose which branches should trigger deployments (e.g., feature branches for Preview, `main` for Production).
3. **Automatic Deployment:** On every push or merged PR, Vercel automatically builds the project and deploys it to the configured environment.
4. **Preview & Production URLs:** Vercel provides unique URLs for each deployment — one for Preview (PRs) and one for Production (main branch).
5. **Environment Variables & Settings:** Configure environment-specific settings in Vercel to ensure the correct behavior in each deployment stage.

---

### 4. Explain the purpose of different "environment" types (e.g., Development, Staging, Production) in deployment.

Different environments allow developers to **test and release code safely**:

* **Development (Dev):** Local or early-stage testing. Code may be unstable, logs are verbose, and new features are being actively built.
* **Staging/Preview:** A near-production environment where features are tested in conditions similar to production. This is often triggered automatically by PRs and is used for QA and review.
* **Production (Prod):** Live environment accessible to end users. Only thoroughly tested, reviewed, and stable code should be deployed here.

**Benefits:**

* Reduces the risk of breaking the live application.
* Enables testing new features and bug fixes safely.
* Provides a controlled environment for integrating and validating changes.

---

### 5. How do you set and securely use environment variables in platforms like Vercel or GitHub Actions?

* **Setting Environment Variables:**

  * On Vercel: Go to Project Settings → Environment Variables → Add variable (key-value pair) for each stage (Preview/Production).
  * On GitHub Actions: Store sensitive values in **Secrets**, which can be referenced in workflows.
* **Secure Usage:**

  * Never commit `.env` files or secret keys to GitHub.
  * Access variables in code through environment references (e.g., `process.env.VAR_NAME`).
  * Use different values for different environments to prevent exposure of sensitive data.

---

### 6. When and why should you use a protected branch or a required approval rule before deploying to production?

* **When:** Before merging code into the production branch (`main`) or any critical branch.
* **Why:**

  * Prevents accidental pushes or unreviewed code from going live.
  * Ensures that all code undergoes mandatory review and passes CI/CD checks.
  * Helps enforce team workflows and maintains a stable, reliable production environment.
  * Protects against human error or malicious changes in shared repositories.

---



