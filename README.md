# Micro-Frontend Dashboard with Module Federation

## Overview
This is an example template to break down several apps into smaller parts and then show them into one big app using **Micro-Frontends** and **Module Federation** principles.

![alt text](<Screenshot 1947-01-02 at 11.13.26 PM.png>)

- **Micro-Frontends**: Home
- **Host App**: Host

## Setup Instructions

### Clone the Project
   ```bash
   git clone https://github.com/pavan2540/mf-demo-dashboard.git
   ```

### Home App
1. Navigate to the home app directory:
   ```bash
   cd home
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Serve the app:
   ```bash
   ng serve
   ```
4. Access the app at:
   - URL: [http://localhost:4201/](http://localhost:4201/)

5. Run Unit Tests:
   ```bash
   ng nest
   ```

### Host App
1. Navigate to the host app directory:
   ```bash
   cd host
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Serve the app:
   ```bash
   ng serve
   ```
4. Access the app at:
   - URL: [http://localhost:4200/](http://localhost:4200/)

## Tech Stack
- **Angular 16**
- **Module Federation / Webpack** for Micro-Frontend architecture
- **Jest** for unit testing
- **D3.js** for data visualization and charts

## Features
- Modular architecture with Micro-Frontends
- Dynamic loading of remote modules
- Interactive charts for user and sales analytics using D3.js
- Services

## Future Improvements
- Implement authentication across micro-frontends
- Add lazy loading for improved performance
- Enhance test coverage with Jest

## License
This project is licensed under the MIT License.

---

Built with ❤️ using Angular and Module Federation.

