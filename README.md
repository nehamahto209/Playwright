### Playwright Framework Demo With JavaScript

An example project demonstrating automation of playwright tests using page object design pattern framework and api testing.

#### Application Under Test

We are using https://www.saucedemo.com/ for UI Tests and "https://thinking-tester-contact-list.herokuapp.com/users/login" for API Tests as the Application Under Test.

#### Scenarios UI Testing

```bash
Scenario 1: Login to Saucedemo app

Scenario 2: Login Failed SauceDemo

Scenario 3: Verify Inventroy Page

Scenario 4: Cart Verify Item added in cart 

```

#### Scenarios API Testing

```bash
Scenario 1: Authenticate the user using digest token

Scenario 2: Donwload the File

Scenario 3: Upload the File

```

#### Installation

Install the dependencies and devDependencies to run the test.

-   Clone reporepository on to your local machine
-   Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/nehamahto209/Playwright.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

To run test in headless or parallel enable & disable, edit in .env file for the respective property

Run tests

```bash
npx playwright test
```

Run specific tests

```bash
npx playwright test filename.spec.js
```
