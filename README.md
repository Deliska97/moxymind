📱 MoxyMind - Automated Testing Setup

📦 Prerequisites

Before installing or running the project, ensure the following tools are installed and configured:

* **Node.js** (v16 or higher) and **npm**
* **Appium** (Install globally):

  ```bash
  npm install -g appium
  ```
* **Java Development Kit (JDK)**

    * Required by Appium
    * Set up the `JAVA_HOME` environment variable
* **Android Studio**

    * Required for Android Appium tests
    * Set up the Android SDK

---

## 🔧 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Deliska97/moxymind.git
   cd moxymind
   ```

2. **Install project dependencies**:

   ```bash
   npm install
   ```

3. **Install Appium driver dependencies**:

   ```bash
   appium driver install uiautomator2
   ```

---

## 🧪 Test Commands

### 🚀 Frontend Tests (Cypress)

* **Run in GUI mode**
  *Opens the Cypress Test Runner for frontend tests:*

  ```bash
  npm run cy:openFeTests
  ```

* **Run in headless mode**
  *Executes all frontend tests without GUI:*

  ```bash
  npm run cy:runFeTests
  ```

---

### 🛠 Backend Tests (Cypress)

* **Run in GUI mode**
  *Opens the Cypress Test Runner for backend tests:*

  ```bash
  npm run cy:openBeTests
  ```

* **Run in headless mode**
  *Executes all backend tests without GUI:*

  ```bash
  npm run cy:runBeTests
  ```

---

## 📱 Mobile Tests (WebDriverIO + Appium)

1. **Start the Appium server**:

   ```bash
   appium
   ```

2. **Run WebDriverIO tests**:
   Make sure the Appium server is running before executing the tests:

   ```bash
   npx wdio wdio.conf.js
   ```

---

## 📝 Notes

* Ensure all environment variables (e.g., `JAVA_HOME`, Android SDK path) are properly configured.
* Mobile device/emulator should be connected and accessible for Appium to work.

---
