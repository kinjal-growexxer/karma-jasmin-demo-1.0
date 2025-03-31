# Introduction to Testing with Jasmine & Karma

## Ensuring Code Reliability and Maintainability

### 1. What is Testing?
Testing is the process of verifying that software works as intended, ensuring it meets requirements and behaves correctly.

**Types of Testing:**
 - Unit Testing
 - Integration Testing
 - System Testing
 - Acceptance Testing

### 2. Why Do We Need Testing?
**Key Points:**
 - Detect bugs early.
 - Ensure code reliability.
 - Simplify code maintenance.
 - Provide documentation for expected behavior.
 - Build confidence during refactoring.

### 3. What is Jasmine?
Jasmine is a behavior-driven development (BDD) testing framework for JavaScript.

**Features:**
 - Easy to set up and use.
 - Offers clean syntax for writing tests.
 - Provides built-in utilities for assertions, spies, and mocks.
```javascript
describe("A simple test", () => {
    it("should check if true is true", () => {
        expect(true).toBe(true);
    });
});
```

### 4. What is Karma?
Karma is a test runner for JavaScript that automates running tests across multiple browsers.

**Features:**
 - Executes tests in real browsers or headless mode.
 - Supports CI/CD integration.
 - Offers plugins for enhanced functionality.

### 5. Jasmine vs Karma
Karma is a test runner for JavaScript that automates running tests across multiple browsers.
| Feature | Jasmine | Karma |
| :---:   | :---: | :---: |
| Purpose | Testing framework | Test runner |
| Focus | Writing tests | Automating test execution |
| Browser Support | Framework-agnostic | Executes in multiple browsers |
| Integration | Works with any test runner | Works with any test framework |

### 6. Setting Up Jasmine & Karma
**1. Initialize Project:**
```console
mkdir jasmine-karma-demo
cd jasmine-karma-demo
npm init -y
```

**2. Install Dependencies:**
```console
npm install --save-dev jasmine karma karma-jasmine karma-chrome-launcher jasmine-core
```

**3. Configure Karma: Run:**
```console
npx karma init
```
***Configure:***
 - Testing framework: Jasmine
 - Browser: Chrome
 - Files: Specify test paths

### Writing Your First Test

**Example:**
Test a simple calculator function.

**Source Code:**
```javascript
function add(a, b) {
    return a + b;
}
module.exports = add;
```

**Test File:**
```javascript
const add = require('./add');
describe("Calculator", () => {
    it("should add two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});
```

**Run Tests:**
```console
npx karma start
```

### Advanced Features

**Spies in Jasmine:** Mock or track function calls.
```javascript
spyOn(obj, 'method').and.returnValue('Mocked!');
```

**Asynchronous Tests:** Test async code with done():
```javascript
it("should fetch data", (done) => {
    fetchData(data => {
        expect(data).toBe("Success");
        done();
    });
});
```

**Code Coverage with Karma:** Install and configure `karma-coverage`:
```javascript
npm install karma-coverage --save-dev
```

#### Best Practices:
 - Keep tests simple and focused.
 - Use descriptive names for test cases.
 - Mock dependencies to isolate tests.
 - Continuously run tests during development.
 - Maintain high code coverage.

#### Benefits of Testing:
 - ***Confidence in Code:*** Minimize bugs and regressions.
 - ***Improved Productivity:*** Detect issues early.
 - ***Better Design:*** Encourages modular and clean code.
 - ***Documentation:*** Tests serve as living documentation.

#### Recap:
 - ***Jasmine:*** A simple and powerful JavaScript testing framework.
 - ***Karma:*** A versatile test runner for browser-based testing..
 - ***Together:***  Jasmine and Karma ensure reliable and maintainable code.
