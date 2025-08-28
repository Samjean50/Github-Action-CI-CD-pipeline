name: test

on:
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    container: node:20
    
    strategy:
matrix:
    node-version: [12.x, 14.x, 16.x]
    # This matrix will run the job multiple times, once for each specified Node.js version (12.x, 14.x, 16.x).
    # The job will be executed separately for each version, ensuring compatibility across these versions. 
    
    steps:
    - uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
    
      - name: Run build
      run: npm run build 