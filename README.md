# Permission.io End-to-End QA Validation Suite  

This project is part of the **Senior SQA Engineer Take-Home Test**. It demonstrates skills in automated testing, manual test design, and exploratory testing for the **Permission.io platform**.  

---

## 📌 Project Overview  
The suite covers three major tasks:  

1. **Automated Testing**  
   - Login flow with ReCaptcha handling  
   - AI Agent chat validation (`https://ask.permission.io/ai`)  
   - Form submission validation  
   - UI element checks  

2. **Manual Test Case Design & Coverage Analysis**  
   - Daily Earn feature (`https://ask.permission.io/earn`)  
   - Functional correctness, edge cases, and performance  
   - UX validation and backend/system verification  

3. **Exploratory Testing**  
   - Daily Earn, AI Agent, Register Flow & Chrome Extension Install  
   - Session-based exploratory testing with usability and risk findings  

---

## 🛠️ Tech Stack  
- **Language:** JavaScript / TypeScript  
- **Frameworks:** Playwright (preferred), Cypress, or WebdriverIO  
- **Reporting:** Playwright HTML Reporter / Allure Reports  
- **Platform:** Permission.io  

---

## ⚙️ Setup Instructions Automation Task

1. **Node.js (LTS version)**  
   Download and install from [https://nodejs.org](https://nodejs.org).  
   Verify installation:
   ```bash
   node -v
   npm -v
   ```

2. **Git (optional, for cloning projects)**  
   [Download Git](https://git-scm.com/downloads)

---

## 📦 Setup Instructions

1. **Clone or create project folder**
   ```bash
   mkdir sqa-automation-test
   cd sqa-automation-test
   ```

2. **Initialize Node.js project**
   ```bash
   npm init -y
   ```

3. **Install Playwright**
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

---

## 🧪 Running Tests

- Run **all tests**:
  ```bash
  npx playwright test
  ```

- Run tests in **interactive UI mode**:
  ```bash
  npx playwright test --ui
  ```

- Run a **specific test file**:
  ```bash
  npx playwright test tests/login.spec.js
  ```

- View **HTML test report**:
  ```bash
  npx playwright show-report
  ```

---

## 📂 Project Structure
```
sqa-automation-test/
 ┣ tests/
 ┃ ┣ login.spec.js      # Login automation tests
 ┃ ┗ ai-agent.spec.js   # AI Agent chat tests
 ┣ package.json
 ┣ playwright.config.js
 ┗ README.md
```

---

## 🔑 Test Scenarios

### **Login Feature**
- ✅ Validate successful login with valid credentials  
- ❌ Test login failure with invalid credentials  
- 🔒 Verify account lockout after multiple failed attempts  
- 🤖 **ReCaptcha Handling**  
  - Default: Manual intervention (`page.pause()`)  
  - Bonus: Can be extended with automated captcha services  

### **AI Agent Feature**
- ✅ Verify AI Chat page loads correctly  
- ✅ Check input field, send button, and placeholder text  
- ✅ Send simple text messages and validate responses  
- ✅ Verify chat history persists during session  
- ✅ Validate timestamps on messages  

---

## ⚠️ Notes on ReCaptcha
- Playwright cannot automatically bypass Google ReCaptcha (for security reasons).  
- Current tests include a **manual pause**:
  ```js
  await page.pause();
  ```
  This allows you to manually solve the captcha, then continue.  
- For **bonus points**, you could integrate a captcha-solving API service.

-Due to ReCaptcha, automation cannot fully validate lockout after 5 failed attempts. In real projects, I would either (a) ask developers to disable ReCaptcha on the staging environment, or (b) test lockout logic at the API/service layer.

---

## 📊 Deliverables
1. Automated test scripts (`tests/` folder)  
2. README.md (this file)  
3. Test reports (`playwright-report/` auto-generated)  

---

## 👨‍💻 Author
SYed Zafran Haider


