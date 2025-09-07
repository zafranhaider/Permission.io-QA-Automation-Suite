# Permission.io Automation Tests

This project contains automated test scripts for the **Senior SQA Engineer Take-Home Test (Task 1)** using [Playwright](https://playwright.dev/).  
The tests cover **Login** and **AI Agent Chat** features from [Permission.io](https://www.permission.io) and [Ask AI Agent](https://ask.permission.io/ai).

---

## 📌 Prerequisites
Before running the tests, make sure you have the following installed:

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
Senior SQA Engineer Test – **Task 1 Automation**
