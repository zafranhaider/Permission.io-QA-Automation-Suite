# ReCaptcha Handling Notes

Automated scripts cannot bypass **Google ReCaptcha**, since it is specifically designed to block bots and automation tools.  

For this assignment, the approach used is:  

1. **Manual Intervention:**  
   During the test run, the script includes `page.pause()` so that the tester can manually solve the ReCaptcha before continuing.  

2. **Staging Environment Best Practice:**  
   In real-world projects, QA teams typically request developers to **disable ReCaptcha on staging/test environments** so automation can run without interruption.  

3. **Alternative Approach (API/Service Layer):**  
   Account lockout and login validation can also be tested at the **API layer**, where ReCaptcha is not enforced, ensuring the logic can be validated without UI restrictions.  
